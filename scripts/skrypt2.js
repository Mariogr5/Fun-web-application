
function Check(rand)
{
    var message;
    var Usernumber = document.getElementById("Users").value;
    if(parseInt(Usernumber) > rand){
        message = "Twoja liczba jest za duża";
    }
    else if( parseInt(Usernumber) < rand)
    {
        message = "Twoja liczba jest za mała";
    }
    else if(parseInt(Usernumber) == rand)
    {
        message = "Brawo! Zgadłeś! Przejdz do kolejnej strony";
        createbutton();
    }
    else{
        message = "Błąd";
    }
    document.getElementById("result").innerHTML = message;
}
function createbutton(){
    let buttond = document.createElement('button');
    buttond.Id = "continue";
    buttond.class = "buttonss";
    buttond.innerHTML = "Przejdz do kolejnej strony";
    buttond.onclick = function(){
        location.href = "../pages/page3.html";
    };
    document.body.appendChild(buttond);
}