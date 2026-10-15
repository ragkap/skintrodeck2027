"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * next/image wrapper that shows a shimmering skeleton in place of the image
 * (via a background applied to the img element itself, so no wrapper/layout
 * changes) until the image has decoded and painted.
 */
export function SkeletonImage({ className = "", onLoad, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    // eslint-disable-next-line jsx-a11y/alt-text -- alt is required by ImageProps and forwarded via {...props}
    <Image
      {...props}
      className={`${className} ${loaded ? "" : "skeleton-shimmer"}`}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
}
