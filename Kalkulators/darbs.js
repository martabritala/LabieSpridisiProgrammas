// no pogas spiešanas ieliek vietiņā izvēlēto ciparu
function getNumber(num){
    let input_ver=document.getElementById('input');
    switch(num){
        case 1:
            input_ver.value+='1';
            break;
        case 2:
            input_ver.value+='2';
            break;
        case 3:
            input_ver.value+='3';
            break;
        case 4:
            input_ver.value+='4';
            break;
        case 5:
            input_ver.value+='5';
            break;
        case 6:
            input_ver.value+='6';
            break;
        case 7:
            input_ver.value+='7';
            break;
        case 8:
            input_ver.value+='8';
            break;
        case 9:
            input_ver.value+='9';
            break;
        case 0:
            input_ver.value+='0';
            break;
        }
}
//CE -notīra ekrānu - uzliekot virsū tukšumu
function clearScreen(){
    document.getElementById('input').value="";
    document.getElementById('atbilde').value="";
}
//matemātiskās zīmes, to pievienošana
function getZime(operand){
    let input_ver=document.getElementById('input');
    switch(operand){
        case '+':
            input_ver.value +='+';
        break;
        case '-':
                input_ver.value +='-';
        break;
        case '*':
                input_ver.value +='*';
        break;
        case '/':
                input_ver.value +='/';
        break;
    }
}
//nodzēš pa vienam simbolam, ja nav pareizi uzrakstīts (KAPĒC BRĪŽAM STRĀDĀ< BRĪŽAM NE?)
function dzest(){
    let input_ver=document.getElementById('input');
    let cip=input_ver.value;
    if (cip.length>0){
        cip=cip.substring(0,cip.length-1);
        input_ver.value = cip;    
    }  
}


//matemātiskā rēķināšana
function rekini(){
    let input_ver=document.getElementById('input');
    rez=+eval(input_ver.value);
    document.getElementById('atbilde').value='='+rez;
}