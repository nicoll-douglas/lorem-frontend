import{r as n,d as B,m as F}from"./index-BGfUVu-S.js";function V(){const c=n.useRef(new Map),d=c.current,t=n.useCallback((s,o,a,u)=>{c.current.set(a,{type:o,el:s,options:u}),s.addEventListener(o,a,u)},[]),i=n.useCallback((s,o,a,u)=>{s.removeEventListener(o,a,u),c.current.delete(a)},[]);return n.useEffect(()=>()=>{d.forEach((s,o)=>{i(s.el,s.type,o,s.options)})},[i,d]),{add:t,remove:i}}function g(c){const d=c.target,{tagName:t,isContentEditable:i}=d;return t!=="INPUT"&&t!=="TEXTAREA"&&i!==!0}function q(c={}){const{ref:d,isDisabled:t,isFocusable:i,clickOnEnter:s=!0,clickOnSpace:o=!0,onMouseDown:a,onMouseUp:u,onClick:y,onKeyDown:k,onKeyUp:b,tabIndex:v,onMouseOver:m,onMouseLeave:C,...O}=c,[r,K]=n.useState(!0),[p,f]=n.useState(!1),l=V(),T=e=>{e&&e.tagName!=="BUTTON"&&K(!1)},S=r?v:v||0,h=t&&!i,P=n.useCallback(e=>{if(t){e.stopPropagation(),e.preventDefault();return}e.currentTarget.focus(),y==null||y(e)},[t,y]),E=n.useCallback(e=>{p&&g(e)&&(e.preventDefault(),e.stopPropagation(),f(!1),l.remove(document,"keyup",E,!1))},[p,l]),w=n.useCallback(e=>{if(k==null||k(e),t||e.defaultPrevented||e.metaKey||!g(e.nativeEvent)||r)return;const D=s&&e.key==="Enter";o&&e.key===" "&&(e.preventDefault(),f(!0)),D&&(e.preventDefault(),e.currentTarget.click()),l.add(document,"keyup",E,!1)},[t,r,k,s,o,l,E]),I=n.useCallback(e=>{if(b==null||b(e),t||e.defaultPrevented||e.metaKey||!g(e.nativeEvent)||r)return;o&&e.key===" "&&(e.preventDefault(),f(!1),e.currentTarget.click())},[o,r,t,b]),M=n.useCallback(e=>{e.button===0&&(f(!1),l.remove(document,"mouseup",M,!1))},[l]),L=n.useCallback(e=>{if(e.button!==0)return;if(t){e.stopPropagation(),e.preventDefault();return}r||f(!0),e.currentTarget.focus({preventScroll:!0}),l.add(document,"mouseup",M,!1),a==null||a(e)},[t,r,a,l,M]),x=n.useCallback(e=>{e.button===0&&(r||f(!1),u==null||u(e))},[u,r]),N=n.useCallback(e=>{if(t){e.preventDefault();return}m==null||m(e)},[t,m]),R=n.useCallback(e=>{p&&(e.preventDefault(),f(!1)),C==null||C(e)},[p,C]),U=F(d,T);return r?{...O,ref:U,type:"button","aria-disabled":h?void 0:t,disabled:h,onClick:P,onMouseDown:a,onMouseUp:u,onKeyUp:b,onKeyDown:k,onMouseOver:m,onMouseLeave:C}:{...O,ref:U,role:"button","data-active":B(p),"aria-disabled":t?"true":void 0,tabIndex:h?void 0:S,onClick:P,onMouseDown:L,onMouseUp:x,onKeyUp:I,onKeyDown:w,onMouseOver:N,onMouseLeave:R}}export{q as u};
