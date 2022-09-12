let div = document.querySelector("div");

function enter() {
    console.log("Мыщь в  console")
    this.style.color = "red";
    this.style.backgroundColor = "yellow"
}

div.addEventListener('mouseenter', enter);

div.addEventListener('mouseleave', function (){
    console.log("Мыщь покинул console")
    this.style.color = "black";
    this.style.backgroundColor = "white";
    this.style.borderRadius = "10%";
})


