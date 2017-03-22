!function(){var e=angular.module("ionicCustomRange",["ionic"]);e.directive("ionCustomRange",["$window",function(e){return{restrict:"E",scope:{ngModel:"="},template:'<div class="static-background-line"></div><div class="progress-line"></div> <div class="slider-tip">{{maxValue}}</div><div class="scrubber"></div><div class="slider-tip-min">{{minValue}}</div><div class="scrubber-min"></div>',link:function(t,i,n){function o(){if(h.style.left="0px",v)m>u?u=m:r>f&&(r=f),t.ngModel=t.ngModel?t.ngModel:{},r=t.ngModel.maxValue?t.ngModel.maxValue:r,t.ngModel.maxValue=r,u=t.ngModel.minValue?t.ngModel.minValue:u,t.ngModel.minValue=u,t.maxValue=r,t.minValue=u,s(c(u),N),s(c(r),V);else{m>g?g=m:g>f&&(g=f);var e=t.ngModel||g;s(c(e),V),t.ngModel=g,t.maxValue=g}}function a(){M.style.display="block",M.className+=" slider-tip-on ",M.className+=n["class"]?n["class"]:"",v&&(y.style.display="block",y.className+=" slider-tip-on ",y.className+=n["class"]?n["class"]:"")}function l(){M.style.display="none",M.className="slider-tip",v&&(y.style.display="none",y.className="slider-tip-min")}function c(e){return(e-m)/(f-m)*$}function s(e,t){t=t||V,t.style[ionic.CSS.TRANSFORM]="translate3d("+e+"px, 0, 0)","scrubber"===t.className&&(M.style[ionic.CSS.TRANSFORM]="translate3d("+e+"px, 0, 0)"),"scrubber-min"===t.className&&(y.style[ionic.CSS.TRANSFORM]="translate3d("+e+"px, 0, 0)"),v?("scrubber"===t.className&&(h.style.width=e-h.offsetLeft+"px"),"scrubber-min"===t.className&&(h.style.left=e+"px",h.style.width=h.clientWidth-h.offsetLeft+"px")):h.style.width=e+"px"}var u,r,d=n["class"]?n["class"]+"-bg":"default-progress-line-bg",m=n.min?parseFloat(n.min):0,f=n.max?parseFloat(n.max):100,p=n.step?parseFloat(n.step):1,g=n.value?parseFloat(n.value):(f-Math.abs(m))/2,u=n.minValue?parseFloat(n.minValue):Math.floor(1*(f-Math.abs(m))/3),r=n.maxValue?parseFloat(n.maxValue):Math.floor(2*(f-Math.abs(m))/3),b=n.tip?"true"===n.tip:!1,v=n.type?"double"===n.type:!1,x=i[0].getBoundingClientRect(),h=i[0].querySelector(".progress-line"),M=i[0].querySelector(".slider-tip"),y=i[0].querySelector(".slider-tip-min"),V=i[0].querySelector(".scrubber"),N=i[0].querySelector(".scrubber-min"),F=V.getBoundingClientRect().width,S=!1,w=Math.round(F/2+F/4),R=x.left+w,T=5,$=x.width-x.left-T+F;h.className+=" "+d,o(),b&&a(),v&&(N.style.display="block");var C=function(e){e.preventDefault(),S=!0},k=function(e){if(S){var i=e.touches[0].clientX,n=i-R,o=!0;"scrubber-min"===e.target.className&&(o=!1),0>n?n=0:n>$&&v===!1?n=$:v&&o===!1&&n>c(r)?n=c(r-1):v&&o&&n>$?n=$:v&&o&&n<c(u)&&(n=c(u+1)),s(n,e.target),t.$apply(function(){var e=p*Math.ceil(n/$*(f-m)/p)+m;v?o?(r=Number(e.toFixed(2)),t.maxValue=r,t.ngModel.maxValue=r):(u=Number(e.toFixed(2)),t.minValue=u,t.ngModel.minValue=u,s(c(r),V)):(t.ngModel=Number(e.toFixed(2)),t.maxValue=t.ngModel)})}},q=function(e){S=!1},A=function(e){if(x=i[0].getBoundingClientRect(),$=x.width-x.left-T+F,v)o();else{var n=t.ngModel||g;s(c(n))}},B=function(e){var i=e.clientX,n=i-R;0>n?n=0:n>$&&(n=$);var o=!0;v&&c(u)>n?(s(n,N),o=!1):v&&c(r)<n?s(n,V):v&&c(r)-n<n-c(u)?s(n,V):v&&c(r)-n>n-c(u)?(s(n,N),o=!1):s(n,V),t.$apply(function(){var e=p*Math.ceil(n/$*(f-m)/p)+m;v?o?(r=Number(e.toFixed(2)),t.maxValue=r,t.ngModel.maxValue=r):(u=Number(e.toFixed(2)),t.minValue=u,t.ngModel.minValue=u,s(c(r),V)):(t.ngModel=Number(e.toFixed(2)),t.maxValue=t.ngModel)})},O=t.$watch(function(){return n.tip},function(){"true"==n.tip?a():l()}),z=t.$watch(function(){return n.step},function(){p=n.step?parseFloat(n.step):1;var e;!function(){clearTimeout(e),e=setTimeout(function(){o()},1e3)}()}),L=t.$watch(function(){return n.min},function(){m=n.min?parseFloat(n.min):0;var e;!function(){clearTimeout(e),e=setTimeout(function(){o()},1e3)}()}),X=t.$watch(function(){return n.max},function(){f=n.max?parseFloat(n.max):100;var e;!function(){clearTimeout(e),e=setTimeout(function(){o()},1e3)}()});ionic.on("click",B,i[0]),ionic.on("touchstart",C,V),ionic.on("touchstart",C,N),ionic.on("touchmove",k,V),ionic.on("touchmove",k,N),ionic.on("touchend",q,V),ionic.on("touchend",q,N),ionic.on("resize",A,e),t.$on("$destroy",function(){O(),X(),L(),z(),ionic.off("click",B,i[0]),ionic.off("touchstart",C,V),ionic.off("touchstart",C,N),ionic.off("touchmove",k,V),ionic.off("touchmove",k,N),ionic.off("touchend",q,V),ionic.off("touchend",q,N),ionic.off("resize",A,e)})}}}])}();