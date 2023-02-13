document.getElementById("deposit-button").addEventListener('click',function(){
    const depositInput = document.getElementById('input-deposit');
    const depositInputString = depositInput.value;
    const newDeposit = parseFloat(depositInputString);
    depositInput.value = '';
    if(isNaN(newDeposit)){
        document.getElementById('myAudio').play();
        alert('enter a number');

        document.getElementById('myAudio').pause();
        return;
    }
    if(newDeposit < 0 ){
        document.getElementById('myAudio').play();
        alert('enter a positive number');

        document.getElementById('myAudio').pause();
        return;
    }
    
    const depositAmound = document.getElementById('deposit-total');
    const depositAmoundString = depositAmound.innerText;
    const newDepositAmound = parseFloat(depositAmoundString);
    const currentDipositAmount = newDepositAmound + newDeposit;
    depositAmound.innerText = currentDipositAmount;

    const totalAmound = document.getElementById('total-amound');
    const totalAmoundString = totalAmound.innerText;
    const newTotalAmound = parseFloat(totalAmoundString);
    const amound = currentDipositAmount+newTotalAmound;
    totalAmound.innerText = amound;   
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('input-withdraw');
    const withdrawInputString = withdrawInput.value;
    const newWithdrawInput = parseFloat(withdrawInputString);
    withdrawInput.value = '';
    if(isNaN(newWithdrawInput)){
        document.getElementById('myAudio').play();
        alert('enter a number');

        document.getElementById('myAudio').pause();
        return;
    }
    if(newWithdrawInput < 0 ){
        document.getElementById('myAudio').play();
        alert('enter a positive number');
        
        document.getElementById('myAudio').pause();
        return;
    }
    
    const withdrawAmount = document.getElementById('withdraw-total');
    const withdrawAmountString = withdrawAmount.innerText;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    const currentWithdrawAmount =newWithdrawAmount + newWithdrawInput;
    withdrawAmount.innerText = currentWithdrawAmount;
    

    const afterWithdrawAmount = document.getElementById('total-amound');
    const afterWithdrawAmountString = afterWithdrawAmount.innerText;
    const newAfterWithdrawAmount = parseFloat(afterWithdrawAmountString);
    const currenTotalAmount = newAfterWithdrawAmount - currentWithdrawAmount;
    afterWithdrawAmount.innerText = currenTotalAmount
})