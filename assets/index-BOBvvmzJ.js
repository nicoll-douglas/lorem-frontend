import{r as c,a9 as p,j as a,F as n,b as i,V as x,I as h,T as f,a7 as j,aa as u,ab as g}from"./index-4ulQWezs.js";import{u as b,C as v,c as B,T as C}from"./ThreadPreview-DmOZE61v.js";import{S as w}from"./Spinner-ZnyjS838.js";import{C as d,a as S,b as T}from"./chunk-YQO7BFFX-Do2ymHFM.js";import{S as y}from"./chunk-7254PCTD-CCpdpq8O.js";import{S as D}from"./chunk-BL2ZZSHG-BD5m8KD1.js";import{D as I}from"./chunk-W7WUSNWJ-BBRS0i-z.js";import{B as V}from"./BoardInfo-D6Zw4UCp.js";import"./index-CWsiLGWi.js";import"./DeletedLabel-DRCkYGds.js";import"./useProtectedSubmission-ByvYB6ll.js";import"./FormModal-CSWPt1cU.js";import"./chunk-4FCEGNGT-BmvcryFd.js";import"./useSubmitHandlers-DjEugLkN.js";import"./chunk-OFOVX77R-CxszOX9N.js";import"./index.esm-p7AaXQnn.js";import"./useBoardsList-B5Jc4dmX.js";import"./chunk-7JBTTEVG-bqMuTkud.js";import"./chunk-7YYN6TNS-q5mX75mi.js";import"./chunk-RAWN7VJ3-XVnb-wSQ.js";import"./chunk-RKXMPHPI-DFxT7yJX.js";import"./StackData-D77Xwgwu.js";function m(){return c.useContext(p)}function F(){const{data:r,isLoading:s}=m(),{compactView:t}=b();return a.jsx(d,{variant:{base:"unstyled",md:"outline"},flex:1,size:"sm",as:"section","aria-label":"Threads",children:s?a.jsx(w,{p:4}):a.jsxs(y,{in:!!r,children:[a.jsx(S,{children:a.jsxs(n,{alignItems:"center",gap:2,children:[a.jsx(i,{size:"md",children:"Threads"}),a.jsx(D,{}),a.jsx(v,{})]})}),a.jsx(I,{my:{base:4,md:0}}),a.jsx(T,{children:r.board.threads.length===0?a.jsxs(x,{gap:0,textAlign:"center",children:[a.jsx(h,{src:B,width:230,height:230}),a.jsx(i,{size:"md",children:"Nothing to show"}),a.jsx(f,{mt:1,children:"This board has no threads, be the first to create one!"})]}):a.jsx(j,{gap:t?2:3,display:"flex",flexDir:"column",listStyleType:"none",mx:0,children:r.board.threads.sort((e,l)=>new Date(l.createdAt).valueOf()-new Date(e.createdAt).valueOf()).map(e=>a.jsx(C,{thread:e,isInProfile:!1},e._id))})})]})})}function o({variant:r}){const{data:s,isLoading:t}=m();return a.jsx(V,{variant:r,data:s,isLoading:t})}function Z(){const{boardName:r}=u();return a.jsxs(g,{boardName:r,children:[a.jsxs(n,{flexDir:"column",gap:4,flex:1,as:d,variant:"unstyled",children:[a.jsx(o,{variant:"base"}),a.jsx(F,{})]}),a.jsx(o,{variant:"xl"})]})}export{Z as default};