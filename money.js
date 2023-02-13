document.getElementById("deposit-button").addEventListener('click',function(){
    const depositInput = document.getElementById('input-deposit');
    const depositInputString = depositInput.value;
    const newDeposit = parseFloat(depositInputString);
    depositInput.value = '';
    
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

    const withdrawAmount = document.getElementById('withdraw-total');
    const withdrawAmountString = withdrawAmount.innerText;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    const currentWithdrawAmount = newWithdrawInput + newWithdrawAmount;
    withdrawAmount.innerText = currentWithdrawAmount;

    const afterWithdrawAmount = document.getElementById('total-amound');
    const afterWithdrawAmountString = afterWithdrawAmount.innerText;
    const newAfterWithdrawAmount = parseFloat(afterWithdrawAmountString);
    const currenTotalAmount = newAfterWithdrawAmount - newWithdrawAmount;
    afterWithdrawAmount.innerText = currenTotalAmount
})