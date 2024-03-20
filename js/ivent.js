$(function(){
    $('#button1').on('click',function(){
        console.log('ボタンが押されました');
    });
    $('#button2').on('click',function(){
        $('#button1').off();
    })
});