////SECOND task;
//let moneyInHryvnas = +prompt('Введіть суму грошей, в гривнях, яку хочете обміняти?');
//let dollar = 25;
//let euro = 28; 
//let brent = dollar * 28; //лінь було переводити в грн
//let gold = 1750; // ціна за грам
//let exchangeQuery="";
//let exchangeItem; 
//let exchangeName;
//if (moneyInHryvnas < dollar){ //оскільки dollar найдешевший 
//    alert('У вас недостатньо грошей');
//} else{
//        exchangeQuery = prompt('Напишіть в які одиниці хочете конвертувати: долар, євро, нафта, золото')
//       // exchangeQuery = exchangeQuery.toLocaleLowerCase;  //не робить(
////        if(typeof moneyInHryvnas !== 'number' || typeof exchangeQuery !== 'string'){  //щось ця умова не працює;
////        alert('Щось пішло не так');      
////    }
//    switch (exchangeQuery){
//        case 'долар':
//            exchangeItem = Math.floor(moneyInHryvnas/dollar);
//            exchangeName = 'долар';
//            moneyInHryvnas = moneyInHryvnas%dollar;
//            alert(`Ви отримали ${exchangeItem} ${exchangeName}. Залишок на рахунку ${moneyInHryvnas} грн`);
//            break;
//        case 'євро':
//             exchangeItem = Math.floor(moneyInHryvnas/euro);
//            exchangeName = 'євро';
//            moneyInHryvnas = moneyInHryvnas%euro;
//            alert(`Ви отримали ${exchangeItem} ${exchangeName}. Залишок на рахунку ${moneyInHryvnas} грн`);
//            break;
//        case 'нафта':
//            exchangeItem = Math.floor(moneyInHryvnas/brent);
//            exchangeName = 'барелів нафти';
//            moneyInHryvnas = moneyInHryvnas%brent;
//            alert(`Ви отримали ${exchangeItem} ${exchangeName}. Залишок на рахунку ${moneyInHryvnas} грн`);
//            break;
//        case 'золото':
//            exchangeItem = Math.floor(moneyInHryvnas/gold);
//            exchangeName = 'грам золота';
//            moneyInHryvnas = moneyInHryvnas%gold;
//            alert(`Ви отримали ${exchangeItem} ${exchangeName}. Залишок на рахунку ${moneyInHryvnas} грн`);
//            break;    
//        }
//             
//    }



////THIRD TASK
//let bill = +prompt('Введіть суму Вашого замовлення');
//let onePercentSale = 0.01;
//let fivePercentSale = 0.05;
//let tenPercentSale = 0.1;
//let sale = 100; // я використав дану змінну, щоб вивести в алерті величину знижки; 
//let present = 200;
//if (bill <= 0 || typeof bill !== 'number'){   //провірка typeof не працює(тому використав звичайний else без умови на 68 строці)
//    alert('Це не можливо');
//} else {
//    if (bill >= 1 && bill < 500){
//        bill -= bill*onePercentSale;
//        sale *= onePercentSale;
//    }else if (bill >= 500 && bill < 1000){
//        bill -= bill*fivePercentSale;
//        sale *= fivePercentSale;
//    } else if (bill > 1000){
//        bill -= bill*tenPercentSale;
//        sale *=tenPercentSale;
//    } else { alert('Ви ввели не правильний тип ')} // той самий else без умови про який йшлося на 56 строці
//    if (sale === 10){
//    alert(`Вам потрібно сплатити ${bill} з урахуванням знижки у ${sale}%! Ура, Ви отримуєте подарунковий сертифікат на суму ${present} гривень`);    
//    } else if (sale < 10){ // в цій вітці використовую if щоб ця умова не спрацьовувала в тому разі, коли юзер введе стрінгу, а не число на самому початку;
//    alert(`Вам потрібно сплатити ${bill} з урахуванням знижки у ${sale}%`);
//    }
//}

// //FOURTH TASK;
//let questions = ['Скільки буде 2+2 ?', 'Скільки буде 5*2 ?', 'Чому дорівнює 5 в квадраті', 'Скільки буде 20/4 ?', 'Що більше 0.2 чи 0.5 ?'];
//let answer = [4, 10, 25, 5, 0.2];
//let userAnswer;
//let flag = 0;
//for (let i =0; i < questions.length; i++){
//    userAnswer = +prompt(questions[i]);
//    for (let a =0; a < answer.length; a++){
//        if (userAnswer === answer[a]){
//            flag++ ;
//        }
//    }
//}    
//if (flag === 5){
//    alert(`Ви відповіли правильно на ${flag } питань та отримали ${flag + 1} балів`); 
//} else {
//    alert(`Ви відповіли правильно на ${flag} питань та отримали ${flag} балів`);
//}

////FIVE TASK
//let userNum = prompt('Введіть ваше число');
//userNum.toString();
//alert(userNum.length);
//let flag = 0;
//for (let i = 0; i < userNum.length; i++){
//    for (let a = i+1; a < userNum.length; a++){
//        if(userNum[i] == userNum[a]){
//            flag++;
//        }    
//    }
//}
//
//alert(`Збігів: ${flag}`);

////six TASK
//let keySymbol = "1234567890-=";
//let engResultSymbol = "!@#$%^&*()_+";
//let ukrResultSymbol = '!"№;%:?*()_+';
//let UkrOrEng = prompt('Вкажіть розкладку клавіатури ENG або UKR');
//UkrOrEng = UkrOrEng.toUpperCase();
//let userNumber = prompt('Введіть значення');
//if (UkrOrEng == 'ENG'){
//    for (let i=0; i < keySymbol.length; i++){
//            if (userNumber == keySymbol[i]){
//                alert(engResultSymbol[i]);
//            }                
//    }
//} else if (UkrOrEng == 'UKR'){
//    for (let i=0; i < keySymbol.length; i++){
//            if (userNumber == keySymbol[i]){
//                alert(ukrResultSymbol[i]);
//            }               
//    }
//}else {
//                alert('Помилка');
//            }  