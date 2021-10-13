// Custom Script
// Developed by: Samson.Onna
var customScripts = {
    profile: function () {
        // portfolio
        if ($('.isotopeWrapper').length) {
            var $container = $('.isotopeWrapper');
            var $resize = $('.isotopeWrapper').attr('id');
            // initialize isotope
            $container.isotope({
                itemSelector: '.isotopeItem',
                filter: '.johor',
                resizable: false, // disable normal resizing
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
			
            $("a[href='#top']").click(function () {
                $("html, body").animate({ scrollTop: 0 }, "slow");               
                return false;
            });
            $('.navbar-inverse').on('click', 'li a', function () {                
                $('.navbar-inverse .in').addClass('collapse').removeClass('in').css('height', '1px');
            });
            $('#filter a').click(function () {
                $('#filter a').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');

                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 2000,
                        easing: 'easeOutQuart',
                        queue: false
                    },
                    masonry: {
                      columnWidth: $container.width() / $resize
                    },
                });
                return false;
            });
            $(window).smartresize(function () {

                $container.isotope({
                    // update columnWidth to a percentage of container width
                    masonry: {
                        columnWidth: $container.width() / $resize
                    }
                });
            });
        }
    },
    fancybox: function () {
        // fancybox
        $(".fancybox").fancybox();
    },
    onePageNav: function () {
		if($('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').css('background','none');
                    $('#main-nav ul li a').css({'color':'white','text-shadow':'1px 1px 0 #444'});
		}
        $('#home').onePageNav({
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting

            },
            end: function () {
                //I get fired when the animation is ending
                if($('#main-nav').hasClass('addBg')){
                    $('#main-nav').removeClass('addBg');
                    $('#main-nav ul li a').css({'color':'white','text-shadow':'1px 1px 0 #444'});
                }else{
                    $('#main-nav').addClass('addBg');
                    $('#main-nav ul li a').css({'color':'#858585','text-shadow':'0px 0px 0 #444'});
                }

            },
            scrollChange: function ($currentListItem) {
                //I get fired when you enter a section and I pass the list item of the section
                if($('#main-nav').hasClass('addBg')){
                    $('#main-nav').removeClass('addBg');
                    $('#main-nav ul li a').css({'color':'white','text-shadow':'1px 1px 0 #444'});
                }else{
                    $('#main-nav').addClass('addBg');
                    $('#main-nav ul li a').css({'color':'#858585','text-shadow':'0px 0px 0 #444'});
                }
            }
        });
        $('#mainNav').onePageNav({        
            currentClass: 'active',
            changeHash: false,
            scrollSpeed: 950,
            scrollThreshold: 0.2,
            filter: '',
            easing: 'swing',
            begin: function () {
                //I get fired when the animation is starting
				
            },
            end: function () {
                //I get fired when the animation is ending
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').addClass('addBg');
                    $('#main-nav ul li a').css({'color':'#858585','text-shadow':'0px 0px 0 #444'});
				}else{
						$('#main-nav').removeClass('addBg');
                        $('#main-nav ul li a').css({'color':'white','text-shadow':'1px 1px 0 #444'});
				}
				
            },
            scrollChange: function ($currentListItem) {
                
                //I get fired when you enter a section and I pass the list item of the section
				if(!$('#main-nav ul li:first-child').hasClass('active')){
					$('#main-nav').addClass('addBg');
                    $('#main-nav ul li a').css({'color':'#858585','text-shadow':'0px 0px 0 #444'});
				}else{
					$('#main-nav').removeClass('addBg');
                    $('#main-nav ul li a').css({'color':'white','text-shadow':'1px 1px 0 #444'});
				}
            }
        });
    },
    slider: function () {
        $('#da-slider').cslider({
            autoplay: true,
            bgincrement: 0
        });
    },
    init: function () {
        customScripts.onePageNav();
        customScripts.profile();
        customScripts.fancybox();
        customScripts.slider();
    }
}
$('document').ready(function () {
    customScripts.init();
});

