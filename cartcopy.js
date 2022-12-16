let productbox= document.querySelector("#product-cart-detail");
let savedproduct= document.querySelector("#saved-product-box");
let promocodeflag= true;
let promoinputbar= document.querySelector("#promocode");
let apply_btn= document.querySelector("#apply_btn");
let savedProduct= JSON.parse(localStorage.getItem("saved_cart"))||[];
let checkoutbtn= document.querySelector("#checkout-btn");
let user_name= JSON.parse(sessionStorage.getItem("user_name"));

//localStorage.setItem("cart",JSON.stringify(data));
let  productdata= JSON.parse(localStorage.getItem("cart"));

window.onload= ()=>{
    console.log("checking");
  let  productdata= JSON.parse(localStorage.getItem("cart"));
  let  savedProduct= JSON.parse(localStorage.getItem("saved_cart"))||[];
    showProduct(productdata);
    getTotal();
    getCount();
    showsavedProduct(savedProduct);
};
const deleteSavedData = (index)=>{
    savedProduct= savedProduct.filter((ele,id)=>{
         if(id!==index)
           return true;
           else
            return false;
    });
    localStorage.setItem("saved_cart",JSON.stringify(savedProduct));
    showsavedProduct(savedProduct);
};

const  deleteData= (index)=>{
    productdata= productdata.filter((el,id)=>{
        if(id!==index)
         return true;
         else
          return false;
    });
    localStorage.setItem("cart",JSON.stringify(productdata));  
showProduct(productdata);
getTotal();
getCount();
};

const getCount = ()=>{
    let count= productdata.length;
    let count_tag= document.querySelector("#cart-product-count");
    count_tag.textContent=count;
};

const applyPromo= (code)=>{
    let estimateprice= document.querySelector("#estimated-price");
  if(code==="promo123" && promocodeflag===true)
  {
    let result=0;
  
     productdata.forEach((ele)=>{
    result= result + ele.price;     
    });
        let dis= Math.floor(result*(10/100));
        console.log(dis);
        let esti= result - dis;
        console.log(esti);
        estimateprice.textContent= esti;
     
    alert("Promo Applied");
    promocodeflag=false;
    promoinputbar.value="";
    apply_btn.setAttribute("disabled","true");
    
  }
   else{ 
     alert("This promo code can't be applied or already used");
     promoinputbar.value="";
     apply_btn.setAttribute("disabled","true");
   }

};

const getTotal= ()=>{
    let totalprice= document.querySelector("#item-total-price");
    let estimateprice= document.querySelector("#estimated-price");
    let result=0;
  
     productdata.forEach((ele)=>{
    result= result + ele.price;     
    });
    totalprice.textContent= result;
    console.log(result);
    
    
    
       estimateprice.textContent= result;

};



const el= (tag)=>{
    return document.createElement(tag);
};

const minusOP= (ob)=>{
    let c= +(ob["quantity"]||1);
    if(c==1)
      return;
    c--;
    let initial_dis= Math.floor(ob["cross_price"]/(ob["quantity"]||1));
    let initial_pri=Math.floor(ob["price"]/(ob["quantity"]||1));
    ob["quantity"]=c;
    let dis_price= +(ob["cross_price"]);
    let sellprice= +(ob["price"]);
    dis_price= dis_price -  initial_dis;
    sellprice= sellprice - initial_pri;
    ob["cross_price"]=dis_price;
    ob["price"]=sellprice;
    localStorage.setItem("cart",JSON.stringify(productdata));
     productdata= JSON.parse(localStorage.getItem("cart"));
    showProduct(productdata);
    getTotal();
    getCount();
}
const plusOP= (ob)=>{
   
    let c= +(ob["quantity"]||1);
    let dis_price= +(ob["cross_price"]);
    let sellprice= +(ob["price"]);
  
    c++;
    let initial_dis= Math.floor(ob["cross_price"]/(ob["quantity"]||1));
    let initial_pri=Math.floor(sellprice/(ob["quantity"]||1));
    
    ob["quantity"]=c;
  
    dis_price=  initial_dis * (ob["quantity"]||1);
    sellprice= initial_pri*(ob["quantity"]||1);
    
    ob["cross_price"]=dis_price;
    ob["price"]=sellprice;
    console.log("working");
    console.log(dis_price,sellprice);
    localStorage.setItem("cart",JSON.stringify(productdata));
    productdata= JSON.parse(localStorage.getItem("cart"));
   showProduct(productdata);
   getTotal();
   getCount();

};


const showProduct= (data)=>{
    productbox.innerHTML=null;
    data.forEach((ele,id) => {
       
      
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
        btn1.onclick= ()=>{
            deleteData(id);
        };
        let btn2= el("button");
        btn2.textContent="Save for Later";
        btn2.onclick= ()=>{
            savedProduct.push(ele);
            localStorage.setItem("saved_cart",JSON.stringify(savedProduct));
            deleteData(id);
            showsavedProduct(savedProduct);
        };
        div2.append(p1,p2,p3,btn1,btn2);

        let div3= el("div");
         
         let sp1= el("button");
         sp1.textContent="-";
         sp1.setAttribute("class","minus-count");
         sp1.onclick= ()=>{
          minusOP(ele);
         };
         let sp2= el("span");
         sp2.textContent=ele["quantity"]||1;
         sp2.setAttribute("class","product-count");

         let sp3= el("button");
         sp3.textContent="+";
         sp3.setAttribute("class","plus-count");
         sp3.onclick= ()=>{
            plusOP(ele);
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

const showsavedProduct = (data)=>{
    savedproduct.innerHTML=null;
   data.forEach((ele,id)=>{
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
    btn1.onclick= ()=>{
        deleteSavedData(id);
    };
    let btn2= el("button");
    btn2.textContent="Move to cart";
    btn2.onclick= ()=>{
     productdata.push(ele);
     localStorage.setItem("cart",JSON.stringify(productdata));
     deleteSavedData(id);
     showsavedProduct(savedProduct);
     showProduct(productdata);
     getTotal();
     getCount();
    };
   
    div2.append(p1,p2,p3,btn1,btn2);

    let div4= el("div3");
    let dis_price= el("p");
    dis_price.setAttribute("class","dis-price");
    dis_price.textContent=`INR ${ele.cross_price}`;
    let sell_price= el("p");
    sell_price.setAttribute("class","sell-price");
    sell_price.textContent=`INR ${ele.price}`;
   
    div4.append(dis_price,sell_price); 
    box.append(div1,div2,div4); 
  savedproduct.append(box);
   });
}

promoinputbar.oninput= ()=>{
    let apply_btn= document.querySelector("#apply_btn");
    if(promoinputbar.value!=="")
      {
    
       
        apply_btn.removeAttribute("disabled");
        
      }
      else
       {
         apply_btn.setAttribute("disabled","true");
       }
};


  apply_btn.onclick= ()=>{
         let text= promoinputbar.value;
         applyPromo(text);
  };

checkoutbtn.onclick= ()=>{
    let orderdetails= {
        username:user_name,
        
    };
};
