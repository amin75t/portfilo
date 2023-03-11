works = {
    "کرانه":"کرانهLorem ipsum dolor sit amet consectetur adipisicing elit. Porro, recusandae.",
    "فارابی":"فارابیLorem ipsum dolor sit amet consectetur adipisicing elit. Porro, recusandae.",
}
let companyIWork =document.querySelectorAll(".links a");
let companyIWorkHead = document.querySelector(".contect__header");
let companyIWorkBody = document.querySelector(".text");


let activeOne = (item)=>{
    companyIWork.forEach(items =>{
            items.classList.remove("active")
    })
    item.classList.add("active")
}


companyIWork.forEach(item=>{
    item.addEventListener("click",(e)=>{
        if (works[e.target.textContent] != undefined){
            companyIWorkHead.innerText = e.target.textContent;
            activeOne(item)
            companyIWorkBody.innerText =works[e.target.textContent] ;
        };
    })
})


