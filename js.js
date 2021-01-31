function notValid(x, mesg) 
{
alert(mesg)
x.style.borderColor = "red"
}

function validEmpty(v) 
{
let some = document.getElementById(v)
let value = some.value
if (!value) 
{
notValid(some, "Поле "+ some.name +' є пустим.')
return true
}
else
{

some.style.borderColor = "grey"
return false
}
}


function validName(v){
let name = document.getElementById(v)
if(name.value.match(/^[A-Z][a-z]{3,16}$/g)){
//ALL in OK
}
else{
//NOT VALID

notValid(name,"Ваше "+name.name+" містить неправильне значення.\n"+name.value+" є неправильним!!!\
\nПерша буква повинна бути великою \
\nусі послідуючі маленькими, не повинно бути цифр і інших спец символів\
\nНе менше 3 символів і не більше 16.\nВиключно латинські символи! ")
x.style.borderColor = "red"
}
}

function validPhone(v){
let tel = document.getElementById(v)
if(tel.value.match(/^[0-9]{10}$/g)){
//valid 
}else{
notValid(tel,"Поле "+tel.name+" містить неправильне значення.\
\nПоле повинно мати 10 символів.")
}
}

function Validation() {
let list = { email: "email", name: "name", sname: "sname", tel: "tel" }
for (let i in list) {
//alert("call Valid")
validEmpty(list[i])
if (list[i] == "name" ||list[i] == "sname") 
{
validName(i)
}
if(list[i]=="tel")
{
validPhone(i)
}
}
}


function iteration(i) {
    //alert("itteration: i=",i)
    let resault = true;
    if (i == "name" || i == "sname") {
    resault = validName(i)
    }
    if (i == "tel") {
    resault = validPhone(i)
    }
    return resault
    }
    function onFocus(ths) {
    ths.style.borderColor = "blue"
    ths.style.background = "#FEEAD5"
    
    }
    function FirstUP(ths) {
    if (ths.id == "name" || ths.id == "sname") { Names(ths) }
    
    // GET out error will give a some errors in console
    //ths.style.borderColor = "grey"
    let out = document.getElementById(ths.id + "E")
    out.style.display = "none"
    out.innerHTML = ""
    //alert("ths "+ths.id)
    if (iteration(ths.id, "sme")){
    ths.style.borderColor="green"
    }
    // addEventListener!!!
    function Initialization(th){
        let v = document.getElementById(th).addEventListener(onblur,FirstUP())
    }
    }
    function Names(ths) {
    ths.value = ths.value.slice(0, 1).toUpperCase() + ths.value.slice(1)
    }
    
   
    