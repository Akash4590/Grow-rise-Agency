// ─────────────────────────────────────────────────────────────────────────────
// HeroDashboard3D.jsx
// File location: src/components/HeroDashboard3D.jsx
//
// This is a direct React Three Fiber conversion of the vanilla Three.js HTML
// scene. Drop this file in and replace your existing <AnimatedChart /> and
// three <FloatingCard /> components with <HeroDashboard3D />.
//
// Required packages (already in your package.json):
//   @react-three/fiber  @react-three/drei  three  gsap
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Palette ──────────────────────────────────────────────────────────────────
const GREEN      = new THREE.Color(0x00ff78);
const GREEN_DIM  = new THREE.Color(0x00c853);
const CYAN       = new THREE.Color(0x00e8ff);
const YELLOW     = new THREE.Color(0xFACC15);
const PANEL_BG   = new THREE.Color(0x061410);
const DARK       = new THREE.Color(0x040e09);

// ─── Rounded-box geometry helper ─────────────────────────────────────────────
function makeRoundedBox(w, h, depth, r) {
  const shape = new THREE.Shape();
  shape.moveTo(-w/2 + r, -h/2);
  shape.lineTo( w/2 - r, -h/2);
  shape.quadraticCurveTo( w/2, -h/2,  w/2, -h/2 + r);
  shape.lineTo( w/2,  h/2 - r);
  shape.quadraticCurveTo( w/2,  h/2,  w/2 - r,  h/2);
  shape.lineTo(-w/2 + r,  h/2);
  shape.quadraticCurveTo(-w/2,  h/2, -w/2,  h/2 - r);
  shape.lineTo(-w/2, -h/2 + r);
  shape.quadraticCurveTo(-w/2, -h/2, -w/2 + r, -h/2);
  return new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false });
}

// ─── Bar data & colours ───────────────────────────────────────────────────────
const BAR_DATA   = [0.25,0.40,0.32,0.55,0.48,0.68,0.60,0.82,0.75,0.95,0.88,1.0];
const BAR_HEX    = [0x007a3a,0x009e4a,0x00c853,0x00e876,0x00ff78,0x44ff99,
                    0x00ff78,0x00e876,0x00c853,0x66ffaa,0x44ff88,0x00ff78];

// ─── Main dashboard panel + bars + line ──────────────────────────────────────
function Dashboard({ mouseRef }) {
  const groupRef = useRef();   // whole dashboard moves together

  // Geometries (memoised — created once)
  const panelGeo  = useMemo(() => makeRoundedBox(3.8,  2.6,  0.08, 0.18), []);
  const borderGeo = useMemo(() => makeRoundedBox(3.82, 2.62, 0.085,0.18), []);

  const panelMat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: PANEL_BG, roughness: 0.05, metalness: 0.10,
    transmission: 0.15, transparent: true, opacity: 0.92,
  }), []);

  const borderMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: GREEN, wireframe: true, transparent: true, opacity: 0.06,
  }), []);

  // Bar meshes data
  const bars = useMemo(() => BAR_DATA.map((h, i) => {
    const bh  = h * 1.4;
    const col = new THREE.Color(BAR_HEX[i]);
    return { bh, col, x: -1.55 + i * 0.29, opacity: 0.28 + h * 0.22 };
  }), []);

  // Revenue line points
  const linePts = useMemo(() =>
    BAR_DATA.map((h, i) => new THREE.Vector3(-1.55 + i * 0.29, h * 1.4 - 0.85, 0.18)),
  []);
  const lineGeo = useMemo(() =>
    new THREE.BufferGeometry().setFromPoints(linePts), [linePts]);

  useFrame(({ clock }) => {
    const t  = clock.getElapsedTime();
    const mx = mouseRef.current.x;
    const my = mouseRef.current.y;
    if (!groupRef.current) return;
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.07;
    groupRef.current.rotation.y = Math.sin(t * 0.35) * 0.04 + mx * 0.04;
    groupRef.current.rotation.x = Math.sin(t * 0.30) * 0.02 - my * 0.02;
  });

  return (
    <group ref={groupRef}>
      {/* Main glass panel */}
      <mesh geometry={panelGeo} material={panelMat} />
      <mesh geometry={borderGeo} material={borderMat} />

      {/* Chart bars */}
      {bars.map(({ bh, col, x, opacity }, i) => (
        <group key={i}>
          {/* Solid fill */}
          <mesh position={[x, bh / 2 - 0.85, 0.11]}>
            <boxGeometry args={[0.18, bh, 0.04]} />
            <meshBasicMaterial color={col} transparent opacity={opacity} />
          </mesh>
          {/* Wireframe overlay */}
          <mesh position={[x, bh / 2 - 0.85, 0.11]}>
            <boxGeometry args={[0.18, bh, 0.04]} />
            <meshBasicMaterial color={col} wireframe transparent opacity={0.55 + BAR_DATA[i] * 0.25} />
          </mesh>
          {/* Top glow cap */}
          <mesh position={[x, bh - 0.85, 0.13]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[0.18, 0.025]} />
            <meshBasicMaterial color={col} transparent opacity={0.9} side={THREE.DoubleSide} />
          </mesh>
        </group>
      ))}

      {/* Revenue line */}
      <line geometry={lineGeo}>
        <lineBasicMaterial color={GREEN} transparent opacity={0.80} />
      </line>
      <line geometry={lineGeo}>
        <lineBasicMaterial color={GREEN} transparent opacity={0.18} linewidth={4} />
      </line>

      {/* Dots on line */}
      {linePts.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[i === linePts.length - 1 ? 0.045 : 0.022, 8, 8]} />
          <meshBasicMaterial
            color={i === linePts.length - 1 ? 0xffffff : 0x00ff78}
            transparent
            opacity={i === linePts.length - 1 ? 1 : 0.7}
          />
        </mesh>
      ))}
    </group>
  );
}

