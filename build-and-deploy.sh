#!/bin/bash

# ============================================
# 破荒AI网站 - 本地打包 + SSH 部署脚本
# ============================================

set -e

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 默认配置
SERVER_IP=""
SERVER_PORT="22"
SERVER_USER=""
DEPLOY_DIR="/opt/pohuang-ai-website"

# 显示帮助
show_help() {
    echo "用法: $0 [选项]"
    echo ""
    echo "选项:"
    echo "  -h, --help              显示帮助信息"
    echo "  -i, --ip <IP>           服务器 IP 地址 (必需)"
    echo "  -p, --port <PORT>       SSH 端口 (默认: 22)"
    echo "  -u, --user <USER>       SSH 用户名 (必需)"
    echo "  -d, --dir <DIR>         服务器部署目录 (默认: /opt/pohuang-ai-website)"
    echo "  --ssl                   包含 SSL 证书目录 (ssl/)"
    echo ""
    echo "示例:"
    echo "  $0 -i 192.168.1.100 -u root"
    echo "  $0 -i 192.168.1.100 -p 2222 -u ubuntu -d /home/ubuntu/website"
    echo "  $0 -i 192.168.1.100 -u root --ssl"
}

# 解析参数
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            show_help
            exit 0
            ;;
        -i|--ip)
            SERVER_IP="$2"
            shift 2
            ;;
        -p|--port)
            SERVER_PORT="$2"
            shift 2
            ;;
        -u|--user)
            SERVER_USER="$2"
            shift 2
            ;;
        -d|--dir)
            DEPLOY_DIR="$2"
            shift 2
            ;;
        --ssl)
            INCLUDE_SSL=true
            shift
            ;;
        *)
            echo -e "${RED}未知选项: $1${NC}"
            show_help
            exit 1
            ;;
    esac
done

# 验证必需参数
if [[ -z "$SERVER_IP" ]] || [[ -z "$SERVER_USER" ]]; then
    echo -e "${RED}错误: 必须指定服务器 IP 和用户名${NC}"
    show_help
    exit 1
fi

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  破荒AI网站 - 打包并部署${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo -e "服务器: ${YELLOW}$SERVER_USER@$SERVER_IP:$SERVER_PORT${NC}"
echo -e "部署目录: ${YELLOW}$DEPLOY_DIR${NC}"
echo ""

# 步骤 1: 本地构建
echo -e "${BLUE}[1/5] 本地构建项目...${NC}"
if [ ! -d "node_modules" ]; then
    echo "  安装依赖..."
    npm install
fi
echo "  执行构建..."
npm run build
echo -e "${GREEN}  ✓ 构建完成${NC}"
echo ""

# 步骤 2: 准备部署文件
echo -e "${BLUE}[2/5] 准备部署文件...${NC}"

# 创建临时部署目录
DEPLOY_TEMP=$(mktemp -d)
echo "  创建临时目录: $DEPLOY_TEMP"

# 复制必要文件
cp -r dist "$DEPLOY_TEMP/"
cp Dockerfile "$DEPLOY_TEMP/"
cp docker-compose.yml "$DEPLOY_TEMP/"
cp nginx.conf "$DEPLOY_TEMP/"

# 可选：复制 SSL 证书
if [[ "$INCLUDE_SSL" == true ]]; then
    if [ -d "ssl" ]; then
        cp -r ssl "$DEPLOY_TEMP/"
        echo -e "${GREEN}  ✓ 已包含 SSL 证书${NC}"
    else
        echo -e "${YELLOW}  警告: ssl 目录不存在，跳过${NC}"
    fi
fi

# 创建服务器端启动脚本
cat > "$DEPLOY_TEMP/start.sh" << 'EOF'
#!/bin/bash
set -e

echo "========================================"
echo "  破荒AI网站 - 服务器启动脚本"
echo "========================================"
echo ""

# 检查 Docker
if ! command -v docker &> /dev/null; then
    echo "错误: Docker 未安装"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "错误: Docker Compose 未安装"
    exit 1
fi

echo "停止旧容器..."
docker-compose down 2>/dev/null || true

echo "构建并启动新容器..."
docker-compose up --build -d

echo ""
echo "========================================"
echo "  部署成功!"
echo "========================================"
echo "访问地址: https://$(hostname -I | awk '{print $1}'):28443"
echo ""
docker-compose ps
EOF

chmod +x "$DEPLOY_TEMP/start.sh"

echo -e "${GREEN}  ✓ 文件准备完成${NC}"
echo ""

# 步骤 3: 打包
echo -e "${BLUE}[3/5] 打包项目...${NC}"
cd "$DEPLOY_TEMP"
tar -czf deploy.tar.gz *
cd - > /dev/null
mv "$DEPLOY_TEMP/deploy.tar.gz" ./deploy.tar.gz
rm -rf "$DEPLOY_TEMP"
echo -e "${GREEN}  ✓ 打包完成: deploy.tar.gz${NC}"
echo ""

# 步骤 4: 上传到服务器
echo -e "${BLUE}[4/5] 上传到服务器...${NC}"
echo "  创建远程目录..."
ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_IP" "mkdir -p $DEPLOY_DIR"

echo "  上传文件..."
scp -P "$SERVER_PORT" deploy.tar.gz "$SERVER_USER@$SERVER_IP:$DEPLOY_DIR/"
echo -e "${GREEN}  ✓ 上传完成${NC}"
echo ""

# 步骤 5: 在服务器上部署
echo -e "${BLUE}[5/5] 在服务器上部署...${NC}"
ssh -p "$SERVER_PORT" "$SERVER_USER@$SERVER_IP" << EOF
    cd $DEPLOY_DIR
    
    echo "  解压文件..."
    tar -xzf deploy.tar.gz
    rm deploy.tar.gz
    
    echo "  启动容器..."
    docker-compose down 2>/dev/null || true
    docker-compose up --build -d
    
    echo ""
    echo "容器状态:"
    docker-compose ps
EOF

echo ""

# 清理本地文件
rm -f deploy.tar.gz

# 完成
echo -e "${GREEN}========================================${NC}"
echo -e "${GREEN}  部署成功!${NC}"
echo -e "${GREEN}========================================${NC}"
echo -e "访问地址: ${YELLOW}https://$SERVER_IP:28443${NC}"
echo ""
