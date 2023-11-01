import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
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
            The Everybot website which contains links to other major materials like the Bill of Materials or Cut List and the Everybot merch shop.
          </li>
        </ul>
      </div>
      <br></br><br></br>
      <h3>To learn more about using the website and the structure of the website use this link (work in progress)</h3>
      <br></br><br></br><br></br><br></br>
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
  );
}
