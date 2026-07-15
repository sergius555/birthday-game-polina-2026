const http=require('http'),fs=require('fs'),path=require('path');
const root=path.join(__dirname,'..');
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.jpg':'image/jpeg','.mp3':'audio/mpeg','.mp4':'video/mp4','.svg':'image/svg+xml'};
http.createServer((req,res)=>{
  let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/index.html';
  const fp=path.join(root,p);
  fs.readFile(fp,(e,d)=>{ if(e){res.writeHead(404);res.end('404');return;}
    res.writeHead(200,{'Content-Type':types[path.extname(fp)]||'application/octet-stream','Cache-Control':'no-store'}); res.end(d); });
}).listen(8971,()=>console.log('serving on 8971'));
