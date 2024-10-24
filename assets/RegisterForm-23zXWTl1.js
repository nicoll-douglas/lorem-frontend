import{t as p,r as f,j as s,G as o,K as g,J as h,B as b}from"./index-BGfUVu-S.js";import{u as y}from"./index.esm-QuqdPL-o.js";import{u as R}from"./useSubmitHandlers-Pj0oRakZ.js";import{h as u}from"./helperText-BjkVZXYi.js";async function E(r){return fetch("https://lorem-backend-6ggh.onrender.com/api/auth/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r.getValues())})}function w(r,e){const{toast:i,...t}=p(),c=async()=>E(r),d=f.useMemo(()=>({400:async a=>{const{feedback:n}=await a.json();n.forEach(({subject:m,message:l})=>r.setError(m,{message:l}))},409:async a=>{const{feedback:n}=await a.json();n.forEach(({subject:m,message:l})=>r.setError(m,{message:l}))},429:()=>t.tooMany15(),500:()=>t.serverError(),200:()=>{i({status:"success",title:"Account Created",description:"Please check your email and click the link to verify your account."}),e&&e()}}),[]);return R(c,d)}function I({onClose:r}){const e=y({shouldUnregister:!0}),i=w(e,r);return s.jsxs("form",{onSubmit:e.handleSubmit(i),"aria-label":"Registration Form",children:[s.jsx(o,{formRef:e,registerKey:"email",placeholder:"Enter email",label:"Email",helperText:"We'll use your email to help you sign up",helpersAsList:!1,inputTestId:"RegisterForm-email",errorTestId:"RegisterForm-email-error",...e.register("email",{required:"Email is required"})}),s.jsx(o,{formRef:e,registerKey:"confirmEmail",placeholder:"Re-enter email",inputTestId:"RegisterForm-confirmEmail",errorTestId:"RegisterForm-confirmEmail-error",label:"Confirm email",...e.register("confirmEmail",{required:"Please confirm your email",validate:t=>t===e.getValues("email")||"Emails do not match"})}),s.jsx(o,{formRef:e,registerKey:"username",placeholder:"Enter username",inputTestId:"RegisterForm-username",errorTestId:"RegisterForm-username-error",label:"Username",helperText:u.newUn,...e.register("username",g)}),s.jsx(o,{formRef:e,registerKey:"password",placeholder:"Enter password",label:"Password",inputTestId:"RegisterForm-password",errorTestId:"RegisterForm-password-error",helperText:u.newPwd,password:!0,...e.register("password",h)}),s.jsx(b,{type:"submit","data-cy":"RegisterForm-submit",w:"full",isLoading:e.formState.isSubmitting,children:"Submit"})]})}export{I as R};