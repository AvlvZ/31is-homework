"use strict"

let btn = document.querySelector("input");
let count = 0;

btn.addEventListener("click", (e) => {
  count += 1
  e.target.value = ""
  e.target.value = count
  console.log(count)
})

console.log(btn)