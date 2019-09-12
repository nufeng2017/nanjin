layui.use(['carousel','laypage','mobile'], function(){
	var carousel = layui.carousel;
	var $ = layui.jquery;
	var mobile = layui.mobile;
	var layim = mobile.layim;
	var laypage = layui.laypage;
	 
	carousel.render({
	    elem: '#banner',
	    width: '100%',
	    height:'520px',
	    arrow: 'none'
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
	
	/***
	 * 分页器
	 * */
	laypage.render({
    	elem: 'z-laypage',
    	count: 50, //数据总数，从服务端得到
    	limit:9,
    	layout:['count','prev','page','next','skip']
  	});
  	console.log(layui)

});