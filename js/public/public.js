layui.use(['carousel','mobile'], function(){
	var carousel = layui.carousel;
	var $ = layui.jquery;
	 var mobile = layui.mobile,layim = mobile.layim;
	//建造实例
	carousel.render({
	    elem: '#banner',
	    width: '100%',
	    height:'520px',
	    arrow: 'none' //始终显示箭头
	});
	//banner构建
	function _setImg (dom){
		var len = $(dom).length;
		for (var i = 0; i < len ; i++){
			$(dom).eq(i).css({
			    'background':'url(' + $(dom).eq(i).attr('data-img') + ') no-repeat center',
			    'backgroundSize':'cover'
		    });
		}
	}
	_setImg ('#banner>div>div');
	_setImg ('.z-swiper-box .swiper-slide .z-img-box p');
	
	
});