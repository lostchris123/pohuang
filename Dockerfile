# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制源码
COPY . .

# 构建项目
RUN npm run build

# 生产阶段 - 使用 Nginx 提供静态文件
FROM nginx:alpine

# 创建 SSL 证书目录
RUN mkdir -p /etc/nginx/ssl

# 复制构建产物到 Nginx 目录
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露端口 (HTTPS)
EXPOSE 443

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
