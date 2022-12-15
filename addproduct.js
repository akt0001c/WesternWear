{/* <div id="adminproduct">
     <h1>Add Product's</h1>
     <input id="admin_img" type="text" placeholder="Enter Image"><br><br>
     <input id="admin_cat" type="text" placeholder="Enter Category"><br><br>
     <input id="admin_tag" type="text" placeholder="Enter Tag"><br><br>
     <input id="admin_pname" type="text" placeholder="Enter Product Name"><br><br>
     <input id="admin_cp" type="text" placeholder="Enter Price"><br><br>
     <input id="admin_p" type="text" placeholder="Enter Price After Discount"><br><br>
     <input id="admin_d" type="text" placeholder="Enter Discount %"><br><br>
     <button id="btnadd">Add Product</button>
    </div> */}

   let url = "http://localhost:3000/admin"
    document.getElementById("btnadd").addEventListener("click", async function(){
       let image = document.getElementById("admin_img").value;
        let category = document.getElementById("admin_cat").value;
        let tag = document.getElementById("admin_tag").value;
        let product_name = document.getElementById("admin_pname").value;
        let cross_price = document.getElementById("admin_cp").value;
        let price = +document.getElementById("admin_p").value;
        let  discount = +document.getElementById("admin_d").value;
        let obj={
            image : document.getElementById("admin_img").value,
            category : document.getElementById("admin_cat").value,
            tag : document.getElementById("admin_tag").value,
            product_name : document.getElementById("admin_pname").value,
            cross_price : document.getElementById("admin_cp").value,
            price : +document.getElementById("admin_p").value,
            discount : +document.getElementById("admin_d").value,
        }
        if(image===""|| category===""|| tag===""|| product_name==="" || cross_price==="" || price==="" || discount===""){
            alert("Please Fill the Required Fields!");
        }else{
            let res = await fetch(url,{
                method:"POST",
                body:JSON.stringify(obj),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            res = await res.json();
            console.log(res);
            window.location.href="Productsofadmin.html"
            document.getElementById("admin_img").value="";
         document.getElementById("admin_cat").value="";
         document.getElementById("admin_tag").value="";
         document.getElementById("admin_pname").value="";
         document.getElementById("admin_cp").value="";
        document.getElementById("admin_p").value="";
         document.getElementById("admin_d").value="";
        }
    
    })
   


    