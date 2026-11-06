import {readFile,writeFile,mkdir,cp,rm} from 'node:fs/promises';
import assert from 'node:assert/strict';
const base='https://projectsuricate.vercel.app';
const pages=JSON.parse(await readFile('seo-pages.json','utf8'));
assert(pages.length>0);
const seen=new Set();
for(const p of pages){assert(/^[a-zA-Z0-9_/-]+\.html$/.test(p.path)&&!p.path.includes('..'));assert(/^\/(?:[a-zA-Z0-9_/-]*)$/.test(p.url));assert(!seen.has(p.url));seen.add(p.url);assert(/^\d{4}-\d{2}-\d{2}$/.test(p.updated));assert(new Date(p.updated+'T00:00:00Z').toISOString().slice(0,10)===p.updated);}
await rm('public',{recursive:true,force:true});
await mkdir('public',{recursive:true});
for(const f of ['style.css','script.js','store-header.js','assets'])await cp(f,'public/'+f,{recursive:true});
for(const p of pages){let html=await readFile(p.path,'utf8');if(p.path==='index.html'){assert(html.includes('bCFWmUChzLqMeaS2URQ4YZWfXSy2wWzRYod60xF5UDg'));assert(html.includes('<section class="closing">'));html=html.replace('<section class="closing">','<section id="project-status" class="section"><p class="eyebrow">PROJECT STATUS &amp; UPDATES</p><h2>Follow the project.</h2><p>Project Suricate is a wildlife-inspired apparel project in collection preview. Real sales are not open; checkout is test-only. Our pledge is 50% of net profits, not 50% of each purchase. Financial reports are not published yet.</p><p><a class="text-link" href="/updates">Read project updates →</a> · <a class="text-link" href="/updates/2026-11-05-project-status">Read the November 5 status update →</a></p><p>Last substantive update: <time datetime="'+p.updated+'">'+p.updated+'</time></p></section><section class="closing">');html=html.replace('<a href="#transparency">Transparency</a></nav>','<a href="#transparency">Transparency</a><a href="/updates">Updates</a></nav>');}else{assert(html.includes('content="'+base+p.url+'"')||html.includes('href="'+base+p.url+'"'));assert(html.includes('datetime="'+p.updated+'"'));}await mkdir('public/'+p.path.split('/').slice(0,-1).join('/'),{recursive:true});await writeFile('public/'+p.path,html);}
const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>'  <url><loc>'+base+p.url+'</loc><lastmod>'+p.updated+'</lastmod></url>').join('\n')+'\n</urlset>\n';
await writeFile('public/sitemap.xml',xml.replaceAll('\\n','\n'));
await writeFile('public/robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+base+'/sitemap.xml\n');
assert((await readFile('public/index.html','utf8')).includes('href="/updates"'));
console.log('Built '+pages.length+' public pages and sitemap.');
