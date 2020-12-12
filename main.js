var paragraph=[]
console.log("hi")
function submit(){
    for(var x=1; x<=5; x++){
        var student=document.getElementById("input"+x).value
       paragraph.push(student)
       

    }
 displayarray=paragraph.join(". ")   

document.getElementById("output").innerHTML=displayarray



}

