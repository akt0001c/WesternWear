let form = document.querySelector("form");
let pass= document.querySelector("#new-user-password");
let eyeicon= document.querySelector("#new-user-password+i")
let baseUrl= `http://localhost:3000/users`
console.log(form);

form.onsubmit= (event)=>{
  event.preventDefault();
  let new_user_name=document.querySelector("#new-user-name");
  let new_user_email=document.querySelector("#new-user-email"); 
  let new_user_pass= document.querySelector("#new-user-password");
  let new_user_country=document.querySelector("#new-user-country");

  passCheck= isPassValid(new_user_pass);
  if(passCheck===true)
  {
    fetchobData(new_user_name.value,new_user_email.value,new_user_pass.value,new_user_country.value);  
    
    alert("Account has been created with valid Password");
    new_user_name.value=null;
    new_user_pass.value=null;
    new_user_email.value=null;
    window.location.href="signin.html";
  }
  else
  {
    alert("Password must contains at least one Upper Letter,One Lower Letter and Special Characher,Try again.");
    new_user_name.value=null;
    new_user_pass.value=null;
    new_user_email.value=null;
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

const fetchobData= async(n,e,p,c)=>{
  try{
       let ob= new createObject(n,e,p,c);
       let res= await fetch(baseUrl,{
        method:'POST',
        body:JSON.stringify(ob),
        headers:{
          "Content-Type":"application/json",
        }
       });
  }
  catch(err){
     console.log(err);
     n="";
     e="";
     p="";
  }
};

function createObject(n,e,p,c)
{
  this.name=n;
  this.email=e;
  this.password=p;
  this.country=c;
}

const isPassValid= (pass)=>{
  let text= pass.value;
  let checker= isContainLower(text)&& isContainUpper(text) && isContainSpecialch(text) && isLengthValid(text) && isContainNum(text);
  if(checker===true)
    return true;
    else
    return false;
  
};

const isContainUpper = (text)=>{
  return /[A-Z]/.test(text);
};

const isContainLower= (text)=>{
  return /[a-z]/.test(text);
}
const isContainSpecialch = (text)=>{
  let specialch= "@#$";
  for(let i=0;i<text.length;i++)
  {
    if(text[i]===specialch[0] || text[i]===specialch[1] || text[i]===specialch[2])
        return true;
        
  }
    return false;
}

const isLengthValid= (text)=>{
  if(text.length>6)
     return true;
     else
     return false;
}

const isContainNum =(text)=>{
  return /[0-9]/.test(text);
}