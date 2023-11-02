import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { func } from 'joi';

export default function HomepageFeatures() {
  return (
    <div class="container margin-vert--xs" style={{ margin: '0px 5%', maxWidth: '90%' }}>
      <div class="row">
        <Tester />
        <div class="col col--8" >
          <div className="text--center">
            <div style={{ textAlign: 'center' }}><img src={require("/static/media/Logos/Everybot118.webp").default}></img></div>
            <br></br>
            <h1>Welcome to the Everybot Documentation Site</h1>
            <br></br><br></br><br></br>
            <h3>At the top you will find:  </h3>
            <div>
              <ul style={{ textAlign: 'center', listStylePosition: 'inside', marginBottom: '5px' }}>
                <li>
                  Step-by-step instructions on how to build the Everybot with integrated videos
                </li>
                <li>
                  Resources to teach some of the core basic concepts used to build the Everybot and robots in general
                </li>
                <li>
                  Posts that document major updates for those building the Everybot as well as updates or large changes in the manual
                </li>
                <li>
                  The Everybot website which contains links to other major materials like the Bill of Materials or Cut List
                </li>
              </ul>
            </div>
            <br></br><br></br>
            <h3>To learn more about using the website and the structure of the website use this link (work in progress)</h3>
            <br></br><br></br><br></br><br></br>
          </div>
        </div>
        <div style={{ position: "relative", textAlign: 'center', left: "50%", transform: "translate(-50%)", width: '900px' }}>
          <h2>
            Author's notes
          </h2>
          <br></br>
          <iframe width="420" height="315"
            src="https://www.youtube.com/embed/610y6_hh8vo" allow='fullscreen'>
          </iframe>
          <br></br>
          <br></br><br></br>
        </div>
      </div>
    </div>
  );
}

function Tester() {
  const [test, setText] = useState("Error");

  function getText() {
    fetch('https://yapplejack.github.io/ebot/blog/feed.json')
      .then((response) => response.json())
      .then((json) => setText(json.items))
      .catch(error => console.log(error));
  }

  getText();

  if (test == "Error") {
    return <aside class="col col--2"></aside>
  }

  let firstBlog = "/ebot" + test[0].id.match(/\/blog\/.*/);
  let secondBlog = "/ebot" + test[1].id.match(/\/blog\/.*/);
  let thirdBlog = "/ebot" + test[1].id.match(/\/blog\/.*/);

  return (
    <aside class="col col--2"><nav class="sidebar_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module thin-scrollbar" aria-label="Blog recent posts navigation"><div class="sidebarItemTitle_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module margin-bottom--md">Recent Updates</div><ul class="sidebarItemList_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module clean-list"><li class="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module"><a class="sidebarItemLink_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module" href={firstBlog}>{test[0].title}</a></li><li class="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module"><a class="sidebarItemLink_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module" href={secondBlog}>{test[1].title}</a></li></ul></nav></aside>
  );
}

//let test;