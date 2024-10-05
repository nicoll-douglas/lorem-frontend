import{A as l,j as e,y as d,z as W,t as z,v as B,af as O,K as Q,r as N,ag as K,o as G,ah as S,F as T,T as C,N as J,a4 as P,Q as U,aa as Y,O as Z,a2 as v,a5 as X,a3 as w,B as k,R as ee,ai as te}from"./index-Dxo2bz0P.js";import{B as se,f as ae,u as ne,T as re}from"./useProtectedSubmission-DIboHLpf.js";import{F as oe}from"./FormModal-BhfQyK4S.js";import{u as ie}from"./index.esm-DLJeC7qE.js";import{u as le}from"./useSubmitHandlers-C8_vVDZp.js";import{u as ce}from"./useBoardsList-B-Rakyx6.js";import{u as de}from"./chunk-7JBTTEVG-B0CYi711.js";var M=l(function(s,a){const{children:n,placeholder:r,className:i,...o}=s;return e.jsxs(d.select,{...o,ref:a,className:W("chakra-select",i),children:[r&&e.jsx("option",{value:"",children:r}),n]})});M.displayName="SelectField";function ue(t,s){const a={},n={};for(const[r,i]of Object.entries(t))s.includes(r)?a[r]=i:n[r]=i;return[a,n]}var E=l((t,s)=>{var a;const n=z("Select",t),{rootProps:r,placeholder:i,icon:o,color:c,height:f,h:g,minH:x,minHeight:p,iconColor:u,iconSize:h,...y}=B(t),[j,b]=ue(y,K),I=O(b),H={width:"100%",height:"fit-content",position:"relative",color:c},R={paddingEnd:"2rem",...n.field,_focus:{zIndex:"unset",...(a=n.field)==null?void 0:a._focus}};return e.jsxs(d.div,{className:"chakra-select__wrapper",__css:H,...j,...r,children:[e.jsx(M,{ref:s,height:g??f,minH:x??p,placeholder:i,...I,__css:R,children:t.children}),e.jsx(q,{"data-disabled":Q(I.disabled),...(u||c)&&{color:u||c},__css:n.icon,...h&&{fontSize:h},children:o})]})});E.displayName="Select";var he=t=>e.jsx("svg",{viewBox:"0 0 24 24",...t,children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})}),me=d("div",{baseStyle:{position:"absolute",display:"inline-flex",alignItems:"center",justifyContent:"center",pointerEvents:"none",top:"50%",transform:"translateY(-50%)"}}),q=t=>{const{children:s=e.jsx(he,{}),...a}=t,n=N.cloneElement(s,{role:"presentation",className:"chakra-select__icon",focusable:!1,"aria-hidden":!0,style:{width:"1em",height:"1em",color:"currentColor"}});return e.jsx(me,{...a,className:"chakra-select__icon-wrapper",children:N.isValidElement(s)?n:null})};q.displayName="SelectIcon";var[fe,$]=G({name:"TagStylesContext",errorMessage:`useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `}),V=l((t,s)=>{const a=z("Tag",t),n=B(t),r={display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%",...a.container};return e.jsx(fe,{value:a,children:e.jsx(d.span,{ref:s,...n,__css:r})})});V.displayName="Tag";var ge=l((t,s)=>{const a=$();return e.jsx(d.span,{ref:s,noOfLines:1,...t,__css:a.label})});ge.displayName="TagLabel";var xe=l((t,s)=>e.jsx(S,{ref:s,verticalAlign:"top",marginEnd:"0.5rem",...t}));xe.displayName="TagLeftIcon";var pe=l((t,s)=>e.jsx(S,{ref:s,verticalAlign:"top",marginStart:"0.5rem",...t}));pe.displayName="TagRightIcon";var D=t=>e.jsx(S,{verticalAlign:"inherit",viewBox:"0 0 512 512",...t,children:e.jsx("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})});D.displayName="TagCloseIcon";var ye=l((t,s)=>{const{isDisabled:a,children:n,...r}=t,o={display:"flex",alignItems:"center",justifyContent:"center",outline:"0",...$().closeButton};return e.jsx(d.button,{ref:s,"aria-label":"close",...r,type:"button",disabled:a,__css:o,children:n||e.jsx(D,{})})});ye.displayName="TagCloseButton";function _e({children:t,...s}){return e.jsx(V,{size:"sm",h:6,...s,children:t})}function Le({preText:t,linkText:s,link:a,postText:n,overlay:r,...i}){return e.jsxs(T,{gap:1,alignItems:"center",maxW:"full",children:[t&&e.jsx(_,{...i,children:t}),e.jsx(se,{overlay:r,to:a,py:0,h:"fit-content",minW:"fit-content",...i,children:s}),n&&e.jsx(_,{...i,children:n})]})}function _({children:t,...s}){return e.jsx(C,{fontSize:"md",h:"19px",display:"flex",alignItems:"center",justifyContent:"center",...s,children:t})}function Fe(t){if(!t)return;const s=new Date,a=new Date(t),n=Math.floor((s-a)/1e3);if(n<60)return`${n}sec. ago`;const r=Math.floor(n/60);if(r<60)return`${r}min. ago`;const i=Math.floor(r/60);if(i<24)return`${i}hr. ago`;const o=Math.floor(i/24);return o<=7?`${o}d. ago`:ae(t)}var L=J({d:"M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z",displayName:"AddIcon"});function F({maxLength:t,length:s,children:a}){return e.jsxs(T,{justifyContent:"space-between",alignItems:"center",children:[e.jsx(P,{flex:1,children:a}),e.jsx(C,{fontSize:"sm",mb:2,color:s>t?"red.400":"inherit",children:t-s})]})}const m={title:{required:"Title is required",maxLength:{value:50,message:"Title must be no more than 50 characters long"}},body:{required:!1,maxLength:{value:100,message:"Body must be no more than 100 characters long"}},board:{required:!0}};async function je(t){return fetch("https://lorem-backend-6ggh.onrender.com/api/threads",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}function be({closeFormModal:t,currentBoardName:s}){var p,u,h,y;const{data:a}=ce(),n=U(),r={title:"",body:""},{boardName:i}=Y();s?r.board=s:i&&(r.board=i);const o=ie({shouldUnregister:!0,defaultValues:r}),c=o.watch(),f=Z(),g=ne(()=>{f.invalidateQueries({queryKey:[`GET /api/boards/${o.getValues("board")}`]}),f.invalidateQueries({queryKey:["GET /api/me/threads"]}),t(),n({title:"Successfully posted",status:"success"})}),x=le(async()=>je(o.getValues()),g);return e.jsxs("form",{onSubmit:o.handleSubmit(x),"aria-label":"New Thead Form",children:[e.jsxs(v,{isRequired:!0,mb:6,isInvalid:o.formState.errors.board,children:[e.jsx(P,{children:"Board"}),e.jsx(E,{placeholder:"Select board",...r.board?{defaultValue:r.board}:{},...o.register("board",m.board),children:a&&e.jsx(e.Fragment,{children:a.boards.map(({name:j,_id:b})=>e.jsx("option",{value:j,children:`/${j}`},b))})})]}),e.jsxs(v,{isRequired:!0,isInvalid:o.formState.errors.title,mb:6,children:[e.jsx(F,{length:((p=c.title)==null?void 0:p.length)??0,maxLength:m.title.maxLength.value,children:"Title"}),e.jsx(X,{spellCheck:!1,placeholder:"What's on your mind?",...o.register("title",m.title)}),e.jsx(w,{children:(u=o.formState.errors.body)==null?void 0:u.message})]}),e.jsxs(v,{isInvalid:o.formState.errors.body,mb:6,children:[e.jsx(F,{length:((h=c.body)==null?void 0:h.length)??0,maxLength:m.body.maxLength.value,children:"Body"}),e.jsx(re,{resize:"none",placeholder:"Write something interesting!",rows:6,spellCheck:!1,...o.register("body",m.body)}),e.jsx(w,{children:(y=o.formState.errors.body)==null?void 0:y.message})]}),e.jsx(k,{w:"full",type:"submit",isLoading:o.formState.isSubmitting,children:"Post"})]})}function Ae({btnStyle:t,currentBoardName:s,...a}){const{isOpen:n,onClose:r,onOpen:i}=de();return t==="icon"?e.jsxs(e.Fragment,{children:[e.jsx(ee,{icon:e.jsx(L,{}),variant:"ghost",size:"sm",onClick:i,"aria-label":"New Thread",...a}),e.jsx(A,{currentBoardName:s,onClose:r,isOpen:n})]}):e.jsxs(e.Fragment,{children:[e.jsx(k,{variant:"ghost",size:"sm",leftIcon:e.jsx(L,{}),onClick:i,...a,children:"New Thread"}),e.jsx(A,{currentBoardName:s,onClose:r,isOpen:n})]})}function A({isOpen:t,onClose:s,currentBoardName:a}){return e.jsx(oe,{isOpen:t,onClose:s,heading:"New Thread",size:"lg",children:t&&e.jsx(te,{children:e.jsx(be,{closeFormModal:s,currentBoardName:a})})})}function ze({preText:t,children:s,postText:a,size:n="md"}){return e.jsxs(T,{gap:1,alignItems:"center",fontSize:n,children:[t,e.jsx(C,{fontStyle:"italic",color:"gray.500",fontSize:n,children:s}),a]})}export{L as A,Le as C,ze as D,F as L,Ae as N,_e as T,V as a,Fe as t};