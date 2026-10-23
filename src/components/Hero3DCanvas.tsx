'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 9);

    // Renderer setup with alpha & anti-alias
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Group for floating house
    const houseGroup = new THREE.Group();
    scene.add(houseGroup);

    // Create Architectural Glass House Geometry
    // 1. Base / Ground Slab
    const slabGeo = new THREE.BoxGeometry(3.6, 0.15, 3.6);
    const slabMat = new THREE.MeshPhysicalMaterial({
      color: 0xD9D2C7,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.3,
      thickness: 0.5,
      transparent: true,
      opacity: 0.85,
    });
    const slab = new THREE.Mesh(slabGeo, slabMat);
    slab.position.y = -1.2;
    houseGroup.add(slab);

    // 2. Glass House Main Body
    const bodyGeo = new THREE.BoxGeometry(2.6, 1.8, 2.4);
    const bodyMat = new THREE.MeshPhysicalMaterial({
      color: 0xFCFCFB,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.4,
      thickness: 1.2,
      transparent: true,
      opacity: 0.45,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = -0.2;
    houseGroup.add(body);

    // 3. Roof Pyramidal Structure (Sage Teal Glass)
    const roofGeo = new THREE.ConeGeometry(2.3, 1.2, 4);
    const roofMat = new THREE.MeshPhysicalMaterial({
      color: 0x6FAFA6,
      roughness: 0.15,
      metalness: 0.2,
      transmission: 0.7,
      thickness: 0.8,
      transparent: true,
      opacity: 0.65,
    });
    const roof = new THREE.Mesh(roofGeo, roofMat);
    roof.position.y = 1.3;
    roof.rotation.y = Math.PI / 4;
    houseGroup.add(roof);

    // 4. Inner Glowing Heart Core (Symbolizing Care & Protection)
    const coreGeo = new THREE.IcosahedronGeometry(0.55, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x6FAFA6,
      emissive: 0x6FAFA6,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.y = -0.2;
    houseGroup.add(core);

    // 5. Outer Protective Orbit Rings
    const ringGeo = new THREE.TorusGeometry(2.8, 0.025, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x16202A,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.25,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 3;
    houseGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.y = Math.PI / 4;
    houseGroup.add(ring2);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.2);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xFFFFFF, 2.5);
    mainLight.position.set(5, 8, 5);
    scene.add(mainLight);

    const tealLight = new THREE.PointLight(0x6FAFA6, 3, 10);
    tealLight.position.set(-3, 2, 2);
    scene.add(tealLight);

    const warmLight = new THREE.PointLight(0xD9D2C7, 2, 10);
    warmLight.position.set(3, -2, 2);
    scene.add(warmLight);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      mouseX = (x / rect.width) * 0.5;
      mouseY = (y / rect.height) * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Floating oscillation
      houseGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.18;

      // Slow rotation
      houseGroup.rotation.y = elapsedTime * 0.2;

      // Inner core subtle pulse
      core.rotation.y = elapsedTime * 0.5;
      core.rotation.x = elapsedTime * 0.3;

      // Outer rings counter-rotation
      ring1.rotation.z = elapsedTime * 0.15;
      ring2.rotation.z = -elapsedTime * 0.15;

      // Smooth mouse reactivity
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      houseGroup.rotation.x = targetY * 0.4;
      houseGroup.rotation.z = -targetX * 0.4;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
      {/* Soft Ambient Background Glow */}
      <div className="ambient-glow bg-[#6FAFA6] w-72 h-72 top-10 left-10" />
      <div className="ambient-glow bg-[#D9D2C7] w-64 h-64 bottom-10 right-10" />
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
}
