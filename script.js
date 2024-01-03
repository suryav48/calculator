function buttonclick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+=val;

}

function clearscreen(){
    document.getElementById("screen").value=""

}

function back(){
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);

}

function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById('screen').value=result
}
