import{g as H,i as U,e as F,N as q,P as R,S as z,a as G}from"./thumbs.min-8481b3c7.js";import{_ as J,e as A,m as V,r as E,o as c,c as b,a as t,b as k,w as g,d as x,t as p,B as L,E as K,G as Q,F as P,C as T,D as W,H as C,I as X,p as Y,j as Z}from"./index-15eb7059.js";import{c as O}from"./cart-307b77ff.js";import{p as j}from"./productStore-9e8b8e22.js";import"./sweetalert2.all-b0f0deaf.js";import"./statusStore-bad30854.js";function $({swiper:e,extendParams:u,on:m}){u({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let w=!1,i=!1;e.thumbs={swiper:null};function y(){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const o=s.clickedIndex,l=s.clickedSlide;if(l&&l.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof o>"u"||o===null)return;let r;s.params.loop?r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10):r=o,e.params.loop?e.slideToLoop(r):e.slideTo(r)}function f(){const{thumbs:s}=e.params;if(w)return!1;w=!0;const o=e.constructor;if(s.swiper instanceof o)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(U(s.swiper)){const l=Object.assign({},s.swiper);Object.assign(l,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new o(l),i=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",y),!0}function h(s){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const l=o.params.slidesPerView==="auto"?o.slidesPerViewDynamic():o.params.slidesPerView;let r=1;const d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(r=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(r=1),r=Math.floor(r),o.slides.forEach(n=>n.classList.remove(d)),o.params.loop||o.params.virtual&&o.params.virtual.enabled)for(let n=0;n<r;n+=1)F(o.slidesEl,`[data-swiper-slide-index="${e.realIndex+n}"]`).forEach(a=>{a.classList.add(d)});else for(let n=0;n<r;n+=1)o.slides[e.realIndex+n]&&o.slides[e.realIndex+n].classList.add(d);const v=e.params.thumbs.autoScrollOffset,S=v&&!o.params.loop;if(e.realIndex!==o.realIndex||S){const n=o.activeIndex;let a,I;if(o.params.loop){const N=o.slides.filter(D=>D.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];a=o.slides.indexOf(N),I=e.activeIndex>e.previousIndex?"next":"prev"}else a=e.realIndex,I=a>e.previousIndex?"next":"prev";S&&(a+=I==="next"?v:-1*v),o.visibleSlidesIndexes&&o.visibleSlidesIndexes.indexOf(a)<0&&(o.params.centeredSlides?a>n?a=a-Math.floor(l/2)+1:a=a+Math.floor(l/2)-1:a>n&&o.params.slidesPerGroup,o.slideTo(a,s?0:void 0))}}m("beforeInit",()=>{const{thumbs:s}=e.params;if(!(!s||!s.swiper))if(typeof s.swiper=="string"||s.swiper instanceof HTMLElement){const o=H(),l=()=>{const d=typeof s.swiper=="string"?o.querySelector(s.swiper):s.swiper;if(d&&d.swiper)s.swiper=d.swiper,f(),h(!0);else if(d){const v=S=>{s.swiper=S.detail[0],d.removeEventListener("init",v),f(),h(!0),s.swiper.update(),e.update()};d.addEventListener("init",v)}return d},r=()=>{if(e.destroyed)return;l()||requestAnimationFrame(r)};requestAnimationFrame(r)}else f(),h(!0)}),m("slideChange update resize observerUpdate",()=>{h()}),m("setTransition",(s,o)=>{const l=e.thumbs.swiper;!l||l.destroyed||l.setTransition(o)}),m("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||s.destroyed||i&&s.destroy()}),Object.assign(e.thumbs,{init:f,update:h})}const{VITE_APP_URL:B,VITE_APP_PATH:M}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"leo533",BASE_URL:"/Vue3-week6/",MODE:"production",DEV:!1,PROD:!0},ee={data(){return{product:[],products:[],tempProducts:[],thumbsSwiper:null,modules:[q,$,R],itemNum:1,id:"",fillter:[],productsAll:[]}},components:{Swiper:z,SwiperSlide:G},methods:{getProductSingle(){const{id:e}=this.$route.params,u=this.$loading.show();this.$http.get(`${B}v2/api/${M}/product/${e}`).then(m=>{const{product:w}=m.data;this.product=w,this.products=this.product,console.log(this.product),console.log(this.products),u.hide()}).catch(m=>{alert(m)})},getCategory(){this.$http.get(`${B}v2/api/${M}/products/all`).then(e=>{this.productsAll=e.data.products,console.log(this.productsAll)}).catch(e=>{console.log(e),alert(e.response)})},setThumbsSwiper(e){this.thumbsSwiper=e},...A(O,["addToCart"]),...A(j,["tempProductsa11","getProductAll","addtoFollow","getid"]),test(e){this.$router.push(`/product/${e}`),this.id=e,this.getProductSingle()}},computed:{...V(j,["followList"]),...V(O,["loadingItem"])},mounted(){this.getProductSingle(),this.getProductAll()}},_=e=>(Y("data-v-8afb8aa4"),e=e(),Z(),e),te={class:"container py-8"},se={class:"row d-flex justify-content-center mb-4"},oe={class:"col-md-9"},ie={class:"row mb-4"},le=_(()=>t("h2",{class:"text-center text-primary fw-bold mb-7"},"鮮品味茶品",-1)),re={class:"col-md-7"},ae=["src"],ne=["src"],de={class:"col-md-5"},ce={class:"d-flex flex-column justify-content-center h-100"},ue={class:"d-flex align-items-center"},pe={class:"h3 text-nowrap me-2 fw-bold"},me={key:0,class:"material-icons fs-1"},he={key:1,class:"material-icons fs-1 text-primary",style:{cursor:"pointer"}},fe={class:"badge rounded-pill bg-primary"},be=["innerHTML"],_e={class:"d-flex flex-column h-100"},ve={class:"align-self-end"},ge={class:"text-decoration-line-through fs-4"},we=_(()=>t("span",null,"原價",-1)),ye={class:"fs-2 mb-2 fw-bold text-danger"},Se=_(()=>t("span",{class:""},"特價",-1)),xe={class:"d-flex justify-content-end"},Pe=["value"],Te={key:0,class:"fas fa-spinner fa-pulse"},Ie={class:"row d-flex justify-content-center mb-4"},ke={class:"col-md-9"},Ce=_(()=>t("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"}," 商品介紹 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"}," 商品規格 ")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false"}," 商品特色 ")])],-1)),Ae={class:"tab-content",id:"myTabContent"},Ve=["innerHTML"],Ee=_(()=>t("div",{class:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"}," ... ",-1)),Le=_(()=>t("div",{class:"tab-pane fade",id:"contact",role:"tabpanel","aria-labelledby":"contact-tab"}," ... ",-1)),Oe={class:"row d-flex justify-content-center"},je=_(()=>t("h2",{class:"text-center text-primary mb-7 fw-bold"},"相關商品",-1)),Be={class:"col-md-9"},Me={class:"card d-flex h-100 shadow-sm"},Ne=["onClick"],De={class:"card-body p-0"},He={class:"card-title fs-4 lh-29 fw-bold"},Ue={class:"fs-5 lh-30 fw-bold mb-5"};function Fe(e,u,m,w,i,y){const f=E("swiper-slide"),h=E("swiper");return c(),b("section",te,[t("div",se,[t("div",oe,[t("div",ie,[le,t("div",re,[k(h,{style:{"--swiper-navigation-color":"#fff","--swiper-pagination-color":"#fff"},spaceBetween:10,navigation:!0,thumbs:{swiper:i.thumbsSwiper},modules:i.modules,class:"mySwiper2"},{default:g(()=>[(c(!0),b(P,null,T(i.product.imagesUrl,(s,o)=>(c(),C(f,{key:o},{default:g(()=>[t("img",{src:s},null,8,ae)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"]),k(h,{onSwiper:y.setThumbsSwiper,spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,modules:i.modules,class:"mySwiper align-items-center"},{default:g(()=>[(c(!0),b(P,null,T(i.product.imagesUrl,(s,o)=>(c(),C(f,{key:o},{default:g(()=>[t("img",{src:s},null,8,ne)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"]),x(" "+p(i.product.success),1)]),t("div",de,[t("div",ce,[t("div",null,[t("div",ue,[t("h3",pe,p(i.product.title),1),t("a",{href:"#",class:"d-flex mb-md-0 align-items-center text-decoration-none",onClick:u[0]||(u[0]=L(()=>e.addtoFollow(i.product.id),["prevent"])),style:{cursor:"pointer"}},[e.followList.id.indexOf(i.product.id)===-1?(c(),b("span",me," favorite_border ")):(c(),b("span",he," favorite "))])]),t("span",fe,p(i.product.category),1),t("p",{innerHTML:i.product.description},null,8,be),t("div",_e,[t("div",ve,[t("div",ge,[we,t("span",null,p(i.product.origin_price),1)]),t("div",ye,[Se,t("span",null,p(i.product.price),1)])]),t("div",xe,[K(t("select",{class:"form-select",name:"qty","onUpdate:modelValue":u[1]||(u[1]=s=>i.itemNum=s)},[(c(),b(P,null,T(5,s=>t("option",{value:s,key:s+"0"},p(s),9,Pe)),64))],512),[[Q,i.itemNum,void 0,{number:!0}]]),t("button",{type:"button",class:"btn btn-primary me-3 me-md-0 text-nowrap",onClick:u[2]||(u[2]=()=>e.addToCart(i.product.id,i.itemNum))},[x(" 加入購物車 "),e.loadingItem===i.product.id+"1"?(c(),b("i",Te)):W("",!0)])])])])])])])])]),t("div",Ie,[t("div",ke,[Ce,t("div",Ae,[t("div",{class:"tab-pane fade show active p-5",id:"home",role:"tabpanel","aria-labelledby":"home-tab",innerHTML:i.product.content},null,8,Ve),Ee,Le])])]),t("div",Oe,[x(p(i.tempProducts)+" ",1),je,t("div",Be,[k(h,{class:"Swiper3",navigation:!0,slidesPerView:3,spaceBetween:24,pagination:{clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:24},768:{slidesPerView:3,spaceBetween:24},992:{slidesPerView:3,spaceBetween:24}},modules:i.modules},{default:g(()=>[(c(!0),b(P,null,T(i.tempProducts,s=>(c(),C(f,{key:s.id},{default:g(()=>[x(p(s.id)+" ",1),t("div",Me,[t("div",{class:"bg-cover",style:X([{"min-height":"200px",cursor:"pointer","background-position":"center"},{backgroundImage:`url(${s.imageUrl})`}]),onClick:L(()=>y.test(s.id),["prevent"])},null,12,Ne),t("div",De,[t("h5",He,p(s.title),1),t("div",Ue,[t("span",null,p(e.$filters.currency(s.price)),1)])])])]),_:2},1024))),128))]),_:1},8,["modules"])])])])}const Qe=J(ee,[["render",Fe],["__scopeId","data-v-8afb8aa4"]]);export{Qe as default};
