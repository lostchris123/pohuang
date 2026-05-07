#!/bin/bash

# 导出破荒AI官网项目

echo "================================"
echo "破荒AI官网 - 项目导出工具"
echo "================================"
echo ""

# 设置导出目录
EXPORT_DIR="/home/gem/.openclaw/workspace/pohuang-ai-website-export"
PROJECT_NAME="pohuang-ai-website-$(date +%Y%m%d)"

echo "📦 准备导出项目..."
echo "📁 项目位置: /home/gem/.openclaw/workspace/pohuang-ai-website"
echo ""

# 方法1: 创建完整项目压缩包（包含node_modules）
echo "方法1: 创建完整项目压缩包（包含node_modules）"
echo "正在打包..."
cd /home/gem/.openclaw/workspace
tar -czf ${PROJECT_NAME}-full.tar.gz pohuang-ai-website/
echo "✅ 已创建: ${PROJECT_NAME}-full.tar.gz"
echo ""

# 方法2: 创建轻量项目压缩包（不包含node_modules）
echo "方法2: 创建轻量项目压缩包（不包含node_modules，推荐）"
echo "正在打包..."
tar -czf ${PROJECT_NAME}-lite.tar.gz \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.git' \
  pohuang-ai-website/
echo "✅ 已创建: ${PROJECT_NAME}-lite.tar.gz"
echo ""

# 方法3: 创建项目文件列表
echo "方法3: 创建项目文件列表"
find pohuang-ai-website -type f -name "*.ts" -o -name "*.tsx" -o -name "*.json" -o -name "*.md" -o -name "*.css" -o -name "*.html" > ${PROJECT_NAME}-files.txt
echo "✅ 已创建: ${PROJECT_NAME}-files.txt"
echo ""

# 显示导出结果
echo "================================"
echo "✅ 导出完成！"
echo "================================"
echo ""
echo "📦 导出文件位置:"
echo "1. 完整包（包含node_modules）:"
echo "   /home/gem/.openclaw/workspace/${PROJECT_NAME}-full.tar.gz"
ls -lh /home/gem/.openclaw/workspace/${PROJECT_NAME}-full.tar.gz 2>/dev/null || echo "   (未创建)"
echo ""
echo "2. 轻量包（推荐，不包含node_modules）:"
echo "   /home/gem/.openclaw/workspace/${PROJECT_NAME}-lite.tar.gz"
ls -lh /home/gem/.openclaw/workspace/${PROJECT_NAME}-lite.tar.gz 2>/dev/null || echo "   (未创建)"
echo ""
echo "3. 文件列表:"
echo "   /home/gem/.openclaw/workspace/${PROJECT_NAME}-files.txt"
echo ""

echo "💡 使用说明:"
echo "- 轻量包(${PROJECT_NAME}-lite.tar.gz)推荐使用，文件小，下载快"
echo "- 解压后运行 'npm install' 安装依赖"
echo "- 完整包(${PROJECT_NAME}-full.tar.gz)包含所有依赖，文件较大"
echo ""
echo "================================"