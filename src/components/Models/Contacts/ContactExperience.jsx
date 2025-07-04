import { OrbitControls, Environment, GradientTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
      {/* Dark ambient base light */}
      <ambientLight intensity={0.2} color="#120d26" />

      {/* Main purple key light */}
      <directionalLight
        position={[5, 5, 3]}
        intensity={1.5}
        color="#9c27b0"
        castShadow
      />

      {/* Blue rim light */}
      <directionalLight position={[-3, 3, 0]} intensity={1.2} color="#2196f3" />

      {/* Magenta accent light from above */}
      <directionalLight
        position={[0, 8, 0]}
        castShadow
        intensity={0.8}
        color="#e91e63"
      />

      {/* Cyan ground bounce light */}
      <pointLight
        position={[0, -1, 2]}
        intensity={0.6}
        color="#00bcd4"
        distance={5}
      />

      {/* Add invisible lamp (only the light effects will show) */}
      <group position={[0, 1.5, -2]}>
        {/* Hidden lamp fixture */}
        <mesh castShadow visible={false}>
          <cylinderGeometry args={[0.2, 0.4, 0.1, 16]} />
          <meshStandardMaterial
            color="#303f9f"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Hidden lamp cord */}
        <mesh position={[0, 0.5, 0]} visible={false}>
          <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
          <meshStandardMaterial color="#212121" />
        </mesh>

        {/* Hidden lamp shade */}
        <mesh position={[0, -0.1, 0]} castShadow visible={false}>
          <coneGeometry args={[0.5, 0.4, 16, 1, true]} />
          <meshStandardMaterial
            color="#5e35b1"
            emissive="#7c4dff"
            emissiveIntensity={0.5}
            side={THREE.DoubleSide}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Increased brightness spotlight coming from lamp position */}
        <spotLight
          position={[0, -0.2, 0]}
          angle={0.7}
          penumbra={0.3}
          intensity={10}
          color="#e0f7fa"
          castShadow
          distance={8}
          target-position={[0, -3, -2]}
        />

        {/* Enhanced soft glow from lamp position */}
        <pointLight
          position={[0, -0.2, 0]}
          intensity={2}
          color="#7c4dff"
          distance={3}
        />
      </group>

      {/* Add fog for atmospheric effect */}
      <fog attach="fog" color="#0a0520" near={7} far={20} />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Floor with reflective material */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.8}
          roughness={0.3}
          emissive="#3f51b5"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Ceiling with cooler gray color instead of beige */}
      <mesh
        position={[0, 5, -5]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[30, 15, 1]}
      >
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#2c2c2c"
          roughness={0.8}
          metalness={0.2}
          emissive="#1a1a1a"
          emissiveIntensity={0.05}
        />
      </mesh>

      {/* Add extra back wall to ensure no gaps */}
      <mesh position={[0, 0, -15]} scale={[40, 20, 1]}>
        <planeGeometry />
        <meshBasicMaterial color="#0d1b2a" />
      </mesh>

      {/* Create a consistent gradient material for visible back wall */}
      <mesh position={[0, 0, -10]} scale={[30, 10, 1]}>
        <planeGeometry />
        <meshBasicMaterial>
          <GradientTexture
            attach="map"
            stops={[0, 0.4, 0.6, 1]}
            colors={["#0d1b2a", "#311b92", "#4a148c", "#e8eaf6"]}
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
            colors={["#0d1b2a", "#311b92", "#e8eaf6"]}
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
            colors={["#0d1b2a", "#311b92", "#e8eaf6"]}
          />
        </meshBasicMaterial>
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
