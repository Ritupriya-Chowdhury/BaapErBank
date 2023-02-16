function Balance(){
    const currentBalanceField=document.getElementById('current-Balance');
    const currentStringBalanceValue=currentBalanceField.innerText ;
    const currentBalanceValue=parseFloat(currentStringBalanceValue);
    return currentBalanceValue;
}
function depositWithdraw(depositOrWithdraw){
    const currentDepositField=document.getElementById(depositOrWithdraw);
    const addedStringDeposit=currentDepositField.value ;
    const addedDeposit=parseFloat(addedStringDeposit);
    currentDepositField.value='';
    return addedDeposit;
}
function textDepositWithdraw(textDepositOrWithdraw){
    const currentDepositField=document.getElementById(textDepositOrWithdraw);
    const currentStringDepositValue=currentDepositField.innerText ;
    const currentDepositValue=parseFloat(currentStringDepositValue);
    return currentDepositValue;
}


document.getElementById('btn-deposit').addEventListener('click',function(){
    
    const addedDeposit=depositWithdraw('input-deposit');
        document.getElementById('current-deposit').innerText=addedDeposit+textDepositWithdraw('current-deposit');
    
    document.getElementById('current-Balance').innerText=addedDeposit+Balance();
    })


    document.getElementById('btn-withdraw').addEventListener('click',function(){
    
        const addedWithdraw=depositWithdraw('input-withdraw');
            document.getElementById('current-withdraw').innerText=addedWithdraw+textDepositWithdraw('current-withdraw');
        
        document.getElementById('current-Balance').innerText=Balance()-addedWithdraw;
        })

    
    


