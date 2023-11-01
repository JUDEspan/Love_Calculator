const check = () => {
    let one = first.value
    let two =second.value   
    //alert("i dey work")
    if(one=="" && two==""){
        err.innerHTML= `<p style="color:white; background-color:red; width:200px; border-radius:20px;">Please fill all </p>`
    }else{
        document.getElementById("first").value=""
        second.value=""
        err.innerHTML=""
        show.innerHTML=""
        let mat = Math
        let rando = mat.random()*100
        let ans = mat.round(rando)
    show.innerHTML=`<p style="background-color:red">Love score for ${one} and ${two} is ${ans}% </p>`
    }

    if(ans>40){
        remark.innerHTML=`<p >please na beg i dey beg no enter ham
        .</p>`
    }
}