const content = document.querySelector(".content");
for(let i = 0; i < 64; i++){
    content.innerHTML += `<div class="box" id="${i+1}"></div>`;
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(element => {
    element.addEventListener("click", (event) =>{
        event.target.style.backgroundColor="red"
    })
});

