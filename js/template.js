//		content on template 'divine design' is property of codemode.in
// URL: www.codemode.in
// Version: codemode V1
$(document).ready(function(){
	//bg
	get_size();
	
	
	//		nvaigation
	
	$('.navigation dd').click(function(){
		//		add active
		$('.navigation dd').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.navigation a').click(function(){
		var activate	=	$(this).attr('rel');
		
		
		//	open popup
		$('.popup').removeClass('now_popup');
		
		if(!$('#'+activate).hasClass('loaded')){
			
			$('#'+activate +' .content').load(activate + '.html', function(response, status, xhr) {
				if (status == "error"){
//					console.log(activate+".html error load L - 28");
//					console.log("Sorry but unable to load page. Please try again");
					page_rest();
				}
				else if(status == "success"){
//					console.log(activate+".html success load L - 33");
					
					
					//		header animation
					set_header();
					
					$('#'+activate).addClass('loaded');
					show_popup(activate);
				}
			});
			
		}
		else if($('#'+activate).hasClass('loaded')){
//			console.log('already loaded L - 41');
			
			if($('#'+activate).is(':hidden')){
//				console.log( 'page is being loaded');
			
				//		header animation
				set_header();
	
				show_popup(activate);
			}
			else{
//				console.log('page already being shown');
				return false;
			}
		}
	});


	//		slide links
	$('#slider a').click(function(){
		this.target = "_blank";
	});
	
	
	//	close all popups
	$('#bg').click(function(){ 
		page_rest();
	});
});

function show_popup(activate){

//	console.log('show_popup function called');

	$('#'+activate).addClass('now_popup');
	$('.popup').not('#'+activate).fadeOut(300);
	$('.content').fadeOut(800);
	$('#'+activate).css({'display':'block'});
	$('.popup').animate({
		'top':'50%',
		'left':'50%',
		'margin-left': '-431',
		'margin-top': '-219',
		'width':'863px',
		'height':'438px'
	}, 800, function(){
		$('#'+activate).find('.content').fadeIn(800);
	});

	$('.rest_btn').click();
}

// document resize
$(window).resize(function(){
	get_size();
});

// header set
function set_header(){

//	console.log('set_header function called');

	$('#logo').delay(50).animate({
		'margin-top': '-308px'
	},500);
	$('.navigation').animate({
		'margin-top': '223px',
		'margin-right': '-419px'
	}, 500);
};


// page reset
function page_rest(){

//	console.log('page_rest function called');

//		header reset
	$('#logo').delay(100).animate({
		'margin-top': '-92px'
	},800);
	$('.navigation dd').removeClass('active');
	$('.navigation').animate({
		'margin-top': '79px',
		'margin-right': '-285px'
	}, 800);
	
	// popup reset
	$('.content').fadeOut(400);
	$('.popup').animate({
		'width':'10',
		'height':'10',
		'top': '5%',
		'left': '50%',
		'margin-top': '0px',
		'margin-left': '-10px'
	}, 1200);
	$('.popup').fadeOut(20);
	$('.navigation dd:last').addClass('active');
}


// bg resize function
function get_size(){

//	console.log('get_size function called');

	var wind_width	=	$(window).width();
	var wind_height	=	$(window).height();
	
	$('.main_container').css({
		'width': (wind_width),
		'height': (wind_height)
	});
	$('#bg').css({
		'width': (wind_width-17),
		'height': (wind_height)
	});
}




function clear_input(){
	$('input, textarea').each(function() {
		var default_value = this.value;
		$(this).focus(function() {
			if(this.value == default_value) {
				this.value = '';
			}
		});
		$(this).blur(function() {
			if(this.value == '') {
				this.value = default_value;
			}
		});
	});
}