import{m as M,S as h,D as C,P as k}from"./sweetalert2.all-77393ee5.js";import{C as P}from"./ckeditor-4084127e.js";import{_ as v,r as g,o as n,c as a,b as t,a as V,t as f,g as p,i as u,F as x,e as y,f as D,d as A,l as $}from"./index-73389829.js";const U={props:{article:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!0}},data(){return{status:{},modal:"",tempArticle:{tag:[""],content:""},create_at:0,editor:P,editorConfig:{toolbar:["heading","|","bold","italic","link"]}}},mixins:[M],watch:{article(){this.tempArticle={...this.article,tag:this.article.tag||[],isPublic:this.article.isPublic||!1},[this.create_at]=new Date(this.tempArticle.create_at*1e3).toISOString().split("T")},create_at(){this.tempArticle.create_at=Math.floor(new Date(this.create_at)/1e3)}},methods:{}},N={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},B={class:"modal-dialog modal-xl",role:"document"},E={class:"modal-content border-0"},T={class:"modal-header bg-dark text-white"},L={class:"modal-title",id:"exampleModalLabel"},S={key:0},I={key:1},O=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),R={class:"modal-body"},F={class:"row"},H={class:"col-sm-4"},j={class:"mb-3"},q=t("label",{for:"title",class:"form-label"},"標題",-1),z={class:"mb-3"},G=t("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),J={class:"mb-3"},K=t("label",{for:"author",class:"form-label"},"作者",-1),Q={class:"mb-3"},W=t("label",{for:"create_at"},"文章建立日期",-1),X={class:"col-sm-8"},Y=t("label",{for:"tag",class:"form-label"},"標籤",-1),Z={class:"row gx-1 mb-3"},tt={class:"input-group input-group-sm"},et=["onUpdate:modelValue"],ot=["onClick"],st=t("i",{class:"bi bi-x"},null,-1),it=[st],lt={key:0,class:"col-md-2 mb-1"},nt={class:"mb-3"},at=t("label",{for:"description",class:"form-label"},"文章描述",-1),ct={class:"mb-3"},rt={class:"mb-3"},dt={class:"form-check"},pt=t("label",{class:"form-check-label",for:"isPublic"}," 是否公開 ",-1),mt={class:"modal-footer"},ht=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(i,o,l,r,e,d){const w=g("ckeditor");return n(),a("div",N,[t("div",B,[t("div",E,[t("div",T,[t("h5",L,[V(f(e.tempArticle.content)+" ",1),l.isNew?(n(),a("span",S,"新增貼文")):(n(),a("span",I,"編輯貼文"))]),O]),t("div",R,[t("div",F,[t("div",H,[t("div",j,[q,p(t("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=s=>e.tempArticle.title=s),placeholder:"請輸入標題"},null,512),[[u,e.tempArticle.title]])]),t("div",z,[G,p(t("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":o[1]||(o[1]=s=>e.tempArticle.imgurl=s),placeholder:"請輸入圖片連結"},null,512),[[u,e.tempArticle.imgurl]])]),t("div",J,[K,p(t("input",{type:"text",class:"form-control",id:"author","onUpdate:modelValue":o[2]||(o[2]=s=>e.tempArticle.author=s),placeholder:"請輸入標題"},null,512),[[u,e.tempArticle.author]])]),t("div",Q,[W,p(t("input",{type:"date",class:"form-control",id:"create_at","onUpdate:modelValue":o[3]||(o[3]=s=>e.create_at=s)},null,512),[[u,e.create_at]])])]),t("div",X,[Y,t("div",Z,[(n(!0),a(x,null,y(e.tempArticle.tag,(s,m)=>(n(),a("div",{class:"col-md-2 mb-1",key:m},[t("div",tt,[p(t("input",{type:"text",class:"form-control form-control",id:"tag","onUpdate:modelValue":c=>e.tempArticle.tag[m]=c,placeholder:"請輸入標籤"},null,8,et),[[u,e.tempArticle.tag[m]]]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:()=>e.tempArticle.tag.splice(m,1)},it,8,ot)])]))),128)),e.tempArticle.tag[e.tempArticle.tag.length-1]||!e.tempArticle.tag.length?(n(),a("div",lt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:o[4]||(o[4]=()=>e.tempArticle.tag.push(""))}," 新增標籤 ")])):D("",!0)]),t("div",nt,[at,p(t("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":o[5]||(o[5]=s=>e.tempArticle.description=s),placeholder:"請輸入文章描述"},null,512),[[u,e.tempArticle.description]])]),t("div",ct,[A(w,{editor:e.editor,modelValue:e.tempArticle.content,"onUpdate:modelValue":o[6]||(o[6]=s=>e.tempArticle.content=s),config:e.editorConfig},null,8,["editor","modelValue","config"])]),t("div",rt,[t("div",dt,[p(t("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":o[7]||(o[7]=s=>e.tempArticle.isPublic=s),id:"isPublic"},null,512),[[$,e.tempArticle.isPublic]]),pt])])])])]),t("div",mt,[ht,t("button",{type:"button",class:"btn btn-primary",onClick:o[8]||(o[8]=()=>i.$emit("update-article",e.tempArticle))}," 確認 ")])])])],512)}const _t=v(U,[["render",ut]]),{VITE_APP_URL:_,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"leo533",BASE_URL:"/Vue3-week6/",MODE:"production",DEV:!1,PROD:!0},bt={data(){return{articles:[],tempArticle:{},isNew:!1,pagination:{}}},methods:{getArticles(i=1){const o=this.$loading.show();this.$http.get(`${_}v2/api/${b}/admin/articles/?page=${i}`).then(l=>{this.articles=l.data.articles,this.pagination=l.data.pagination,o.hide()}).catch(l=>{h.fire({position:"top-end",icon:"error",title:l.response.data.message,showConfirmButton:!1,timer:1500})})},getArticle(i){const o=this.$loading.show(),l=`${_}v2/api/${b}/admin/article/${i}`;this.$http.get(l).then(r=>{r.data.success&&(this.openModal(!1,r.data.article),this.isNew=!1,o.hide())}).catch(r=>{h.fire({position:"top-end",icon:"error",title:r.response.data.message,showConfirmButton:!1,timer:1500})})},openModal(i,o){i?(this.tempArticle={isPublic:!1,create_at:new Date().getTime()/1e3,tag:[]},this.isNew=!0):(this.tempArticle={...o},this.isNew=!1),this.$refs.articleModal.openModal()},updateArticle(i){this.tempArticle=i;let o=`${_}v2/api/${b}/admin/article`,l="post";this.isNew||(o=`${_}v2/api/${b}/admin/article/${this.tempArticle.id}`,l="put");const r=this.$refs.articleModal;this.$http[l](o,{data:this.tempArticle}).then(e=>{h.fire({position:"top-end",icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500}),r.hideModal(),this.getArticles()}).catch(e=>{h.fire({position:"top-end",icon:"error",title:e.response.data.message,showConfirmButton:!1,timer:1500})})},openDelArticleModal(i){this.tempArticle={...i},this.$refs.articledelModal.openModal()},delArticle(){const i=`${_}v2/api/${b}/admin/article/${this.tempArticle.id}`;this.$http.delete(i).then(o=>{h.fire({position:"top-end",icon:"success",title:o.data.message,showConfirmButton:!1,timer:1500}),this.$refs.articledelModal.hideModal(),this.getArticles()}).catch(o=>{h.fire({position:"top-end",icon:"error",title:o.response.data.message,showConfirmButton:!1,timer:1500})})}},components:{ArticlesModal:_t,DelModal:C,Pagination:k},mounted(){this.getArticles(),document.title=this.$route.meta.title}},ft={class:"col-md-9 ms-sm-auto col-lg-10 px-md-4"},gt={class:"row py-3"},At={class:"text-end mt-4"},wt={class:"table-responsive"},vt={class:"table mt-4"},xt=t("thead",null,[t("tr",null,[t("th",{class:"text-nowrap"},"標題"),t("th",null,"作者"),t("th",null,"描述"),t("th",null,"建立時間"),t("th",{class:"text-nowrap"},"是否公開"),t("th",{class:"text-nowrap"},"操作行為")])],-1),yt={class:"text-nowrap"},Mt={class:"text-nowrap"},Ct={class:"text-truncate d-inline-block",style:{width:"100px"}},kt={class:"text-nowrap"},Pt={key:0},Vt={key:1},Dt={class:"text-nowrap"},$t={class:"btn-group"},Ut=["onClick"],Nt=["onClick"];function Bt(i,o,l,r,e,d){const w=g("ArticlesModal"),s=g("DelModal"),m=g("Pagination");return n(),a("main",ft,[t("div",gt,[t("div",At,[t("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=()=>d.openModal(!0))}," 建立新的文章 ")]),t("div",wt,[t("table",vt,[xt,t("tbody",null,[(n(!0),a(x,null,y(e.articles,c=>(n(),a("tr",{key:c.id},[t("td",yt,f(c.title),1),t("td",Mt,f(c.author),1),t("td",null,[t("span",Ct,f(c.description),1)]),t("td",kt,f(i.$filters.date(c.create_at)),1),t("td",null,[c.isPublic?(n(),a("span",Pt,"已上架")):(n(),a("span",Vt,"未上架"))]),t("td",Dt,[t("div",$t,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:()=>d.getArticle(c.id)}," 編輯 ",8,Ut),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:()=>d.openDelArticleModal(c)}," 刪除 ",8,Nt)])])]))),128))])])]),A(w,{ref:"articleModal",article:e.tempArticle,"is-new":e.isNew,onUpdateArticle:d.updateArticle},null,8,["article","is-new","onUpdateArticle"]),A(s,{ref:"articledelModal","temp-items":e.tempArticle,onDeleteData:d.delArticle,id:4},null,8,["temp-items","onDeleteData"]),A(m,{pages:e.pagination,onEmitPages:d.getArticles},null,8,["pages","onEmitPages"])])])}const St=v(bt,[["render",Bt]]);export{St as default};
