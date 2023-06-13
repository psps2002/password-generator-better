document.addEventListener("DOMContentLoaded",function(){

        //datasets
    const capitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const smalls = "abcdefghijklmnopqrstuvwxyz";
    const digits= "1234567890"
    const symbols = "!@#$%^&*()_+"

    //selectors
    let lengthInput = document.getElementById('length');
    let upperInput = document.getElementById('uppercase');
    let lowerInput = document.getElementById('lowercase');
    let numberInput = document.getElementById('numbers');
    let symbolInput = document.getElementById('symbols');
    let answer = document.getElementById('answer');

    const getRandomData = (dataset) =>{
        return dataset[Math.floor(Math.random()* dataset.length)]
    }

    function generatePassword  (password = ""){
        if (upperInput.checked){
            password += getRandomData(capitals);
        }
        if (lowerInput.checked){
            password += getRandomData(smalls);
        }
        if (numberInput.checked){
            password += getRandomData(digits);
        }
        if (symbolInput.checked){
            password += getRandomData(symbols);
        }
        if(password.length< lengthInput.value){
           return generatePassword(password);
        }
        if(password.length > lengthInput.value){
            password = password.slice(0, lengthInput.value);
        }
    answer.innerText = password;
    }

    generatePassword();

    document.getElementById('btn').addEventListener('click',function(){
         generatePassword();
    })


})