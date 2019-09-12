layui.use(['form'], function(){
	var $ = layui.jquery;
	var form = layui.form;

  	form.on('submit(*)', function(data){
		console.log(data.elem) //被执行事件的元素DOM对象，一般为button对象
		console.log(data.field) //当前容器的全部表单字段，名值对形式：{name: value}
		layer.open({
		  	title: '提示',
		  	content: '您的留言已成功提交！稍候会有客服人员与您联系。如有疑问请拨打电话0531-66715666咨询',
		  	skin: 'z-popup-class',
		  	width:'452px'
		}); 
		return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
	});
});