# Async intro and Npm Review

## Async Intro and Fetch

Using fetch to get data from an API is a common way to handle asynchronous operations in modern web development. The fetch API returns Promises, which represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

**Handshake between the client and the resource where the resource give the data to the client (API)**
![](https://cdn2.hubspot.net/hubfs/53/Untitled%20design-14.png)

**Example: Fetching blog data from markdown file**

**data.md**

```html
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
```

```js
const root = document.querySelector("#root");

window.addEventListener("DOMContentLoaded", () => {
  // source of data (file or endpoint)
  fetch("data.md")
    // wait for response and convert to text and pass it to the next stage
    .then((res) => res.text())
    // wait for data in text format
    .then((data) => {
      // render data to the DOM
      root.innerHTML = `<pre>${data}</pre>`;
      console.log(data);
    });
});
```

![fetch](https://www.atatus.com/blog/content/images/2022/07/fetch---2.png)

I wanted the tiger but to got a dog

![](https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/274684628_134358905764556_4433575681146131042_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5614bc&_nc_ohc=1BvtF2_3ESYAX-zR4Px&_nc_ht=scontent-ber1-1.xx&oh=00_AfDGqkPSyw97I-eaXxnF1LVLMqX0Xhln6tK3d0CFEd6QaQ&oe=6518D743)

Javascript developers community to help

![](https://thefalc.com/wp-content/uploads/2021/12/developer-community-2.jpg)

Thousands of helpful libraries we can use in our projects for free

![](https://miro.medium.com/v2/resize:fit:1400/1*hj-_anuWthYZs0x22hE9lA.png)

Make the convert markdown to HTML with [markdown](https://www.npmjs.com/package/marked) library

update html file

```html
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
```

update js file

```js
root.innerHTML = marked.parse(data);
```

Make the content more fancy with copy button and more styles + use [highlight.js](https://github.com/highlightjs/highlight.js) library

```html
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
```

```js
const root = document.querySelector("#root");

window.addEventListener("DOMContentLoaded", () => {
  fetch("data.md")
    .then((res) => res.text())
    .then((data) => {
      root.innerHTML = marked.parse(data);
      hljs.highlightAll();

      const code = document.querySelectorAll("pre code");
      code.forEach((block) => {
        const copyBtn = document.createElement("button");
        copyBtn.innerText = "Copy";
        copyBtn.classList.add("copy-btn");
        copyBtn.addEventListener("click", () => {
          copyBtn.style.transform = "scale(0.9)";
          copyBtn.innerText = "Copied!";

          setTimeout(() => {
            copyBtn.style.transform = "scale(1)";
            copyBtn.innerText = "Copy";
          }, 1000);
          navigator.clipboard.writeText(block.innerText);
        });
        block.parentNode.insertBefore(copyBtn, block);
        console.log(copyBtn);
      });
    });
});
```

_Make the styles more beautiful with [tailwindcss](https://tailwindcss.com/) and [tailwindcss-typography](https://cdn.tailwindcss.com?plugins=typography)_

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Fetch blog data</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/monokai.min.css"
    />

    <style>
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
    </style>
  </head>
  <body>
    <div id="root" class="prose"></div>
    <script src="./lib/marked.js"></script>
    <script src="./lib/highlight.js"></script>

    <script src="./main.js" type="module"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.tailwindcss.com?plugins=typography"></script>
  </body>
</html>
```
