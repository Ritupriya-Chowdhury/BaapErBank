function Balance(){
    const currentBalanceField=document.getElementById('current-Balance');
    const currentStringBalanceValue=currentBalanceField.innerText ;
    const currentBalanceValue=parseFloat(currentStringBalanceValue);
    return currentBalanceValue;
}

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const currentWithdrawField=document.getElementById('current-withdraw');
    const currentWithdrawString=currentWithdrawField.innerText ;
    const currentWithdrawValue=parseFloat(currentWithdrawString);

    const withdrawField=document.getElementById('input-withdraw');
    const addedStringWithdraw=withdrawField.value ;
    const addedWithdraw=parseFloat(addedStringWithdraw);
    
    
   
    currentWithdrawField.innerText=addedWithdraw+currentWithdrawValue;
    withdrawField.value='';
    document.getElementById('current-Balance').innerText=Balance()-addedWithdraw;
    })
