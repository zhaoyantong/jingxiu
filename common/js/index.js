$(document).ready(function(){
    /*自制的小屏下拉菜单*/
    $("#menu").click(function(){
		$("#list").toggleClass("none");
		$("#list").slideToggle("slow");
	});
	//一
	var btn=document.getElementById("btn");//按钮
      btn.onclick=function(){
	      if(btn.innerHTML=="查看更多 ＋"){
	      	$(".over").css("display","block");
	      	btn.innerHTML="关闭 ×";
	      }else{
	      	$(".over").css("display","none");
	      	btn.innerHTML="查看更多 ＋";
	      }
      }
      //二
      var btn1=document.getElementById("btn1");//按钮
      btn1.onclick=function(){
	      if(btn1.innerHTML=="查看更多 ＋"){
	      	$(".over1").css("display","block");
	      	btn1.innerHTML="关闭 ×";
	      }else{
	      	$(".over1").css("display","none");
	      	btn1.innerHTML="查看更多 ＋";
	      }
      }
      //三
      var btn2=document.getElementById("btn2");//按钮
      btn2.onclick=function(){
	      if(btn2.innerHTML=="查看更多 ＋"){
	      	$(".over2").css("display","block");
	      	btn2.innerHTML="关闭 ×";
	      }else{
	      	$(".over2").css("display","none");
	      	btn2.innerHTML="查看更多 ＋";
	      }
      }
      //四
      var btn3=document.getElementById("btn3");//按钮
      btn3.onclick=function(){
	      if(btn3.innerHTML=="查看更多 ＋"){
	      	$(".over3").css("display","block");
	      	btn3.innerHTML="关闭 ×";
	      }else{
	      	$(".over3").css("display","none");
	      	btn3.innerHTML="查看更多 ＋";
	      }
      }
});
