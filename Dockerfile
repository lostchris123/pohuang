FROM nginx:alpine

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY pohuangai.com.cn.pem /etc/nginx/ssl/pohuangai.com.cn.pem
COPY pohuangai.com.cn.key /etc/nginx/ssl/pohuangai.com.cn.key

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
