export const data = `
# Npm Review

## Import and export modules

### Project implementation

- Live Demo - demo -
- Project prototype and palnning - plan -
- Create a folder for the project - setup -
- Create a file index.html - setup -
- Create a file main.js - setup -
- Create a file data.js - setup -
- Create a folder lib - setup -
- Coding and use npm libraries - coding -



\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch blog data</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-size: 18px;
      }
      #root {
        max-width: 800px;
        margin: 0 auto;
      }
      pre {
        background-color: #eee;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
 
    <script src="./main.js"></script>
  </body>
</html>
\`\`\`

Import data from data.js file

\`\`\`js
import { data } from "./data.js";
const root = document.querySelector("#root");

window.addEventListener("DOMContentLoaded", () => {
      // render data to the DOM
      root.innerHTML = \`<pre>\${data}</pre>\`;
      console.log(data); 
});
\`\`\`

I wanted the tiger but to got a dog

![](https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/274684628_134358905764556_4433575681146131042_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1BvtF2_3ESYAX-zR4Px&_nc_ht=scontent-ber1-1.xx&oh=00_AfDGqkPSyw97I-eaXxnF1LVLMqX0Xhln6tK3d0CFEd6QaQ&oe=6518D743)

Javascript developers community to help

![](https://thefalc.com/wp-content/uploads/2021/12/developer-community-2.jpg)

Thousands of helpful libraries we can use in our projects for free

![](https://miro.medium.com/v2/resize:fit:1400/1*hj-_anuWthYZs0x22hE9lA.png)

Make the convert markdown to HTML with [markdown](https://www.npmjs.com/package/marked) library

update main.js file


\`\`\`html
import "./lib/marked.js";
\`\`\`



\`\`\`js
root.innerHTML = marked.parse(data);
\`\`\`

Make the content more fancy with copy button and more styles + use [highlight.js](https://github.com/highlightjs/highlight.js) library

\`\`\`html
<style>
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 18px;
  }
  #root {
    max-width: 800px;
    margin: 0 auto;
  }
  pre {
    position: relative;
    padding: 10px;
  }
  pre code {
    border-radius: 8px;
    font-size: 16px;
    white-space: pre-wrap;
  }
  .copy-btn {
    position: absolute;
    top: 12px;
    width: 70px;
    text-align: center;
    right: 12px;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
  img {
    width: 100%;
    border-radius: 8px;
  }
</style>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/monokai.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
\`\`\`


\`\`\`js
import { data } from "./data.js";
import downloadFile from "./lib/download.js";
import "./lib/marked.js";
const spinner = document.querySelector(".spinner");

const root = document.querySelector("#root");
const download = document.querySelector(".download");

window.addEventListener("DOMContentLoaded", () => {
  spinner.style.display = "none";

  console.log(data);
  download.addEventListener("click", () => {
    downloadFile("doc.md", data);
    download.style.transform = "scale(0.94)";
    download.innerHTML = "Downloaded!";
    setTimeout(() => {
      download.style.transform = "scale(1)";
      download.innerHTML = ' <i class="fa-solid fa-download"></i> Download';
    }, 1000);
  });
  root.innerHTML = marked.parse(data);
  hljs.highlightAll();
  const code = document.querySelectorAll("pre code");
  code.forEach((block) => {
    const copyBtn = document.createElement("button");
    copyBtn.innerText = "Copy";
    copyBtn.classList.add("copy-btn");
    copyBtn.addEventListener("click", () => {
      copyBtn.style.transform = "scale(0.94)";
      copyBtn.innerText = "Copied!";

      setTimeout(() => {
        copyBtn.style.transform = "scale(1)";
        copyBtn.innerText = "Copy";
      }, 1000);
      navigator.clipboard.writeText(block.innerText);
    });
    block.parentNode.insertBefore(copyBtn, block);
  });
});

\`\`\`

_Make the styles more beautiful with [tailwindcss](https://tailwindcss.com/), [tailwindcss-typography](https://cdn.tailwindcss.com?plugins=typography), [Inter font](https://fonts.google.com/specimen/Inter)_


\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>NPM Modules</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/monokai.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: "Inter", sans-serif;
      }
      h1 {
        padding-top: 20px;
      }
      #root {
        margin: 0 auto;
        padding-bottom: 20px;
      }
      pre {
        position: relative;
      }
      pre code {
        border-radius: 8px;

        white-space: pre-wrap;
      }
      .copy-btn {
        position: absolute;
        top: 5px;
        width: 70px;
        text-align: center;
        right: 5px;
        background-color: #fff;
        border: 1px solid #ccc;
        color: black;
        font-size: 12px;

        border-radius: 5px;
        cursor: pointer;
        transition: all 0.1s ease-in-out;
      }
      img {
        width: 100%;
        border-radius: 8px;
      }
      .data {
        display: none;
      }
    </style>
  </head>
  <body>
    <div
      class="download fixed top-2 right-2 bg-blue-600 rounded-md p-2 cursor-pointer text-white hover:bg-blue-500 z-10"
    >
      <i class="fa-solid fa-download"></i> Download
    </div>
    <span
    class="spinner animate-ping absolute left-1/2 top-1/2 inline-flex h-20 w-20 rounded-full bg-blue-600 opacity-75 z-50"
  ></span>
    <div id="root" class="prose px-2"></div>
    <script src="./lib/highlight.js"></script>
    <script src="./main.js" type="module"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
  </body>
</html>


\`\`\`


`;
