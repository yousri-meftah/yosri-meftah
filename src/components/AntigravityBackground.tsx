import { useEffect, useRef } from "react";
import * as THREE from "three";

const AntigravityBackground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const particleCount = isCoarsePointer ? 180 : 360;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0f1c, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const basePositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color("#22d3ee"),
      new THREE.Color("#fb7185"),
      new THREE.Color("#facc15"),
      new THREE.Color("#34d399"),
    ];

    for (let i = 0; i < particleCount; i += 1) {
      const x = (Math.random() - 0.5) * 800;
      const y = (Math.random() - 0.5) * 800;
      const z = (Math.random() - 0.5) * 400;
      basePositions[i * 3] = x;
      basePositions[i * 3 + 1] = y;
      basePositions[i * 3 + 2] = z;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const color = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let mouseX = 0;
    let mouseY = 0;
    let isVisible = true;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.5;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.5;
    };

    if (!prefersReducedMotion) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };

    document.addEventListener("visibilitychange", handleVisibility);

    const animate = (time: number) => {
      if (!isVisible) {
        requestAnimationFrame(animate);
        return;
      }

      if (!prefersReducedMotion) {
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
      }

      camera.lookAt(scene.position);

      if (!prefersReducedMotion) {
        const data = geometry.attributes.position.array as Float32Array;
        const t = time * 0.001;
        for (let i = 0; i < particleCount; i += 1) {
          const i3 = i * 3;
          data[i3] = basePositions[i3] + Math.sin(t + i) * 0.2;
          data[i3 + 1] = basePositions[i3 + 1] + Math.cos(t + i) * 0.2;
          data[i3 + 2] = basePositions[i3 + 2] + Math.sin(t * 0.5 + i) * 0.5;
        }
        geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default AntigravityBackground;
