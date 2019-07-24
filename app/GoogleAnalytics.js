import React from 'react';

const scriptcontent =
    `window.dataLayer = window.dataLayer || [];\n` +
    `function gtag(){dataLayer.push(arguments);}\n` +
    `gtag('js', new Date());\n` +
    `gtag('config', 'UA-144374570-1');`;

const googleScriptSrc = "https://www.googletagmanager.com/gtag/js?id=UA-144374570-1";

export default () => (
    <React.Fragment>
        <script
            async
            src={googleScriptSrc}/>
        <script dangerouslySetInnerHTML={{__html: scriptcontent}} />
    </React.Fragment>
);