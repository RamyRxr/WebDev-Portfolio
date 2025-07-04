import { OrbitControls, Environment, GradientTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      {/* Override any default lighting with dark blue ambient */}
      <color attach="background" args={["#070b14"]} />

      {/* Dark ambient base light - cooler blue */}
      <ambientLight intensity={0.3} color="#0a1929" />

      {/* Main purple key light */}
      <directionalLight
        position={[5, 5, 3]}
        intensity={1.8}
        color="#7e57c2"
        castShadow
      />

      {/* Blue rim light - intensified */}
      <directionalLight position={[-3, 3, 0]} intensity={1.4} color="#1e88e5" />

      {/* Magenta accent light from above */}
      <directionalLight
        position={[0, 8, 0]}
        castShadow
        intensity={0.9}
        color="#d500f9"
      />

      {/* Cooler cyan ground bounce light */}
      <pointLight
        position={[0, -1, 2]}
        intensity={0.7}
        color="#00b0ff"
        distance={6}
      />

      {/* Invisible ceiling light source */}
      <group position={[0, 4.8, -2]}>
        {/* Bright spotlight coming from ceiling */}
        <spotLight
          position={[0, 0, 0]}
          angle={0.5}
          penumbra={0.4}
          intensity={14}
          color="#bbdefb"
          castShadow
          distance={10}
          target-position={[0, -5, -2]}
        />

        {/* Soft glow from ceiling */}
        <pointLight
          position={[0, -0.1, 0]}
          intensity={3}
          color="#651fff"
          distance={6}
        />
      </group>

      {/* Add fog for atmospheric effect - darker blue */}
      <fog attach="fog" color="#050a17" near={7} far={20} />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Floor with reflective material - darker */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial
          color="#050505"
          metalness={0.9}
          roughness={0.2}
          emissive="#303f9f"
          emissiveIntensity={0.04}
        />
      </mesh>

      {/* Ceiling with lighter color */}
      <mesh
        position={[0, 5, -5]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[30, 15, 1]}
      >
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#2c3b5a"
          roughness={0.7}
          metalness={0.3}
          emissive="#3f51b5"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Back wall - solid dark blue */}
      <mesh position={[0, 0, -15]} scale={[40, 20, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#050a17" />
      </mesh>

      {/* Main visible back wall - blue/purple gradient */}
      <mesh position={[0, 0, -10]} scale={[30, 10, 1]}>
        <planeGeometry />
        <meshBasicMaterial>
          <GradientTexture
            attach="map"
            stops={[0, 0.4, 0.6, 1]}
            colors={["#040d21", "#1a237e", "#4527a0", "#c5cae9"]}
          />
        </meshBasicMaterial>
      </mesh>

      {/* Side walls with matching color scheme */}
      <mesh
        position={[-15, 0, -5]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[15, 10, 1]}
      >
        <planeGeometry />
        <meshBasicMaterial>
          <GradientTexture
            attach="map"
            stops={[0, 0.5, 1]}
            colors={["#040d21", "#1a237e", "#c5cae9"]}
          />
        </meshBasicMaterial>
      </mesh>

      <mesh
        position={[15, 0, -5]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[15, 10, 1]}
      >
        <planeGeometry />
        <meshBasicMaterial>
          <GradientTexture
            attach="map"
            stops={[0, 0.5, 1]}
            colors={["#040d21", "#1a237e", "#c5cae9"]}
          />
        </meshBasicMaterial>
      </mesh>

      {/* Additional side walls to ensure full coverage */}
      <mesh
        position={[-15, 0, -15]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 10, 1]}
      >
        <planeGeometry />
        <meshBasicMaterial color="#050a17" />
      </mesh>

      <mesh
        position={[15, 0, -15]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[10, 10, 1]}
      >
        <planeGeometry />
        <meshBasicMaterial color="#050a17" />
      </mesh>

      {/* Computer model with table and chair */}
      <group scale={0.03} position={[0, -1.49, -2]} castShadow>
        <Suspense fallback={null}>
          <Computer />
        </Suspense>
      </group>
    </Canvas>
  );
};

export default ContactExperience;
