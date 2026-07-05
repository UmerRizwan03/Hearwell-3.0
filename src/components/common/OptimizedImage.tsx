import { useState, useCallback, type ImgHTMLAttributes } from 'react';

/* ─── Types ─── */
interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading'> {
  /** Image source — use a Vite import or absolute path */
  src: string;
  /** Required alt text. Use "" for decorative images */
  alt: string;
  /** Explicit width for CLS prevention */
  width?: number | string;
  /** Explicit height for CLS prevention */
  height?: number | string;
  /** CSS aspect-ratio as CLS alternative (e.g. "16/9", "4/5") */
  aspectRatio?: string;
  /** Object-fit strategy */
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
  /** Loading strategy — defaults to "lazy" */
  loading?: 'lazy' | 'eager';
  /** Shorthand for loading="eager" — use for above-the-fold images */
  priority?: boolean;
  /** Responsive srcSet string — use imagetools ?w=600;1000;1600 */
  srcSet?: string;
  /** Responsive sizes string */
  sizes?: string;
  /** Additional CSS class */
  className?: string;
  /** Container CSS class (wraps the img for blur effect) */
  containerClassName?: string;
  /** Disable the blur-up placeholder effect */
  disableBlur?: boolean;
}

/**
 * Production-grade image component with:
 * - Lazy loading (default) / eager for above-the-fold
 * - Async decoding
 * - Blur-up placeholder effect (CSS-only, zero JS libs)
 * - Responsive srcSet support
 * - CLS prevention via explicit dimensions or aspect-ratio
 * - Full accessibility (alt is required)
 *
 * Usage:
 * ```tsx
 * <OptimizedImage
 *   src={heroImage}
 *   alt="Audiologist with patient"
 *   width={800}
 *   height={600}
 *   priority                    // above-the-fold
 * />
 * ```
 *
 * Future images: just import any image from src/assets/images/
 * and pass it to src. Vite imagetools handles WebP + resizing
 * at build time automatically.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  aspectRatio,
  objectFit = 'cover',
  loading,
  priority = false,
  srcSet,
  sizes,
  className = '',
  containerClassName = '',
  disableBlur = false,
  style,
  ...rest
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const resolvedLoading = priority ? 'eager' : (loading ?? 'lazy');
  const showBlur = !disableBlur && !priority;

  /* ── Container style for CLS prevention ── */
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    ...(width && height && !aspectRatio
      ? { width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height }
      : {}),
    ...(aspectRatio ? { aspectRatio } : {}),
  };

  /* ── Image style ── */
  const imgStyle: React.CSSProperties = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit,
    ...(showBlur
      ? {
          filter: isLoaded ? 'blur(0px)' : 'blur(12px)',
          transform: isLoaded ? 'scale(1)' : 'scale(1.04)',
          transition: 'filter 0.5s ease-out, transform 0.5s ease-out',
        }
      : {}),
    ...style,
  };

  return (
    <div
      className={`optimized-image-container ${containerClassName}`}
      style={containerStyle}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={resolvedLoading}
        decoding="async"
        srcSet={srcSet}
        sizes={sizes}
        className={`optimized-image ${className}`}
        style={imgStyle}
        onLoad={handleLoad}
        {...rest}
      />
    </div>
  );
};

export default OptimizedImage;
