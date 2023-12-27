(self.webpackChunkeverybot_docs=self.webpackChunkeverybot_docs||[]).push([[6273],{40278:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/ezgif-2-736bc92b50.de5baaf.600.png 600w,"+r.p+"assets/ideal-img/ezgif-2-736bc92b50.db6efe1.616.png 616w",images:[{path:r.p+"assets/ideal-img/ezgif-2-736bc92b50.de5baaf.600.png",width:600,height:381},{path:r.p+"assets/ideal-img/ezgif-2-736bc92b50.db6efe1.616.png",width:616,height:391}],src:r.p+"assets/ideal-img/ezgif-2-736bc92b50.de5baaf.600.png",toString:function(){return r.p+"assets/ideal-img/ezgif-2-736bc92b50.de5baaf.600.png"},placeholder:void 0,width:600,height:381},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAIAAAB1kpiRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAw0lEQVR4nGPYUp1VkxJVUVdWXJbn6enQmxwa4+NQkRQREu48fbE3w80i+QAZwYqm+gnTJselJc2ZPaUgLqA0zMPR2cLFToPhYY+bmRC/palhTrB3Rkx4ZlRwR3Zclqe1mYWZgYE+w44kHQUWTl1hgTg5kRBZkXAFiTglKVsVeS09HQNdTYYJPvIiLByaQgK2wgKOUuJhclLuIoLyPHycPIKigsIMsXYKPqYyrjri5mrijrqKGdqK2pKCSiL8cgJ86uKCAFkCL0Ntta/0AAAAAElFTkSuQmCC"}},31920:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var o=r(85893),i=r(11151),n=r(67492);const s={sidebar_label:"Robot Wiring",sidebar_position:1},l="Robot Wiring",a={id:"fundamentals/electrical/electrical-overview",title:"Robot Wiring",description:"For those of you building the Everybot, the manual will have an electrical section specific to the robot. The resources here serve to help you prepare for wiring your Everybot, there may be materials used in the linked content that are not included in the Everybot's BOM or tools.",source:"@site/docs/fundamentals/electrical/electrical-overview.md",sourceDirName:"fundamentals/electrical",slug:"/fundamentals/electrical/electrical-overview",permalink:"/ebot/fundamentals/electrical/electrical-overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Robot Wiring",sidebar_position:1},sidebar:"fundamentalSidebar",previous:{title:"Electrical",permalink:"/ebot/category/electrical"},next:{title:"CAD",permalink:"/ebot/category/cad"}},c={},h=[{value:"Introduction to FRC Robot Wiring from WPILib",id:"introduction-to-frc-robot-wiring-from-wpilib",level:2},{value:"General Notes",id:"general-notes",level:3},{value:"Gather Materials",id:"gather-materials",level:3},{value:"Weidmuller Connectors",id:"weidmuller-connectors",level:3},{value:"Motor Controller Signal Wires",id:"motor-controller-signal-wires",level:3},{value:"Robot Signal Light (RSL)",id:"robot-signal-light-rsl",level:3},{value:"Motor Power",id:"motor-power",level:3},{value:"Finishing up and other resources",id:"finishing-up-and-other-resources",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"robot-wiring",children:"Robot Wiring"}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"For those of you building the Everybot"}),", the manual will have an electrical section specific to the robot. The resources here serve to help you prepare for wiring your Everybot, there may be materials used in the linked content that are not included in the Everybot's BOM or tools."]})}),"\n",(0,o.jsx)(t.h2,{id:"introduction-to-frc-robot-wiring-from-wpilib",children:(0,o.jsx)(t.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html",children:"Introduction to FRC Robot Wiring from WPILib"})}),"\n",(0,o.jsx)(t.p,{children:"The resource above from WPILib is excellent for learning how to wire a robot."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"This resource can be used in combination with Everybot's electrical manual section or on its own to create a test bed. If you have the time, creating a test bed is great for verifying the operation of components, flashing the radio/imaging the roboRIO, ensuring you are able to connect to the robot via wifi and testing robot code."}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"If you plan on building the Everybot, here are some general notes and tips on the various sections:"}),"\n",(0,o.jsx)(t.h3,{id:"general-notes",children:"General Notes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The REV Power Distribution Hub (PDH) is the newest Power Distribution device, which comes in the rookie kit of parts, it will be used on the Everybot. If you do not have the PDH, you will select the CTR tabs for wiring your system."}),"\n",(0,o.jsx)(t.li,{children:"CAN should always be used over PWM, make sure to follow the CAN setup tabs in the linked resource."}),"\n",(0,o.jsx)(t.li,{children:"It is most likely that the Everybot will use SPARK Max and/or Victor SPX motor controllers."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"danger",children:(0,o.jsx)(t.p,{children:"If you create a test bed you use some consumables. These may include wire if cut shorter, zip ties and terminal lugs if the setup does not transfer well to the completed Everybot."})}),"\n",(0,o.jsx)(t.h3,{id:"gather-materials",children:(0,o.jsx)(t.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#gather-materials",children:"Gather Materials"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"In past years we have not used Pneumatics, double check with Everybot's bill of materials when it is released."}),"\n",(0,o.jsxs)(t.li,{children:["We heavily recommend using ",(0,o.jsx)(t.a,{href:"https://www.andymark.com/products/wago-221-series-inline-splicing-connector-with-lever?via=Z2lkOi8vYW5keW1hcmsvV29ya2FyZWE6Ok5hdmlnYXRpb246OlNlYXJjaFJlc3VsdHMvJTdCJTIyYnV0dG9uJTIyJTNBJTIyc2VhcmNoJTIyJTJDJTIycSUyMiUzQSUyMndhZ28lMjIlMkMlMjJ1dGY4JTIyJTNBJTIyJUUyJTlDJTkzJTIyJTdE",children:"inline WAGOs"})," over the quick disconnect terminals."]}),"\n",(0,o.jsxs)(t.li,{children:["We will only use a PWM cable for the RSL, we will use CAN for the motor controllers, to make them easier to work with you may want ",(0,o.jsx)(t.a,{href:"https://www.revrobotics.com/rev-21-2052/",children:"CAN Extension Cables"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"The 10 AWG wire can be replaced with 12 AWG wire."}),"\n",(0,o.jsxs)(t.li,{children:["Most of these items will come in the kit of parts, the rest can be purchased from FRC vendors like ",(0,o.jsx)(t.a,{href:"https://www.andymark.com/pages/electrical",children:"AndyMark"})," or ",(0,o.jsx)(t.a,{href:"https://www.revrobotics.com/ion/electronics/",children:"REV"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"weidmuller-connectors",children:(0,o.jsx)(t.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#weidmuller-connectors",children:"Weidmuller Connectors"})}),"\n",(0,o.jsx)(t.p,{children:"The video attached is private, here an image of the connector:"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)("div",{style:{overflow:"hidden",display:"inline-block",margin:"0.00px 0.00px"},children:(0,o.jsx)("span",{style:{overflow:"hidden",display:"inline-block",margin:"0.00px 0.00px",border:"0.00px solid #000000",transform:"rotate(0.00rad) translateZ(0px)"},children:(0,o.jsx)(n.Z,{autoLoad:"true",img:r(40278),style:{marginLeft:"0.00px",marginTop:"0.00px",transform:"rotate(0.00rad) translateZ(0px)",maxWidth:"700px"}})})})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h3,{id:"motor-controller-signal-wires",children:(0,o.jsx)(t.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#motor-controller-signal-wires",children:"Motor Controller Signal Wires"})}),"\n",(0,o.jsx)(t.p,{children:"Select the CAN tab."}),"\n",(0,o.jsx)(t.h3,{id:"robot-signal-light-rsl",children:(0,o.jsx)(t.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#robot-signal-light",children:"Robot Signal Light (RSL)"})}),"\n",(0,o.jsx)(t.p,{children:"You may use a PWN cable as the 2-pin cable."}),"\n",(0,o.jsx)(t.h3,{id:"motor-power",children:(0,o.jsx)(t.a,{href:"https://docs.wpilib.org/en/stable/docs/zero-to-robot/step-1/intro-to-frc-robot-wiring.html#motor-power",children:"Motor Power"})}),"\n",(0,o.jsxs)(t.p,{children:['We heavily prefer using WAGOs over the quick disconnect terminals. WAGOs work best when the wire is untwisted and cut to 11mm (~7/16") in length. If you are connecting to a brushless motor (NEO or NEO 550), you will need to connect all 3 wires to the SPARK MAX, along with the sensor cable. For more information on wiring SPARK MAXes please see ',(0,o.jsx)(t.a,{href:"https://docs.revrobotics.com/sparkmax/gs-sm/wiring-the-spark-max",children:"REV's documentation"}),". We also recommend using WAGOs over Power Poles for teams who are less experienced."]}),"\n",(0,o.jsx)(t.h2,{id:"finishing-up-and-other-resources",children:"Finishing up and other resources"}),"\n",(0,o.jsxs)(t.p,{children:["The last step involves connecting a battery, here the WPILib guide for that: ",(0,o.jsx)(t.a,{href:"https://docs.wpilib.org/en/stable/docs/hardware/hardware-basics/robot-battery.html",children:"Robot Battery Basics"}),"."]}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["For more information on wiring CAN WPILib has a ",(0,o.jsx)(t.a,{href:"https://docs.wpilib.org/en/stable/docs/hardware/hardware-basics/can-wiring-basics.html",children:"guide"})," that uses older power distribution panel but the basics are the same. The PCM (Pneumatic Control Module) portion can be ignored."]})]})}function b(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},67492:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});r(67294);var o=r(38007),i=r(85893);function n(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{shouldAutoDownload:s,...e})})}const s=e=>{let{connection:t,size:r,threshold:o,possiblySlowNetwork:i}=e;return!0}}}]);