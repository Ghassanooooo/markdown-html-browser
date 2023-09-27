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
