import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const Tree3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene>(new THREE.Scene());
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const treeRef = useRef<THREE.Group>();

  // 递归创建树枝函数
  const createBranch = (length: number, radius: number, angleY: number, angleZ: number, depth: number): THREE.Group => {
    const branch = new THREE.Group();

    // 创建树枝几何体
    const geometry = new THREE.CylinderGeometry(radius, radius * 0.8, length, 16);
    const material = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.y = length / 2;
    branch.add(cylinder);

    // 如果达到最大深度，添加树叶（增加细节）
    if (depth === 0) {
      // 创建多个树叶簇，增加细节
      const leafCount = Math.floor(Math.random() * 3) + 2; // 2-4个树叶簇
      for (let i = 0; i < leafCount; i++) {
        const leafSize = length * (0.4 + Math.random() * 0.4);
        const leavesGeometry = new THREE.SphereGeometry(leafSize, 16, 16);
        const leavesMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x228b22 + Math.floor(Math.random() * 0x101010), // 随机绿色变化
          transparent: true,
          opacity: 0.9
        });
        const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
        // 随机分布树叶位置
        leaves.position.y = length * (0.8 + Math.random() * 0.4);
        leaves.position.x = (Math.random() - 0.5) * length * 0.5;
        leaves.position.z = (Math.random() - 0.5) * length * 0.5;
        // 随机旋转树叶
        leaves.rotation.x = Math.random() * Math.PI;
        leaves.rotation.y = Math.random() * Math.PI;
        branch.add(leaves);
      }
      return branch;
    }

    // 随机生成子树枝数量（2-4个）
    const branchCount = Math.floor(Math.random() * 3) + 2;
    const spreadAngle = Math.PI / 3 + Math.random() * Math.PI / 4; // 增大扩散角度，让树更宽

    for (let i = 0; i < branchCount; i++) {
      // 随机计算每个分支的角度
      const randomAngleY = angleY + (Math.random() - 0.5) * spreadAngle;
      const randomAngleZ = angleZ + (Math.random() - 0.5) * spreadAngle;
      const childLength = length * (0.6 + Math.random() * 0.3); // 子树枝长度为父树枝的60%-90%
      const childRadius = radius * (0.7 + Math.random() * 0.2); // 子树枝半径为父树枝的70%-90%

      // 创建子树枝
      const childBranch = createBranch(childLength, childRadius, randomAngleY, randomAngleZ, depth - 1);
      childBranch.position.y = length;
      childBranch.rotation.y = randomAngleY;
      childBranch.rotation.z = randomAngleZ;
      branch.add(childBranch);
    }

    return branch;
  };

  // 初始化 Three.js 场景
  useEffect(() => {
    // 初始化渲染器
    const canvas = canvasRef.current!;
    rendererRef.current = new THREE.WebGLRenderer({ canvas, antialias: true });
    rendererRef.current.setSize(canvas.clientWidth, canvas.clientHeight);
    rendererRef.current.setClearColor('#e6f4ff', 1); // 岛屿天空蓝

    // 初始化相机 - 调整为鸟瞰视角
    cameraRef.current = new THREE.PerspectiveCamera(
      50, // 视角
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    // 调整相机位置，确保能看到整个下移的树
    cameraRef.current.position.set(0, 16, 16); 
    // 调整相机看向树的新位置
    cameraRef.current.lookAt(0, 3, 0); 

    // 添加环境光和方向光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    sceneRef.current.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 15); // 调整光源位置，从斜上方照射
    sceneRef.current.add(directionalLight);

    // 创建树干 - 调整位置到底部
    const trunkGeometry = new THREE.CylinderGeometry(0.6, 0.8, 5, 32); // 稍微增加树干高度
    const trunkMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = trunkGeometry.parameters.height / 2; // 树干底部位于y=0处

    // 创建树枝系统（增加深度到4级，使树更茂盛）
    const branches = createBranch(3.5, 0.5, 0, 0, 5);
    branches.position.y = trunkGeometry.parameters.height; // 放置在树干顶部

    // 创建完整的树
    const tree = new THREE.Group();
    tree.add(trunk, branches);
    // 将树向下移动，使底部贴近canvas底部
    tree.position.y = -10; 
    sceneRef.current.add(tree);
    treeRef.current = tree;

    // 添加轨道控制器 - 保持水平旋转限制
    const controls = new OrbitControls(cameraRef.current, canvas);
    controls.enableDamping = true;
    // 调整垂直旋转角度限制，适应鸟瞰视角
    controls.minPolarAngle = Math.PI / 3.5; // ~51度
    controls.maxPolarAngle = Math.PI / 2.5; // ~72度
    // 允许水平无限旋转
    controls.enableRotate = true;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 1.0;

    // 添加地面平面
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshPhongMaterial({ color: 0x8fbc8f, side: THREE.DoubleSide });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    // 将地面向下移动，与树底部对齐
    ground.position.y = -10; 
    sceneRef.current.add(ground);

    // 动画循环
    const animate = () => {
      requestAnimationFrame(animate);
      // 树枝轻微摆动动画
      if (treeRef.current) {
        // 只让树枝轻微摆动，树干保持稳定
        treeRef.current.children[1].rotation.y = Math.sin(Date.now() * 0.001) * 0.05;
      }
      controls.update();
      rendererRef.current?.render(sceneRef.current, cameraRef.current!);
    };
    animate();

    // 窗口缩放适配
    // 添加窗口大小调整处理函数
    const handleResize = () => {
    if (canvas && cameraRef.current && rendererRef.current) {
      // 获取canvas元素的实际尺寸
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      // 更新相机和渲染器
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
      rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
  };

  // 初始调用一次以设置正确尺寸
  handleResize();

  // 添加事件监听
  window.addEventListener('resize', handleResize);

  // 清理函数
  return () => {
    window.removeEventListener('resize', handleResize);
      rendererRef.current?.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-[500px] md:h-screen rounded-lg shadow-lg" />;
};

export default Tree3D;