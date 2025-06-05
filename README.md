# 我的全栈应用

本项目是一个全栈应用，前端使用 React 构建，后端使用 FastAPI。前端构建工具为 Vite，整个项目通过 Docker 进行容器化管理。

## 项目结构

```
my-fullstack-app
├── frontend
│   ├── src
│   │   ├── App.tsx          # 应用主组件
│   │   ├── main.tsx         # React 应用入口
│   │   ├── components        # 可复用的 UI 组件
│   │   └── pages            # 路由对应的页面组件
│   ├── public               # 静态文件（图片、字体等）
│   ├── index.html           # 包含根元素的主 HTML 文件
│   ├── package.json         # npm 配置文件，包含依赖和脚本
│   ├── tsconfig.json        # TypeScript 配置文件
│   └── vite.config.ts       # Vite 的开发与构建配置
├── backend
│   ├── app
│   │   ├── main.py          # FastAPI 应用入口
│   │   ├── models.py        # ORM 数据库模型
│   │   ├── schemas.py       # 用于数据校验和序列化的 Pydantic 模型
│   │   └── routers
│   │       └── __init__.py  # 路由模块的组织与注册
│   ├── requirements.txt      # Python 项目依赖
│   └── Dockerfile            # 构建后端应用镜像的 Dockerfile
├── docker-compose.yml        # 管理服务的 Docker Compose 配置
└── README.md                 # 项目文档与说明
```

## 快速开始

### 前置条件

- 已安装 Docker 和 Docker Compose
- 后端需要 Python 3.7 或更高版本
- 前端需要安装 Node.js 和 npm

### 安装步骤

1. 克隆仓库：
   ```
   git clone <repository-url>
   cd my-fullstack-app
   ```

2. 进入 backend 目录并安装依赖：
   ```
   cd backend
   pip install -r requirements.txt
   ```

3. 进入 frontend 目录并安装依赖：
   ```
   cd frontend
   npm install
   ```

### 运行应用

在项目根目录下执行以下命令，通过 Docker Compose 启动应用：

```
docker-compose up --build
```

该命令会构建 Docker 镜像并启动应用服务。

### 访问应用

- 前端：在浏览器中访问 `http://localhost:3000`
- 后端：FastAPI 后端可通过 `http://localhost:8000` 访问

### 部署

本应用可部署到如阿里云或西部数码等云服务。请确保在 Docker Compose 文件中配置好云环境所需的相关参数。

## 许可证

本项目采用 MIT 许可证，详情请参阅 LICENSE 文件。