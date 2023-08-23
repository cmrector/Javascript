//String
var strInput = document.getElementById('string');

function chkString() {
    var strValue = strInput.value;
    var strPat1 = /shoe/i;
    var strPat2 = /^web/;
    var strPat3 = /drink$/;
    var strPat4 = /[a-zA-Z]{3}/;

    var result = strPat4.test(strValue);
    document.getElementById('stringAns').innerHTML = result;
}

strInput.addEventListener('blur', chkString, false);

//Phone number
var phoneInput = document.getElementById('phone');

function chkPhone() {
    var phoneValue = phoneInput.value;

    var phonePat = /^([\(]?)\d{3}([-\). ]?|\) )\d{3}[-. ]?\d{4}$/;

    //var phonePat = / [0-9]{3}   [0-9]{3}   [0-9]{4} /;

    var result = phonePat.test(phoneValue);
    document.getElementById('phoneAns').innerHTML = result;

}


phoneInput.addEventListener('blur', chkPhone, false);