console.log("window.onload ",window);var urlItem=document.getElementsByClassName("sidebar-item");for(let e=0;e<urlItem.length;e++)(element=urlItem[e]).addEventListener("click",(function(){if(element.classList.add("showTag"),element.classList.contains("isHied")){if(element.classList.remove("isHied"),!(e=this.nextElementSibling))return;e.style.display="block"}else{var e;if(element.classList.add("isHied"),!(e=this.nextElementSibling))return;e.style.display="none"}}));urlItem=document.getElementsByClassName("sidebar-sub-items");for(let e=0;e<urlItem.length;e++){var element,frist=(element=urlItem[e]).parentElement.children[0];frist.style.color="#000",frist.style.fontWeight=700;var span=document.createElement("span");frist.appendChild(span)}