#!/bin/bash

# ============================================
# 破荒AI网站 - Docker 部署脚本
# ============================================

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 配置
IMAGE_NAME="pohuang-ai-website"
CONTAINER_NAME="pohuang-website"
PORT=28443

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  破荒AI网站 - Docker 部署脚本${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# 检查 Docker 是否安装
if ! command -v docker &> /dev/null; then
    echo -e "${RED}错误: Docker 未安装${NC}"
    echo "请先安装 Docker: https://docs.docker.com/get-docker/"
    exit 1
fi

# 检查 Docker Compose 是否安装
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}错误: Docker Compose 未安装${NC}"
    echo "请先安装 Docker Compose: https://docs.docker.com/compose/install/"
    exit 1
fi

echo -e "${GREEN}✓ Docker 和 Docker Compose 已安装${NC}"
echo ""

# 显示操作菜单
echo "请选择操作:"
echo "  1) 构建并启动 (首次部署)"
echo "  2) 仅构建镜像"
echo "  3) 仅启动容器"
echo "  4) 停止容器"
echo "  5) 重启容器"
echo "  6) 查看日志"
echo "  7) 更新部署 (拉取最新代码并重建)"
echo "  8) 完全删除 (容器和镜像)"
echo "  9) SSH 部署到远程服务器"
echo "  0) 退出"
echo ""

read -p "请输入选项 [0-9]: " choice

case $choice in
    1)
        echo -e "${YELLOW}正在构建并启动...${NC}"
        docker-compose down 2>/dev/null || true
        docker-compose up --build -d
        echo ""
        echo -e "${GREEN}========================================${NC}"
        echo -e "${GREEN}  部署成功!${NC}"
        echo -e "${GREEN}========================================${NC}"
        echo -e "网站访问地址: ${YELLOW}https://localhost:28443${NC} 或 ${YELLOW}https://$(hostname -I | awk '{print $1}'):28443${NC}"
        ;;
    2)
        echo -e "${YELLOW}正在构建镜像...${NC}"
        docker-compose build --no-cache
        echo -e "${GREEN}✓ 镜像构建完成${NC}"
        ;;
    3)
        echo -e "${YELLOW}正在启动容器...${NC}"
        docker-compose up -d
        echo -e "${GREEN}✓ 容器已启动${NC}"
        echo -e "网站访问地址: ${YELLOW}https://localhost:28443${NC}"
        ;;
    4)
        echo -e "${YELLOW}正在停止容器...${NC}"
        docker-compose down
        echo -e "${GREEN}✓ 容器已停止${NC}"
        ;;
    5)
        echo -e "${YELLOW}正在重启容器...${NC}"
        docker-compose restart
        echo -e "${GREEN}✓ 容器已重启${NC}"
        ;;
    6)
        echo -e "${YELLOW}查看日志 (按 Ctrl+C 退出)...${NC}"
        docker-compose logs -f
        ;;
    7)
        echo -e "${YELLOW}正在更新部署...${NC}"
        echo -e "${BLUE}拉取最新代码...${NC}"
        git pull origin main 2>/dev/null || echo -e "${YELLOW}警告: 无法拉取代码，请手动更新${NC}"
        echo -e "${BLUE}重建并启动...${NC}"
        docker-compose down
        docker-compose up --build -d
        echo -e "${GREEN}✓ 更新完成${NC}"
        ;;
    8)
        echo -e "${YELLOW}正在删除容器和镜像...${NC}"
        docker-compose down --rmi all -v
        echo -e "${GREEN}✓ 已清理完成${NC}"
        ;;
    9)
        echo -e "${YELLOW}SSH 远程部署${NC}"
        echo ""
        read -p "请输入服务器 IP 或域名: " server_ip
        read -p "请输入 SSH 端口 [默认 22]: " ssh_port
        ssh_port=${ssh_port:-22}
        read -p "请输入 SSH 用户名: " ssh_user
        read -p "请输入部署目录 [默认 ~/pohuang-ai-website]: " deploy_dir
        deploy_dir=${deploy_dir:-~/pohuang-ai-website}
        
        echo ""
        echo -e "${BLUE}准备部署到远程服务器...${NC}"
        echo -e "  服务器: ${YELLOW}$server_ip:$ssh_port${NC}"
        echo -e "  用户: ${YELLOW}$ssh_user${NC}"
        echo -e "  目录: ${YELLOW}$deploy_dir${NC}"
        echo ""
        
        # 检查本地构建
        echo -e "${BLUE}步骤 1/4: 本地构建项目...${NC}"
        npm install
        npm run build
        echo -e "${GREEN}✓ 本地构建完成${NC}"
        
        # 创建部署包
        echo -e "${BLUE}步骤 2/4: 创建部署包...${NC}"
        tar -czf deploy.tar.gz dist/ Dockerfile docker-compose.yml nginx.conf deploy.sh
        echo -e "${GREEN}✓ 部署包创建完成${NC}"
        
        # 上传到服务器
        echo -e "${BLUE}步骤 3/4: 上传到服务器...${NC}"
        ssh -p $ssh_port $ssh_user@$server_ip "mkdir -p $deploy_dir"
        scp -P $ssh_port deploy.tar.gz $ssh_user@$server_ip:$deploy_dir/
        echo -e "${GREEN}✓ 上传完成${NC}"
        
        # 在服务器上执行部署
        echo -e "${BLUE}步骤 4/4: 在服务器上部署...${NC}"
        ssh -p $ssh_port $ssh_user@$server_ip << EOF
            cd $deploy_dir
            tar -xzf deploy.tar.gz
            rm deploy.tar.gz
            docker-compose down 2>/dev/null || true
            docker-compose up --build -d
            echo "部署完成"
EOF
        
        # 清理本地部署包
        rm -f deploy.tar.gz
        
        echo ""
        echo -e "${GREEN}========================================${NC}"
        echo -e "${GREEN}  远程部署成功!${NC}"
        echo -e "${GREEN}========================================${NC}"
        echo -e "网站访问地址: ${YELLOW}https://$server_ip:28443${NC}"
        ;;
    0)
        echo "退出"
        exit 0
        ;;
    *)
        echo -e "${RED}无效选项${NC}"
        exit 1
        ;;
esac

echo ""
read -p "按 Enter 键继续..."
