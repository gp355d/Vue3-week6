import{f as e,e as l,g as r}from"./index-15eb7059.js";import{c}from"./cart-307b77ff.js";import{s as a}from"./statusStore-bad30854.js";import{S as s}from"./sweetalert2.all-b0f0deaf.js";const i=a(),{VITE_APP_URL:d,VITE_APP_PATH:p}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"leo533",BASE_URL:"/Vue3-week6/",MODE:"production",DEV:!1,PROD:!0},g=e("product",{state:()=>({tempProducts:[],followList:{id:[],list:[]},productsAll:[],category:"",categories:[],isLoading:!1}),actions:{...l(c,["addToCart"]),getProductAll(){i.isLoading=!0,r.get(`${d}v2/api/${p}/products/all`).then(t=>{this.productsAll=t.data.products,this.tempProductsall(this.productsAll),this.createCategories(),i.isLoading=!1}).catch(t=>{console.log(t),alert(t.response)})},createCategories(){if(this.productsAll.length!==0){const t=this.productsAll.map(o=>o.category);this.categories=[...new Set(t)]}},setCategory(t=""){this.category=t},tempProductsall(t){this.tempProducts=t,this.getid(),this.checkCollection()},getid(){this.followList.id=JSON.parse(localStorage.getItem("followId"))||[]},checkCollection(){this.followList.list=[],console.log(this.tempProducts),this.tempProducts.forEach(t=>{this.followList.id.indexOf(t.id)>-1&&this.followList.list.push(t)})},addtoFollow(t){const o=this.followList.id.indexOf(t);o===-1?(this.followList.id.push(t),s.fire({position:"top-end",icon:"success",title:"已收藏",showConfirmButton:!1,timer:1500})):(this.followList.id.splice(o,1),s.fire({position:"top-end",icon:"success",title:"取消收藏",showConfirmButton:!1,timer:1500})),localStorage.setItem("followId",JSON.stringify(this.followList.id)),this.getProductAll()}}});export{g as p};
