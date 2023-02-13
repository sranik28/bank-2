document.getElementById('login-btn').addEventListener('click',function(){
   const inputfeild = document.getElementById('login-btn');
   const email = inputfeild.value;
   const secoundInputFeild = document.getElementById('input-password');
   const password = secoundInputFeild.value;
   if(email === "sranik20@gmail.com" && password === 'Anikanik'){

      window.location.href ='money.html'
   }
   
   else{
      alert('dukte demu na')
   }
})