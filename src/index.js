import Main from './js/Main.js';
import { Component } from 'preact';
import {html} from './js/Helpers.js';

export default class App extends Component {
  render() {
    return html`
        <html>
        <head>
            <title>Iris</title>
            <base href="./"/>
            <meta charset="utf-8"/>
            <meta name="description" content="Social Networking Freedom"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <meta property="og:title" content="Iris"/>
            <meta property="og:description" content="Social Networking Freedom"/>
            <meta property="og:url" content="https://iris.to"/>
            <meta property="og:image" content="https://iris.to/img/cover.jpg"/>

            <meta name="twitter:card" content="summary"></meta>

            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
            <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png"/>
            <link rel="manifest" href="static/site.webmanifest"/>
            <link rel="mask-icon" href="assets/img/safari-pinned-tab.svg" color="#74d5f1"/>
            <link rel="shortcut icon" href="/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#74d5f1"/>
            <meta name="msapplication-config" content="./browserconfig.xml"/>
            <meta name="theme-color" content="#74d5f1"/>

            <link rel="stylesheet" type="text/css" href="assets/css/cropper.min.css"/>

            <link rel="stylesheet" href="assets/css/dark.css"
                  media="(prefers-color-scheme: no-preference), (prefers-color-scheme: dark)"/>
            <link rel="stylesheet" href="assets/css/light.css" media="(prefers-color-scheme: light)"/>
            <!-- The main stylesheet -->
            <link rel="stylesheet" type="text/css" href="assets/css/style.css"/>
        </head>

        <body>
        <${Main}/>
        </body>
        </html>
    `;
  }
}