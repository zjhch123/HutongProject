npm run build
cd dist
zip -r dist.zip ./*
scp dist.zip root@47.98.157.41:/root/
ssh root@47.98.157.41 '
  cd /root && 
  mv dist.zip /var/node_server/Hutong/app/public/ && 
  cd /var/node_server/Hutong/app/public/ && 
  unzip -o dist.zip && 
  rm -rf dist.zip &&
  source /etc/profile && 
  npm run stop && 
  npm run start
'
