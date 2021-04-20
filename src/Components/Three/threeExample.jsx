// import * as THREE from "three";
// import { useRef, useEffect } from "react";

// const ThreeExample = () => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);

//     mountRef.current.appendChild(renderer.domElement);

//     const renderScene = () => {
//       renderer.render(scene, camera);
//     };

//     const handleResize = () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderScene();
//     };

//     var geometry = new THREE.BoxGeometry(1, 1, 1);
//     var material = new THREE.MeshBasicMaterial({ color: 0x9b34eb });
//     var cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);
//     camera.position.z = 5;

//     var animate = function () {
//       requestAnimationFrame(animate);
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render(scene, camera);
//     };

//     animate();
//     let mRef = mountRef.current;

//     window.addEventListener("resize", handleResize, false);

//     return () => {
//       mRef.removeChild(renderer.domElement);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return <div ref={mountRef} />;
// };

// export default ThreeExample;
