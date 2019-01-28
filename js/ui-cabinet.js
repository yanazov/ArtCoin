var flag_move = 0;
var x_start;
var y_start, aspect_ratio, scail_x;




function fileSelectHandler() {
    // get selected file
    var oFile = $('#image_file')[0].files[0];



    var oImage_tmp = document.getElementById('user-fon-tmp');
    var oImage = document.getElementById('user-fon');


    var oReader = new FileReader();
    oReader.onload = function(e) {

        // e.target.result contains the DataURL which we can use as a source of the image
        oImage_tmp.src = e.target.result;
        if($('#user-fon-tmp').width() < 1400){
            alert('Маленькое изображение');
            return false;
        }
        aspect_ratio = $('#user-fon-tmp').width()/$('#user-fon-tmp').height();
        $('#user-fon').css('width', ($('#user-fon-tmp').width()+700)/2);
        $('#user-fon').css('height', $('#user-fon').width()/aspect_ratio);
        $('#user-fon').css('left', -$('#user-fon').width()/2+700/2);
        $('#user-fon').css('top', -$('#user-fon').height()/2+350/2);
        oImage.src = e.target.result;
    };
    // read selected file as DataURL
    oReader.readAsDataURL(oFile);
}
$(document).on('mousemove', 'body', function(){
    if(flag_move == 1){
        evt = window.event ? window.event : evt;
        var x_new = evt.clientX-x_start;
        var y_new = evt.clientY-y_start;
        if(x_new > 0){
            x_new = 0;
        }
        if(x_new < 700 - $('#user-fon').width()){
            x_new = 700 - $('#user-fon').width();
        }
        if(y_new > 0){
            y_new = 0;
        }
        if(y_new < 350 - $('#user-fon').height()){
            y_new = 350 - $('#user-fon').height();
        }
        $('.tmp-coord').text('x = '+evt.clientX+' y = '+evt.clientY, ' ' + aspect_ratio);
        $('#user-fon').css({'left':x_new, 'top':y_new});
    }
    if(flag_move == 2){
        evt = window.event ? window.event : evt;
        var x_new2 = evt.clientX-x_start;
        if(x_new2 < -6){
            x_new2 = -6;
        }
        if(x_new2 > 264){
            x_new2 = 264;
        }
        scail_x = (x_new2 + 6)/270;
        $('#line-zoom-point').css({'left':x_new2});
        $('#line-zoom-left').css('width', x_new2+6);


        if(aspect_ratio < 2){
            $('#user-fon').css('width', ($('#user-fon-tmp').width()-700)*scail_x + 700);
            $('#user-fon').css('height', $('#user-fon').width()/aspect_ratio);
        }
        else{


            $('#user-fon').css('height', ($('#user-fon-tmp').height()-350)*scail_x + 350);
            $('#user-fon').css('width', $('#user-fon').height()*aspect_ratio);

        }

        $('#user-fon').css('left', -$('#user-fon').width()/2+700/2);
        $('#user-fon').css('top', -$('#user-fon').height()/2+350/2);


        $('#user-fon').css('left', (-$('#user-fon').width()-4*parseInt($('#user-fon').css('left'))/2+700/2));
        $('#user-fon').css('top', (-$('#user-fon').height()-4*parseInt($('#user-fon').css('top'))/2+350/2));
        
        if(parseInt($('#user-fon').css('top')) < 350 - $('#user-fon').height()){
            $('#user-fon').css('top', 350 - $('#user-fon').height());
        }
        if(parseInt($('#user-fon').css('left')) < 700 - $('#user-fon').width()){
            $('#user-fon').css('left', 700 - $('#user-fon').width());
        }





    }

});
$(document).on('mousedown', '#user-fon', function(){
    evt = window.event ? window.event : evt;
    x_start = evt.clientX - parseInt($('#user-fon').css('left'));
    y_start = evt.clientY - parseInt($('#user-fon').css('top'));
    dragObject  = this;
    flag_move = 1;

    // остановить обработку события
    return false
});
$(document).on('mouseup', 'body', function(){
    dragObject = null;
    flag_move = 0;
});

$(document).on('mousedown', '#line-zoom-point', function(){
    evt = window.event ? window.event : evt;
    x_start = evt.clientX - parseInt($('#line-zoom-point').css('left'));
    dragObject  = this;
    flag_move = 2;

    // остановить обработку события
    return false
});























