function Equals(){
    var userNumber = document.getElementById("UserNumber").value;
    var userNumber2 = document.getElementById("UserNumber2").value;
    var Symbol = document.getElementById("Symbol").value;
    var message;
    if(Symbol == "+"){
        message = parseFloat(userNumber) + parseFloat(userNumber2);
    }else if (Symbol == "-")
    {
        message = parseFloat(userNumber) - parseFloat(userNumber2);
    }else if (Symbol == "*"){
        message = parseFloat(userNumber) * parseFloat(userNumber2);
    }
    else{
        message = parseFloat(userNumber)/parseFloat(userNumber2);
    }
    Foo(message);
    createbutton();
}
function createbutton(){
    let buttond = document.createElement('button');
    buttond.Id = "continue";
    buttond.className = "buttons";
    buttond.innerHTML = "Przejdz do kolejnej strony";
    buttond.onclick = function(){
        location.href = "pages/page2.html";
    };
    document.body.appendChild(buttond);
}
function Foo(message)
{
    let div2 = document.createElement('div');
    div2.Id = "Animationnumber";
    div2.className = "Animation";
    div2.innerHTML = message;
    document.body.appendChild(div2);
}