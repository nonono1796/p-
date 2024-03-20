// $(function(){
//     $('#button1').on('click',function(){
//         console.log('ボタンが押されました');
//     });
//     $('#button2').on('click',function(){
//         $('#button1').off();
//     })
// });

// $(function(){
//     $('div').on({
//         'click':()=>{
//             // 背景を赤に
//             $('div').css('background-color','red');
//             // テキストをクリックに
//             $('div').text('click');
//         },
//         'dblclick':()=>{
//             // 背景を緑
//             $('div').css('background-color','green');
//             // テキストをdblclick
//             $('div').text('dblclick');
//         },
//         'mouseenter':()=>{
//             // 背景を青に
//             $('div').css('background-color','blue');
//             // 文字をmouseenterに
//             $('div').text('mouseenter');
//         },
//         'mouseout':()=>{
//             // 背景を背景をグレー
//             $('div').css('background-color','gray');
//             // 文字をmouseoutに
//             $('div').text('mouseout');
//         },
//     });
// });

$(function(){
$(document).on('click keydown',(e)=>{
    // クリックされた場合
    if(e.type === 'click'){
        $('div').text('クリックされました！');
    }
    // キーが押された場合
    if(e.type === 'keydown'){
        $('div').text('キーが押されました！');
    }
});
});