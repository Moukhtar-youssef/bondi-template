var work_li = document.querySelectorAll(".our-work ul li");
var work_lis = Array.from(work_li);
var work_box = document.querySelectorAll(".our-work .box");
var work_boxes = Array.from(work_box);
work_lis.forEach((li) => {
  li.addEventListener("click", () => {
    remove_all_li(work_lis);
    li.classList.add("active");
    clean(work_boxes, li);
  });
});
function remove_all_li(lis) {
  lis.forEach((li) => {
    li.classList.remove("active");
  });
}
function clean(boxes, li) {
  boxes.forEach((box) => {
    if (box.dataset.work === li.textContent) {
      box.parentElement.style.cssText = "display:flex;";
    } else if (li.textContent == "all") {
      box.parentElement.style.cssText = "display:flex;";
    } else {
      box.parentElement.style.cssText = "display:none;";
    }
  });
}
