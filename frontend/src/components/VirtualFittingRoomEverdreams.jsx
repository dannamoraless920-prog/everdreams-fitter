import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

function Avatar({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} scale={1.4} />;
}

export default function VirtualFittingRoomEverdreams() {
  const [avatarUrl, setAvatarUrl] = useState("/models/avatar_female.glb");
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setPhoto(imageUrl);
    console.log("Prenda cargada:", imageUrl);
  };

  return (
    <div className="fitting-room">
      <div className="controls">
        <h2>👗 Sube tu prenda</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={() => setAvatarUrl("/models/avatar_female.glb")}>👩 Mujer</button>
        <button onClick={() => setAvatarUrl("/models/avatar_male.glb")}>👨 Hombre</button>
      </div>

      <div className="viewer">
        <Canvas camera={{ position: [0, 1.5, 3] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <Avatar url={avatarUrl} />
          <Environment preset="studio" />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
