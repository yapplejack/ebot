---
sidebar_label: 'Motor Controllers and Motors'
sidebar_position: 3
---

# Controlling Motors

TODO: improve pictures for sparkmax section, add opening statement and write setting up SPX/ using the motor

<br/>


## Setting up a Spark MAX

TODO: improve pictures for sparkmax section

To work with the Spark MAX motor controllers please download the <span style={{ textDecoration: "underline"}}><a class="c8" href="https://www.google.com/url?q=https://docs.revrobotics.com/sparkmax/rev-hardware-client/getting-started-with-the-rev-hardware-client&amp;sa=D&amp;source=editors&amp;ust=1698869306125810&amp;usg=AOvVaw1ny9aXsReM03VjdowBmT7u">REV Hardware Client</a></span>. The linked website has all information needed to use the Spark MAX but we will go over some key points below.

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '351.50px', height: '84.97px'}}><img src={require("/static/media/software/image_1.png").default} style={{ width: '351.50px', height: '84.97px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></img></span></div></div>

<br/>

Interfacing with the Spark MAX is done through the USB-C slot, there is an included cable but its short length makes it annoying to use, so a better cable is a good purchase.

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '225.00px', height: '109.40px'}}><img src={require("/static/media/software/image_0.png").default} style={{ width: '225.00px', height: '125.56px', marginLeft: '0.00px', marginTop: '-16.16px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></img></span></div></div>

<br/>

When working with Spark MAXes, especially when they use CAN, it is best practice to make sure all Spark MAXes have the newest firmware individually without the presence of other controllers in the CAN loop. This can be done simply by not powering on the robot and connecting to each controller individually via USB with the others off. When connected, open the REV Hardware Client and select the desired Spark MAX. Then navigate to the update tab and select download if there is a red Out-Of-Date triangle.

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '256.44px', height: '133.90px'}}><img src={require("/static/media/software/image_3.png").default} style={{ width: '256.44px', height: '133.90px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></img></span></div><div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'left', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '440.50px', height: '170.79px'}}><img src={require("/static/media/software/image_2.png").default} style={{ width: '440.50px', height: '170.79px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></img></span></div></div>

<p><br /></p>

There are many important settings that will impact the performance of your motor but we want to highlight the two most important settings: It is imperative that <span style={{ fontWeight: "700"}}>CAN ID</span>&nbsp;is set correctly. When Spark MAXes are declared in code they require a CAN ID to be initialized with, make sure the <span style={{ fontWeight: "700"}}>CAN ID</span>&nbsp;in the client matches the corresponding motor it is attached to. Consider labeling the motor controllers with a sticker indicating their CAN ID. The other important setting is <span style={{ fontWeight: "700"}}>Motor Type</span>, if you are using a Non-NEO motor this must be set to Brushed Motor, otherwise if using a NEO it should be REV NEO Brushless. When finished configuring the motor controller make sure to click the <span style={{ fontWeight: "700"}}>Burn Flash</span>&nbsp;button.

<br/>

<div style={{textAlign: 'center'}}>
<div style={{overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px'}}><span style={{float: 'right', overflow: 'hidden', display: 'inline-block', margin: '0.00px 0.00px', border: '0.00px solid #000000', transform: 'rotate(0.00rad) translateZ(0px)',  width: '256.00px', height: '246.20px'}}><img src={require("/static/media/software/image_4.png").default} style={{ width: '256.00px', height: '246.20px', marginLeft: '0.00px', marginTop: '0.00px', transform: 'rotate(0.00rad) translateZ(0px)', maxWidth: "none"}}></img></span></div></div>

<p><br /> </p>

## Setting up a Victor SPX

## Using the Motor