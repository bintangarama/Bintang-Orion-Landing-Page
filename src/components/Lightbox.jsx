import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

/**
 * Lightbox Component
 * Props:
 *   images: Array<{ src, alt, name, tag, tagColor, desc, brand, series? }>
 *   initialIndex: number
 *   onClose: () => void
 */
export default function Lightbox({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dragStart = useRef(null);
  const panStart = useRef({ x: 0, y: 0 });
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const current = images[currentIndex];
  const ZOOM_STEP = 0.25;
  const ZOOM_MIN = 0.5;
  const ZOOM_MAX = 4;

  // Animate in on mount
  useEffect(() => {
    requestAnimationFrame(() => setIsVisible(true));
  }, []);

  // Lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Reset zoom/pan when image changes
  useEffect(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === '+' || e.key === '=') handleZoomIn();
      if (e.key === '-') handleZoomOut();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 180);
  }, [onClose]);

  const goNext = useCallback(() => {
    setCurrentIndex(i => (i + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex(i => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const handleZoomIn = useCallback(() => {
    setZoom(z => Math.min(z + ZOOM_STEP, ZOOM_MAX));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom(z => {
      const next = Math.max(z - ZOOM_STEP, ZOOM_MIN);
      if (next <= 1) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Scroll wheel zoom
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    if (e.deltaY < 0) handleZoomIn();
    else handleZoomOut();
  }, [handleZoomIn, handleZoomOut]);

  // Mouse drag (pan when zoomed)
  const handleMouseDown = useCallback((e) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    panStart.current = { ...pan };
  }, [zoom, pan]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPan({ x: panStart.current.x + dx, y: panStart.current.y + dy });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    dragStart.current = null;
  }, []);

  // Touch swipe (mobile navigation)
  const touchStartX = useRef(null);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  const zoomPercent = Math.round(zoom * 100);

  return createPortal(
    <div
      className={`lb-backdrop ${isVisible ? 'lb-visible' : ''}`}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* ── Top Bar ── */}
      <div className="lb-topbar">
        <div className="lb-counter">
          {currentIndex + 1} / {images.length}
        </div>
        <button className="lb-btn-icon lb-close" onClick={handleClose} aria-label="Tutup">
          <X size={20} />
        </button>
      </div>

      {/* ── Main Stage ── */}
      <div
        ref={containerRef}
        className="lb-stage"
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Prev Arrow */}
        {images.length > 1 && (
          <button className="lb-arrow lb-arrow-left" onClick={goPrev} aria-label="Sebelumnya">
            <ChevronLeft size={28} />
          </button>
        )}

        {/* Image */}
        <div
          className="lb-img-container"
          style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
          onMouseDown={handleMouseDown}
        >
          <img
            ref={imgRef}
            key={current.src}
            src={current.src}
            alt={current.alt || current.name}
            className="lb-img"
            style={{
              transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
            }}
            draggable={false}
          />
        </div>

        {/* Next Arrow */}
        {images.length > 1 && (
          <button className="lb-arrow lb-arrow-right" onClick={goNext} aria-label="Berikutnya">
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      {/* ── Zoom Controls ── */}
      <div className="lb-zoom-bar">
        <button className="lb-btn-icon" onClick={handleZoomOut} disabled={zoom <= ZOOM_MIN} aria-label="Zoom out">
          <ZoomOut size={18} />
        </button>
        <button
          className="lb-zoom-label"
          onClick={handleResetZoom}
          title="Klik untuk reset zoom"
        >
          {zoomPercent}%
        </button>
        <button className="lb-btn-icon" onClick={handleZoomIn} disabled={zoom >= ZOOM_MAX} aria-label="Zoom in">
          <ZoomIn size={18} />
        </button>
        {zoom !== 1 && (
          <button className="lb-btn-icon lb-reset" onClick={handleResetZoom} title="Reset zoom">
            <RotateCcw size={15} />
          </button>
        )}
      </div>

      {/* ── Info Panel ── */}
      <div className="lb-info">
        <div className="lb-info-main">
          {current.tag && (
            <span
              className="lb-tag"
              style={{ backgroundColor: (current.tagColor || '#f05a24') + '22', color: current.tagColor || '#f05a24' }}
            >
              {current.tag}
            </span>
          )}
          <h3 className="lb-info-name">{current.name}</h3>
          {current.brand && <p className="lb-info-brand">{current.brand}{current.series ? ` — ${current.series}` : ''}</p>}
          {current.desc && <p className="lb-info-desc">{current.desc}</p>}
        </div>
      </div>

      {/* ── Thumbnail Strip ── */}
      {images.length > 1 && (
        <div className="lb-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`lb-thumb ${i === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Lihat ${img.name}`}
            >
              <img src={img.src} alt={img.name} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      <style>{`
        /* ── Backdrop ── */
        .lb-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(5, 10, 20, 0.94);
          backdrop-filter: blur(6px);
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transition: opacity 0.18s ease;
          user-select: none;
        }
        .lb-backdrop.lb-visible {
          opacity: 1;
        }

        /* ── Top Bar ── */
        .lb-topbar {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          flex-shrink: 0;
        }
        .lb-counter {
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          letter-spacing: 1px;
          font-family: var(--font-sans);
        }

        /* ── Buttons ── */
        .lb-btn-icon {
          width: 38px;
          height: 38px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.18s ease;
          font-family: var(--font-sans);
          flex-shrink: 0;
        }
        .lb-btn-icon:hover:not(:disabled) {
          background: rgba(255,255,255,0.2);
          color: white;
          border-color: rgba(255,255,255,0.35);
        }
        .lb-btn-icon:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .lb-close {
          background: rgba(255,255,255,0.06);
        }
        .lb-close:hover {
          background: rgba(239, 68, 68, 0.35) !important;
          border-color: rgba(239, 68, 68, 0.5) !important;
          color: #fca5a5 !important;
        }

        /* ── Stage ── */
        .lb-stage {
          flex: 1;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          min-height: 0;
          padding: 0 60px;
        }

        /* ── Image Container ── */
        .lb-img-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .lb-img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          border-radius: 4px;
        }

        /* ── Prev/Next Arrows ── */
        .lb-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.18s ease;
          z-index: 10;
          flex-shrink: 0;
          font-family: var(--font-sans);
        }
        .lb-arrow:hover {
          background: rgba(255,255,255,0.18);
          color: white;
          border-color: rgba(255,255,255,0.35);
        }
        .lb-arrow-left  { left: 10px; }
        .lb-arrow-right { right: 10px; }

        /* ── Zoom Bar ── */
        .lb-zoom-bar {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 999px;
          margin: 10px 0 8px;
          flex-shrink: 0;
        }
        .lb-zoom-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(255,255,255,0.75);
          min-width: 42px;
          text-align: center;
          cursor: pointer;
          padding: 2px 6px;
          border-radius: 4px;
          border: none;
          background: transparent;
          font-family: var(--font-sans);
          transition: all 0.15s;
        }
        .lb-zoom-label:hover {
          background: rgba(255,255,255,0.1);
          color: white;
        }
        .lb-reset {
          width: 30px;
          height: 30px;
        }

        /* ── Info Panel ── */
        .lb-info {
          width: 100%;
          max-width: 680px;
          padding: 10px 20px 8px;
          flex-shrink: 0;
          text-align: center;
        }
        .lb-tag {
          display: inline-block;
          padding: 3px 12px;
          border-radius: 999px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.4px;
          margin-bottom: 6px;
          font-family: var(--font-sans);
        }
        .lb-info-name {
          font-family: var(--font-serif);
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          margin: 0 0 3px;
          line-height: 1.3;
        }
        .lb-info-brand {
          font-size: 0.72rem;
          font-weight: 700;
          color: rgba(255,255,255,0.4);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin: 0 0 4px;
          font-family: var(--font-sans);
        }
        .lb-info-desc {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.55);
          line-height: 1.55;
          margin: 0;
          font-family: var(--font-sans);
        }

        /* ── Thumbnail Strip ── */
        .lb-thumbs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding: 8px 20px 16px;
          flex-shrink: 0;
          scrollbar-width: none;
          max-width: 100%;
        }
        .lb-thumbs::-webkit-scrollbar { display: none; }
        .lb-thumb {
          flex: 0 0 52px;
          height: 52px;
          border-radius: 8px;
          border: 2px solid transparent;
          background: rgba(255,255,255,0.06);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.18s ease;
          padding: 0;
          font-family: var(--font-sans);
        }
        .lb-thumb img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: rgba(255,255,255,0.04);
        }
        .lb-thumb:hover {
          border-color: rgba(255,255,255,0.35);
        }
        .lb-thumb.active {
          border-color: var(--brand-orange);
          box-shadow: 0 0 0 1px var(--brand-orange);
        }

        /* ── Mobile ── */
        @media (max-width: 600px) {
          .lb-stage { padding: 0 44px; }
          .lb-arrow { width: 36px; height: 36px; }
          .lb-arrow-left  { left: 6px; }
          .lb-arrow-right { right: 6px; }
          .lb-info-name { font-size: 0.95rem; }
          .lb-info-desc { display: none; }
          .lb-thumb { flex: 0 0 44px; height: 44px; }
        }
      `}</style>
    </div>,
    document.body
  );
}
