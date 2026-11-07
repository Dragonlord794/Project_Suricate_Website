import {readFile,writeFile,mkdir,cp,rm} from 'node:fs/promises';
import assert from 'node:assert/strict';
const base='https://projectsuricate.vercel.app';
const pages=JSON.parse(await readFile('seo-pages.json','utf8'));
assert(pages.length>0);
const seen=new Set();
for(const p of pages){assert(/^[a-zA-Z0-9_/-]+\.html$/.test(p.path)&&!p.path.includes('..'));assert(/^\/(?:[a-zA-Z0-9_/-]*)$/.test(p.url));assert(!seen.has(p.url));seen.add(p.url);assert(/^\d{4}-\d{2}-\d{2}$/.test(p.updated));assert(new Date(p.updated+'T00:00:00Z').toISOString().slice(0,10)===p.updated);}
await rm('public',{recursive:true,force:true});
await mkdir('public',{recursive:true});
for(const f of ['style.css','pages.css','script.js','assets'])await cp(f,'public/'+f,{recursive:true});
for(const p of pages){let html=await readFile(p.path,'utf8');if(p.path==='index.html'){assert(html.includes('bCFWmUChzLqMeaS2URQ4YZWfXSy2wWzRYod60xF5UDg'));assert(html.includes('<section class="closing">'));html=html.replace('<section class="closing">','<section id="explore-project" class="section"><p class="eyebrow">GET TO KNOW PROJECT SURICATE</p><h2>Meet the animals.<br>Follow the project.</h2><p>Discover the 20 animals in our design plan, from Siberian tigers to whooping cranes.</p><p><a class="text-link" href="/animals">Meet all 20 animals →</a> · <a class="text-link" href="/updates">Project updates →</a></p></section><section class="closing">');const nav='<a href="#transparency">Transparency</a></nav>';assert(html.includes(nav));html=html.replace(nav,'<a href="#transparency">Transparency</a><a href="/animals">Animals</a><a href="/updates">Updates</a></nav>');}else{assert(html.includes('href="'+base+p.url+'"'));}await mkdir('public/'+p.path.split('/').slice(0,-1).join('/'),{recursive:true});await writeFile('public/'+p.path,html);}
const animalHtml=await readFile('public/animals.html','utf8');assert((animalHtml.match(/class="card"/g)||[]).length===20);const updates=await readFile('public/updates.html','utf8');assert(updates.includes('No updates yet.')&&!updates.includes('<article'));
const xml='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+pages.map(p=>'  <url><loc>'+base+p.url+'</loc><lastmod>'+p.updated+'</lastmod></url>').join('\n')+'\n</urlset>\n';
await writeFile('public/sitemap.xml',xml);
await writeFile('public/robots.txt','User-agent: *\nAllow: /\n\nSitemap: '+base+'/sitemap.xml\n');
assert(!(await readFile('public/index.html','utf8')).includes('/updates/2026-11-05-project-status'));
console.log('Built '+pages.length+' pages, 20 animal cards, and empty updates page.');
