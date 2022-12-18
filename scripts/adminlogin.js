let baseurl=`http://localhost:3000/admin`;
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
       if(data.length!==0)
        {
            alert(`Welcome Admin ,you have sucessfully loged in.`);
           
            document.querySelector("#user-email").value="";
            document.querySelector("#user-pass").value="";
            window.location.href="./admin/admin.html";
        }
        else
         {
            alert("Invalid Credential");
            document.querySelector("#user-email").value="";
            document.querySelector("#user-pass").value="";
         }
   }
   catch(err){
    console.log(err);
    alert("Something went wrong");
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