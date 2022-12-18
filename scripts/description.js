
let data = JSON.parse(localStorage.getItem("description"))||null;

document.getElementById("home/").innerText=`Home/${data.category}`

document.getElementById("smallimg").innerHTML=`<img src=${data.image} alt="">`;
document.getElementById("bigimg").innerHTML=`<img src="${data.image}" alt="">`;
document.getElementById("product_n").innerText=data.product_name;
document.getElementById("strick").innerHTML=`<s>INR ${data.cross_price}`;
document.getElementById("nonstrick").innerText=`INR ${data.price}(${data.discount}% Off)`
let size;
let double_x=document.getElementById("xx");
double_x.onclick= ()=>{
size='xx-small';
}
let single_x= document.getElementById("x");
single_x.onclick= ()=>{
    size='x-small';
}
let small_size= document.getElementById("s");
small_size.onclick= ()=>{
    size="Small";
};
let medium_size=document.getElementById("m");
medium_size.onclick= ()=>{
    size="Medium";
}
let large_size=document.getElementById("l");
large_size.onclick= ()=>{
    size="Large";
};

let large_x=document.getElementById("xl");
large_x.onclick=()=>{
    size="X-Large";
}

document.getElementById("xx").addEventListener("mouseover",function(){
    document.getElementById("Size").innerText="Size: XX-Small"
})
document.getElementById("x").addEventListener("mouseover",function(){
    document.getElementById("Size").innerText="Size: X-Small"
})
document.getElementById("s").addEventListener("mouseover",function(){
    document.getElementById("Size").innerText="Size: Small"
})
document.getElementById("m").addEventListener("mouseover",function(){
    document.getElementById("Size").innerText="Size: Medium"
})
document.getElementById("l").addEventListener("mouseover",function(){
    document.getElementById("Size").innerText="Size: Large"
})
document.getElementById("xl").addEventListener("mouseover",function(){
    document.getElementById("Size").innerText="Size: X-Large"
})

document.getElementById("button_des").addEventListener("mouseout",function(){
    document.getElementById("Size").innerText="Size: Select a Size";
})

document.getElementById("heart").addEventListener("click",function(){
    
        document.getElementById("heart").innerHTML =`<img src="https://as1.ftcdn.net/v2/jpg/02/22/76/70/1000_F_222767063_crBgH3ziXngxGS3Xq1CmYEkvKawJjVHB.jpg"></img>`

})
 
let arr = JSON.parse(localStorage.getItem("cart"))||[];
document.getElementById("addtobag").addEventListener("click",function(){
    let obj1={
        image:data.image,
        category:data.category,
    tag:data.tag,
    product_name: data.product_name,
    cross_price: data.cross_price,
    price: data.price,
    discount: data.discount,
    pro_size:size,
    }
    arr.push(obj1);
    localStorage.setItem("cart",JSON.stringify(arr));
    window.location.href="cart.html";
})
let container = document.getElementById("bigimg");
let img = document.querySelector("#big img");
 
container.addEventListener("mousemove",function(e){
    document.getElementById("zoom").innerHTML= `<img src=${data.image} alt="">`;
 let zoom = document.querySelector("#zoom img")
 
        let x= e.clientX - e.target.offsetLeft;
       let y = e.clientY - e.target.offsetTop;
      
       zoom.style.transformOrigin = `${x}px ${y}px`
       zoom.style.transform = "scale(2)" 
})

container.addEventListener("mouseout",function(){
    document.getElementById("zoom").innerHTML=null
})