import{u as e,g as r}from"../chunks/chunk-ff662f90.js";import{h as s}from"../chunks/chunk-683a141f.js";function c(){return e(r,{children:e("div",{class:"text-box",children:[e("p",{children:["I am a driven aspiring Software and Web Developer! I am currently studying at the University of Georgia, Athens and I am graduating December 2023. I have taken an interest in creating websites and software solutions that are not only functional and efficient, but also pleasing to the eye and attention-catching. The languages and tools I use most often are Java, React, and GitHub. Take a look at my ",e("a",{href:"#project-section",children:"projects"}),"!"]}),e("p",{children:["My strongest trait is adaptability, this is due to the vast array of cultural ",e("a",{href:"#exp-section",children:"experiences"})," I have as a Malaysian International Student in the US and having done a year of cultural exchange in Germany. Not only culturally, but professionally, I have also grown to be able to lead teams of different peers to achieve project requirements with excellent results. "]}),e("p",{children:"I am also extremely meticulous and passionate about my work. This can be seen in my excellent academic achievements as well as the overall extremely positive feedback I have been given from my tutees from my 1 year+ experience as a Computer Science Peer Tutor."})]})})}function o({proj:t,project:i,setProject:n}){return i!==t.id?e("div",{class:"card-wrapper",onClick:()=>n(t.id),children:e("h2",{children:[e("div",{class:"arrow up"})," ",t.title," "]})}):e("div",{class:"card-wrapper expanded",onClick:()=>n(-1),children:[e("h2",{children:[e("div",{class:"arrow down"})," ",t.title]}),e("div",{class:"card-content",children:[e("h3",{children:t.description}),e("p",{children:["Tools: ",t.tools]}),e("p",{children:["Role: ",t.role]}),e("p",{children:["Functionality: ",t.functionality]}),e("div",{class:"video-container",children:t.videoList.map(a=>e("video",{width:"48%",src:a,autoplay:!0,muted:!0,loop:!0,controls:!0}))})]})]})}const d="/jj-personal-website/assets/static/c8_cinema_homepage_checkout_showcase.d3a4bd16.webm",l="/jj-personal-website/assets/static/c8_cinema_admin.f68813ee.webm",h="/jj-personal-website/assets/static/playwiser_demo.16d82b80.webm",p="/jj-personal-website/assets/static/rideUGA_demo.238f2304.webm";function u(){const[t,i]=s(0);return e("section",{class:"project-grid",children:[{id:0,title:"C8 Cinemas: Cinema E-Booking Website",description:"Cinema E-Booking system with React frontend, Spring Boot middleware and backend",tools:"React, React Boostrap, Spring Boot, JSON Web Token (JWT), Agile, GitHub",role:"Team Leader, 5 Person team, mainly Front End and Integration",functionality:"Customer and admin accounts, Password Reset, CRUD Movies and Showtimes, Filtering and Searching, Cinema Checkout Process, Promotional Emails",videoList:[d,l]},{id:1,title:"Playwiser: Game Review Website",description:"Simple CRUD App for adding and displaying game reviews with React frontend, Node and Express Backend, with MongoDB database",tools:"React, Node, Express, JSON Web Token (JWT), BCryptJS Hashing, GitHub",role:"Team Leader, 3 Person team, Full Stack Development",functionality:"Admin accounts, CRUD operations, Searching and Filtering",videoList:[h]},{id:2,title:"RideUGA: Rideshare App",description:'Rideshare app with "free" rides made for Android devices',tools:"Android Studio, Java, Agile, Google Map API, GitHub",role:"2 Person team, Full Stack Development",functionality:"Admin accounts, CRUD operations, Searching and Filtering",videoList:[p]}].map(a=>e(o,{proj:a,project:t,setProject:i}))})}function m({exp:t}){return e("div",{class:"square-card-wrapper",children:[e("h1",{children:t.time}),e("div",{id:"square-card",children:e("div",{children:[e("img",{height:"100px",src:t.pic,alt:"picture experiences"}),e("h2",{children:t.title}),e("h3",{children:t.location})]})})]})}const v="/jj-personal-website/assets/static/travel-icon.1d3fcd6d.png",q="data:image/png;base64,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",f="/jj-personal-website/assets/static/globe_icon.5b13af3e.png",V="/jj-personal-website/assets/static/note-icon.70a7c0f8.png";function A(){return e("div",{class:"exp-grid",children:[{title:"Peer Tutor",location:"University of Georgia, Athens",time:"Sep 2022 - Dec 2023",pic:V},{title:"Teaching Assistant",location:"University of Georgia, Athens",time:"Jan 2023 - Apr 2023",pic:q},{title:"Vice President",location:"International Student Events",time:"Jan 2020 - Dec 2020",pic:f},{title:"Exchange Student",location:"AFS Malaysia to Germany",time:"Mar 2017 - Jan 2018",pic:v}].map(i=>e(m,{exp:i}))})}function g(){return e("div",{class:"edu-grid",children:[{name:"University of Georgia, Athens, GA",degree:"B.S. in Computer Science",date:"December 2023",awards:"Dean's list (Fall 2021, Fall 2022), Presidential Scholar (Spring 2023)",scholarship:"OGE International Student Tuition Award (2022-2024)",GPA:"3.72"},{name:"Green River College, Auburn, WA",degree:"Associate in Computer Science, Physics, Engineering",date:"June 2021",GPA:"3.89 (Honors)"}].map(i=>e(r,{children:[e("h2",{id:"date",children:i.date}),e("div",{id:"square-card-edu",children:[e("h1",{children:i.name}),e("h2",{children:i.degree}),i.awards!==void 0&&e("h2",{children:i.awards}),i.scholarship!==void 0&&e("h2",{children:i.scholarship}),e("h2",{children:["GPA: ",i.GPA]})]})]}))})}function b(){return e("div",{class:"page-content",children:[e("section",{id:"about-me-section",children:[e("h1",{children:"About Me"}),e(c,{})]}),e("section",{id:"academic-section",children:[e("h1",{children:"Education"}),e(g,{})]}),e("section",{id:"project-section",children:[e("h1",{children:"Projects"}),e(u,{})]}),e("section",{id:"exp-section",children:[e("h1",{children:"Experience"}),e(A,{})]})]})}export{b as Page};