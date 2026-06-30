"use client";

import useLayoutHeights from "@/hooks/useLayoutHeights";

export default function LayoutObserver() {
  useLayoutHeights();

  return null;
}