

// Logic For dropdown content of poster

let dropdown_btn = document.querySelector(".dropbtn");
dropdown_btn.addEventListener("click", ()=> {
    dropdown_content()
});

function dropdown_content (){
    console.log("insode the div")
    let options = document.querySelector(".dropdown-content");

    if(options.style.display == "block"){
        options.style.display = "none";
    }else {
        options.style.display = "block";
    }
   
}