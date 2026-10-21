import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { Layers, Activity, Maximize2, ShieldAlert } from 'lucide-react';

interface IntelligenceCore3DProps {
  className?: string;
  interactive?: boolean;
}

export const IntelligenceCore3D: React.FC<IntelligenceCore3DProps> = ({
  className = '',
  interactive = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGlAvailable, setWebGlAvailable] = useState<boolean>(true);
  const [wireframeMode, setWireframeMode] = useState<boolean>(false);
  const [energyState, setEnergyState] = useState<'nominal' | 'boost' | 'analyzing'>('nominal');
  const [isSoftwareMode, setIsSoftwareMode] = useState<boolean>(false);

  // Store mutable refs for render loop
  const stateRef = useRef({
    wireframe: false,
    energy: 'nominal',
    targetRotX: 0,
    targetRotY: 0,
    mousePos: { x: 0, y: 0 },
  });

  useEffect(() => {
    stateRef.current.wireframe = wireframeMode;
  }, [wireframeMode]);

  useEffect(() => {
    stateRef.current.energy = energyState;
  }, [energyState]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect WebGL capability and software rendering
    let isSoftwareGl = false;
    let renderer: THREE.WebGLRenderer;

    try {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!gl) {
        setWebGlAvailable(false);
        return;
      }
      const ext = (gl as any).getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : (gl as any).RENDERER;
      const gpu = String((gl as any).getParameter(param) || '');
      (gl as any).getExtension('WEBGL_lose_context')?.loseContext();
      isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
      setIsSoftwareMode(isSoftwareGl);
    } catch {
      isSoftwareGl = true;
    }

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x03060c, 0.035);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL init failed:', e);
      setWebGlAvailable(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(isSoftwareGl ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.appendChild(renderer.domElement);

    // Studio lighting and room reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;
    pmremGenerator.dispose();

    // Lighting rig: Key, cool fill, and cyan edge rim
    const keyLight = new THREE.DirectionalLight(0xe0f2fe, 3.5);
    keyLight.position.set(5, 7, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0x8b5cf6, 2.0);
    fillLight.position.set(-6, -4, -3);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
    scene.add(ambientLight);

    // Assembly Group for The Intelligence Engine Core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Nucleus (Inner Energy Sphere)
    const nucleusGeo = new THREE.SphereGeometry(0.72, 32, 32);
    const nucleusMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00a8cc,
      emissiveIntensity: 1.2,
      roughness: 0.2,
      metalness: 0.8,
    });
    const nucleusMesh = new THREE.Mesh(nucleusGeo, nucleusMat);
    coreGroup.add(nucleusMesh);

    // 2. Translucent Icosahedron Lattice (Outer Shell)
    const icosaGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const icosaMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.15,
      transparent: true,
      opacity: isSoftwareGl ? 0.35 : 0.65,
      wireframe: false,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const icosaMesh = new THREE.Mesh(icosaGeo, icosaMat);
    coreGroup.add(icosaMesh);

    // 3. Accent Wireframe Cage
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x70d6ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const wireframeMesh = new THREE.Mesh(icosaGeo, wireframeMat);
    coreGroup.add(wireframeMesh);

    // 4. Concentric Orbital Rings (Gimbal System)
    const ringGroup = new THREE.Group();
    coreGroup.add(ringGroup);

    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      metalness: 0.95,
      roughness: 0.1,
      emissive: 0x004455,
      emissiveIntensity: 0.6,
    });
    const ringGeo1 = new THREE.TorusGeometry(2.1, 0.022, 16, 100);
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ringGroup.add(ring1);

    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xa78bfa,
      metalness: 0.9,
      roughness: 0.15,
      emissive: 0x2e1065,
      emissiveIntensity: 0.4,
    });
    const ringGeo2 = new THREE.TorusGeometry(2.4, 0.018, 16, 100);
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 3;
    ringGroup.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(2.7, 0.015, 16, 100);
    const ring3 = new THREE.Mesh(ringGeo3, ringMat1);
    ring3.rotation.y = Math.PI / 4;
    ringGroup.add(ring3);

    // 5. Instanced Constellation Nodes (Representing AI Neurons / Data Points)
    const nodeCount = isSoftwareGl ? 28 : 56;
    const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
    const nodeMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.9,
      roughness: 0.3,
    });
    const instancedNodes = new THREE.InstancedMesh(nodeGeo, nodeMat, nodeCount);

    const nodePositions: THREE.Vector3[] = [];
    const dummy = new THREE.Object3D();

    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const radius = 2.9 + Math.random() * 0.9;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      dummy.position.copy(pos);
      const s = 0.6 + Math.random() * 0.8;
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      instancedNodes.setMatrixAt(i, dummy.matrix);
    }
    instancedNodes.instanceMatrix.needsUpdate = true;
    instancedNodes.computeBoundingSphere();
    coreGroup.add(instancedNodes);

    // 6. Dynamic Neural Connection Lines
    const maxLines = isSoftwareGl ? 30 : 65;
    const linePositions = new Float32Array(maxLines * 6);
    let lineIdx = 0;

    for (let i = 0; i < nodeCount && lineIdx < maxLines; i++) {
      for (let j = i + 1; j < nodeCount && lineIdx < maxLines; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 1.35) {
          linePositions[lineIdx * 6] = nodePositions[i].x;
          linePositions[lineIdx * 6 + 1] = nodePositions[i].y;
          linePositions[lineIdx * 6 + 2] = nodePositions[i].z;
          linePositions[lineIdx * 6 + 3] = nodePositions[j].x;
          linePositions[lineIdx * 6 + 4] = nodePositions[j].y;
          linePositions[lineIdx * 6 + 5] = nodePositions[j].z;
          lineIdx++;
        }
      }
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, lineIdx * 6), 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.28,
    });
    const neuralLines = new THREE.LineSegments(linesGeo, linesMat);
    coreGroup.add(neuralLines);

    // 7. Ambient Starlight Dust
    const particleCount = isSoftwareGl ? 80 : 220;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 12;
      particlePos[i + 1] = (Math.random() - 0.5) * 12;
      particlePos[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x70d6ff,
      size: 0.035,
      transparent: true,
      opacity: 0.55,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 8. Grounding Radial Shadow
    const shadowGeo = new THREE.PlaneGeometry(6, 6);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const shadowCtx = shadowCanvas.getContext('2d');
    if (shadowCtx) {
      const grad = shadowCtx.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
      grad.addColorStop(0.3, 'rgba(10, 16, 30, 0.4)');
      grad.addColorStop(1, 'rgba(3, 6, 12, 0)');
      shadowCtx.fillStyle = grad;
      shadowCtx.fillRect(0, 0, 128, 128);
    }
    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -3.2;
    scene.add(shadowMesh);

    // Pointer tracking
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.mousePos = { x: nx, y: ny };
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      if (nw === 0 || nh === 0) return;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Animation Loop with Smooth Exponential Damping
    let frameId = 0;
    const clock = new THREE.Clock();

    const tick = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Energy pulse multipliers
      let speedMult = 1.0;
      let pulseFreq = 2.0;

      if (stateRef.current.energy === 'boost') {
        speedMult = 2.2;
        pulseFreq = 4.5;
      } else if (stateRef.current.energy === 'analyzing') {
        speedMult = 1.5;
        pulseFreq = 3.2;
      }

      // Smooth pointer reaction
      const targetX = stateRef.current.mousePos.y * 0.45;
      const targetY = stateRef.current.mousePos.x * 0.65;
      coreGroup.rotation.x = THREE.MathUtils.damp(coreGroup.rotation.x, targetX, 2.5, delta);
      coreGroup.rotation.y = THREE.MathUtils.damp(coreGroup.rotation.y, targetY + elapsed * 0.18 * speedMult, 2.5, delta);

      // Gimbal counter-rotations
      ring1.rotation.z += 0.008 * speedMult;
      ring2.rotation.x += 0.012 * speedMult;
      ring3.rotation.y += 0.006 * speedMult;

      // Pulsing nucleus scale
      const pulse = 1.0 + Math.sin(elapsed * pulseFreq) * 0.08;
      nucleusMesh.scale.set(pulse, pulse, pulse);

      // Wireframe state synchronization
      icosaMat.wireframe = stateRef.current.wireframe;
      wireframeMesh.visible = !stateRef.current.wireframe;

      // Drift dust particles
      particles.rotation.y = elapsed * 0.03;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handlePointerMove);
      resizeObserver.disconnect();

      // Memory cleanup
      nucleusGeo.dispose();
      nucleusMat.dispose();
      icosaGeo.dispose();
      icosaMat.dispose();
      wireframeMat.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringGeo3.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      shadowTex.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[420px] md:min-h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      />

      {/* Accessible WebGL fallback */}
      {!webGlAvailable && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#070d18]/90 backdrop-blur-md rounded-2xl border border-white/10">
          <ShieldAlert className="w-12 h-12 text-cyan-400 mb-3" />
          <h4 className="text-lg font-bold text-white mb-1">Interactive Core Fallback</h4>
          <p className="text-sm text-slate-400 max-w-sm mb-4">
            Hardware 3D acceleration is currently constrained. The Intelligence Engine data and project views remain fully active.
          </p>
          <div className="w-24 h-24 rounded-full border border-cyan-400/30 flex items-center justify-center animate-spin">
            <div className="w-16 h-16 rounded-full border-t-2 border-cyan-400" />
          </div>
        </div>
      )}

      {/* Futuristic Telemetry Annotation Overlay (Corner Coordinates) */}
      <div className="absolute top-4 left-4 pointer-events-none font-tech text-[10px] tracking-wider text-cyan-500/70 hidden sm:block">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span>SYSTEM // CORE.AI.v4</span>
        </div>
        <div>LATENCY: 12ms // BUFFER: ACTIVE</div>
        <div>COORDINATES: 30.7046° N, 76.7179° E</div>
      </div>

      <div className="absolute top-4 right-4 pointer-events-none font-tech text-[10px] tracking-wider text-slate-500 hidden sm:block text-right">
        <div>STATUS: ONLINE</div>
        <div className="text-cyan-400/80">STATE: {energyState.toUpperCase()}</div>
      </div>

      {/* Interactive HUD Control Pill (Unobtrusive & Accessible) */}
      {interactive && webGlAvailable && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 p-1.5 px-3 rounded-full bg-[#0a101d]/85 border border-white/10 backdrop-blur-md shadow-2xl z-20">
          <button
            type="button"
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-tech transition-all ${
              wireframeMode ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'
            }`}
            title="Toggle Wireframe Architecture"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden xs:inline">LATTICE</span>
          </button>

          <div className="w-px h-3.5 bg-white/10" />

          <button
            type="button"
            onClick={() => setEnergyState(energyState === 'nominal' ? 'boost' : energyState === 'boost' ? 'analyzing' : 'nominal')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-tech text-slate-300 hover:text-white transition-all"
            title="Toggle Core Computation State"
          >
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>MODE: {energyState.toUpperCase()}</span>
          </button>

          {isSoftwareMode && (
            <span className="text-[10px] font-tech text-amber-400/80 px-2">ECO</span>
          )}
        </div>
      )}
    </div>
  );
};
