

// CREARE UNA FORM UTENTE (NOME KM E FASCIA D'ETA) E STAMPARE

const formBtn = document.getElementById('form-btn');
console.log(formBtn);
formBtn.addEventListener('click',
    function() {
        const userName = document.getElementById('user-name').value;
        console.log(userName);
        const userKm = parseInt(document.getElementById('user-km').value);
        console.log(userKm);
        let userAge = document.getElementById('user-age').value;
        console.log(userAge);

        //visualizzo nella pagine le risposte 

        // nome

        const nameResult = document.getElementById('name-result');
        nameResult.innerHTML = `${userName}`;

        // offerta
        const nameOffer = document.getElementById('discount-result');
        nameOffer.innerHTML = `${userAge}`;

        //carrozza
        const randomPlace = Math.floor(Math.random() * 10 + 1);
        console.log(randomPlace);
        const numberPlace = document.getElementById('place-result')
        numberPlace.innerHTML = `${randomPlace}`;
        
        //codice cp
        const randomCode = Math.floor(Math.random() * 999 + 9000);
        console.log(randomCode);
        const numberCode = document.getElementById('code-result')
        numberCode.innerHTML = `${randomCode}`;

        // costo biglietto

        //kilometraggio

        let price = (userKm * 0.21);
        console.log(price);

        //sconto 

        let discount;

        if (userAge === 'junior') {
            discount = (price * 0.2).toFixed(2);
            console.log(`your discount is ${discount}`);
         } else if (userAge === 'senior') {
             discount = (price * 0.4).toFixed(2);
             console.log(`your discount is ${discount}`);
         } else {
             discount = 0;
             console.log(`you have to pay a full price`);
         }

         // prezzo da pagare

         const finalPrice = (price - discount).toFixed(2);
         console.log(finalPrice);

         //stampa costo biglietto
         const finalPricePrint = document.getElementById('price-result');
         finalPricePrint.innerHTML = `${finalPrice}`;
       
        const resultBlock = document.querySelector('.result');
        resultBlock.classList.remove('d-none');
        
    }
)

const deleteBtn = document.getElementById('delete-btn');
console.log(deleteBtn);
deleteBtn.addEventListener('click',
    function() {
        const resultBlock = document.querySelector('.result');
        resultBlock.classList.add('d-none');

        const userName = document.getElementById('user-name')
        userName.value = "";
        const userKm = document.getElementById('user-km');
        userKm.value = "";
        let userAge = document.getElementById('user-age');
        userAge.value = "";
    }
)