const thumbs=[...document.querySelectorAll('.thumb')];const main=document.getElementById('mainImage');let index=0;
function show(n){index=(n+thumbs.length)%thumbs.length;main.src=thumbs[index].src;main.alt=thumbs[index].alt}
thumbs.forEach((img,n)=>img.addEventListener('click',()=>show(n)));show(0);setInterval(()=>show(index+1),3000);