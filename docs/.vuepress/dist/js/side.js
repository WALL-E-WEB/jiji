window.onload=function(){var e=document.getElementsByClassName("sidebar-item");for(let s=0;s<e.length;s++)(t=e[s]).addEventListener("click",(function(){t.classList.add("showTag"),t.classList.contains("isHied")?(t.classList.remove("isHied"),this.nextElementSibling.style.display="block"):(t.classList.add("isHied"),this.nextElementSibling.style.display="none")}));e=document.getElementsByClassName("sidebar-sub-items");for(let i=0;i<e.length;i++){var t,s=(t=e[i]).parentElement.children[0];s.style.color="#000",s.style.fontWeight=700;var n=document.createElement("span");s.appendChild(n)}};