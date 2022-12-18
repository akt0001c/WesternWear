let baseurl=`http://localhost:3000/users`;
let eyeicon= document.querySelector("#user-pass+i");
let pass= document.querySelector("#user-pass");
let form= document.querySelector("form");
form.onsubmit= (event)=>{
 event.preventDefault();
 let user_email= document.querySelector("#user-email");
 let user_pass= document.querySelector("#user-pass");

 checkvalidUser(user_email.value,user_pass.value);
};

const checkvalidUser = async(e,p)=>{
   try{
       let res= await fetch(`${baseurl}?email=${e}&password=${p}`);
       let data= await res.json();
       console.log(data);
       if(data!==null)
        {
            alert(`Welcome ${data[0].name} ,you have sucessfully loged in.`);
            sessionStorage.setItem("user_detail",JSON.stringify(data));
            document.querySelector("#user-email").value="";
            document.querySelector("#user-pass").value="";
            window.location.href="index.html";
        }
        else
         {
            alert("User not Found");
            document.querySelector("#user-email").value="";
            document.querySelector("#user-pass").value="";
         }
   }
   catch(err){
    console.log(err);
    alert("user not found");
    document.querySelector("#user-email").value="";
    document.querySelector("#user-pass").value="";
   }

};

eyeicon.onclick= ()=>{
    console.log("check");
    if(eyeicon.classList.contains("fa-eye"))
     {
        eyeicon.classList.remove("fa-eye");
        eyeicon.setAttribute("class","fa fa-eye-slash");
        pass.setAttribute("type","password");
     }
      else
       {
          pass.setAttribute("type","text");
          eyeicon.setAttribute("class","fa fa-eye");
       }
  };