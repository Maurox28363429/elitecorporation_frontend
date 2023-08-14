import{_ as A,r as d,o as I,a as y,c as V,d as r,e as t,w as u,f,ak as N,h as m,ad as B,ac as $,Q as q,al as C,af as v,am as R,Z as G,p as O,j as J}from"./index.56b46820.js";import{Q as M,a as j,b as F}from"./QPageSticky.129a7121.js";import{u as L,Q as T,C as Z}from"./use-quasar.7ffecf35.js";import{i as _}from"./index.202c0ce0.js";import"./format.a33550d6.js";import"./selection.4e4aaaf2.js";import"./axios.7331a07d.js";async function z(n,s){const{data:i}=await _.get("/users?page="+n+"&limit=15&search="+s);return i}async function H(n,s){n=n||1,s=s||"";const{data:i}=await _.get("/roles?page="+n+"&limit=30&search="+s);return i}async function K(n){const{data:s}=await _.post("/users/create",n);return s}async function W(n,s){const{data:i}=await _.put("/users/update/"+n,s);return i}async function X(n){const{data:s}=await _.delete("/users/delete/"+n);return s}const Y=n=>(O("data-v-3ea80226"),n=n(),J(),n),ee={class:"q-pa-md"},ae={style:{width:"80%",margin:"auto"}},le=Y(()=>r("thead",null,[r("tr",null,[r("th",{class:"text-left"},"ID"),r("th",{class:"text-left"},"Nombre"),r("th",{class:"text-left"},"Rol"),r("th",{class:"text-left"},"Email"),r("th",{class:"text-left"})])],-1)),te={class:"text-left"},se={class:"text-left"},oe={class:"text-left"},ne={class:"text-left"},re={class:"text-left"},ie={class:"q-pa-lg flex flex-center"},de={class:"text-h6"},ue={__name:"UsersPage",setup(n){const s=L(),i=d(1),b=d(1),w=d(""),U=d([]),c=d(!1),p=d(!1),x=d([]),h=async l=>{s.dialog({title:"Aviso de confirmaci\xF3n",message:"Desea eliminar el usuario seleccionado?",cancel:!0,persistent:!0}).onOk(async()=>{await X(l.id).then(e=>{e.status==200?s.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Usuario eliminado correctamente"}):s.notify({color:"red-4",textColor:"white",icon:"cloud_done",message:"Error al eliminar el usuario"})}),await g()}).onCancel(()=>{})},k=async()=>{const{data:l}=await H();x.value=l.map(e=>({label:e.name,value:e.id}))},Q=async()=>{let l=JSON.parse(JSON.stringify(o.value));l.rol&&delete l.rol,l.rol_id=o.value.rol_id.value,p.value?await W(l.id,l).then(e=>{c.value=!1,e.status==200?(s.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Usuario editado correctamente"}),o.value={name:"",last_name:"",email:"",password:"",rol_id:""}):s.notify({color:"red-4",textColor:"white",icon:"cloud_done",message:"Error al editar el usuario"})}):await K(l).then(e=>{c.value=!1,e.status==200?(s.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Usuario creado correctamente"}),o.value={name:"",last_name:"",email:"",password:"",rol_id:""}):s.notify({color:"red-4",textColor:"white",icon:"cloud_done",message:"Error al crear el usuario"})}),await g()},o=d({name:"",last_name:"",email:"",password:"",rol_id:""}),D=l=>{c.value=!0,p.value=l.id,o.value=l,o.value.rol_id={label:l.rol.name,value:l.rol.id}},g=async()=>{const{data:l,paginate:e}=await z(i.value,w.value);b.value=e.last_page,U.value=l,i.value=e.current_page},E=()=>{c.value=!0,p.value=!1,o.value={name:"",last_name:"",email:"",password:"",rol_id:""}};return I(async()=>{await g(),await k()}),(l,e)=>(y(),V("div",ee,[r("div",ae,[t(f,{filled:"","bottom-slots":"",modelValue:w.value,"onUpdate:modelValue":e[0]||(e[0]=a=>w.value=a),label:"Buscar",dense:l.dense},{append:u(()=>[t(m,{icon:"search",label:"Search",onClick:g,style:{"background-color":"#1a76d2",padding:"1.1em",margin:"0","margin-right":"-0.8em",color:"white"}})]),_:1},8,["modelValue","dense"])]),t(M,null,{default:u(()=>[le,r("tbody",null,[(y(!0),V(B,null,$(U.value,(a,S)=>(y(),V("tr",{key:S},[r("td",te,v(a.id),1),r("td",se,v(a.name+" "+a.last_name),1),r("td",oe,v(a.rol.name),1),r("td",ne,v(a.email),1),r("td",re,[t(m,{flat:"",dense:"",round:"",icon:"edit","aria-label":"Edit",onClick:P=>D(a)},null,8,["onClick"]),t(m,{flat:"",dense:"",round:"",icon:"delete","aria-label":"Delete",onClick:P=>h(a)},null,8,["onClick"])])]))),128))])]),_:1}),r("div",ie,[t(j,{modelValue:i.value,"onUpdate:modelValue":e[1]||(e[1]=a=>i.value=a),max:b.value,"direction-links":""},null,8,["modelValue","max"])]),t(F,{position:"bottom-right",style:{margin:"1em"}},{default:u(()=>[t(m,{fab:"",icon:"add",color:"primary",onClick:e[2]||(e[2]=a=>E())})]),_:1}),t(N,{modelValue:c.value,"onUpdate:modelValue":e[9]||(e[9]=a=>c.value=a),persistent:""},{default:u(()=>[t(q,{style:{"min-width":"500px"}},{default:u(()=>[t(C,null,{default:u(()=>[r("div",de,v(p.value?"Editar Usuario":"Agregar Usuario"),1)]),_:1}),t(C,{class:"q-pt-none"},{default:u(()=>[t(f,{filled:"",modelValue:o.value.name,"onUpdate:modelValue":e[3]||(e[3]=a=>o.value.name=a),label:"Nombre",class:"input-form",dense:l.dense},null,8,["modelValue","dense"]),t(f,{filled:"",modelValue:o.value.last_name,"onUpdate:modelValue":e[4]||(e[4]=a=>o.value.last_name=a),label:"Apellido",class:"input-form",dense:l.dense},null,8,["modelValue","dense"]),t(f,{filled:"",modelValue:o.value.email,"onUpdate:modelValue":e[5]||(e[5]=a=>o.value.email=a),label:"Email",class:"input-form",dense:l.dense},null,8,["modelValue","dense"]),t(f,{filled:"",modelValue:o.value.password,"onUpdate:modelValue":e[6]||(e[6]=a=>o.value.password=a),label:"Password",dense:l.dense,class:"input-form"},null,8,["modelValue","dense"]),t(T,{filled:"",modelValue:o.value.rol_id,"onUpdate:modelValue":e[7]||(e[7]=a=>o.value.rol_id=a),options:x.value,label:"Rol",dense:l.dense,class:"input-form","option-value":"value","option-label":"label"},null,8,["modelValue","options","dense"])]),_:1}),t(R,{align:"right",class:"text-primary"},{default:u(()=>[G(t(m,{flat:"",label:"Cancel"},null,512),[[Z]]),t(m,{flat:"",label:p.value?"Editar Usuario":"Agregar Usuario",onClick:e[8]||(e[8]=a=>Q())},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};var we=A(ue,[["__scopeId","data-v-3ea80226"]]);export{we as default};