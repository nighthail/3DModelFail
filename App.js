import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Suspense } from "react";

const obj = useLoader(OBJLoader, require("./assets/Airmax/shoe.obj"));

function Shoe(props) {
  return (
    <mesh {...props}>
      <primitive object={obj} scale={10} />
    </mesh>
  );
}

export default function App() {
  return (
    <>
      <Canvas>
        <Suspense>
          <ambientLight />
          <Shoe />
        </Suspense>
      </Canvas>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
