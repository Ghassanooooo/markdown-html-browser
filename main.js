const root = document.querySelector("#root");
const download = document.querySelector(".download");

function onDownload(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

window.addEventListener("DOMContentLoaded", () => {
  fetch("data.md")
    .then((res) => res.text())
    .then((data) => {
      download.addEventListener("click", () => {
        onDownload("doc.md", data);
        download.style.transform = "scale(0.94)";
        download.innerText = "Downloaded!";
        setTimeout(() => {
          download.style.transform = "scale(1)";
          download.innerText = "Download";
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
});
