$(function(){
    //    tab
    $('.tabs-item').click(function(){
        var index=$(this).index();
        $(this).addClass('tabs-item-current').siblings().removeClass('tabs-item-current');
        $('.tab-item').eq(index).show().siblings().hide();
    });



    var loader = new resLoader({
        resources : [
            'http://p2.qhimg.com/t01ed1438874f940dc0.jpg',
        ],
        onStart : function(total){
            console.log('start:'+total);
        },
        onProgress : function(current, total){
            console.log(current+'/'+total);
            var percent = current/total*100;

            $('.progressbar').css('width', percent+'%');
            $('.progresstext .current').text(parseInt(percent));
            $('.progresstext .total').text(total);
        },
        // onComplete : function(total){
        //     alert('加载完毕:'+total+'个资源');
        // }
    });

    loader.start();


});
