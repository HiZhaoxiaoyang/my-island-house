import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Tree3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const treeRef = useRef<THREE.Mesh>();

  // 初始化 Three.js 场景
  useEffect(() => {
    // 初始化渲染器
    const canvas = canvasRef.current!;
    rendererRef.current = new THREE.WebGLRenderer({ canvas, antialias: true });
    rendererRef.current.setSize(canvas.clientWidth, canvas.clientHeight);
    rendererRef.current.setClearColor('#e6f4ff', 1); // 岛屿天空蓝

    // 初始化相机
    cameraRef.current = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    cameraRef.current.position.z = 5;

    // 添加环境光和方向光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    sceneRef.current.add(directionalLight);

    // 创建大树模型（简化版：树干+树叶）
    const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.5, 3, 32);
    const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 }); // 棕色树干
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 1.5; // 树干底部在地面（y=0）

    const leavesGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const leavesMaterial = new THREE.MeshPhongMaterial({ color: 0x228b22 }); // 绿色树叶
    const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
    leaves.position.y = 3.5; // 树叶在树干顶部

    const tree = new THREE.Group();
    tree.add(trunk, leaves);
    sceneRef.current.add(tree);
    treeRef.current = tree;

    // 添加轨道控制器
    const controls = new OrbitControls(cameraRef.current, canvas);
    controls.enableDamping = true;

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      // 树叶轻微摆动动画
      if (treeRef.current) {
        treeRef.current.rotation.y += 0.005;
        leaves.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
      }
      controls.update();
      rendererRef.current?.render(sceneRef.current, cameraRef.current!);
    };
    animate();

    // 窗口缩放适配
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current && canvas) {
        cameraRef.current.aspect = canvas.clientWidth / canvas.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(canvas.clientWidth, canvas.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      rendererRef.current?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[500px] md:h-screen rounded-lg shadow-lg" />;
};

export default Tree3D;