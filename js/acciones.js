//JavaScript
$(document).ready(function(e){	
$('#principal').height($('#page1').height());
document.addEventListener("deviceready",function(){
	audio=window.plugins.LowLatencyAudio;
	audio.preloadPX('do','audio/DO.mp3',function (){},function(e){alert('Error '+e);});
	audio.preloadPX('re','audio/RE.mp3',function (){},function(e){alert('Error '+e);});
	audio.preloadPX('mi','audio/MI.mp3',function (){},function(e){alert('Error '+e);});
	audio.preloadPX('fa','audio/FA.mp3',function (){},function(e){alert('Error '+e);});
	audio.preloadPX('sol','audio/SOL.mp3',function (){},function(e){alert('Error '+e);});
	audio.preloadPX('la','audio/LA.mp3',function (){},function(e){alert('Error '+e);});
	audio.preloadPX('si','audio/SI.mp3',function (){},function(e){alert('Error '+e);});
	
	$('.nota').bind('touchstart', function (){
		$(this).addClass('tocada');
		audio.play($(this).attr('id'));
		
	}).bind('touchend', function(){
		$(this).removeClass('tocada');
	});
},false);//deviceready
});//ready