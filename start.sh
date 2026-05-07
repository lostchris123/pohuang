#!/bin/bash

# 杭州破荒人工智能科技有限公司官网 - 快速启动脚本

echo "================================"
echo "破荒AI官网 - 项目启动"
echo "================================"
echo ""

# 检查node是否安装
if ! command -v node &> /dev/null; then
    echo "❌ 未检测到Node.js，请先安装Node.js 18+"
    exit 1
fi

echo "✅ Node版本: $(node -v)"
echo ""

# 检查是否已安装依赖
if [ ! -d "node_modules" ]; then
    echo "📦 正在安装依赖..."
    npm install
    echo "✅ 依赖安装完成"
    echo ""
fi

# 启动开发服务器
echo "🚀 启动开发服务器..."
echo "📱 本地地址: http://localhost:3000"
echo "🌐 网络地址: http://0.0.0.0:3000"
echo ""
echo "💡 按 Ctrl+C 停止服务器"
echo "================================"
echo ""

npm run dev