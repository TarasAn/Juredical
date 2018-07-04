$(document).ready(function() {

    $(".slider-wrap").slideDown();
    $(".isnohome .slider-wrap").show().slideDown();

    $(".service-item h4").equalHeights();
    $(".new-item-text").equalHeights();
    $(".link-item").equalHeights();

    $('.top-line .sf-menu').superfish({
        cssArrows: false,
        hoverClass: 'no-class',
        delay: 300
    });

    var owl = $(".slider");

    owl.owlCarousel({
        loop: true,
        items: 1,
        itemClass: "slide-wrap",
        nav: true,
        navText: ""
    });

    $(".next").click(function () {
        owl.trigger('next.owl.carousel');
    });

    $(".prev").click(function () {
        owl.trigger('prev.owl.carousel');
    });

    // Menu on mobile devices
    $('.sf-menu').after('<div id="my-menu"></div>');
    $('.sf-menu').clone().appendTo('#my-menu');
    $('#my-menu').find('ul').removeClass('sf-menu').attr('style', '');
    $('#my-menu').mmenu({
        extensions : ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: 'Меню'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('closed', function () {
        $('.toggle-mnu').removeClass('on');
    });

    // Burger button
    $(".mobile-menu")
        .click(function() {
            var mmAPI = $("#my-menu").data( "mmenu" );
            mmAPI.open();
            var ths = $(this).find('.toggle-mnu');
            ths.toggleClass("on");
            $(".main-menu").slideToggle();
            return false;
        });

    //popup
    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });

    $("a[href=#callback]").click(function () {
       $("#callback .formname").val($(this).data("form"));
    });

   // //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
                $(".success").removeClass("visible");
                $.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
    //
	// //Chrome Smooth Scroll
	// try {
	// 	$.browserSelector();
	// 	if($("html").hasClass("chrome")) {
	// 		$.smoothScroll();
	// 	}
	// } catch(err) {
    //
	// };
    //
	// $("img, a").on("dragstart", function(event) { event.preventDefault(); });
    //
	//
});
