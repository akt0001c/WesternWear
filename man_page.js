

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
// DropDown of featured button-------------
let dropdown_btn2 = document.querySelector("#Featured_btn1");
dropdown_btn2.addEventListener("click", ()=> {
    dropdown_content1()
});

function dropdown_content1(){
    console.log("insode the div")
    let options = document.querySelector("#myDropdown1");

    if(options.style.display == "block"){
        options.style.display = "none";
    }else {
        options.style.display = "block";
    }  
}

// Show filter Display (none / block)
let show_filter_btn = document.getElementById("dark_dropdopwn_filterbtn1");


show_filter_btn.addEventListener("click", ()=> {
    showing_filters()
});
 function showing_filters(){
    let category_section = document.getElementById("category_section");

    if(category_section.style.display == "block"){
        category_section.style.display = "none";
        widthOfContainerLess();
    }else {
        category_section.style.display = "block";
        widthOfContainerLess();
    }
 }



// All diffrent filters position (relative/absolute)

let category = document.getElementById("category_div");
category.addEventListener("click", hide_Filter_category);

let discount = document.querySelector(".discount_min_div");
discount.addEventListener("click",hide_Filter_discount);

let size = document.getElementById("size_div");
size.addEventListener("click",hide_Filter_size);

let color = document.getElementById("color_div");
color.addEventListener("click",hide_Filter_color);

let pattern = document.getElementById("pattern_div");
pattern.addEventListener("click",hide_Filter_pattern);

let trending = document.getElementById("trending_div");
trending.addEventListener("click",hide_Filter_trending);

let brand = document.getElementById("brand_div");
brand.addEventListener("click",hide_Filter_brand);

let re_imagined = document.getElementById("reImagined_div");
re_imagined.addEventListener("click",hide_Filter_Reimagined);



function hide_Filter_category(){
    console.log("helo")

    let main_section = document.getElementById("dont_show_category");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
    

}
function hide_Filter_discount(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_discount");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
   
}
function hide_Filter_size(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_size");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
   
}
function hide_Filter_color(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_color");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
}
function hide_Filter_pattern(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_pattern");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
}
function hide_Filter_trending(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_trending");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
        main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute";
    }
}
function hide_Filter_brand(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_brand");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
}
function hide_Filter_Reimagined(){
    console.log("helo")
    let main_section = document.getElementById("dont_show_re-imagined");
    if( main_section.style.display == "none"){
        main_section.style.display = "block";
    main_section.style.position = "relative";
    } else {
        main_section.style.display = "none";
        main_section.style.position = "absolute"
    }
}
// CONTAINER & CARDS

let container_AllProducts = document.getElementById("container_AllProducts");

function widthOfContainerLess(){
    
    if(category_section.style.display == "block"){
        let body_div_after_poster = document.getElementById("body_div_after-poster");
        body_div_after_poster.style.display = "flex";
        // body_div_after_poster.style.border = "1px solid gold";
        container_AllProducts.style.position = "absolute";
        container_AllProducts.style.marginTop = "20px";
        container_AllProducts.style.width = "77%";
        container_AllProducts.style.top = "520px";
        container_AllProducts.style.left = "280px";
    } else{
        let body_div_after_poster = document.getElementById("body_div_after-poster");
        body_div_after_poster.style.display = "block";
        container_AllProducts.style.position = "relative";
        // container_AllProducts.style.marginTop = "20px";
        container_AllProducts.style.width = "97%";
        container_AllProducts.style.top = "0px";
        container_AllProducts.style.left = "0px";
        container_AllProducts.style.marginLeft = "1%";
        container_AllProducts.style.padding = "20px 10px 20px 10px";
    }
}






