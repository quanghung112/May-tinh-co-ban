function Show(value) {
    document.getElementById('output').value += value;
}

function Ketqua() {
    let Str = document.getElementById('output').value;
    result = eval(Str);
    document.getElementById('output').value = result;
}

function Dele() {
    let Str1 = document.getElementById('output').value;
    let Str2 = Str1.substr(0, Str1.length - 1);
    document.getElementById('output').value = Str2;
}
function Clear0() {
    document.getElementById('output').value='';
}



    
