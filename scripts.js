console.log("hello");

console.log(document.querySelector(".func").innerHTML);

// const reduce = function () {
//   if (document.querySelector(".func").innerHTML === "skills")
//     document.querySelector(".sline").style.width = "50px";
// };

// const reduce = function () {
//   if (document.querySelector(".func").innerHTML === "skills") {
//     document.querySelector("hr").style.width = "50px";
//   }
// };

// reduce();
// document.querySelector("hr").style.width = "50px";

const comp = function () {
  if (document.querySelector(".func").innerHTML === "skills") {
    console.log("yess");
  } else {
    console.log("no");
  }
};

comp();

var els = document.querySelectorAll(".sline");
for (var i = 0; i < els.length; i++) {
  if (els[i].classList.contains("a")) {
    els[i].querySelector("hr").style.width = "70%";
  }
}
