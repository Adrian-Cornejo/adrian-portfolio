function initTilt() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  if (reduceMotion || isCoarsePointer) return;

  const MAX_TILT = 8;

  document.querySelectorAll("[data-tilt]").forEach((el) => {
    el.style.transition = "transform 0.15s ease-out";

    el.addEventListener("pointermove", (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * 2 * MAX_TILT;
      const ry = (px - 0.5) * 2 * MAX_TILT;
      el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    el.addEventListener("pointerleave", () => {
      el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  });
}

document.readyState === "loading"
  ? document.addEventListener("DOMContentLoaded", initTilt)
  : initTilt();
