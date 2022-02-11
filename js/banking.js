document.getElementById('deposite-btn').addEventListener('click',function(){
    // get deposite value
    const depositeInput =document.getElementById('deposite-input');
    const depositeValueText = depositeInput.value;
    const depositeValueAmount = parseFloat(depositeValueText);
    const depositeShow = document.getElementById('show-deposite');
    const previousDepositeValueText = depositeShow.innerText;
    const previousDepositeValueAmount = parseFloat(previousDepositeValueText);
    const depositeTotalValue = previousDepositeValueAmount + depositeValueAmount;

        depositeShow.innerText=depositeTotalValue;

        
    // get balance value
    const balanceShow = document.getElementById('balance-show');
    const balanceShowText = balanceShow.innerText;
    const balanceValue =parseFloat(balanceShowText);
    const balanceTotalAmount = balanceValue+depositeValueAmount;
    balanceShow.innerText=balanceTotalAmount;

    // clear deposite input value
    depositeInput.value = '';
});
// withdraw get
document.getElementById('withdraw-btn').addEventListener('click',function(){
    // withdraw input
    const withdrawBalance = document.getElementById('withdraw-input');
    const withdrawBalanceText = withdrawBalance.value;
    const withdrawAmount =parseFloat(withdrawBalanceText);
    // balance 
    const balanceShow = document.getElementById('balance-show');
    const balanceShowText = balanceShow.innerText;
    const balanceValue =parseFloat(balanceShowText);

    const withdrawTotalBalance = balanceValue - withdrawAmount; 
        balanceShow.innerText = withdrawTotalBalance;
      
    // show withdraw
    const showWithdraw = document.getElementById('show-withdraw');
    const previousShowWithdrawText = showWithdraw.innerText;
    const previousShowAmount = parseFloat(previousShowWithdrawText);
    showWithdraw.innerText = withdrawAmount+previousShowAmount;
    // clear
    withdrawBalance.value = '';

})