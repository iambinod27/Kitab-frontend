qntySub = document.querySelector("#quantity-no-sub");
qntyAdd = document.querySelector("#quantity-no-add");
qntyNo = document.querySelector("#quantity-no");

qntySub.addEventListener("click", () => qntyNo.value--);
qntyAdd.addEventListener("click", () => qntyNo.value++);