// ─── Floating mini panels (left / right / bottom) ────────────────────────────
function MiniPanel({ w, h, depth, color, position, rotY, floatSpeed, floatOffset, floatAmp }) {
  const ref = useRef();
  const baseY = position[1];

  const geo    = useMemo(() => makeRoundedBox(w, h, depth, 0.10), [w, h, depth]);
  const borGeo = useMemo(() => makeRoundedBox(w + 0.02, h + 0.02, depth + 0.005, 0.10), [w, h, depth]);

  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color), roughness: 0.08, metalness: 0.05,
    transparent: true, opacity: 0.82, transmission: 0.10,
  }), [color]);
  const borMat = useMemo(() => new THREE.MeshBasicMaterial({
    color: GREEN, wireframe: true, transparent: true, opacity: 0.07,
  }), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (!ref.current) return;
    ref.current.position.y = baseY + Math.sin(t * floatSpeed + floatOffset) * floatAmp;
    ref.current.rotation.y = rotY + Math.sin(t * (floatSpeed * 0.6)) * 0.03;
  });

  return (
    <group ref={ref} position={position}>
      <mesh geometry={geo}    material={mat}    />
      <mesh geometry={borGeo} material={borMat} />
    </group>
  );
}

// ─── Atmospheric rings ────────────────────────────────────────────────────────
function AtmosphericRing({ radius, tube, color, opacity, initRotX, position, spinSpeed }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.z = clock.getElapsedTime() * spinSpeed;
  });
  return (
    <mesh ref={ref} position={position} rotation={[initRotX, 0, 0]}>
      <torusGeometry args={[radius, tube, 8, 120]} />
      <meshBasicMaterial color={new THREE.Color(color)} transparent opacity={opacity} />
    </mesh>
  );
}

// ─── Particle field ───────────────────────────────────────────────────────────
const PART_COUNT = 280;
const PALETTE = [[0,1,0.47],[0,0.9,1],[0.98,0.8,0.08],[0,0.8,0.4]];

