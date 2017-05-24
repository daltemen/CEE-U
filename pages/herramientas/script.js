$(document).ready(function(){
    $(".main-menu li").hover(function(){
        $(this).find("ul").stop().slideToggle();
    });

    $(".enlacesEscondidos").click(function(){
        $(".enlacesEscondidos").css("display", "none");
    });

    $("#txtButa").click(function(){
        $(".textos").css("display", "none");
        $("#txtInfa").css("display", "block");
    });

    $("#txtButb").click(function(){
        $(".textos").css("display", "none");
        $("#txtInfb").css("display", "block");
    });

    $("#txtButc").click(function(){
        $(".textos").css("display", "none");
        $("#txtInfc").css("display", "block");
    });

    $("#txtButd").click(function(){
        $(".textos").css("display", "none");
        $("#txtInfd").css("display", "block");
    });

    $("#txtBute").click(function(){
        $(".textos").css("display", "none");
        $("#txtInfe").css("display", "block");
    });

    $("#txtBut1").click(function(){
        $(".textos").css("display", "none");
        $(".txtbolita").css("display", "none");
        $("#txtInf1").css("display", "block");
        $(".contenido-bolitas").css("display", "block");
        $(".atras1").css("display", "none");
    });

    $("#txtBut2").click(function(){
        $(".textos").css("display", "none");
        $("#txtInf2").css("display", "block");
    });

    $("#txtBut3").click(function(){
        $(".textos").css("display", "none");
        $("#txtInf3").css("display", "block");
    });

    $("#txtBut4").click(function(){
        $(".textos").css("display", "none");
        $(".txtbolita4").css("display", "none");
        $("#txtInf4").css("display", "block");
        $(".contenido-bolitas4").css("display", "block");
        $(".atras4").css("display", "none");
    });

    $("#txtBut5").click(function(){
        $(".textos").css("display", "none");
        $("#txtInf5").css("display", "block");
    });

    $(".content-1").click(function(){
        $(".contenido-bolitas").css("display", "none");
        $(".txtbolita").css("display", "none");
        $(".componentes1").css("display", "block");
        $(".atras1").css("display", "block");
    });

    $(".content-2").click(function(){
        $(".contenido-bolitas").css("display", "none");
        $(".txtbolita").css("display", "none");
        $(".componentes2").css("display", "block");
        $(".atras1").css("display", "block");
    });

    $(".content-3").click(function(){
        $(".contenido-bolitas").css("display", "none");
        $(".txtbolita").css("display", "none");
        $(".componentes3").css("display", "block");
        $(".atras1").css("display", "block");
    });

    $(".content-4").click(function(){
        $(".contenido-bolitas").css("display", "none");
        $(".txtbolita").css("display", "none");
        $(".componentes4").css("display", "block");
        $(".atras1").css("display", "block");
    });

    $(".content-5").click(function(){
        $(".contenido-bolitas").css("display", "none");
        $(".txtbolita").css("display", "none");
        $(".componentes5").css("display", "block");
        $(".atras1").css("display", "block");
    });

    $(".content-6").click(function(){
        $(".contenido-bolitas").css("display", "none");
        $(".txtbolita").css("display", "none");
        $(".componentes6").css("display", "block");
        $(".atras1").css("display", "block");
    });

    $(".content-7").click(function(){
        $(".contenido-bolitas").css("display", "none");
        $(".txtbolita").css("display", "none");
        $(".componentes7").css("display", "block");
        $(".atras1").css("display", "block");
    });

    $(".atras1").click(function(){
        $(".txtbolita").css("display", "none");
        $(".contenido-bolitas").css("display", "block");
        $(".atras1").css("display", "none");
    });

    /*-------------------------------------------------------------------------------------------------------------*/

    $(".content-1-4").click(function(){
        $(".contenido-bolitas4").css("display", "none");
        $(".txtbolita4").css("display", "none");
        $(".componentes1-4").css("display", "block");
        $(".atras4").css("display", "block");
    });

    $(".content-2-4").click(function(){
        $(".contenido-bolitas4").css("display", "none");
        $(".txtbolita4").css("display", "none");
        $(".componentes2-4").css("display", "block");
        $(".atras4").css("display", "block");
    });

    $(".content-3-4").click(function(){
        $(".contenido-bolitas4").css("display", "none");
        $(".txtbolita4").css("display", "none");
        $(".componentes3-4").css("display", "block");
        $(".atras4").css("display", "block");
    });

    $(".content-4-4").click(function(){
        $(".contenido-bolitas4").css("display", "none");
        $(".txtbolita4").css("display", "none");
        $(".componentes4-4").css("display", "block");
        $(".atras4").css("display", "block");
    });

    $(".content-5-4").click(function(){
        $(".contenido-bolitas4").css("display", "none");
        $(".txtbolita4").css("display", "none");
        $(".componentes5-4").css("display", "block");
        $(".atras4").css("display", "block");
    });

    $(".content-6-4").click(function(){
        $(".contenido-bolitas4").css("display", "none");
        $(".txtbolita4").css("display", "none");
        $(".componentes6-4").css("display", "block");
        $(".atras4").css("display", "block");
    });

    $(".content-7-4").click(function(){
        $(".contenido-bolitas4").css("display", "none");
        $(".txtbolita4").css("display", "none");
        $(".componentes7-4").css("display", "block");
        $(".atras4").css("display", "block");
    });

    $(".atras4").click(function(){
        $(".txtbolita4").css("display", "none");
        $(".contenido-bolitas4").css("display", "block");
        $(".atras4").css("display", "none");
    });
});
