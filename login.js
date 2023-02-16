document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('input-email');
    const email=emailField.value ;
    const passField=document.getElementById('input-pass');
    const pass=passField.value ;
     if(email=="ritupriya@gmail.com" && pass=="porinita18") 
     window.location.href ='money.html';
     else alert('invalid email or password');
})
