"use client";

import { useRef } from "react";
import { useMap } from "../../hooks/useMaps";

export function MapDriver() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef as React.RefObject<HTMLDivElement>);

  return <div className="w-2/3 h-full" ref={mapContainerRef} />;
}
