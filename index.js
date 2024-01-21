function setdate(){
    let currdate = new Date();
    document.getElementById("h1").innerHTML = currdate;
}
setInterval(setdate,1000);
values = []
let addtodo = document.getElementById("addtodo");
let removetodo = document.getElementById("removetodo");
let viewtodo = document.getElementById("viewtodo");

addtodo.onclick = function(){
    document.getElementById("viewtododiv").style.display = "none";
    document.getElementById("addtododiv").style.display = "block";
    function clear(){
        document.getElementById("addtododiv").style.display = "none";
    }
    let val;
    document.getElementById("addtodobutton").onclick = function(){
        val = document.getElementById("addtodoinput").value;
        values.push(val);
        alert("Task added");
        setTimeout(clear,2000);
    }
}

removetodo.onclick=function(){
    document.getElementById("viewtododiv").style.display = "none";
    document.getElementById("removetododiv").style.display = "block";
    function clear(){
        document.getElementById("removetododiv").style.display = "block";
    }
    let index;
    document.getElementById("removetodobutton").onclick = function(){
        index = document.getElementById("removetodoinput").value;
        if (index<0){
            alert("Enter A Valid Index");
            setTimeout(clear,2000);
        }
        else{
        values.splice(index,1);
        alert("Task removed");
        setTimeout(clear,2000);
        }
    }
}

viewtodo.onclick=function(){
    document.getElementById("viewtododiv").style.display = "block";
    let data = "";
    function displayele(ele,index){
        data += `Element at index ${index} = ${ele}<br><hr>`
    }
    values.forEach(displayele);
    document.getElementById("viewtododata").innerHTML = data;
    function clear(){
        document.getElementById("removetoddiv").style.display = "block";
    }
    setTimeout(clear,10000);
}