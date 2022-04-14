function answer(){
    var dt1 = document.getElementById("dt1");
    var dt2 = document.getElementById("dt2");
    var dt3 = document.getElementById("dt3");
    var dt4 = document.getElementById("dt4");
    var dt5 = document.getElementById("dt5");
    dt1.addEventListener("click", () => {
        document.getElementById("matter1").style.display = "block";
        dt1.style.borderBottom = "none";
        document.getElementById("matter2").style.display = "none";
        document.getElementById("matter3").style.display = "none";
        document.getElementById("matter4").style.display = "none";
        document.getElementById("matter5").style.display = "none";
        dt5.style.borderBottom = "1px solid lightgray";
    })
    dt2.addEventListener("click", () => {
        document.getElementById("matter1").style.display = "none";
        dt1.style.borderBottom = "1px solid lightgray";
        document.getElementById("matter2").style.display = "block";
        dt2.style.borderBottom = "none";
        document.getElementById("matter3").style.display = "none";
        document.getElementById("matter4").style.display = "none";
        document.getElementById("matter5").style.display = "none";
    })
    dt3.addEventListener("click", () => {
        document.getElementById("matter1").style.display = "none";
        document.getElementById("matter2").style.display = "none";
        dt2.style.borderBottom = "1px solid lightgray";
        document.getElementById("matter3").style.display = "block";
        dt3.style.borderBottom = "none";
        document.getElementById("matter4").style.display = "none";
        document.getElementById("matter5").style.display = "none";
    })
    dt4.addEventListener("click", () => {
        document.getElementById("matter1").style.display = "none";
        document.getElementById("matter2").style.display = "none";
        document.getElementById("matter3").style.display = "none";
        dt3.style.borderBottom = "1px solid lightgray";
        document.getElementById("matter4").style.display = "block";
        dt4.style.borderBottom = "none";
        document.getElementById("matter5").style.display = "none";
    })
    dt5.addEventListener("click", () => {
        document.getElementById("matter1").style.display = "none";
        document.getElementById("matter2").style.display = "none";
        document.getElementById("matter3").style.display = "none";
        document.getElementById("matter4").style.display = "none";
        dt4.style.borderBottom = "1px solid lightgray";
        document.getElementById("matter5").style.display = "block";
        dt5.style.borderBottom = "none";
    })
}
