const container = document.querySelector(".container");
container.style.width = "80%";
container.style.margin = "0 auto";
container.style.border = "1px solid black";
container.style.backgroundColor = "#FEC689";
container.style.padding = "10px";

const boxes = document.querySelectorAll(".box");
boxes.forEach((box, index) => {
    box.style.height = "20vh";
    box.style.border = "1px solid black";
    box.style.textAlign = "center";
    box.style.padding = "20px";
    box.style.marginBottom = "20px";
    box.style.fontWeight = "bolder";
});

const header = document.querySelector("#header");
header.style.backgroundColor = "#A4D39D";
header.style.color = "#D0142D";

const pageTitle = document.querySelector("#page_title");
pageTitle.style.backgroundColor = "#6DCFF6";
pageTitle.style.color = "#8F11AB";

const content = document.querySelector("#content");
content.style.backgroundColor = "#FEF568";
content.style.color = "#1B38B7";

const footer = document.querySelector("#footer");
footer.style.backgroundColor = "#A286C0";
footer.style.color = "#0A20DC";