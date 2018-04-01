window.onload = function() { 
    var btn1 = document.getElementById('btn-one');
    var btn2 = document.getElementById('btn-two');
    var btn3 = document.getElementById('btn-thrid');
    var dpl15 = document.getElementById('dpl15');
    var dpl25 = document.getElementById('dpl25');
    var dpl35 = document.getElementById('dpl35');
    var x15 = document.getElementById('x15');
    var x25 = document.getElementById('x25');
    var x35 = document.getElementById('x35');

    btn1.onclick = function () {
        dpl15.classList.add('visible');
        document.body.style.overflow = "hidden";
        
        
    };
    btn2.onclick = function () {
        dpl25.classList.add('visible');
        document.body.style.overflow = "hidden";
        
    };

    btn3.onclick = function () {
        dpl35.classList.add('visible');
        document.body.style.overflow = "hidden";
        
    };
    x15.onclick = function () {
        dpl15.classList.remove('visible');
        document.body.style.overflow = "auto";
    };
    x25.onclick = function () {
        dpl25.classList.remove('visible');
        document.body.style.overflow = "auto";
    };
    x35.onclick = function () {
        dpl35.classList.remove('visible');
        document.body.style.overflow = "auto";
    };
}
