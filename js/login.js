document.getElementById('submit-btn').addEventListener('click',function(){
      const inputEmail = document.getElementById('email-input');
      const catchEmail = inputEmail.value;
      const inputPassword = document.getElementById('password-input');
      const catchPassword = inputPassword.value;
      if(catchEmail=='ajoypust@gmail.com'&&catchPassword=='ajoy140245biswas'){
            window.location.href='banking.html';
      }    
});