(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(7),o=t.n(s),r=(t(14),t(1)),i=t(2),c=t(4),m=t(3),u=t(5),d=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"Sobre")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resumo")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Portfolio")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Depoimentos")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contato")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"}," ",e.name,"."),l.a.createElement("h3",{style:{color:"#fff",fontFamily:"sans-serif "}}," ",e.role,".",e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),p=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:"images/afonso-telles-2.jpeg",alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"Sobre mim"),l.a.createElement("p",null,e.aboutme),l.a.createElement("p",null,e.aboutme_p2),l.a.createElement("p",null,e.aboutme_p3),l.a.createElement("p",null,e.aboutme_p4),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contato"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.website)))))))}}]),a}(n.Component),E=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Forma\xe7\xe3o"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements)))}),l.a.createElement("p",null,l.a.createElement("strong",null,"Mais informa\xe7\xf5es sobre Forma\xe7\xe3o e  Certificados no meu "),l.a.createElement("a",{href:"https://www.linkedin.com/in/afonso-ramon-de-araujo-teles-73847b18b/"},"Linkedin")))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Experi\xeancia:"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))}))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map(function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase())}),l.a.createElement("em",null,e.skillname))}))))))}}]),a}(n.Component),f=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Confira alguns de meus trabalhos."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.link,target:"_blank"},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))})))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("div",{className:"flexslider"},l.a.createElement("ul",{className:"slides"},e.testimonials&&e.testimonials.map(function(e){return l.a.createElement("li",null,l.a.createElement("blockquote",null,l.a.createElement("p",null,e.description),l.a.createElement("cite",null,e.name)))})))," ")," ")," "),"  ")}}]),a}(n.Component),v=t(8),b=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Sinta-se \xe0 vontade para entrar em contato comigo para qualquer trabalho ou sugest\xf5es"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),v.a.sendForm("service_89dfm3e","template_f6swwhs",e.target,"6uoNye3a31e-yLHJI").then(function(e){alert("Mensagem enviada com sucesso!")},function(e){alert(e.message)}),e.target.reset()}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Nome:"),l.a.createElement("input",{type:"text",className:"form-control",name:"name",id:"formGroupExampleInput",required:!0,placeholder:"Digite seu Nome"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",className:"form-control",name:"user_email",id:"exampleFormControlInput1",required:!0,placeholder:"Digite o seu E-mail"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Texto"),l.a.createElement("textarea",{className:"form-control",name:"message",id:"exampleFormControlTextarea1",rows:"3",required:!0,placeholder:"Digite a sua mensagem"})),l.a.createElement("button",{type:"submit",className:"submit"},"Enviar")))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Linked in :",l.a.createElement("a",{href:e.linkedinId}," Afonso Ramon"))))))}}]),a}(n.Component),g=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))),l.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),l.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=556282692852&text=Ol\xe1 estou entrando em contato atrav\xe9s do seu portf\xf3lio",className:"float",target:"_blank"},l.a.createElement("i",{className:"fa fa-whatsapp my-float"})))}}]),a}(n.Component),N={imagebaseurl:"",name:"Afonso Ramon",role:"Programador Front-End",linkedinId:"https://www.linkedin.com/in/afonso-ramon-de-araujo-teles-73847b18b",skypeid:"afonso1907@hotmail.com",roleDescription:" Estou sempre em busca de aprimorar meus conhecimentos t\xe9cnicos e minhas soft skills e gosto de aprender sobre novas tecnologias.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/afonso-ramon-de-araujo-teles-73847b18b/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/afonsoart",className:"fa fa-github"},{name:"instagram",url:"https://www.instagram.com/afonso.telles/",className:"fa fa-instagram"},{name:"whatsapp",url:"https://api.whatsapp.com/send?phone=556282692852&text=Ol\xe1 estou entrando em contato atrav\xe9s do seu portf\xf3lio",className:"fa fa-whatsapp"}],aboutme:"Desenvolvedor Front-End apaixonado pelo mundo da programa\xe7\xe3o e tecnologia. Com \xeanfase em desenvolvimento web, atuando principalmente na cria\xe7\xe3o de aplica\xe7\xf5es do lado cliente\u201d (client-side) de websites, landing pages, hotsites, blogs e aplica\xe7\xf5es web nas seguintes tecnologias: HTML, CSS, Bootstrap, JavaScript, React.js MYSQL, Wordpress, Duda.co. ",aboutme_p2:"Busco aprimorar meus conhecimentos de desenvolvimento front-end, trabalho em equipe, bem como de adaptabilidade e facilidade em resolver desafios e problemas. ",aboutme_p3:"Atualmente estou concentrando meus estudos em CSS, JavaScript, React.js, Ionic, Clean Code e metodologias \xe1geis.",aboutme_p4:"\u2713 Ingl\xeas avan\xe7ado (C1).",address:"Goi\xe2nia, GO, Brasil",website:"afonso1907@hotmail.com",education:[{UniversityName:"Udemy",specialization:"React Js do zero ao avan\xe7ado na pratica",MonthOfPassing:"atual",YearOfPassing:"2022",Achievements:"React o jeito moderno de desenvolver aplica\xe7\xf5es web e sistemas web, como criar aplica\xe7\xf5es completas do extremo zero e entendendo na pr\xe1tica como o React Js funciona."},{UniversityName:"Senac",specialization:"Programador Web",MonthOfPassing:"Set",YearOfPassing:"2019",Achievements:"Desenvolver aplica\xe7\xf5es web, publicar e testar aplica\xe7\xf5es web, realizar manuten\xe7\xe3o nas funcionalidades das aplica\xe7\xf5es web."}],work:[{CompanyName:"Rowan Marketing",specialization:"Programdor Junior CLT",MonthOfLeaving:"Jan",YearOfLeaving:"2022",Achievements:"Respons\xe1vel por desenvolvimento do \u201clado cliente\u201d (client-side) de websites, landing pages, hotsites, blogs e aplica\xe7\xf5es web, e criar a interface de utiliza\xe7\xe3o de um site ou aplica\xe7\xe3o web, utilizando as seguintes tecnologias: HTML5, CSS3, Javascript, Bootstrap, AngularJS, MYSQL, Wordpress, Duda.co."},{CompanyName:"Rowan Marketing",specialization:"Programador Web PJ",MonthOfLeaving:"Jan",YearOfLeaving:"2020",Achievements:"Respons\xe1vel por desenvolvimento de websites front-end e back-end, landing pages, blogs e aplica\xe7\xf5es web usando as tecnologias: PHP, Yii Framework, HTML, CSS, JavaScript, Bootstrap."}],skillsDescription:"Linguagens:",skills:[{skillname:"HTML5"},{skillname:"CSS"},{skillname:"Bootstrap"},{skillname:"Javascript"},{skillname:"Reactjs"}],portfolio:[{name:"Ze Barbearia",description:"Web Site",imgurl:"images/portfolio/ze-barber-shop.png",link:"http://zebarbearia.epizy.com"},{name:"Gerenciamento de Tarefas",description:"A aplica\xe7\xe3o foi desenvolvida em JavaScript com o intuito de organizar as solicita\xe7\xf5es de conserto, troca de c\xe2meras, cabos e de uma empresa de monitoramento de condom\xednio. ",imgurl:"images/portfolio/gerenciador-de-condominio.png",link:"https://github.com/afonsoart/CONTROLE-DE-TAREFAS-AREA-TECNICA-JS-localstorage-CRUD"},{name:"To do List",description:"mobileapTo-Do Lists s\xe3o listas de todas as tarefas di\xe1rias que voc\xea precisa realizar, ou seja, elas listam tudo que voc\xea tem a fazer durante o  dia.",imgurl:"images/portfolio/To-do-List.png",link:""},{name:"Espa\xe7o.com",description:"Projeto pessoal de astronomia em fase de desenvolvimento.",imgurl:"images/portfolio/espa\xe7o-com.png "}],testimonials:[{description:"\xc9 incr\xedvel ver o quanto voc\xea evolui e tem vontade de crescer. Parab\xe9ns por trabalhar para ser um profissional melhor sempre.",name:"Marianna Castro"},{description:"Profissional paciente e sabe lidar com problemas dif\xedceis com muito profissionalismo.",name:"Ricardo Souza"}]},w=function(e){function a(){return Object(r.a)(this,a),Object(c.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,{resumeData:N}),l.a.createElement(p,{resumeData:N}),l.a.createElement(E,{resumeData:N}),l.a.createElement(f,{resumeData:N}),l.a.createElement(h,{resumeData:N}),l.a.createElement(b,{resumeData:N}),l.a.createElement(g,{resumeData:N}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.6d275017.chunk.js.map