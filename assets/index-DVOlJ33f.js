import{c as p,u as w,r as f,j as r,g as a,p as h,B as P,f as g}from"./index-4ulQWezs.js";import{F as b}from"./FormModal-CSWPt1cU.js";import{u as y}from"./index.esm-p7AaXQnn.js";import{u as x}from"./useSubmitHandlers-DjEugLkN.js";import{h as S}from"./helperText-BjkVZXYi.js";import"./chunk-4FCEGNGT-BmvcryFd.js";import"./chunk-7254PCTD-CCpdpq8O.js";import"./chunk-OFOVX77R-CxszOX9N.js";import"./chunk-W7WUSNWJ-BBRS0i-z.js";async function F(s,e){return fetch("https://lorem-backend-6ggh.onrender.com/api/auth/reset",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(s.getValues())})}function N(s,e){const{toast:o,...t}=p(),i=w(),n=async()=>F(s,e),d=f.useMemo(()=>({400:async m=>{const{feedback:u}=await m.json();u.forEach(({subject:c,message:l})=>s.setError(c,{message:l}))},429:()=>t.tooMany15(),500:()=>t.serverError(),200:()=>{s.reset(),o({status:"success",title:"Password Successfully Reset",description:"You will be redirected to login shortly."}),setTimeout(i,3e3,"/auth/login")},401:()=>o({status:"error",title:"Failed to Reset Password",description:"The link is either invalid or expired."})}),[]);return x(n,d)}function j({token:s}){const e=y(),o=N(e,s);return r.jsxs("form",{onSubmit:e.handleSubmit(o),"aria-label":"New Password Form",children:[r.jsx(a,{formRef:e,registerKey:"password",placeholder:"Enter password",inputTestId:"NewPwdForm-password",label:"Password",helperText:S.newPwd,type:"password",...e.register("password",h)}),r.jsx(a,{formRef:e,registerKey:"confirmPassword",inputTestId:"NewPwdForm-confirmPassword",errorTestId:"NewPwdForm-confirmPassword-error",placeholder:"Re-enter password",label:"Confirm password",type:"password",...e.register("confirmPassword",{required:"Please confirm your new password",validate:t=>t===e.getValues("password")||"Passwords do not match"})}),r.jsx(P,{type:"submit","data-cy":"NewPwdForm-submit",w:"full",isLoading:e.formState.isSubmitting,children:"Submit"})]})}function V(){const[s]=g();return r.jsx(b,{isOpen:!0,motionPreset:"none",heading:"Your New Password",children:r.jsx(j,{token:s.get("token")})})}export{V as default};