import { data } from "./data.js";
import downloadFile from "./lib/download.js";
import "./lib/marked.js";

const root = document.querySelector("#root");
const download = document.querySelector(".download");

window.addEventListener("DOMContentLoaded", () => {
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
