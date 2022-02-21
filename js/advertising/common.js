
/*
function checkLink(){
    if (typeof (_MICHAT) != 'undefined' && typeof (_MICHAT.floatClick) == 'function') {
        _MICHAT.mini.startChat();
    }else{
        window.open('http://dev.dalianmiyun.com/Web/im.aspx?_=t&accountid=100000');
    }
}
*/
window.onload = function () {
    $(".fx-top").hide();
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $(".fx-top").fadeIn(500);
            $(".fx-ul li:nth-child(3)").removeClass("fx-line")
        } else {
            $(".fx-top").hide();
            $(".fx-ul li:nth-child(3)").addClass("fx-line")
        }
    });
    $(".fx-top").on("click", function () {
        $("body,html").animate({scrollTop: "0"}, 1000);
        return false
    });
    $(".carousel").carousel({interval: 4000})
};


document.onkeydown = function(){

    if(window.event && window.event.keyCode == 123) {
        alert("F12 被禁止，防止不法友商盗用本站资源。");
        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        alert(str+"\n Use Del");
        window.event.returnValue=false;
    }

}