import{_ as F,r as u,o as G,a as k,c as w,d as t,e as a,w as n,f as v,ak as S,h as r,ad as K,ac as L,Q as D,al as y,af as b,am as A,Z as E,p as O,j as Z}from"./index.56b46820.js";import{Q as z,a as H,b as J}from"./QPageSticky.129a7121.js";import{u as R,Q as W,C as I}from"./use-quasar.7ffecf35.js";import{Q as X}from"./QImg.76472c29.js";import{i as C}from"./index.202c0ce0.js";import"./format.a33550d6.js";import"./selection.4e4aaaf2.js";import"./axios.7331a07d.js";async function Y(o,i){const{data:c}=await C.get("/clientes?page="+o+"&limit=15&search="+i);return c}async function ee(o){const{data:i}=await C.post("/clientes/create",o);return i}async function ae(o,i){const{data:c}=await C.put("/clientes/update/"+o,i);return c}async function le(){const{data:o}=await C.get("/users/select");return o}const $=o=>(O("data-v-b5beffc4"),o=o(),Z(),o),te={class:"q-pa-md"},ne={style:{width:"80%",margin:"auto"}},se=$(()=>t("thead",null,[t("tr",null,[t("th",{class:"text-left"},"ID"),t("th",{class:"text-left"},"Nombre"),t("th",{class:"text-left"},"Email"),t("th",{class:"text-left"})])],-1)),oe={class:"text-left"},ie={class:"text-left"},de={class:"text-left"},ue={class:"text-left"},re={class:"q-pa-lg flex flex-center"},ce={class:"text-h6"},me=$(()=>t("div",{class:"text-h6"},"Codigo formulario",-1)),pe="https://quickchart.io/qr?text=",fe={__name:"ClientesPage",setup(o){const i=R(),c=u(!1),p=u(""),V=u(""),h=u([]),f=u(!1),g=u(!1),m=u(!1),x=u(1),Q=u(1),U=u([]),s=u({name:"",last_name:"",email:"",agente_id:""}),P=d=>{let e="http://localhost:9000/#/admin/clientes/";p.value=e+d.id,c.value=!0},_=async()=>{const{data:d,paginate:e}=await Y(x.value,V.value);h.value=d,Q.value=e.last_page},B=()=>{navigator.clipboard.writeText(p.value),i.notify({message:"Codigo copiado",type:"positive",icon:"check"})},N=()=>{f.value=!0,g.value=!1,s.value={name:"",last_name:"",email:"",agente_id:""}},M=async()=>{const d={name:s.value.name,last_name:s.value.last_name,email:s.value.email,agente_id:s.value.agente_id.value};if(g.value){const e=await ae(d);e.message&&i.notify({message:e.message,type:"warning",icon:"report_problem"}),e.data&&(i.notify({message:"Cliente editado correctamente",type:"positive",icon:"check"}),f.value=!1,_())}else{const e=await ee(d);e.message&&i.notify({message:e.message,type:"warning",icon:"report_problem"}),e.data&&(i.notify({message:"Cliente creado correctamente",type:"positive",icon:"check"}),f.value=!1,_())}},T=async()=>{const{data:d}=await le();U.value=d.map(e=>({name:e.name+" "+e.last_name,value:e.id}))};return G(async()=>{await _(),await T()}),(d,e)=>(k(),w("div",te,[t("div",ne,[a(v,{filled:"","bottom-slots":"",modelValue:V.value,"onUpdate:modelValue":e[0]||(e[0]=l=>V.value=l),label:"Buscar",dense:m.value},{append:n(()=>[a(r,{icon:"search",label:"Search",onClick:_,style:{"background-color":"#1a76d2",padding:"1.1em",margin:"0","margin-right":"-0.8em",color:"white"}})]),_:1},8,["modelValue","dense"])]),a(z,null,{default:n(()=>[se,t("tbody",null,[(k(!0),w(K,null,L(h.value,(l,j)=>(k(),w("tr",{key:j},[t("td",oe,b(l.id),1),t("td",ie,b(l.name+" "+l.last_name),1),t("td",de,b(l.email),1),t("td",ue,[a(r,{icon:"qr_code",onClick:q=>P(l),dense:"",round:"",flat:"","aria-label":"qrcode"},null,8,["onClick"]),a(r,{flat:"",dense:"",round:"",icon:"edit","aria-label":"Edit",onClick:q=>d.edit_item(l)},null,8,["onClick"]),a(r,{flat:"",dense:"",round:"",icon:"delete","aria-label":"Delete",onClick:q=>d.remove_item(l)},null,8,["onClick"])])]))),128))])]),_:1}),t("div",re,[a(H,{modelValue:x.value,"onUpdate:modelValue":e[1]||(e[1]=l=>x.value=l),max:Q.value,"direction-links":""},null,8,["modelValue","max"])]),a(J,{position:"bottom-right",style:{margin:"1em"}},{default:n(()=>[a(r,{fab:"",icon:"add",color:"primary",onClick:e[2]||(e[2]=l=>N())})]),_:1}),a(S,{modelValue:f.value,"onUpdate:modelValue":e[8]||(e[8]=l=>f.value=l),persistent:""},{default:n(()=>[a(D,{style:{"min-width":"500px"}},{default:n(()=>[a(y,null,{default:n(()=>[t("div",ce,b(g.value?"Editar Cliente":"Agregar Cliente"),1)]),_:1}),a(y,{class:"q-pt-none"},{default:n(()=>[a(v,{filled:"",modelValue:s.value.name,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value.name=l),label:"Nombre",dense:m.value,class:"input-form"},null,8,["modelValue","dense"]),a(v,{filled:"",modelValue:s.value.last_name,"onUpdate:modelValue":e[4]||(e[4]=l=>s.value.last_name=l),label:"Apellido",dense:m.value,class:"input-form"},null,8,["modelValue","dense"]),a(v,{filled:"",modelValue:s.value.email,"onUpdate:modelValue":e[5]||(e[5]=l=>s.value.email=l),label:"Email",dense:m.value,class:"input-form"},null,8,["modelValue","dense"]),a(W,{filled:"",modelValue:s.value.agente_id,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value.agente_id=l),options:U.value,label:"Agente",dense:m.value,class:"input-form","option-value":"id","option-label":"name"},null,8,["modelValue","options","dense"])]),_:1}),a(A,{align:"right",class:"text-primary"},{default:n(()=>[E(a(r,{flat:"",label:"Cancel"},null,512),[[I]]),a(r,{flat:"",label:g.value?"Editar Cliente":"Agregar Cliente",onClick:e[7]||(e[7]=l=>M())},null,8,["label"])]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(S,{modelValue:c.value,"onUpdate:modelValue":e[11]||(e[11]=l=>c.value=l)},{default:n(()=>[a(D,{style:{width:"400px","text-align":"center"}},{default:n(()=>[a(y,null,{default:n(()=>[me]),_:1}),a(y,{class:"q-pt-none"},{default:n(()=>[a(X,{src:pe+p.value,style:{width:"300px",margin:"auto"}},null,8,["src"]),a(v,{filled:"",modelValue:p.value,"onUpdate:modelValue":e[9]||(e[9]=l=>p.value=l),label:"Codigo",dense:m.value,class:"input-form",onClick:e[10]||(e[10]=l=>B())},{append:n(()=>[a(r,{icon:"content_copy",style:{"background-color":"#1a76d2",padding:"1.1em",margin:"0","margin-right":"-0.8em",color:"white"}})]),_:1},8,["modelValue","dense"])]),_:1}),a(A,{align:"right"},{default:n(()=>[E(a(r,{flat:"",label:"OK",color:"primary"},null,512),[[I]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};var ke=F(fe,[["__scopeId","data-v-b5beffc4"]]);export{ke as default};