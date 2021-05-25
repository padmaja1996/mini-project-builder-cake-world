var layer =0;
var total = 0;

var choctotal = 0;
var strawtotal=0;
var buttertotal=0;
var vanillatotal=0;
var redtotal=0;
var layer1 =document.getElementById('layer1');
var layer2 =document.getElementById('layer2');
var layer3 =document.getElementById('layer3');
var layer4 =document.getElementById('layer4');
var layer5 =document.getElementById('layer5');
var candle =document.getElementById('candle');
var Choclatekey = document.getElementById('Chocolatekey');
var Strawberrykey =document.getElementById('Strawberrykey');
var Butterscotchkey =document.getElementById('Butterscotchkey');
var Vanillakey =document.getElementById('Vanillakey');
var Redvelvetkey =document.getElementById('Redvelvetkey');
var buykey =document.getElementById('buykey');

function addChocolate(){
    layer++;
    total += 300;
    choctotal +=300;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Choclatekey.style.top="40px";
            Choclatekey.style.height="45px";
            Choclatekey.style.color='rgb(65,14,14)';
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Choclatekey.style.top="40px";
            Choclatekey.style.height="45px";
            Choclatekey.style.color='rgb(65,14,14)'; 
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Choclatekey.style.top="40px";
            Choclatekey.style.height="45px";
            Choclatekey.style.color='rgb(65,14,14)'; 
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Choclatekey.style.top="40px";
            Choclatekey.style.height="45px";
            Choclatekey.style.color='rgb(65,14,14)'; 
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(65,14,14)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Choclatekey.style.top="40px";
            Choclatekey.style.height="45px";
            Choclatekey.style.color='rgb(65,14,14)'; 
        break;
        default:
            total -= 300;
            choctotal +=300;
            alert("sorry....Maximum only 5 layerscan be added!")
    }
    if(layer<=5)
    document.getElementById('ChocolateBill').innerHTML = 'Chocolate --------- '+ choctotal;
}

function addStrawberry(){
    layer++;
    total += 100;
    strawtotal +=100;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Strawberrykey.style.top="40px";
            Strawberrykey.style.height="45px";
            Strawberrykey.style.color='rgb(240,75,103)';
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Strawberrykey.style.top="40px";
            Strawberrykey.style.height="45px";
            Strawberrykey.style.color='rgb(240,75,103)'; 
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Strawberrykey.style.top="40px";
            Strawberrykey.style.height="45px";
            Strawberrykey.style.color='rgb(240,75,103)'; 
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Strawberrykey.style.top="40px";
            Strawberrykey.style.height="45px";
            Strawberrykey.style.color='rgb(240,75,103)'; 
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(240,75,103)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Strawberrykey.style.top="40px";
            Strawberrykey.style.height="45px";
            Strawberrykey.style.color='rgb(240,75,103)'; 
        break;
        default:
            total -= 100;
            strawtotal -=100;
            alert("sorry....Maximum only 5 layerscan be added!")
    }
    if(layer<=5)
    document.getElementById('StrawberryBill').innerHtml = 'Strawberry --------- '+strawtotal;
}

function addButterscotch(){
    layer++;
    total += 100;
    buttertotal +=100;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(255,242,128)';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Butterscotchkey.style.top="40px";
            Butterscotchkey.style.height="45px";
            Butterscotchkey.style.color='rgb(255,242,128)';
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(255,242,128)';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Butterscotchkey.style.top="40px";
            Butterscotchkey.style.height="45px";
            Butterscotchkey.style.color='rgb(255,242,128)'; 
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(255,242,128)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Butterscotchkey.style.top="40px";
            Butterscotchkey.style.height="45px";
            Butterscotchkey.style.color='rgb(255,242,128)'; 
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(255,242,128)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Butterscotchkey.style.top="40px";
            Butterscotchkey.style.height="45px";
            Butterscotchkey.style.color='rgb(255,242,128)'; 
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(255,242,128)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Butterscotchkey.style.top="40px";
            Butterscotchkey.style.height="45px";
            Butterscotchkey.style.color='rgb(255,242,128)'; 
        break;
        default:
            total -= 100;
            strawtotal -=100;
            alert("sorry....Maximum only 5 layerscan be added!")
    }
    if(layer<=5)
    document.getElementById('ButterscotchBill').innerHtml = 'ButterscotchBill --------- '+buttertotal;
}

function addVanilla(){
    layer++;
    total += 250;
    vanillatotal +=250;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(240, 239, 235)';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Vanillakey.style.top="40px";
            Vanillakey.style.height="45px";
            Vanillakey.style.color='rgb(240, 239, 235)';
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(240, 239, 235)';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Vanillakey.style.top="40px";
            Vanillakey.style.height="45px";
            Vanillakey.style.color='rgb(240, 239, 235)'; 
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(240, 239, 235)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Vanillakey.style.top="40px";
            Vanillakey.style.height="45px";
            Vanillakey.style.color='rgb(240, 239, 235)'; 
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(240, 239, 235)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Vanillakey.style.top="40px";
            Vanillakey.style.height="45px";
            Vanillakey.style.color='rgb(240, 239, 235)'; 
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(240, 239, 235)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Vanillakey.style.top="40px";
            Vanillakey.style.height="45px";
            Vanillakey.style.color= 'rgb(240, 239, 235)'; 
        break;
        default:
            total -= 100;
            vanillatotal -=100;
            alert("sorry....Maximum only 5 layerscan be added!")
    }
    if(layer<=5)
    document.getElementById('VanillaBill').innerHtml = 'VanillaBill --------- '+vanillatotal;
}

function addRedvelvet(){
    layer++;
    total += 350;
    redtotal +=350;
    switch(layer){
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'rgb(243,55,55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-80px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Redvelvetkey.style.top="40px";
            Redvelvetkey.style.height="45px";
            Redvelvetkey.style.color='rgb(243,55,55)';
        break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'rgb(243,55,55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-120px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Redvelvetkey.style.top="40px";
            Redvelvetkey.style.height="45px";
            Redvelvetkey.style.color='rgb(243,55,55)'; 
        break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'rgb(243,55,55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-160px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Redvelvetkey.style.top="40px";
            Redvelvetkey.style.height="45px";
            Redvelvetkey.style.color='rgb(243,55,55)'; 
        break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'rgb(243,55,55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-200px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Redvelvetkey.style.top="40px";
            Redvelvetkey.style.height="45px";
            Redvelvetkey.style.color='rgb(243,55,55)'; 
        break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'rgb(243,55,55)';
            candle.style.visibility = 'hidden';
            candle.style.top="-240px";
            document.getElementById('total').innerHTML = ' ';
            buykey.value='Buy';
            Redvelvetkey.style.top="40px";
            Redvelvetkey.style.height="45px";
            Redvelvetkey.style.color= 'rgb(243,55,55)'; 
        break;
        default:
            total -= 350;
            redtotal -=350;
            alert("sorry....Maximum only 5 layerscan be added!")
    }
    if(layer<=5)
    document.getElementById('RedvelvetBill').innerHtml = 'RedvelvetBill --------- '+redtotal;
}

function buy(){
    candle.style.visibility='visible';
    document.getElementById('total').innerHtml = 'Total -------- '+total;
    buykey.value='PAY: '+total;
}