"use client";

import { useRef } from "react";
import { useMap } from "../../hooks/useMaps";

export function AdminPage() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  useMap(mapContainerRef as React.RefObject<HTMLDivElement>);

  return <div className="h-full w-full" ref={mapContainerRef} />;
}

export default AdminPage;