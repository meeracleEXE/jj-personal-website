import{F as s,u as i,B as l}from"../chunks/chunk-ff662f90.js";import"../chunks/chunk-683a141f.js";import"./renderer_default.page.server.extractAssets.b4d977f8.js";const o=s(void 0);function t({pageContext:e,children:n}){return i(o.Provider,{value:e,children:n})}const a="/assets/static/jjheadshot.5a800107.jpg",d="/assets/static/linkedin-icon.8d743f0f.png",h="/assets/static/github-icon.d83ddf4e.png",g="/assets/static/location-icon.3584afc6.png",p="/assets/static/mail-icon.ff3cc82c.png";function u({pageContext:e,children:n}){return i(t,{pageContext:e,children:[i(f,{url:e.urlPathname}),i("div",{style:{minWidth:"310px"}}),i("main",{children:n})]})}function f({url:e}){return i("header",{children:[i("div",{id:"profile-card",children:[i("img",{src:a,width:"100px",height:"100px",alt:"head shot of Jun Jie Wong"}),i("h1",{children:"Jun Jie Wong"}),i("h3",{children:"Aspiring Software/Web Developer"})]}),i("nav",{id:"links",children:i("ul",{children:[i("li",{children:i("img",{style:{marginBottom:0},src:g,alt:"location icon"})}),i("li",{children:i("p",{children:"Athens, GA"})}),i("li",{children:i("img",{style:{marginBottom:0},src:p,alt:"location icon"})}),i("li",{children:i("a",{id:"mail",href:"mailto:junjiewong.99@gmail.com",children:"junjiewong.99@gmail.com"})})]})}),i("hr",{id:"divider"}),i("nav",{id:"nav",children:[i("a",{href:"#about-me-section",children:"About Me"}),i("a",{href:"#academic-section",children:"Education"}),i("a",{href:"#project-section",children:"Projects"}),i("a",{href:"#exp-section",children:"Experience"})]}),i("a",{href:"/pages/assets/RESUME (CS) - Jun Jie Wong.pdf",download:"Jun Jie Wong - RESUME",id:"dl",children:"Download CV"}),i("hr",{id:"divider"}),i("h1",{id:"grid-title",children:"Technical"}),i("div",{class:"language-grid",children:[i("h2",{children:["Java ",i("div",{class:"progress five"})]}),i("h2",{children:["React ",i("div",{class:"progress five"})]}),i("h2",{children:["HTML ",i("div",{class:"progress four"})]}),i("h2",{children:["CSS ",i("div",{class:"progress four"})]}),i("h2",{children:["Javascript ",i("div",{class:"progress four"})]}),i("h2",{children:["Git ",i("div",{class:"progress four"})]})]}),i("h1",{id:"grid-title",children:"Language"}),i("div",{class:"language-grid",children:[i("h2",{children:["English ",i("div",{class:"progress five"})]}),i("h2",{children:["Mandarin ",i("div",{class:"progress four"})]}),i("h2",{children:["Malay ",i("div",{class:"progress four"})]}),i("h2",{children:["German ",i("div",{class:"progress two"})]})]}),i("div",{class:"socials",children:[i("a",{class:"button-link",target:"_blank",href:"https://www.linkedin.com/in/jw27180/",children:i("img",{src:d,alt:"linkedin logo"})}),i("a",{class:"button-link",target:"_blank",href:"https://www.github.com/meeracleEXE",children:i("img",{src:h,alt:"github logo"})})]})]})}async function b(e){const{Page:n,pageProps:c}=e;if(!n)throw new Error("Client-side render() hook expects pageContext.Page to be defined");const r=document.getElementById("app");if(!r)throw new Error("DOM element #app not found");l(i(u,{pageContext:e,children:i(n,{...c})}),r)}export{b as render};
