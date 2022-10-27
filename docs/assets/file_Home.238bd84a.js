import{d as F,g as M,_ as D,u as z,r as f,c as q,o as n,a as r,b as t,n as H,t as _,w as B,e as m,v,f as C,h as U,i as y,p as L,j as I,k as p,F as w,l as T,m as S,q as E}from"./file_index.3c3d6da4.js";const V=F("task",{state:()=>({tasks:[]}),actions:{async setTask(){this.tasks=await M(),console.log(this.task)},updateTask(a,e){},deleteTask(a){const e=this.tasks.findIndex(l=>l.id==a);this.tasks.splice(e,1)},addTask(a,e){this.setTask()}}});const h=a=>(L("data-v-897c3a63"),a=a(),I(),a),A={class:"mx-auto container px-6 m-auto"},N={class:"sizetask grid gap-6"},O={class:"rounded"},W={key:0,class:"task"},G={class:"text-gray-800 font-bold mb-3"},J=h(()=>t("button",{class:"save",type:"submit"},"Save",-1)),K={class:"fechaeicons flex items-center text-gray-800 dark:text-gray-100 gap-1"},P={class:"flex items-center justify-between datestyle"},Q={class:"text-sm"},R={class:"botoncitos flex items-center gap-1.5"},X={style:{color:"white"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check",viewBox:"0 0 16 16"},Y=h(()=>t("path",{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z",fill:"white"},null,-1)),Z=[Y],tt=h(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-pencil",width:"20",height:"20",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[t("path",{stroke:"none",d:"M0 0h24v24H0z"}),t("path",{d:"M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"}),t("line",{x1:"13.5",y1:"6.5",x2:"17.5",y2:"10.5"})],-1)),et=[tt],st={style:{color:"white"},xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x",viewBox:"0 0 16 16"},ot=h(()=>t("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z",fill:"white"},null,-1)),at=[ot],lt={__name:"Task",props:{task:Object},setup(a){const e=a;z(b=>({"1c340806":e.task.color}));const l=f(!1),c=V(),k=async()=>{await U(e.task.id),c.deleteTask(e.task.id)},g=()=>{e.task.isCompleted=!e.task.isCompleted,y(e.task.id,{isCompleted:e.task.isCompleted})},x=()=>{y(e.task.id,{title:e.task.title,description:e.task.description}),l.value=!l.value},$=()=>{l.value=!l.value},i=q(()=>new Date(e.task.created_at).toLocaleDateString()),o=b=>{e.task.color=b,y(e.task.id,{color:e.task.color})};return(b,s)=>(n(),r("div",A,[t("div",N,[t("div",O,[t("div",{class:H(["w-full h-64 flex flex-col justify-between dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-6 py-5 px-4",{chequeado:!e.task.isCompleted,completado:e.task.isCompleted}])},[l.value?(n(),r("form",{key:1,onSubmit:s[2]||(s[2]=B(d=>x(),["prevent"])),action:""},[m(t("input",{"onUpdate:modelValue":s[0]||(s[0]=d=>e.task.title=d),placeholder:"",type:"text",id:""},null,512),[[v,e.task.title]]),m(t("textarea",{"onUpdate:modelValue":s[1]||(s[1]=d=>e.task.description=d),name:"",id:"",cols:"30",rows:"4"},null,512),[[v,e.task.description]]),J],32)):(n(),r("div",W,[t("h4",G,_(e.task.title),1),t("p",null,_(e.task.description),1)])),t("div",null,[t("div",K,[t("div",P,[t("p",Q,_(C(i)),1)]),t("div",R,[t("button",{onClick:s[3]||(s[3]=d=>g()),id:"check-note",class:"w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black","aria-label":"check note",role:"button"},[(n(),r("svg",X,Z))]),t("button",{onClick:s[4]||(s[4]=d=>$()),class:"w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black",id:"edit-note","aria-label":"edit note",role:"button"},et),t("button",{onClick:s[5]||(s[5]=d=>k()),class:"w-8 h-8 rounded-full bg-gray-800 dark:bg-gray-100 dark:text-gray-800 text-white flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black","aria-label":"delete note",role:"button"},[(n(),r("svg",st,at))]),t("div",{class:"botonColor bg1",onClick:s[6]||(s[6]=d=>o("#FCF6BD"))}),t("div",{class:"botonColor bg2",onClick:s[7]||(s[7]=d=>o("#D0F4DE"))}),t("div",{class:"botonColor bg3",onClick:s[8]||(s[8]=d=>o("#A9DEF9"))})])])])],2)])])]))}},j=D(lt,[["__scopeId","data-v-897c3a63"]]);const u=a=>(L("data-v-8a01fc0b"),a=a(),I(),a),nt={class:"main"},it={key:0,class:"max-w-2xl mx-auto"},rt={class:"bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto"},dt=u(()=>t("h3",{class:"text-xl font-medium text-gray-900 dark:text-white"}," Let's get things done \u{1F44C} ",-1)),ct=u(()=>t("label",{for:"text",class:"text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"},"Title",-1)),ut=u(()=>t("label",{for:"text",class:"text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"},"Description",-1)),kt=u(()=>t("div",{class:"flex items-start"},[t("div",{class:"flex items-start"})],-1)),gt=u(()=>t("button",{type:"submit",class:"w-full text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center buttonfill"}," Save ",-1)),bt={class:"alltasks"},pt={class:"columnleft"},ft=u(()=>t("button",{class:"todo"},"To-do",-1)),mt={class:"columnright"},vt=u(()=>t("button",{class:"done"},"Done",-1)),ht={__name:"Home",setup(a){const e=f(!1),l=f(),c=f(),k=V(),g=()=>{e.value=!e.value},x=async()=>{await E(l.value,c.value),console.log(l.value,c.value),k.addTask(l.value,c.value),l.value="",c.value=""};return k.setTask(),($,i)=>(n(),r(w,null,[t("div",nt,[e.value?p("",!0):(n(),r("button",{key:0,class:"btn btn-blue addtask buttonfill",onClick:i[0]||(i[0]=o=>g())},"Add a new task \u{1F60A} "))]),e.value?(n(),r("div",it,[t("div",rt,[t("form",{onSubmit:i[4]||(i[4]=B(o=>x(),["prevent"])),class:"space-y-6",action:"#"},[dt,t("div",null,[ct,m(t("input",{type:"text",name:"titletask",id:"titletask","onUpdate:modelValue":i[1]||(i[1]=o=>l.value=o),class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white limpiarinput",placeholder:"Write the title",required:""},null,512),[[v,l.value]])]),t("div",null,[ut,m(t("input",{type:"text",name:"descriptiontask",id:"descriptiontask","onUpdate:modelValue":i[2]||(i[2]=o=>c.value=o),placeholder:"Description of the project",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white",required:""},null,512),[[v,c.value]])]),kt,gt,t("button",{type:"submit",onClick:i[3]||(i[3]=o=>g()),class:"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 buttonfill"}," Cancell ")],32)])])):p("",!0),t("div",bt,[t("div",pt,[ft,(n(!0),r(w,null,T(C(k).tasks,o=>(n(),r("div",null,[o.isCompleted==!1?(n(),S(j,{key:0,task:o,class:"flex justify-center"},null,8,["task"])):p("",!0)]))),256))]),t("div",mt,[vt,(n(!0),r(w,null,T(C(k).tasks,o=>(n(),r("div",null,[o.isCompleted==!0?(n(),S(j,{key:0,task:o,class:"flex justify-center"},null,8,["task"])):p("",!0)]))),256))])])],64))}},_t=D(ht,[["__scopeId","data-v-8a01fc0b"]]);export{_t as default};