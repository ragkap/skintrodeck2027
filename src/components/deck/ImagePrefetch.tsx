"use client";

import { useEffect } from "react";

/**
 * Deck.tsx only mounts the active slide, so slide images that haven't been
 * visited yet aren't in the browser cache and pop in with a flicker on
 * first paint. This warms the cache for every deck image up front so
 * navigating to any slide shows it fully loaded.
 */
const IMAGE_PATHS = [
  "/graphics/competitive-landscape.png",
  "/logos/clients/addx.webp",
  "/logos/clients/adia.webp",
  "/logos/clients/alliancebernstein.webp",
  "/logos/clients/aramco.webp",
  "/logos/clients/bam.webp",
  "/logos/clients/barrenjoey.webp",
  "/logos/clients/blackrock.webp",
  "/logos/clients/brevan-howard.webp",
  "/logos/clients/btig.png",
  "/logos/clients/caixin.webp",
  "/logos/clients/cfa-institute.webp",
  "/logos/clients/citadel.webp",
  "/logos/clients/citi.webp",
  "/logos/clients/dbs.webp",
  "/logos/clients/dma.svg",
  "/logos/clients/exoduspoint.webp",
  "/logos/clients/extractalpha.webp",
  "/logos/clients/first-reit.webp",
  "/logos/clients/gic.webp",
  "/logos/clients/goldman-sachs.webp",
  "/logos/clients/grow.webp",
  "/logos/clients/hsbc.webp",
  "/logos/clients/interactive-brokers.webp",
  "/logos/clients/jbic.jpg",
  "/logos/clients/jetro.png",
  "/logos/clients/jpmorgan.webp",
  "/logos/clients/marshallwace.webp",
  "/logos/clients/maybank.webp",
  "/logos/clients/millennium.webp",
  "/logos/clients/morgan-stanley.webp",
  "/logos/clients/nzx.webp",
  "/logos/clients/olam.webp",
  "/logos/clients/point72.webp",
  "/logos/clients/psp-investments.webp",
  "/logos/clients/qrt.webp",
  "/logos/clients/schonfeld.webp",
  "/logos/clients/sequoia.webp",
  "/logos/clients/set.webp",
  "/logos/clients/sgx.webp",
  "/logos/clients/societe-generale.webp",
  "/logos/clients/susquehanna.webp",
  "/logos/clients/swib.png",
  "/logos/clients/tim.webp",
  "/logos/clients/veon.webp",
  "/logos/enterprise-singapore.png",
  "/logos/jungle.jpg",
  "/logos/peak-xv.jpg",
  "/logos/pvtiq.png",
  "/logos/ray-dalio.jpg",
  "/logos/sgx.png",
  "/logos/smartkarma-icon-brand.jpg",
  "/logos/smartkarma-icon.png",
  "/logos/smartkarma-logo.png",
  "/logos/wavemaker.webp",
];

export function ImagePrefetch() {
  useEffect(() => {
    IMAGE_PATHS.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, []);

  return null;
}
