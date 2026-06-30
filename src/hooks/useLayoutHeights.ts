"use client";

import { useLayoutEffect } from "react";

export default function useLayoutHeights() {
  useLayoutEffect(() => {
    const update = () => {
      const header = document.querySelector<HTMLElement>("[data-layout-header]");
      const footer = document.querySelector<HTMLElement>("[data-layout-footer]");

      if (!header || !footer) return;

      const headerHeight = Math.ceil(header.getBoundingClientRect().height);
      const footerHeight = Math.ceil(footer.getBoundingClientRect().height);

      document.documentElement.style.setProperty("--header-height", `${headerHeight}px`);
      document.documentElement.style.setProperty("--footer-height", `${footerHeight}px`);
      document.documentElement.style.setProperty(
        "--layout-offset",
        `${headerHeight + footerHeight}px`
      );
    };

    update();

    requestAnimationFrame(update);
    requestAnimationFrame(() => requestAnimationFrame(update));

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    window.addEventListener("pageshow", update);

    if (document.fonts) {
      document.fonts.ready.then(update);
    }

    const observer = new ResizeObserver(update);

    const header = document.querySelector("[data-layout-header]");
    const footer = document.querySelector("[data-layout-footer]");

    if (header) observer.observe(header);
    if (footer) observer.observe(footer);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      window.removeEventListener("pageshow", update);
    };
  }, []);
}