function ParticleField({ mouseRef }) {
  const ref = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(PART_COUNT * 3);
    const col = new Float32Array(PART_COUNT * 3);
    for (let i = 0; i < PART_COUNT; i++) {
      pos[i*3]   = (Math.random() - 0.5) * 14;
      pos[i*3+1] = (Math.random() - 0.5) * 8;
      pos[i*3+2] = (Math.random() - 0.5) * 6;
      const c = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      col[i*3] = c[0]; col[i*3+1] = c[1]; col[i*3+2] = c[2];
    }
    return [pos, col];
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t   = clock.getElapsedTime();
    const pos = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < PART_COUNT; i++) {
      pos[i*3+1] += 0.003;
      if (pos[i*3+1] > 4) pos[i*3+1] = -4;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.rotation.y = t * 0.008 + mouseRef.current.x * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors,    3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

// ─── Camera parallax ──────────────────────────────────────────────────────────
function CameraRig({ mouseRef }) {
  useFrame(({ camera }) => {
    camera.position.x += (1.2 + mouseRef.current.x * 0.18 - camera.position.x) * 0.05;
    camera.position.y += (1.4 - mouseRef.current.y * 0.12 - camera.position.y) * 0.05;
    camera.lookAt(0, 0.2, 0);
  });
  return null;
}

// ─── Full 3D Scene ────────────────────────────────────────────────────────────
function Scene({ mouseRef }) {
  return (
    <>
      <CameraRig mouseRef={mouseRef} />

      {/* Lighting — matches original exactly */}
      <ambientLight color={0x061a0d} intensity={0.8} />
      <spotLight color={0x00ff78} intensity={1.2} distance={20} angle={Math.PI/5} penumbra={0.5} position={[0,5,4]} />
      <spotLight color={0xFACC15} intensity={0.5} distance={15} angle={Math.PI/6} penumbra={0.6} position={[3,2,3]} />
      <spotLight color={0x00e8ff} intensity={0.4} distance={12} angle={Math.PI/5} penumbra={0.5} position={[-3,1,3]} />
      <hemisphereLight color={0x0d2e18} groundColor={0x050505} intensity={0.4} />

      {/* Grid floor */}
      <gridHelper args={[12, 24, 0x0a2e1a, 0x061410]} position={[0, -2.5, 0]} />

      {/* Bottom glow line */}
      <mesh rotation={[-Math.PI/2, 0, 0]} position={[0, -2.48, 0]}>
        <planeGeometry args={[14, 0.06]} />
        <meshBasicMaterial color={GREEN} transparent opacity={0.25} side={THREE.DoubleSide} />
      </mesh>

      {/* Main dashboard */}
      <Dashboard mouseRef={mouseRef} />

      {/* Three floating mini-panels */}
      <MiniPanel w={1.6} h={0.9} depth={0.06} color={0x040e09}
        position={[-2.9, 0.6, 0.2]} rotY={-0.22}
        floatSpeed={0.85} floatOffset={0.5} floatAmp={0.08} />
      <MiniPanel w={1.4} h={0.8} depth={0.06} color={0x040e09}
        position={[2.9, -0.1, 0.2]}  rotY={0.20}
        floatSpeed={0.90} floatOffset={1.2} floatAmp={0.09} />
      <MiniPanel w={1.0} h={0.6} depth={0.05} color={0x071008}
        position={[0, -1.6, 0.6]}    rotY={0.04}
        floatSpeed={0.70} floatOffset={0.8} floatAmp={0.07} />

      {/* Atmospheric rings */}
      <AtmosphericRing radius={2.8} tube={0.009} color={0x00ff78} opacity={0.07}
        initRotX={Math.PI/2} position={[0,0,-0.5]} spinSpeed={0.10} />
      <AtmosphericRing radius={3.6} tube={0.007} color={0x00c853} opacity={0.04}
        initRotX={Math.PI/2+0.3} position={[0,0,-1]} spinSpeed={-0.07} />
      <AtmosphericRing radius={1.8} tube={0.010} color={0xFACC15} opacity={0.09}
        initRotX={0.3} position={[0,0.5,-0.2]} spinSpeed={0.08} />

      <ParticleField mouseRef={mouseRef} />
    </>
  );
}

// ─── KPI overlay card (HTML, positioned over canvas) ─────────────────────────
function KPICard({ label, value, valueColor, delta, barWidth, sparks, className, style }) {
  return (
    <div className={`absolute ${className}`} style={{
      background: "rgba(7,26,18,0.85)",
      border: "1px solid rgba(0,255,120,0.18)",
      borderRadius: "14px",
      padding: "12px 18px",
      backdropFilter: "blur(16px)",
      boxShadow: "0 0 28px rgba(0,255,100,0.08), inset 0 1px 0 rgba(255,255,255,0.06)",
      minWidth: "120px",
      ...style,
    }}>
      <p style={{ fontSize:"9px", textTransform:"uppercase", letterSpacing:".14em", color:"rgba(150,255,180,0.55)", fontWeight:600, marginBottom:"4px" }}>
        {label}
      </p>
      <p style={{ fontSize:"22px", fontWeight:700, letterSpacing:"-.04em", lineHeight:1, color: valueColor }}>
        {value}
      </p>
      <p style={{ fontSize:"10px", fontWeight:600, marginTop:"3px", color:"#00ff78" }}>
        {delta}
      </p>
      {barWidth && (
        <div style={{ height:"3px", borderRadius:"2px", marginTop:"8px", overflow:"hidden", background:"rgba(255,255,255,0.07)" }}>
          <div style={{ height:"100%", borderRadius:"2px", width:barWidth, background:"linear-gradient(90deg,#00c853,#aaff44)" }} />
        </div>
      )}
      {sparks && (
        <div style={{ display:"flex", alignItems:"flex-end", gap:"2px", height:"22px", marginTop:"8px" }}>
          {sparks.map((h, i) => (
            <span key={i} style={{
              flex:1, borderRadius:"2px 2px 0 0",
              height: `${h}%`,
              background: i === sparks.length-1 ? "#00ff78" : "rgba(0,255,120,0.4)",
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function HeroDashboard3D() {
  // Shared mouse ref — written by DOM listener, read by R3F useFrame
  const mouseRef = useRef({ x: 0, y: 0 });
  const wrapRef  = useRef();

  // Track mouse relative to the canvas wrapper
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      mouseRef.current.x = ((e.clientX - r.left) / r.width  - 0.5) * 2;
      mouseRef.current.y = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={wrapRef} style={{ position:"relative", width:"100%", height:"560px" }}>

      {/* ── WebGL Canvas ── */}
      <Canvas
        camera={{ position:[1.2, 1.4, 6.5], fov:42, near:0.1, far:100 }}
        gl={{ antialias:true, alpha:true }}
        style={{ width:"100%", height:"100%", display:"block" }}
      >
        <Scene mouseRef={mouseRef} />
      </Canvas>

      {/* ── HTML overlay — KPI cards & badges ── */}

      {/* Live badge */}
      <div style={{
        position:"absolute", top:"16px", left:"50%", transform:"translateX(-50%)",
        display:"flex", alignItems:"center", gap:"7px",
        background:"rgba(7,26,18,0.8)", border:"1px solid rgba(0,255,120,0.2)",
        borderRadius:"100px", padding:"5px 14px", backdropFilter:"blur(12px)",
      }}>
        <div style={{
          width:"7px", height:"7px", borderRadius:"50%",
          background:"#00ff78", boxShadow:"0 0 10px #00ff78",
          animation:"kpiDotBlink 1.6s ease-in-out infinite",
        }} />
        <span style={{ fontSize:"10px", fontWeight:700, letterSpacing:".12em", textTransform:"uppercase", color:"rgba(150,255,180,.85)" }}>
          Live Analytics
        </span>
      </div>

      {/* Revenue — top right */}
      <KPICard label="Monthly Revenue" value="$127,400" valueColor="#00ff78"
        delta="▲ +34.2% vs last month"
        sparks={[40,55,48,70,62,80,74,92,88,100]}
        className=""
        style={{ top:"52px", right:"28px", animation:"kpiFloat 6s ease-in-out infinite" }}
      />

      {/* ROAS — middle right */}
      <KPICard label="ROAS" value="4.2×" valueColor="#FACC15"
        delta="▲ Up from 2.9×"
        barWidth="78%"
        style={{ top:"200px", right:"14px", position:"absolute", animation:"kpiFloat 7s ease-in-out infinite .8s",
          background:"rgba(7,26,18,0.85)", border:"1px solid rgba(0,255,120,0.18)",
          borderRadius:"14px", padding:"12px 18px", backdropFilter:"blur(16px)",
          boxShadow:"0 0 28px rgba(0,255,100,0.08),inset 0 1px 0 rgba(255,255,255,0.06)", minWidth:"120px" }}
      />

      {/* Conv Rate — bottom right */}
      <KPICard label="Conversion Rate" value="6.8%" valueColor="#00e8ff"
        delta="▲ +1.4% this week"
        barWidth="68%"
        style={{ bottom:"80px", right:"36px", position:"absolute", animation:"kpiFloat 5.5s ease-in-out infinite 1.4s",
          background:"rgba(7,26,18,0.85)", border:"1px solid rgba(0,255,120,0.18)",
          borderRadius:"14px", padding:"12px 18px", backdropFilter:"blur(16px)",
          boxShadow:"0 0 28px rgba(0,255,100,0.08),inset 0 1px 0 rgba(255,255,255,0.06)", minWidth:"120px" }}
      />

      {/* AOV — left */}
      <KPICard label="Avg. Order Value" value="$248" valueColor="#ffffff"
        delta="▲ +$42 optimized"
        sparks={[60,52,68,75,70,80,88,82,90,100]}
        style={{ top:"140px", left:"18px", position:"absolute", animation:"kpiFloat 6.8s ease-in-out infinite .4s",
          background:"rgba(7,26,18,0.85)", border:"1px solid rgba(0,255,120,0.18)",
          borderRadius:"14px", padding:"12px 18px", backdropFilter:"blur(16px)",
          boxShadow:"0 0 28px rgba(0,255,100,0.08),inset 0 1px 0 rgba(255,255,255,0.06)", minWidth:"120px" }}
      />

      {/* Yellow scaling badge — bottom left */}
      <div style={{
        position:"absolute", bottom:"88px", left:"26px",
        background:"rgba(250,204,21,0.1)", border:"1px solid rgba(250,204,21,0.3)",
        borderRadius:"10px", padding:"9px 14px", backdropFilter:"blur(12px)",
        animation:"kpiFloat 7.2s ease-in-out infinite 1.8s",
      }}>
        <div style={{ fontSize:"14px", fontWeight:700, color:"#FACC15", letterSpacing:"-.02em" }}>
          $10K → $100K
        </div>
        <div style={{ fontSize:"9px", textTransform:"uppercase", letterSpacing:".1em", color:"rgba(250,204,21,0.55)", marginTop:"2px" }}>
          Scaling Framework™
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes kpiFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-10px); }
        }
        @keyframes kpiDotBlink {
          0%,100% { opacity:1; }
          50%      { opacity:.3; }
        }
      `}</style>
    </div>
  );
}