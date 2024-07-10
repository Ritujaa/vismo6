// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 30; 


let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let object;

const loader = new GLTFLoader();

loader.load(
  'models/eyewear_specs/scene.gltf', 
  function (gltf) {
    
    object = gltf.scene;
    
    object.scale.set(3, 3, 3); 

    object.position.set(-5, 0, 0); 
   
    object.rotation.y = Math.PI; 
    object.rotation.x = 0; 
    object.rotation.z = 0; 
    
    scene.add(object);
  },
  function (xhr) {
    
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    console.error(error);
  }
);

const renderer = new THREE.WebGLRenderer({ alpha: true }); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

const topLight = new THREE.DirectionalLight(0xffffff, 1); 
topLight.position.set(5, 5, 5); 
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1);
scene.add(ambientLight);


function animate() {
  requestAnimationFrame(animate);

  if (object) {
    object.rotation.y = Math.PI - 3 + (mouseX / window.innerWidth) * 3;
    object.rotation.x = -1.2 + (mouseY * 2.5 / window.innerHeight);
  }

  renderer.render(scene, camera);
}
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


document.onmousemove = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
};


animate();

