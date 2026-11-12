(function(){
'use strict';
var tabs=Array.prototype.slice.call(document.querySelectorAll('.tab'));
var panels=Array.prototype.slice.call(document.querySelectorAll('.manual'));
function choose(name,update){
  if(name!=='cubicon'&&name!=='bambu')return;
  tabs.forEach(function(t){var on=t.dataset.printer===name;t.setAttribute('aria-selected',String(on));t.tabIndex=on?0:-1;document.getElementById(t.getAttribute('aria-controls')).hidden=!on;});
  if(update){try{history.replaceState(null,'','#panel-'+name);}catch(ignore){}}
}
function route(){
  var hash='';try{hash=decodeURIComponent(location.hash.slice(1));}catch(ignore){}
  var name=(hash==='bambu'||hash==='panel-bambu'||hash.indexOf('bambu-')===0)?'bambu':'cubicon';
  choose(name,false);
  var target=document.getElementById(hash);
  if(target)requestAnimationFrame(function(){target.scrollIntoView();});
}
// Content stays visible if scripting is disabled by the file viewer.
document.querySelector('.tabbar').setAttribute('role','tablist');
tabs.forEach(function(t,i){
 t.setAttribute('role','tab');
 t.addEventListener('click',function(ev){ev.preventDefault();choose(t.dataset.printer,true);});
 t.addEventListener('keydown',function(ev){if(['ArrowLeft','ArrowRight','Home','End'].indexOf(ev.key)!==-1){ev.preventDefault();var n=ev.key==='Home'?0:ev.key==='End'?tabs.length-1:(i+(ev.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[n].focus();choose(tabs[n].dataset.printer,true);}});
});
panels.forEach(function(panel){panel.setAttribute('role','tabpanel');});
route();window.addEventListener('hashchange',route);
var modal=document.querySelector('dialog'),big=modal.querySelector('img'),lastPhoto;
function close(){if(typeof modal.close==='function'&&modal.open){modal.close();}else{modal.removeAttribute('open');cleanup();}}
function cleanup(){document.body.classList.remove('modal-open');big.removeAttribute('src');if(lastPhoto)lastPhoto.focus();}
document.querySelectorAll('figure img').forEach(function(im){
 im.setAttribute('tabindex','0');im.setAttribute('role','button');im.setAttribute('aria-label',im.alt+' · 크게 보기');
 function open(){lastPhoto=im;big.src=im.src;big.alt=im.alt;
  if(typeof modal.showModal==='function'){modal.showModal();}else{modal.classList.add('fallback');modal.setAttribute('open','');}
  document.body.classList.add('modal-open');modal.querySelector('button').focus();
 }
 im.addEventListener('click',open);im.addEventListener('keydown',function(ev){if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();open();}});
});
modal.querySelector('button').addEventListener('click',close);
modal.addEventListener('click',function(ev){if(ev.target===modal)close();});
modal.addEventListener('close',cleanup);
document.addEventListener('keydown',function(ev){if(ev.key==='Escape'&&modal.hasAttribute('open'))close();});
document.querySelector('.print-button').addEventListener('click',function(){window.print();});
})();