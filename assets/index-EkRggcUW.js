import{r as u,c as $,b as F,m as pe,Q as be,h as v,e as je,o as ye,j as e,i as C,k as w,w as Z,F as j,x as A,p as Te,R as O,s as H,I as V,B as g,U as y,T,W as ge,V as K,X as ve,Y as Ce,L as we,Z as Se,_ as De,$ as ke,a0 as Pe}from"./index-BGfUVu-S.js";import{C as Ie,c as _e,u as S,T as Be}from"./ThreadPreview-BHOj2fxc.js";import{R as Ee,N as Me}from"./NewBoardBtn-BMMY3pKz.js";import{N as ze,D as R,C as I,T as Le,t as Re}from"./DeletedLabel-DeHHynnp.js";import{S as q,n as N}from"./Spinner-ChtAEK3J.js";import{S as U}from"./chunk-7254PCTD-C1bqhFCI.js";import{u as Fe}from"./useProfile-B0352x69.js";import{D as ee}from"./chunk-7YYN6TNS-C-3WFcXs.js";import{u as Q,L as se,a as Ne}from"./useProtectedSubmission-CNvaje-C.js";import{u as W}from"./useSubmitHandlers-Pj0oRakZ.js";import{u as G}from"./chunk-7JBTTEVG-DY5WfFj4.js";import{A as te,a as ne,M as ae,H as re}from"./chunk-RAWN7VJ3-CwTq8yMi.js";import{M as ie,c as oe,d as le}from"./chunk-4FCEGNGT-CWNR6xLH.js";import{M as ce}from"./chunk-OFOVX77R-UToEHXKx.js";import{D as _}from"./chunk-W7WUSNWJ-DKxHapzC.js";import{C as $e}from"./chunk-RKXMPHPI-B1ltDBpa.js";import{C as Y,a as de,b as J}from"./chunk-YQO7BFFX-CUymwyLU.js";import{c as Ae}from"./chatting-2-DAUiPAEq.js";import{F as Oe}from"./FormModal-1-jAWOym.js";import{u as He}from"./index.esm-QuqdPL-o.js";import{b as Ve}from"./board-Pi6hTLGh.js";import{u as Ke}from"./chunk-AXLEE3EK-C8EZfE9W.js";import{c as qe}from"./chunk-OCNORRQU-pJs5jjH1.js";import{u as Ue}from"./index-BRXxiQAH.js";import{l as Qe}from"./index-DLVTVQVU.js";import"./index-jI1LxAkv.js";import"./helperText-BjkVZXYi.js";import"./useMaxLength-CGxBN7rZ.js";import"./useBoardsList-CtMwDoVA.js";var[We,Ge,Ye,Je]=qe();function Xe(s){var t;const{defaultIndex:n,onChange:r,index:a,isManual:o,isLazy:l,lazyBehavior:i="unmount",orientation:c="horizontal",direction:d="ltr",...f}=s,[h,p]=u.useState(n??0),[b,D]=Ue({defaultValue:n??0,value:a,onChange:r});u.useEffect(()=>{a!=null&&p(a)},[a]);const k=Ye(),L=u.useId();return{id:`tabs-${(t=s.id)!=null?t:L}`,selectedIndex:b,focusedIndex:h,setSelectedIndex:D,setFocusedIndex:p,isManual:o,isLazy:l,lazyBehavior:i,orientation:c,descendants:k,direction:d,htmlProps:f}}var[Ze,M]=$({name:"TabsContext",errorMessage:"useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"});function es(s){const{focusedIndex:t,orientation:n,direction:r}=M(),a=Ge(),o=u.useCallback(l=>{const i=()=>{var x;const m=a.nextEnabled(t);m&&((x=m.node)==null||x.focus())},c=()=>{var x;const m=a.prevEnabled(t);m&&((x=m.node)==null||x.focus())},d=()=>{var x;const m=a.firstEnabled();m&&((x=m.node)==null||x.focus())},f=()=>{var x;const m=a.lastEnabled();m&&((x=m.node)==null||x.focus())},h=n==="horizontal",p=n==="vertical",b=l.key,D=r==="ltr"?"ArrowLeft":"ArrowRight",k=r==="ltr"?"ArrowRight":"ArrowLeft",P={[D]:()=>h&&c(),[k]:()=>h&&i(),ArrowDown:()=>p&&i(),ArrowUp:()=>p&&c(),Home:d,End:f}[b];P&&(l.preventDefault(),P(l))},[a,t,n,r]);return{...s,role:"tablist","aria-orientation":n,onKeyDown:F(s.onKeyDown,o)}}function ss(s){const{isDisabled:t=!1,isFocusable:n=!1,...r}=s,{setSelectedIndex:a,isManual:o,id:l,setFocusedIndex:i,selectedIndex:c}=M(),{index:d,register:f}=Je({disabled:t&&!n}),h=d===c,p=()=>{a(d)},b=()=>{i(d),!o&&!(t&&n)&&a(d)};return{...Ke({...r,ref:pe(f,s.ref),isDisabled:t,isFocusable:n,onClick:F(s.onClick,p)}),id:ue(l,d),role:"tab",tabIndex:h?0:-1,type:"button","aria-selected":h,"aria-controls":xe(l,d),onFocus:t?void 0:F(s.onFocus,b)}}var[ts,ns]=$({});function as(s){const t=M(),{id:n,selectedIndex:r}=t,o=be(s.children).map((l,i)=>u.createElement(ts,{key:i,value:{isSelected:i===r,id:xe(n,i),tabId:ue(n,i),selectedIndex:r}},l));return{...s,children:o}}function rs(s){const{children:t,...n}=s,{isLazy:r,lazyBehavior:a}=M(),{isSelected:o,id:l,tabId:i}=ns(),c=u.useRef(!1);o&&(c.current=!0);const d=Qe({wasSelected:c.current,isSelected:o,enabled:r,mode:a});return{tabIndex:0,...n,children:d?t:null,role:"tabpanel","aria-labelledby":i,hidden:!o,id:l}}function ue(s,t){return`${s}--tab-${t}`}function xe(s,t){return`${s}--tabpanel-${t}`}var[is,z]=$({name:"TabsStylesContext",errorMessage:`useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `}),he=v(function(t,n){const r=je("Tabs",t),{children:a,className:o,...l}=ye(t),{htmlProps:i,descendants:c,...d}=Xe(l),f=u.useMemo(()=>d,[d]),{isFitted:h,...p}=i,b={position:"relative",...r.root};return e.jsx(We,{value:c,children:e.jsx(Ze,{value:f,children:e.jsx(is,{value:r,children:e.jsx(C.div,{className:w("chakra-tabs",o),ref:n,...p,__css:b,children:a})})})})});he.displayName="Tabs";var me=v(function(t,n){const r=es({...t,ref:n}),o={display:"flex",...z().tablist};return e.jsx(C.div,{...r,className:w("chakra-tabs__tablist",t.className),__css:o})});me.displayName="TabList";var B=v(function(t,n){const r=rs({...t,ref:n}),a=z();return e.jsx(C.div,{outline:"0",...r,className:w("chakra-tabs__tab-panel",t.className),__css:a.tabpanel})});B.displayName="TabPanel";var fe=v(function(t,n){const r=as(t),a=z();return e.jsx(C.div,{...r,width:"100%",ref:n,className:w("chakra-tabs__tab-panels",t.className),__css:a.tabpanels})});fe.displayName="TabPanels";var E=v(function(t,n){const r=z(),a=ss({...t,ref:n}),o={outline:"0",display:"flex",alignItems:"center",justifyContent:"center",...r.tab};return e.jsx(C.button,{...a,className:w("chakra-tabs__tab",t.className),__css:o})});E.displayName="Tab";function os({heading:s="Nothing to show",children:t,imageUrl:n,...r}){return e.jsxs(Z,{flexDir:{base:"column",lg:"row"},gap:{base:0,lg:8},mt:{base:8,lg:0},textAlign:{base:"center",lg:"left"},...r,children:[e.jsxs(j,{flexDir:"column",gap:2,children:[e.jsx(A,{size:"xl",children:s}),t]}),e.jsx("img",{src:n,width:250,height:250})]})}var ls=Te({displayName:"EditIcon",path:e.jsxs("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[e.jsx("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),e.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})});async function cs(s){return fetch(`https://lorem-backend-6ggh.onrender.com/api/boards/${s}`,{method:"DELETE",credentials:"include"})}function ds({board:s}){const t=O(),n=u.useRef(),r=H(),{isOpen:a,onOpen:o,onClose:l}=G(),i=Q(()=>{t.invalidateQueries({queryKey:["GET /api/me/boards"]}),t.invalidateQueries({queryKey:["GET /api/boards"]}),l(),r({status:"success",title:"Successfully deleted board"})}),c=W(async()=>cs(s._id),i);return e.jsxs(e.Fragment,{children:[e.jsx(V,{icon:e.jsx(ee,{}),colorScheme:"red",variant:"ghost",size:"xs",onClick:o,zIndex:80,"aria-label":"Delete board",isDisabled:s.name==="DEMO_BOARD"}),e.jsxs(te,{isOpen:a,onClose:l,size:"sm",children:[e.jsx(ie,{}),e.jsxs(ne,{mx:4,children:[e.jsx(oe,{children:`Delete /${s.name}?`}),e.jsx(le,{}),e.jsx(ce,{children:"Are you sure you want to delete this board? This action cannot be undone."}),e.jsx(ae,{children:e.jsxs(re,{gap:3,children:[e.jsx(g,{ref:n,onClick:l,children:"Cancel"}),e.jsx(g,{colorScheme:"red",onClick:c,children:"Delete"})]})})]})]})]})}async function us(s,t){return fetch(`https://lorem-backend-6ggh.onrender.com/api/boards/${s}`,{method:"PATCH",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}function xs({board:s,...t}){var h;const n=u.useMemo(()=>({rules:s.rules||""}),[s]),{isOpen:r,onClose:a,onOpen:o}=G(),l=O(),i=H(),c=He({shouldUnregister:!0,defaultValues:n}),d=Q(()=>{l.invalidateQueries({queryKey:["GET /api/me/boards"]}),l.invalidateQueries({queryKey:[`GET /api/boards/${s.name}`]}),i({status:"success",title:"Successfully updated board"}),a()}),f=W(async()=>us(s._id,c.getValues()),d);return u.useEffect(()=>{c.reset(n)},[s]),e.jsxs(e.Fragment,{children:[e.jsx(V,{variant:"ghost",size:"xs",icon:e.jsx(ls,{}),onClick:o,"aria-label":"Edit board",isDisabled:s.name==="DEMO_BOARD",...t}),e.jsx(Oe,{heading:`Edit /${s.name}`,isOpen:r,onClose:a,children:e.jsxs("form",{onSubmit:c.handleSubmit(f),"aria-label":"Edit Board Form",children:[e.jsx(Ee,{initialLength:((h=s.rules)==null?void 0:h.length)??0,form:c}),e.jsx(g,{w:"full",type:"submit",isLoading:c.formState.isSubmitting,children:"Save"})]})})]})}function hs(){const[s]=y();return e.jsxs(j,{gap:2,alignItems:"center",flexWrap:"wrap",justifyContent:"space-between",children:[e.jsx(A,{size:"md",children:"Activity"}),e.jsxs(j,{gap:2,alignItems:"center",children:[s&&e.jsxs(e.Fragment,{children:[e.jsx(ze,{}),e.jsx(Me,{})]}),e.jsx(Ie,{})]})]})}function X({imageUrl:s=_e,text:t}){return e.jsx(Z,{w:"full",children:e.jsx(os,{imageUrl:s,children:e.jsx(T,{children:t})})})}function ms(){const{data:s,isLoading:t}=u.useContext(ge),[n]=y(),{compactView:r}=S();return t?e.jsx(q,{flex:1}):e.jsx(U,{in:!!s,offsetY:10,children:e.jsx(K,{gap:r?2:3,flex:1,as:"ul",listStyleType:"none",children:s.threads.length===0?e.jsx(X,{text:n?"Create a thread to get started!":"This user doesn't have any threads."}):s.threads.map(a=>e.jsx(Be,{thread:a},a._id))})})}async function fs(s){return fetch(`https://lorem-backend-6ggh.onrender.com/api/replies/${s}`,{method:"DELETE",credentials:"include"})}function ps({replyId:s,threadId:t}){const n=O(),r=u.useRef(),a=H(),{isOpen:o,onOpen:l,onClose:i}=G(),c=Q(()=>{n.invalidateQueries({queryKey:["GET /api/me/replies"]}),n.invalidateQueries({queryKey:[`GET /api/threads/${t}`]}),i(),a({status:"success",title:"Successfully deleted reply"})}),d=W(async()=>fs(s),c);return e.jsxs(e.Fragment,{children:[e.jsx(V,{icon:e.jsx(ee,{}),colorScheme:"red",variant:"ghost",size:"xs",onClick:l,zIndex:80,"aria-label":"Delete reply"}),e.jsxs(te,{isOpen:o,onClose:i,size:"sm",children:[e.jsx(ie,{}),e.jsxs(ne,{mx:4,children:[e.jsx(oe,{children:"Delete Reply?"}),e.jsx(le,{}),e.jsx(ce,{children:"Are you sure you want to delete this reply? This action cannot be undone."}),e.jsx(ae,{children:e.jsxs(re,{gap:3,children:[e.jsx(g,{ref:r,onClick:i,children:"Cancel"}),e.jsx(g,{colorScheme:"red",onClick:d,children:"Delete"})]})})]})]})]})}function bs({reply:s}){var i;const t=s.parent||s.thread,{compactView:n}=S(),{data:r}=Fe(),[a]=y(),o=s.thread.deleted,l=s.thread.board.deleted;return e.jsx(se,{w:"full",children:e.jsxs(Y,{size:"sm",variant:"filled",children:[e.jsx(de,{children:e.jsxs(j,{w:"full",alignItems:"start",gap:4,children:[e.jsxs(ve,{w:"calc(100% - 210px)",flex:1,children:[e.jsx($e,{in:!n,animateOpacity:!0,children:l?e.jsx(R,{preText:"On",children:"deleted board"}):e.jsx(I,{preText:"On",linkText:`/${s.thread.board.name}`,link:`/boards/${s.thread.board.name}`,fontSize:"md",pb:"1px"})}),o?e.jsx(R,{preText:"In",children:"deleted thread"}):e.jsx(I,{preText:"In",linkText:s.thread.title,link:`/threads/${s.thread._id}`,fontSize:"md",pb:"1px",overlay:!0})]}),e.jsxs(j,{gap:2,alignItems:"start",minW:"fit-content",children:[e.jsx(Le,{children:Re(s.createdAt)}),a&&e.jsx(ps,{replyId:s._id,threadId:s.thread._id})]})]})}),e.jsx(_,{}),e.jsxs(J,{children:[((i=s.parent)==null?void 0:i.deleted)&&e.jsxs(e.Fragment,{children:[e.jsx(T,{fontStyle:"italic",color:"gray.500",children:"Reply was deleted"}),e.jsx(_,{my:n?2:3})]}),!t.deleted&&e.jsxs(e.Fragment,{children:[t.author.deleted?e.jsx(R,{postText:"said:",children:"deleted user"}):e.jsx(I,{postText:"said:",linkText:`${t.author.username}`,link:`/users/${t.author.username}`,fontSize:"md"}),e.jsx(T,{...n?N:{},whiteSpace:n?"nowrap":"pre-wrap",lineHeight:1.25,children:t.body||t.title}),e.jsx(_,{my:n?2:3})]}),a?e.jsx(T,{size:"sm",h:"21px",children:"You replied:"}):e.jsx(I,{postText:"replied:",linkText:r.profile.username,link:`/users/${r.profile.username}`,fontSize:"md"}),e.jsx(T,{...n?N:{},whiteSpace:n?"nowrap":"pre-wrap",lineHeight:1.25,children:s.body})]})]})})}function js(){const{data:s,isLoading:t}=u.useContext(Ce),[n]=y(),{compactView:r}=S();return t?e.jsx(q,{p:4}):e.jsx(U,{in:!!s,offsetY:10,children:e.jsx(K,{gap:r?2:3,flex:1,as:"ul",listStyleType:"none",children:s.replies.length===0?e.jsx(X,{text:n?"Your replies to other users will show up here!":"This user doesnt't have any replies.",imageUrl:Ae}):s.replies.map(a=>e.jsx(bs,{reply:a},a._id))})})}function ys({board:s}){const{compactView:t}=S(),[n]=y();return e.jsx(se,{w:"full",children:e.jsx(Y,{size:"sm",w:"full",variant:"filled",children:e.jsx(J,{py:t?2:3,children:e.jsxs(j,{justifyContent:"space-between",alignItems:"center",gap:4,children:[e.jsx(Ne,{as:we,to:`/boards/${s.name}`,maxW:{base:"calc(100% - 40px)",sm:"calc(100% - 165px)"},children:e.jsx(A,{size:{base:"sm",md:"md"},...N,children:`/${s.name}`})}),n&&e.jsxs(j,{gap:2,minW:"fit-content",children:[e.jsx(xs,{board:s}),e.jsx(ds,{board:s})]})]})})})})}function Ts(){const{data:s,isLoading:t}=u.useContext(Se),[n]=y(),{compactView:r}=S();return t?e.jsx(q,{p:4}):e.jsx(U,{in:!!s,offsetY:10,children:e.jsx(K,{gap:r?1:2,flex:1,as:"ul",listStyleType:"none",children:s.boards.length===0?e.jsx(X,{text:n?"Any boards you administrate will show up here!":"This user doesn't administrate any boards.",imageUrl:Ve}):s.boards.map(a=>e.jsx(ys,{board:a},a._id))})})}function gs(){return e.jsxs(Y,{variant:{base:"unstyled",md:"outline"},flex:1,size:"sm",minH:{md:"calc(100vh - 88px)"},maxW:"full",as:"section","aria-label":"Activity",children:[e.jsx(de,{children:e.jsx(hs,{})}),e.jsx(_,{my:{base:4,md:0}}),e.jsx(J,{children:e.jsxs(he,{isLazy:!0,display:"flex",flexDir:"column",h:"full",children:[e.jsxs(me,{children:[e.jsx(E,{children:"Threads"}),e.jsx(E,{children:"Replies"}),e.jsx(E,{children:"Boards"})]}),e.jsxs(fe,{flex:1,display:"flex",flexDir:"column",children:[e.jsx(B,{px:{base:0,lg:4},flex:1,display:"flex",flexDir:"column",children:e.jsx(De,{children:e.jsx(ms,{})})}),e.jsx(B,{px:{base:0,lg:4},flex:1,display:"flex",flexDir:"column",children:e.jsx(ke,{children:e.jsx(js,{})})}),e.jsx(B,{px:{base:0,lg:4},flex:1,display:"flex",flexDir:"column",children:e.jsx(Pe,{children:e.jsx(Ts,{})})})]})]})})]})}function Js(){return e.jsx(gs,{})}export{Js as default};
