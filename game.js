// Создание сцены, камеры и рендерера
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создание геометрии и материала для куба
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// Создание геометрии и материала для икосаэдра
const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0);
const icosahedronMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
scene.add(icosahedron);

// Позиционирование камеры
camera.position.z = 5;

// Создание анимации
function animate() {
    requestAnimationFrame(animate);

    // Вращение куба
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Вращение икосаэдра
    icosahedron.rotation.x += 0.01;
    icosahedron.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();
