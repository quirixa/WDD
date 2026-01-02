const input = document.getElementById("commandInput");
const output = document.getElementById("output");

const commands = {
  ls: `
Available commands:
- about
- projects
- contact
- clear
  `,
  about: `
Hi, I'm Aman 👋
A web developer who loves building games, tools, and clean UIs.
  `,
  projects: `
Projects:
- Kirka-style FPS game
- Protox Map Maker
- Terminal Portfolio
  `,
  contact: `
Email: your@email.com
GitHub: github.com/yourusername
  `,
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    printLine(`$ ${cmd}`);
    runCommand(cmd);
    input.value = "";
  }
});

function printLine(text) {
  const p = document.createElement("p");
  p.textContent = text;
  output.appendChild(p);
  window.scrollTo(0, document.body.scrollHeight);
}

function runCommand(cmd) {
  if (cmd === "cls") {
    output.innerHTML = "";
    return;
  }

  if (commands[cmd]) {
    commands[cmd]
      .trim()
      .split("\n")
      .forEach(line => printLine(line));
  } else {
    printLine(`Command not found: ${cmd}`);
  }
}
