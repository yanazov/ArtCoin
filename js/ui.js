
var auto_tab_320 = 0;

$(document).ready(function() {
 /*   jQuery('body').animate({
        scrollTop: 0
    }, 100);
    $('ttl-3').css('opacity', 0);
    $('txt-3').css('opacity', 0);*/




    if($(window).width() > 767){
        var slider = $('.slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 1300,
            variableWidth: true,
            draggable: false,
            dots: true
        });
    }
    if($(window).width() < 768){
        var slider = $('.js-slider-320').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            arrows: false,
            autoplay: false,
            autoplaySpeed: 1300,
            variableWidth: true,
            dots: true
        });
    }

    var dashOffset = 3821;
    var step_view = 1;
    var a = document.getElementById("path-brush");
    var len = a.getTotalLength();
    var icon_view =0;
    var icon_view2 =0;
    var icon1 = d3.select("svg#svg-medal");
    var icon2 = d3.select("svg#svg-shield-new");
    var icon3 = d3.select("svg#svg-box");
    var icon4 = d3.select("svg#svg-monetu-new");
    var icon5 = d3.select("svg#svg-moneta");
    var icon_768 = 0; // флаг отрисовки иконок height < 1200


    function transition(path){
        path.transition()
            .duration(1000)
            //   .delay(5000)
            .attrTween("stroke-dasharray", tweenDash);
    }
    function tweenDash() {
        var l = this.getTotalLength(),
            i = d3.interpolateString("0," + l, l + "," + l); // interpolation of stroke-dasharray attr
        return function(t) {
            return i(t);
        };
    }


    if($(window).width() > 1180){



        setTimeout(function(){$('.banknote1').addClass('show');}, 1000);
        setTimeout(function(){$('.banknote5').addClass('show');}, 1200);
        setTimeout(function(){$('.banknote2').addClass('show');}, 1400);
        setTimeout(function(){$('.banknote4').addClass('show');}, 1500);
        setTimeout(function(){$('.banknote7').addClass('show');}, 1200);
        setTimeout(function(){$('.banknote3').addClass('show');}, 1300);
        setTimeout(function(){$('.banknote6').addClass('show');}, 1100);


        setTimeout(function(){$('.caption').css({'top': 0, 'opacity': 1});}, 1800);
        setTimeout(function(){$('.txt').css({'top': 0, 'opacity': 1});}, 2300);
        setTimeout(function(){$('.to-next').css({'top': 0, 'opacity': 1});}, 2800);
    }








    $(window).on('scroll', function () {

        _tmp_scroll = $('body').scrollTop() || $('html').scrollTop();
        /* BEGIN для ширины больше 1200 */
        if($(window).width() > 1180){
            if(_tmp_scroll*1.3 > 30){
                //$('.banknote').removeClass('show');
            }
            if(_tmp_scroll*1.3 < 768){
                $('#step-2').css('top', 768-_tmp_scroll*1.3);
            }
            else{
                $('#step-2').css('top', 2);
            }
            if(_tmp_scroll*1.3 > 768 && _tmp_scroll*1.3 < 900){
                $('.toolbar').css('opacity', 1);
                $('.toolbar').css('top', -30);
            }
            if(_tmp_scroll*1.3 > 768 && _tmp_scroll*1.3 < 2100){

                var $percentageComplete = ((_tmp_scroll)/10);
                var $newUnit = parseInt(dashOffset, 10);
                var $offsetUnit = $percentageComplete * ($newUnit / 100);
                var p = a.getPointAtLength(-($newUnit - $offsetUnit-1500));
                $('#img-brush').css('top', p.y-18);
                $('#img-brush').css('left', p.x-20);
                $("#path-brush").css("stroke-dashoffset", $newUnit - $offsetUnit-1500);

            }
            if(_tmp_scroll*1.3 > 800 && _tmp_scroll*1.3 < 2100){
                $('#img-brush').show();

            }
            if( _tmp_scroll*1.3 > 2100){
                $("#path-brush").css("stroke-dashoffset", 3900);
                $('.svg-path-brush path').css("stroke-dashoffset", 3900);
            }
            if( _tmp_scroll*1.3 > 2100 || _tmp_scroll*1.3 < 800){
                $('#img-brush').hide();
            }
            if( _tmp_scroll*1.3 < 768){
                $("#path-brush").css("stroke-dashoffset", 0);
                $('.toolbar').css('opacity', 0);
                $('.toolbar').css('top', 0);
            }
            if( _tmp_scroll*1.3 < 2200){
                $('.resize-element').css({'opacity' : 1});
                $('.toolbar').css({'opacity' : 1});
            }
            if( _tmp_scroll*1.3 > 2200 && _tmp_scroll*1.3 < 3800){
                $('.resize-element').css({'opacity' : 0});
                $('.toolbar').css({'opacity' : 0});

            }
            if( _tmp_scroll*1.3 > 2300 && _tmp_scroll*1.3 < 3800 && step_view != 2){
                $('#step-2 .ttl-1').css({'top':-20 , 'opacity' : 0});
                $('#step-2 .txt-1').css({'top':-20 , 'opacity' : 0});
                setTimeout(function(){$('.step-number').text(2);}, 200);
                setTimeout(function(){$('#step-2 .ttl-1').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .txt-1').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .ttl-2').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .txt-2').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .ttl-2').css({'top': 0, opacity: 1});}, 300);
                setTimeout(function(){$('#step-2 .txt-2').css({'top': 0, opacity: 1});}, 300);
                step_view =2;
            }
            if( _tmp_scroll*1.3 < 2300 &&  _tmp_scroll*1.3 > 900 && step_view !=1){
                setTimeout(function(){$('.step-number').text(1);}, 200);
                setTimeout(function(){$('#step-2 .ttl-2').css({'top': 20, opacity: 0});}, 0);
                setTimeout(function(){$('#step-2 .txt-2').css({'top': 20, opacity: 0});}, 0);
                setTimeout(function(){$('#step-2 .ttl-2').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .txt-2').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .ttl-1').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .txt-1').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .ttl-1').css({'top': 0, opacity: 1});}, 300);
                setTimeout(function(){$('#step-2 .txt-1').css({'top': 0, opacity: 1});}, 300);
                step_view =1;
            }
            if( _tmp_scroll*1.3 < 2300){
                setTimeout(function(){$('.step-number').text(1);}, 200);
                setTimeout(function(){$('#step-2 .ttl-2').css({'top': 20, opacity: 0});}, 0);
                setTimeout(function(){$('#step-2 .txt-2').css({'top': 20, opacity: 0});}, 0);
                setTimeout(function(){$('#step-2 .ttl-2').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .txt-2').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .ttl-1').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .txt-1').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .ttl-1').css({'top': 0, opacity: 1});}, 300);
                setTimeout(function(){$('#step-2 .txt-1').css({'top': 0, opacity: 1});}, 300);
                step_view =1;
            }
            if( _tmp_scroll*1.3 > 2400 && $('.left-coin').css('opacity') == 0){
                $('.left-coin').css('opacity', 1);
                setTimeout(function(){$('.img-signature').css({opacity: 1});}, 500);
            }
            if( _tmp_scroll*1.3 < 2400 && $('.left-coin').css('opacity') == 1){

                setTimeout(function(){$('.left-coin').css('opacity', 0);}, 500);
                setTimeout(function(){$('.img-signature').css({opacity: 0});}, 0);
            }
            if( _tmp_scroll*1.3 > 2500 && $('.label-detail1').css('opacity') == 0 && _tmp_scroll*1.3 < 3900){
                $('.label-detail1').css('opacity', 1);
                setTimeout(function(){$('.label-detail1').css('height', 35);}, 400);
            }
            if( _tmp_scroll*1.3 < 2500 && $('.label-detail1').css('opacity') == 1){

                setTimeout(function(){$('.label-detail1').css('height', 0);}, 0);
                setTimeout(function(){$('.label-detail1').css('opacity', 0);}, 400);
            }
            if( _tmp_scroll*1.3 > 2700 && $('.label-detail2').css('opacity') == 0 && _tmp_scroll*1.3 < 3900){
                $('.label-detail2').css('opacity', 1);
                $('.nominal').css('opacity', 1);
                $('.word_artcoin').css('opacity', 1);
                setTimeout(function(){$('.label-detail2 span').css({'width': 100, right: -110});}, 400);
            }
            if( _tmp_scroll*1.3 < 2700 && $('.label-detail2').css('opacity') == 1){
                $('.label-detail2 span').css({'width': 0, right: 0});
                setTimeout(function(){$('.label-detail2').css('opacity', 0);}, 300);
                setTimeout(function(){$('.nominal').css('opacity', 0);}, 300);
                setTimeout(function(){$('.word_artcoin').css('opacity', 0);}, 300);
            }
            if( _tmp_scroll*1.3 > 2900 && $('.label-detail3').css('opacity') == 0 && _tmp_scroll*1.3 < 3900){
                $('.label-detail3').css('opacity', 1);
                $('.name-autor').css('opacity', 1);
                setTimeout(function(){$('.label-detail3 span').css({'width': 100, right: -110});}, 400);
            }
            if( _tmp_scroll*1.3 < 2900 && $('.label-detail3').css('opacity') == 1){
                $('.label-detail3 span').css({'width': 0, right: 0});
                setTimeout(function(){$('.label-detail3').css('opacity', 0);}, 300);
                setTimeout(function(){$('.name-autor').css('opacity', 0);}, 300);
            }
            if( _tmp_scroll*1.3 > 3100 && $('.label-detail4').css('opacity') == 0 && _tmp_scroll*1.3 < 3900){
                $('.label-detail4').css('opacity', 1);
                $('.iq-code').css('opacity', 1);
                setTimeout(function(){$('.label-detail4 span').css({'width': 100, right: -110});}, 400);
            }
            if( _tmp_scroll*1.3 < 3100 && $('.label-detail4').css('opacity') == 1){
                $('.label-detail4 span').css({'width': 0, right: 0});
                setTimeout(function(){$('.label-detail4').css('opacity', 0);}, 300);
                setTimeout(function(){$('.iq-code').css('opacity', 0);}, 300);
            }
            if( _tmp_scroll*1.3 > 3300 && $('.label-detail5').css('opacity') == 0 && _tmp_scroll*1.3 < 3900){
                $('.label-detail5').css('opacity', 1);
                $('.serial-number').css('opacity', 1);
                setTimeout(function(){$('.label-detail5 span').css({'width': 100, right: -110});}, 400);
            }
            if( _tmp_scroll*1.3 < 3300 && $('.label-detail5').css('opacity') == 1){
                $('.label-detail5 span').css({'width': 0, right: 0});
                setTimeout(function(){$('.label-detail5').css('opacity', 0);}, 300);
                setTimeout(function(){$('.serial-number').css('opacity', 0);}, 300);
            }
            if( _tmp_scroll*1.3 > 3600 && $('.label-detail6').css('opacity') == 0 && _tmp_scroll*1.3 < 3900){
                $('.label-detail6').css('opacity', 1);
                setTimeout(function(){$('.label-detail6 span').css({'width': 100, left: -110});}, 400);
            }
            if( _tmp_scroll*1.3 < 3600 && $('.label-detail6').css('opacity') == 1){
                $('.label-detail6 span').css({'width': 0, left: 0});
                setTimeout(function(){$('.label-detail6').css('opacity', 0);}, 300);
            }
            if( _tmp_scroll*1.3 > 3900 && $('.label-detail6').css('opacity') == 1){
                $('.label-detail1').css('opacity', 0);
                $('.label-detail2').css('opacity', 0);
                $('.label-detail3').css('opacity', 0);
                $('.label-detail4').css('opacity', 0);
                $('.label-detail5').css('opacity', 0);
                $('.label-detail6').css('opacity', 0);

            }
            if( _tmp_scroll*1.3 > 4200 && $('#step-2 .txt-3').css('opacity') == 0){
                $('#step-2 .ttl-2').css({'top':-20 , 'opacity' : 0});
                $('#step-2 .txt-2').css({'top':-20 , 'opacity' : 0});
                setTimeout(function(){$('.step-number').text(3);}, 200);
                setTimeout(function(){$('#step-2 .ttl-2').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .txt-2').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .ttl-3').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .txt-3').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .ttl-3').css({'top': 0, opacity: 1});}, 300);
                setTimeout(function(){$('#step-2 .txt-3').css({'top': 0, opacity: 1});}, 300);
            }
            if( _tmp_scroll*1.3 < 4200 && $('#step-2 .txt-3').css('opacity') == 1 && _tmp_scroll*1.3 > 3900){
                setTimeout(function(){$('.step-number').text(2);}, 200);
                setTimeout(function(){$('#step-2 .ttl-3').css({'top': 20, opacity: 0});}, 0);
                setTimeout(function(){$('#step-2 .txt-3').css({'top': 20, opacity: 0});}, 0);
                setTimeout(function(){$('#step-2 .ttl-3').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .txt-3').css('display', 'none');}, 250);
                setTimeout(function(){$('#step-2 .ttl-2').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .txt-2').css('display', 'block');}, 250);
                setTimeout(function(){$('#step-2 .ttl-2').css({'top': 0, opacity: 1});}, 300);
                setTimeout(function(){$('#step-2 .txt-2').css({'top': 0, opacity: 1});}, 300);
                $(".slider").slick('slickGoTo', 0, true );
            }
            if( _tmp_scroll*1.3 > 4400 && $('.coin-info').css('opacity') == 0){
                $('.coin-info').css({'opacity': 1});
                setTimeout(function(){$('.coin-info').css({'bottom': -70});}, 150);
            }
            if( _tmp_scroll*1.3 < 4400 && $('.coin-info').css('opacity') == 1){
                $('.coin-info').css({'bottom': -90});
                setTimeout(function(){$('.coin-info').css({'opacity': 0});}, 150);
                $(".slider").slick('slickGoTo', 0, true );
            }
            if( _tmp_scroll*1.3 > 4700 && $('.example-coin').css('opacity') == 0){
                $('.example-coin').css({'opacity': 1});
                $('.fon-coin').css({'opacity': 1});
                $('.slick-dots').css({'opacity': 1});
                $(".slider").slick('slickPlay');
            }
            if( _tmp_scroll*1.3 < 4700 && $('.example-coin').css('opacity') == 1){
                $('.example-coin').css({'opacity': 0});
                $('.fon-coin.slick-cloned').css({'opacity': 0});
                $('.slick-dots').css({'opacity': 0});
                $(".slider").slick('slickGoTo', 0, true );
                $(".slider").slick('slickPause');
            }
            if( _tmp_scroll*1.3 > 5500){
                $('#step-2').css({'position': 'absolute', 'top': 5500/1.3});
            }
            if( _tmp_scroll*1.3 < 5500 && _tmp_scroll*1.3 > 768){
                $('#step-2').css({'position': 'fixed', 'top': 0});
            }




            if($('.artcoin-prop').eq(0).offset().top <  _tmp_scroll + $(window).height() - 180  && icon_view < 1) {
                icon_view = 1;
                setTimeout(function () {
                    $('.artcoin-prop').eq(0).css('opacity', 1);
                }, 100);
                setTimeout(function () {
                    $('.artcoin-prop').eq(0).css('top',0);
                }, 200);
                setTimeout(function () {
                    $('.artcoin-prop').eq(1).css('opacity', 1);
                }, 600);
                setTimeout(function () {
                    $('.artcoin-prop').eq(1).css('top', 0);
                }, 700);
                setTimeout(function () {
                    $('.artcoin-prop').eq(2).css('opacity', 1);
                }, 1100);
                setTimeout(function () {
                    $('.artcoin-prop').eq(2).css('top', 0);
                }, 1200);

                // add transition function to paths

                icon1.selectAll("path#path4266").call(transition);
                icon1.selectAll("path#path4246").call(transition);
                setTimeout(function () {
                    icon1.selectAll("path#path4282").call(transition);
                }, 1000);
                setTimeout(function () {
                    icon1.selectAll("path#path4284").call(transition);
                }, 2000);
                setTimeout(function () {
                    icon1.selectAll("path#path4204").call(transition);
                }, 2700);


                setTimeout(function () {
                    icon2.selectAll("path#path4181").call(transition);
                }, 800);
                setTimeout(function () {
                    icon2.selectAll("path#path4183").call(transition);
                }, 800);
                 setTimeout(function () {
                    icon2.selectAll("path#path4185").call(transition);
                }, 1500);
                 setTimeout(function () {
                    icon2.selectAll("path#path4187").call(transition);
                }, 2100);
                 setTimeout(function () {
                    icon2.selectAll("path#path4189").call(transition);
                }, 2700);


                setTimeout(function () {
                    icon3.selectAll("path#path4226").call(transition);
                }, 1200);
                setTimeout(function () {
                    icon3.selectAll("path#path42282").call(transition);
                }, 1800);
                setTimeout(function () {
                    icon3.selectAll("path#path4230_2").call(transition);
                }, 2200);
                setTimeout(function () {
                    icon3.selectAll("path#path4232_2").call(transition);
                }, 2200);
                setTimeout(function () {
                    icon3.selectAll("path#path4234_2").call(transition);
                }, 2700);

            }
            if($('.artcoin-prop').eq(3).offset().top <  _tmp_scroll + $(window).height() - 266  && icon_view2 < 1) {
                icon_view2 = 1;
                setTimeout(function () {
                    $('.artcoin-prop').eq(3).css('opacity', 1);
                }, 100);
                setTimeout(function () {
                    $('.artcoin-prop').eq(3).css('top',0);
                }, 200);
                setTimeout(function () {
                    $('.artcoin-prop').eq(4).css('opacity', 1);
                }, 600);
                setTimeout(function () {
                    $('.artcoin-prop').eq(4).css('top', 0);
                }, 700);







                setTimeout(function () {
                    icon4.selectAll("path#path4228").call(transition);
                }, 500);
                setTimeout(function () {
                    icon4.selectAll("path#path4230").call(transition);
                }, 1500);
                setTimeout(function () {
                    icon4.selectAll("path#path4232").call(transition);
                }, 2500);
                setTimeout(function () {
                    icon4.selectAll("path#path4234").call(transition);
                }, 3000);
                setTimeout(function () {
                    icon4.selectAll("path#path52").call(transition);
                }, 4000);


                setTimeout(function () {
                    icon5.selectAll("path#path4214").call(transition);
                }, 1000);
                setTimeout(function () {
                    icon5.selectAll("path#path4216").call(transition);
                }, 1500);
                setTimeout(function () {
                    icon5.selectAll("path#path4218").call(transition);
                }, 2500);
                setTimeout(function () {
                    $('#svg-moneta #path54').css('opacity', 1);
                }, 3500);

            }




        }
        else{
            if(icon_768 == 1){
                return false;
            }

            setTimeout(function () {
                icon1.selectAll("path").call(transition);
            }, 1100);
            setTimeout(function () {
                icon2.selectAll("path").call(transition);
            }, 1100);
            setTimeout(function () {
                icon3.selectAll("path").call(transition);
            }, 1100);
            setTimeout(function () {
                icon4.selectAll("path").call(transition);
            }, 1100);
            setTimeout(function () {
                icon5.selectAll("path").call(transition);
            }, 1100);
            setTimeout(function () {
                $('#svg-moneta #path54').css('opacity', 1);
            }, 1100);
            icon_768 = 1;
        }
        /* end для ширины больше 1200 */






    });

});

