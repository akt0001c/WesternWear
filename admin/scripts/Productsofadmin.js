let url = "http://localhost:3000/admin";

async function getdata(){
    let res = await fetch(url);
    res = await res.json();
    console.log(res);
    append(res);
}
getdata();

function append(data){
    let cont = document.getElementById("admin_container");
    cont.innerHTML=null;
    data.forEach((el)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image;
        let tag = document.createElement("p");
        tag.innerText=el.tag;
        let pn = document.createElement("p");
        pn.innerText=el.product_name;
        let cp = document.createElement("p");
        cp.innerHTML=`<s>INR ${el.cross_price}/-<s>`;
        let p = document.createElement("h2");
        p.innerText=`INR ${el.price}/- only`;
        p.style.color="red";
        let d = document.createElement("p");
        d.innerText =`Discount ${el.discount}%` ;
        let sdiv = document.createElement("div");
        sdiv.setAttribute("id","du");
        let btndelete = document.createElement("button");
        btndelete.innerText = "DELETE";
        btndelete.onclick=()=>{
            deletebtn(el.id);
        }
        let btnupdate = document.createElement("button");
        btnupdate.innerText = "UPDATE";
        btnupdate.onclick=()=>{
            updatebtn(el.id,el.product_name);
        }
        sdiv.append(btndelete,btnupdate)
        div.append(img,tag,pn,cp,p,d,sdiv);
        cont.append(div);
    })
}

const updatebtn = async (id,name)=>{
    let newprice = window.prompt(`Enter New Price Of ${name}`);
    let newdiscount = window.prompt(`Enter New Discount Rate for ${name}`);
    let data = {price : +newprice,
                discount: +newdiscount};
    await fetch(`${url}/${id}`,{
        method:"PATCH",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json"
        }
    })
    getdata();
}

const deletebtn = async (id)=>{
  await fetch(`${url}/${id}`,{
  method:"DELETE"
  })
  getdata();
}

const sortlth =async ()=>{
        let res = await fetch(`${url}?_sort=price&_order=asc`);
        res = await res.json();
        append(res);
}
document.getElementById("sortlth").addEventListener("click",sortlth)


const sorthtl =async ()=>{
    let res = await fetch(`${url}?_sort=price&_order=desc`);
    res = await res.json();
    append(res);
}
document.getElementById("sorthtl").addEventListener("click",sorthtl)

const sortdis =async ()=>{
    let res = await fetch(`${url}?_sort=discount&_order=asc`);
    res = await res.json();
    append(res);
}
document.getElementById("sortdis").addEventListener("click",sortdis)