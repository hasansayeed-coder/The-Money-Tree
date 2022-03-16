function getInput(targetedId) {

    // console.log(targetedId);

    const inputField = document.getElementById(targetedId);
    let inputValue = parseInt(inputField.value);

    return inputValue;
}

function alertTheUser(target, targetValue) {

    // alert("i am running");

    if (targetValue <= 0) {

        if (target == 'Income') {
            alert('Income alert : \nEveryday is a bank account, and time is our currency.');
        }

        if (target == 'Food') {
            alert('Food alert : \nGoing without food or water will kill the body');
        }

        if (target == 'Rent') {
            alert('Rent alert : \nHome is not a place…its a feeling.');
        }

        if (target == 'Cloths') {
            alert('Cloth alert : \nFashion is the armor to survive the reality of everyday life.');
        }

        return;
    }
}

function getFromSpan(targetedId) {

    let remainingBalanceText = document.getElementById(targetedId).innerText;

    let remainingBalance = parseInt(remainingBalanceText);

    return remainingBalance;

}

function setValue(targetedId, targetedValue) {

    const targetedField = document.getElementById(targetedId);
    targetedField.innerText = targetedValue;

}


function placeNull(targetedId) {
    const nullField = document.getElementById(targetedId);
    nullField.value = '';
}

function placeSpanNUll(targetedId) {
    const nullField = document.getElementById(targetedId);
    nullField.innerText = '';
}

document.getElementById('calculate-btn').addEventListener('click', function () {



    // handle income input

    const incomeValue = getInput('income-input');


    // alert the user for value 0 or less than 0

    alertTheUser('Income', incomeValue);

    // handle food input

    const foodValue = getInput('food-input');

    // alert the user for value 0 or less than 0

    alertTheUser('Food', foodValue);

    // handle rent input

    const rentValue = getInput('rent-input');

    // alert the user for value 0 or less than 0

    alertTheUser('Rent', rentValue);



    // handle cloth input


    const clothValue = getInput('cloths-input');

    // alert the user for value 0 or less than 0

    alertTheUser('Cloths', clothValue);

    //total expense amount

    const totalExpenseAmount = foodValue + rentValue + clothValue;

    // cheking if all the inpus are given properly 

    if (isNaN(totalExpenseAmount)) {
        alert("Please Enter Positive Number Inputs.");
        return;

    }

    if (totalExpenseAmount > incomeValue) {
        let notify = document.getElementById('expense-notify');
        notify.style.display = 'block';
        return;
    }

    // set total Expense amount

    setValue('total-expense-amount', totalExpenseAmount);


    // // remaining balance amount 

    const remainingBalance = incomeValue - totalExpenseAmount;

    setValue('balance', remainingBalance);



});

document.getElementById('saveBtn').addEventListener('click', function () {

    // handle income input

    let incomeValue = getInput('income-input');

    // handle saving amount

    let savePercentageAmount = getInput('save-percentage');

    // calculating saving amount 


    let savingAmount = savePercentageAmount * incomeValue;

    savingAmount /= 100;

    // setValue('saved-amount', savingAmount)

    // getting remaining balance

    let remainingBalance = getFromSpan('balance');

    // calculating  balance After Saving

    let balanceAfterSaving = remainingBalance - savingAmount;

    if (balanceAfterSaving < 0) {
        alert("You don't have enough money to save");

        return;
    }

    else {

        setValue('saved-amount', savingAmount);
        setValue('balanceaftersaving', balanceAfterSaving);
    }



});

document.getElementById('recalculate-btn').addEventListener('click', function () {

    // Place null in the input field

    placeNull('income-input');

    // Place null in the input field

    placeNull('food-input');

    // Place null in the input field

    placeNull('rent-input');

    // Place null in the input field

    placeNull('cloths-input');

    //Place null in the total expenses span place

    placeSpanNUll('total-expense-amount');

    //Place null in the Balance span place

    placeSpanNUll('balance');

    // Place null in the input field

    placeNull('save-percentage');

    //Place null in the saving amount span place

    placeSpanNUll('saved-amount');

    //Place null in the remainig Balance span place

    placeSpanNUll('balanceaftersaving');

    //reset the notify 

    let notify = document.getElementById('expense-notify');
    notify.style.display = 'none';

});
