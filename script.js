let commentBox,
nameInput = document.querySelector("#nameInput"),
comment = document.querySelector("#comment"),
comments = document.querySelector("#comments"),
vh = document.documentElement,
nav = document.querySelector("nav");

const postComment = () =>
{
commentBox = document.createElement("div"),h2 = document.createElement("h2"),
p = document.createElement("p");
p.appendChild(document.createTextNode(comment.value));
commentBox.setAttribute("id","commentBox");
h2.appendChild(document.createTextNode(nameInput.value));
commentBox.appendChild(h2);
commentBox.appendChild(p);
comments.appendChild(commentBox);
nameInput.value = "";
comment.value = "";
}

addEventListener("keypress",(ev) => {
if (ev.which ==13)
{postComment();}
})

const navOp = () =>
{
let vhr = pageYOffset/vh.clientHeight;
if (vhr>=0.7 && nav.classList.contains("navOp") == false)
{
nav.classList.toggle("navOp");
}

else if (vhr<0.7 && nav.classList.contains("navOp") == true)

{
nav.classList.toggle("navOp");
}
}


addEventListener("scroll",navOp);
