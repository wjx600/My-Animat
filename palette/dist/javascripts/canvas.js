define(["exports"],function(t){"use strict";function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function t(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}}(),i={size:2,backgroundColor:"#fff"},a=function(){function t(s,a){e(this,t),Object.assign(this,i,a),this.elem=document.getElementById(s),this.wrap=this.elem.parentNode,this.ctx=this.elem.getContext("2d"),this.width=this.elem.width=this.elem.offsetWidth,this.height=this.elem.height=this.elem.offsetHeight,this.elem.classList.remove("full"),this.getBound(),this.setBackgroundColor(),this.createMask(),this.trashCanvas(),this.bindEvent(),this.clear=this.clear,this.color=a.color}return s(t,[{key:"getBound",value:function(){this.left=this.elem.getBoundingClientRect().left,this.top=this.elem.getBoundingClientRect().top}},{key:"setBackgroundColor",value:function(){this.ctx.fillStyle=this.backgroundColor,this.ctx.fillRect(0,0,this.width,this.height)}},{key:"bindEvent",value:function(){var t=this;this.mask.addEventListener("mousedown",function(e){t.flag=!0,t.lastX=e.offsetX-0*t.left,t.lastY=e.offsetY-0*t.top,t.ctx.drawImage(t.mask,0,0),t.maskCtx.clearRect(0,0,t.width,t.height)}),this.mask.addEventListener("mousemove",function(e){if(!t.flag)return!1;var s=e.offsetX-0*t.left,i=e.offsetY-0*t.top;t.draw(s,i)}),this.mask.addEventListener("mouseup",function(e){t.flag=!1,t.clearFlag=!1}),this.wrap.addEventListener("mouseleave",function(e){t.flag=!1,t.clearFlag=!1})}},{key:"createMask",value:function(){this.mask=document.createElement("canvas"),this.mask.className="canvas-mask",this.maskCtx=this.mask.getContext("2d"),this.mask.width=this.width,this.mask.height=this.height,document.querySelector(".canvas-wrap").appendChild(this.mask)}},{key:"trashCanvas",value:function(){this.trashCanvas=document.createElement("canvas"),this.trashCanvasCtx=this.trashCanvas.getContext("2d"),this.trashCanvas.width=this.width,this.trashCanvas.height=this.height}},{key:"draw",value:function(t,e){this.maskCtx.beginPath(),this.maskCtx.strokeStyle=this.color,this.maskCtx.lineWidth=this.size,this.maskCtx.lineJoin="round",this.maskCtx.moveTo(this.lastX,this.lastY),this.maskCtx.lineTo(t,e),this.maskCtx.closePath(),this.maskCtx.stroke(),this.lastX=t,this.lastY=e}},{key:"repeal",value:function(){this.clearFlag&&this.ctx.drawImage(this.trashCanvas,0,0),this.maskCtx.clearRect(0,0,this.width,this.height)}},{key:"clear",value:function(){this.clearFlag=!0,this.trashCanvasCtx.drawImage(this.elem,0,0),this.trashCanvasCtx.drawImage(this.mask,0,0),this.maskCtx.clearRect(0,0,this.width,this.height),this.ctx.clearRect(0,0,this.width,this.height),this.setBackgroundColor(),this.img&&this.ctx.drawImage(this.img,0,0)}},{key:"loadImg",value:function(t){var e=this;this.clear(),this.img=new Image,this.img.onload=function(){e.trashCanvas.width=e.mask.width=e.width=e.elem.width=e.img.width,e.trashCanvas.height=e.mask.height=e.height=e.elem.height=e.img.height,e.ctx.drawImage(e.img,0,0),e.getBound()},this.img.src=t}},{key:"saveImg",value:function(){this.ctx.drawImage(this.mask,0,0),window.open(this.elem.toDataURL())}}]),t}();t["default"]=a});