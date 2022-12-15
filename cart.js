let productbox= document.querySelector("#product-cart-detail");
let savedproduct= document.querySelector("#saved-product-box");

//localStorage.setItem("cart",JSON.stringify(data));
let  productdata= JSON.parse(localStorage.getItem("cart"));

window.onload= ()=>{
    console.log("checking");
    productdata= JSON.parse(localStorage.getItem("cart"));
    showProduct(productdata);
};



const el= (tag)=>{
    return document.createElement(tag);
};

const minusOP= (ob,text,dis,price)=>{
    console.log(Math.floor(ob["price"]/(ob["quantity"])||1));
    let c= +(text.textContent);
    if(c==1)
      return;
    c--;
    ob["quantity"]=c;
    let dis_price= +(dis.textContent);
    let sellprice= +(price.textContent);
    dis_price= dis_price -  Math.floor(ob["cross_price"]/(ob["quantity"]||1));
    sellprice= sellprice -  Math.floor(ob["price"]/(ob["quantity"])||1);
    ob["cross_price"]=dis_price;
    ob["price"]=sellprice;
    dis.textContent=dis_price;
    price.textContent=sellprice;
    text.textContent=c;
    localStorage.setItem("cart",JSON.stringify(productdata));
}
const plusOP= (ob,text,dis,price)=>{
    let c= +(text.textContent);
    let dis_price= +(dis.textContent);
    let sellprice= +(price.textContent);
    c++;
    ob["quantity"]=c;
    dis_price= Math.floor(ob["cross_price"]/(ob["quantity"]||1)) * ob["quantity"];
    sellprice= Math.floor(ob["price"]/(ob["quantity"])||1)*ob["quantity"];
    ob["cross_price"]=dis_price;
    ob["price"]=sellprice;
    console.log(productdata);
    dis.textContent=dis_price;
    price.textContent=sellprice;
    text.textContent=c;
    localStorage.setItem("cart",JSON.stringify(productdata));

};


const showProduct= (data)=>{
    productbox.innerHTML=null;
    data.forEach((ele) => {
       
      
        let box= el("div");
        box.setAttribute("class","card");

        
        
        let div1= el("div");
        let img= el("img");
        img.src=ele.image;
        img.setAttribute("class","cart-image");
        div1.append(img);
         
        let div2= el("div"); 
        let p1= el("p");
        p1.textContent=el.tag;
        let p2= el("p");
        p2.textContent=ele.product_name;
        p2.setAttribute("class", "product-title");
        let p3= el("p");
        p3.textContent= `size: ${ele.pro_size}`;
        let btn1= el("button");
        btn1.textContent="Remove";
        let btn2= el("button");
        btn2.textContent="Save for Later";
        div2.append(p1,p2,p3,btn1,btn2);

        let div3= el("div");
         
         let sp1= el("button");
         sp1.textContent="-";
         sp1.setAttribute("class","minus-count");
         sp1.onclick= ()=>{
          minusOP(ele,sp2,dis_price,sell_price);
         };
         let sp2= el("span");
         sp2.textContent=ele["quantity"]||1;
         sp2.setAttribute("class","product-count");

         let sp3= el("button");
         sp3.textContent="+";
         sp3.setAttribute("class","plus-count");
         sp3.onclick= ()=>{
            plusOP(ele,sp2,dis_price,sell_price);
         };
         div3.append(sp1,sp2,sp3);

         let div4= el("div3");
        let dis_price= el("p");
        dis_price.setAttribute("class","dis-price");
        dis_price.textContent=`INR ${ele.cross_price}`;
        let sell_price= el("p");
        sell_price.setAttribute("class","sell-price");
        sell_price.textContent=`INR ${ele.price}`;
       
        div4.append(dis_price,sell_price); 
        box.append(div1,div2,div3,div4);
        productbox.append(box);
        
    });
};