jQuery(document).ready(function($){


	/* Menu functions */
	$('.mobile-menu').find('.mega-menu-toggle').addClass('mega-menu-open');
	$(document.body).on('click', '.mega-toggle-animated', function(){
		if($('.mobile-menu').find('.mega-menu-toggle').hasClass('mega-menu-open')) {
		} else {
			$('.close-nav-toggle').trigger('click');
		}
	});

	// $(".flex-row.fullrowWidth .imageItems img").draggable({ 
	// 	cursor: "grab", 
	// 	containment: "parent", 
	// });

	$('.qr-top-label-item').children('ul.mega-sub-menu').addClass('qr-base-submenu');
	
	$('header#site-header').addClass('qr-sticky-header qr-scroll-down1');

    if ($(window).width() > 1025) {
	/* Add sticky class on header */
	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	       
	       // downscroll code
	     //  $('header#site-header').removeClass('qr-scroll-up');
	     //  $('header#site-header').addClass('qr-scroll-down');
	       //$('header#site-header').removeClass('qr-sticky-header');
	   } else {
	   	   
	      // upscroll code
	    //  $('header#site-header').removeClass('qr-scroll-down');
	    //  $('header#site-header').addClass('qr-scroll-up');
	      if(lastScrollTop < 100) {
	      	console.log('Scroll top 0 triggered: ' + lastScrollTop)
	     //  $('header#site-header').removeClass('qr-scroll-up');
	      }
	   }
	   lastScrollTop = st;
	   //console.log(lastScrollTop);
	});
}


$(function(){
  $('.imageItems').dragScroll();
});

	$(".mc4wp-form-fields").addClass("dis-flex");
	$('kc-wrap-columns').addClass("header-mobile-view");;

	/* Sorting Hover Func - on 05.08.2021 */
	$(".qr-sorting-elem").mouseover(function(){
        //$(".qr-sorting-elem").find('ul').addClass('show-sorting');
        $(".qr-sorting-elem").find('ul').show();
    });
    $(".qr-sorting-elem").mouseout(function(){
        //$(".qr-sorting-elem").find('ul').removeClass('show-sorting');
        $(".qr-sorting-elem").find('ul').hide();
    });
	$(".qr-sorting-elem").find('span').mouseover(function(){
        //$(".qr-sorting-elem").find('ul').addClass('show-sorting');
        $(".qr-sorting-elem").find('ul').show();
    });
    $(".qr-sorting-elem").find('span').mouseout(function(){
        //$(".qr-sorting-elem").find('ul').removeClass('show-sorting');
        $(".qr-sorting-elem").find('ul').hide();
    });
	$(".qr-sorting-elem").find('ul').mouseover(function(){
        //$(".qr-sorting-elem").find('ul').addClass('show-sorting');
        $(".qr-sorting-elem").find('ul').show();
    });
    $(".qr-sorting-elem").find('ul').mouseout(function(){
        //$(".qr-sorting-elem").find('ul').removeClass('show-sorting');
        $(".qr-sorting-elem").find('ul').hide();
    });
	
	$('.filterBtn').click(function(){
		$(this).parent().toggleClass('show');
	});

    /* Tags Hover Function - on 06.08.2021 */
	/*$(".qr-blog-details").find('.qr-blog-additional-meta-section').children('ul').children('li').mouseover(function(){
        $(this).addClass('tag-active');
    });
    $(".qr-blog-details").find('.qr-blog-additional-meta-section').children('ul').children('li').mouseout(function(){
        $(this).removeClass('tag-active');
    });*/
	$(".qr-blog-details").find('.qr-blog-additional-meta-section').children('ul').children('li').children('a').mouseover(function(){
        $(this).parent('li').addClass('tag-active');
    });
    $(".qr-blog-details").find('.qr-blog-additional-meta-section').children('ul').children('li').children('a').mouseout(function(){
        $(this).parent('li').removeClass('tag-active');
    });

    // /* Checking '#' in URL */
    // if(window.location.hash) {
	//   console.log('Hash tag exists');
	//   $("html, body").animate({ scrollTop: $('#qr-eve-page-list').offset().top }, 800);
	// } else {
	//   console.log('Hash tag does not exist');
	//   // Fragment doesn't exist
	// }
	
	$('.list-pro-capability').first().addClass('clicked');
	 
 
	$(".list-pro-capability").click(function(){ 
		$('.list-pro-capability').removeClass('clicked');
		$(this).addClass('clicked');
	   
	});
	
	if($(window).width() < 1025){
		$(".qr-sorting-elem").click(function(){
			$(this).toggleClass("show");
		});
	}

    

	$('.workflow-item:nth-child(2)').parent().addClass('activeShow');

	$('.workflow-item:nth-child(3)').parent().addClass('active');
	
	 // if($(window).width() < 1025){ 
		 // $('.mega-menu-item').each(function(){
			// if($(this).hasClass('mega-current-menu-ancestor')) {
				// $(this).addClass("showMega");
			// } 
		// });
	 // }

	 $(document).scroll(function(){
		var sectionIds = $('a.nav-link');
		
			  sectionIds.each(function(){
		
				  var container = $(this).attr('href');
				  var containerOffset = $(container).offset().top;
				  var containerHeight = $(container).outerHeight();
				  var containerBottom = containerOffset + containerHeight;
				  var scrollPosition = $(document).scrollTop();
		  
				  if(scrollPosition < containerBottom - 250 && scrollPosition >= containerOffset - 250){
					$(this).parent().addClass('active');
				  } else{
					$(this).parent().removeClass('active');
				  }
		
		  
			  });
		  });
	
	$('#myModal').on('shown.bs.modal', function (e) {		
		var src = $(".video-popup").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=1';
		$(".video-popup").attr('src', newSrc);
})
$('#myModal').on('hidden.bs.modal', function () {
  		var src = $(".video-popup").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=0';
		$(".video-popup").attr('src', newSrc);

})	

$('#myModal-0').on('shown.bs.modal', function (e) {		
	
		var src = $(".video-popup-0").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=1';
		$(".video-popup-0").attr('src', newSrc);
})

$('#myModal-0').on('hidden.bs.modal', function () {
  		var src = $(".video-popup-0").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=0';
		$(".video-popup-0").attr('src', newSrc);

})	

	$('#myModal-1').on('shown.bs.modal', function (e) {		
		var src = $(".video-popup-1").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=1';
		$(".video-popup-1").attr('src', newSrc);
})

$('#myModal-1').on('hidden.bs.modal', function () {
  		var src = $(".video-popup-1").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=0';
		$(".video-popup-1").attr('src', newSrc);

})	

	$('#myModal-2').on('shown.bs.modal', function (e) {		
		var src = $(".video-popup-2").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=1';
		$(".video-popup-2").attr('src', newSrc);
})
$('#myModal-2').on('hidden.bs.modal', function () {
  		var src = $(".video-popup-2").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=0';
		$(".video-popup-2").attr('src', newSrc);

})	

	$('#myModal1').on('shown.bs.modal', function (e) {		
		var src = $(".video-popup").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=1';
		$(".video-popup").attr('src', newSrc);
})
$('#myModal1').on('hidden.bs.modal', function () {
  		var src = $(".video-popup").attr('src')
		var orSrc = src.split('?');
		var newSrc = orSrc[0]+ '?autoplay=0';
		$(".video-popup").attr('src', newSrc);

})	

});
