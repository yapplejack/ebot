"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2444],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>m});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),d=u(o),p=i,m=d["".concat(s,".").concat(p)]||d[p]||c[p]||a;return o?n.createElement(m,l(l({ref:t},h),{},{components:o})):n.createElement(m,l({ref:t},h))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,l=new Array(a);l[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:i,l[1]=r;for(var u=2;u<a;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3353:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));const a={sidebar_label:"Why",sidebar_position:1,"header-includes":["pagenumbering{gobble}"]},l="Welcome",r={unversionedId:"about/why",id:"about/why",title:"Welcome",description:"What is this?",source:"@site/docs/about/why.md",sourceDirName:"about",slug:"/about/why",permalink:"/ebot/about/why",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Why",sidebar_position:1,"header-includes":["\\pagenumbering{gobble}"]},sidebar:"aboutSidebar",next:{title:"bugs",permalink:"/ebot/about/bugs"}},s={},u=[{value:"What is this?",id:"what-is-this",level:2},{value:"What is here right now?",id:"what-is-here-right-now",level:3},{value:"Why make a website?",id:"why-make-a-website",level:3},{value:"Google Docs is not amazing for 150 page manuals",id:"google-docs-is-not-amazing-for-150-page-manuals",level:3},{value:"The Big Question: Should We Use It?",id:"the-big-question-should-we-use-it",level:3},{value:"How do you use it?",id:"how-do-you-use-it",level:3},{value:"How is it hosted?",id:"how-is-it-hosted",level:3}],h={toc:u},d="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome"},"Welcome"),(0,i.kt)("h2",{id:"what-is-this"},"What is this?"),(0,i.kt)("p",null,"This is a website is uses a markdown-folder-structure based react app called Docusaurus. More importantly this is attempt at improving the documentation for the Everybot and creating a home for additional FRC resources."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"what-is-here-right-now"},"What is here right now?"),(0,i.kt)("p",null,"Currently I have converted some of the manual into markdown in the docs section. All of the sections print nearly identically to a Google Doc and a majority of desired styling from the doc is also present. "),(0,i.kt)("p",null," ",(0,i.kt)("br",null)," "),(0,i.kt)("p",null,"Additionally there is some scaffolding for a fundamentals of FRC section, meant to exist as a wiki for low resource robotics. "),(0,i.kt)("p",null," ",(0,i.kt)("br",null)," "),(0,i.kt)("p",null,"There is also a updates section that could be used to let people know when there are stock issues, changes or additions to manual."),(0,i.kt)("p",null," ",(0,i.kt)("br",null)," "),(0,i.kt)("p",null,"Lastly there is an algorithm that is able to process takes the output of my script and HTML from a Google Doc and converts it into a markdown file."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"why-make-a-website"},"Why make a website?"),(0,i.kt)("p",null,"After my time working on both the documentation and build videos I was disappointed by disunity between them. I want the resources to benefit symbiotically from each other. The manual needs videos because skills like measuring and machining can be difficult to explain in text and any holes left by limitations of the instructions can be filled by videos. It then follows that videos are at their best if they are integrated into the manual, as they need the organization it provides. ",(0,i.kt)("p",null," ",(0,i.kt)("br",null)," ")),(0,i.kt)("p",null,"I have looked into alternatives to Google Docs, specifically GitBook, which both REV and WCP use but I found it lacking. You have to pay to allow your docs to be printed (and they do not look good when converted to PDF), their Google Doc conversion is worse than mine and they lack a lot of customization. ",(0,i.kt)("p",null," ",(0,i.kt)("br",null)," ")),(0,i.kt)("p",null,"The main goal that I set out with was for each section to allow for embedded videos for better manual to video cohesion."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Build Video for Section"),(0,i.kt)("div",null,(0,i.kt)("iframe",{width:"420",height:"315",src:"https://www.youtube.com/embed/def5QH7UUIU"}))),(0,i.kt)("p",null,"Notable these videos do not sacrifice printing as they hide themselves when using ctrl + p.",(0,i.kt)("p",null," ",(0,i.kt)("br",null)," ")),(0,i.kt)("p",null,'In addition to section specific videos it would be nice to have prerecorded videos called "skill videos" (temp name) that could be used to bolster a section and cut down on required in-season filming. These videos are what I would like to make for the fundamentals of FRC.'),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Skill videos could include:"),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Reading Engineering Drawings"),(0,i.kt)("li",null,"Using specific machines"),(0,i.kt)("li",null,"Dimensioning/marking and so on"),(0,i.kt)("li",null,"Basically anything from the fundamentals")))),(0,i.kt)("p",null,"The concept of what a page of the manual would look like with a section video can be seen ",(0,i.kt)("a",{parentName:"p",href:"/ebot/manual/chassis/gearbox-assembly"},"here"),", please try to print it if you desire."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"google-docs-is-not-amazing-for-150-page-manuals"},"Google Docs is not amazing for 150 page manuals"),(0,i.kt)("p",null,"Google Docs had a lot of trouble loading the 397 images we used on less beefy computers."),(0,i.kt)("p",null,"Additionally navigation is not great with G-Docs, we definitely could have done better with our heading usage however on lesser machines there is still a massive load when skipping around."),(0,i.kt)("p",null,"With the pages being broken up as they are, users should have to load a max of 50 images."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"the-big-question-should-we-use-it"},"The Big Question: Should We Use It?"),(0,i.kt)("p",null,"Maybe, I am not sure yet. It has the potential to look significantly better than a Google Doc but it can also easily look worse if care is not taken. It is based on the same type of file as GitBooks (markdown files) but it allows for the usage of Javascript and is built with react which allows for infinite customization. ",(0,i.kt)("p",null," ",(0,i.kt)("br",null)," ")),(0,i.kt)("p",null,"Right now the biggest hurdles are installation, collaboration and infrastructure. There are some major disadvantages but I plan on going more in depth on these issues later on as they are constantly evolving. "),(0,i.kt)("p",null,"Videos and documentation should benefit from each-other and I believe this might be the best way to achieve that. That being said, a Google Doc like format might not be the best for an instruction manaul. "),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Should instructions have steps?"),(0,i.kt)("li",null,"Do pages have a purpose?"),(0,i.kt)("li",null,"Will it be too much work in-season? Can we teach students to help with it? (yes)"))),(0,i.kt)("p",null,"Anyway here is what the vendor's documentation looks like: "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.revrobotics.com/frc-kickoff-concepts/charged-up-2023/starter-bot-2023-rev-ion-frc/2023-rev-ion-frc-starter-bot-build-guide"},"REV Starter Bot"),": Half of the images will not load, not sure if that is a me problem. They use GitBook. "),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.wcproducts.com/wcp-single-stage-gearbox/"},"WCP"),": GitBooks users."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/drive/folders/1J4WqhSLfIULLtzq9aZi6ZGNaLbMHUs0I"},"Thrifty"),": Super clean PDF that focuses on inline images."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cdn.andymark.com/media/W1siZiIsIjIwMjMvMDEvMjYvMTEvNTEvNTYvOTMzZjk2M2YtNGM3ZS00ZDJkLWIwNmUtOGMxYjQ0Y2M2ZjViL1dDREMgQXNzZW1ibHkgR3VpZGUgdjEuMjYuMjMucGRmIl1d/WCDC%20Assembly%20Guide%20v1.26.23.pdf?sha=5ab842de7f106a9b"},"AM"),": Blocked instructions in PDF form."),(0,i.kt)("p",null,"Although our 2023 google doc does not look amazing, I am happy with the level of detail we provide. I do think it could benefit from more organization but I am not entirely sure what the best approach is. Should I continue down the Google Doc approach or is there a better way?"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"how-do-you-use-it"},"How do you use it?"),(0,i.kt)("p",null,"Currently you create a Google Doc containing the page info, feed it to website using the /crop extension and then clean up the spacing on the result."),(0,i.kt)("p",null,"This process can be cleaned up but after setting up your environment you can create pages by doing the following: "),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)("li",null,"Make sure the Google Doc is formatted correctly: make sure images are not positioned if possible especially if contained in the same paragraph and any positioned images are fixed to text"),(0,i.kt)("li",null,"Run the script I will provide and download the G-Doc as a web page"),(0,i.kt)("li",null,"Feed the results into /ebot/crop extension, you will receive a zipped file that contains all the images and some console output that will be your markdown file"),(0,i.kt)("li",null,"Create folders for the images and markdown file, then cleanup the spacing in the markdown file"))),(0,i.kt)("p",null,"The conversion from G-Docs to Word Docs is not 100% clean so there will be some minor issues to cleanup however most issues should be easy to take care of."),(0,i.kt)("p",null,"In theory it should be easy to process an entire section like Superstructure and have the program produce a zip file that can be dragged into the project folder to heavily cut down on the number of google docs used."),(0,i.kt)("p",null,"You can also just write raw markdown but writing markdown from scratch is a completely different task than editing it. "),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"how-is-it-hosted"},"How is it hosted?"),(0,i.kt)("p",null,"Currently this running on Github Pages via the gh-pages branch in my repository for it, with the project being saved to the main branch. The website can easily be hosted for free through a variety of providers however Github pages should be good enough. GitHub pages sites may not exceed 1GB, this site is currently ~55MBs. The other issue would be the 100GB rate limit but I high doubt this would be broken."))}c.isMDXComponent=!0}}]);