$(document).on('click', '.btn-send-mail', function(){
    if($(this).parent().find('.input-mail').val()==''){
        return false
    }
    if($(this).parent().find('.input-ulr').val()==''){
        return false
    }
    if($(this).parent().find('.input-mail').val()!=''){     /* проверка поля email   */
        /*  один или более символов до@, после один или более символов, потом идет . после чего 2 или более символов.   */
        var patt = /^.+@.+[.].{2,}$/i;
        if(!patt.test($(this).parent().find('.input-mail').val())) {
            $('.input-mail').addClass('error');
            return false;
        }
        else{
            $('.send-mail-step1').css({'top':-20, 'opacity': 0});
            setTimeout(function(){$('.send-mail-step1').css({'display':'none'});}, 250);
            setTimeout(function(){$('.send-mail-step2').css({'display':'block', 'top': 0, opacity: 1});}, 300);

            return false;
        }
    }


});
$(document).on('click', '.to-next', function(){
    $('body').animate({ scrollTop: 600 }, 600 );
    return false
});
$(document).on('click', '.nav-tab li', function(){
    $('.nav-tab li').removeClass('active');
    $(this).addClass('active');
    $('.js-scr').removeClass('active');
    $('.js-scr').eq($(this).index('.nav-tab li')).addClass('active');

    return false
});
$(document).on('click', '.menu-320', function(){
    $('.intro .menu').addClass('open');
    $('.menu-close').css({'opacity':1, 'z-index':100});
    return false
});
$(document).on('click', '.menu-close', function(){
    $('.intro .menu').removeClass('open');
    $('.menu-close').css({'opacity':0, 'z-index':'-1'});
    return false
});
$(document).on('click', '.serial-number', function(){
    return false
});



























