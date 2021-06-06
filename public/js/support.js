
    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
        } else {
        $('.scroll-to-top').fadeOut();
        }
    });

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    $('html, body').animate({scrollTop:0}, 'slow');
    }


	$(".btnproduto").click(function()
	{    
		event.preventDefault();
		obj = $(this).parent();
        cmp1 = obj.children().eq(1)[0].value;
        cmp2 = obj.children().eq(2)[0].value;
        cmp3 = obj.children().eq(3)[0].value;
        cmp4 = obj.children().eq(4)[0].value;
        cmp5 = obj.children().eq(5)[0].value;
        cmp6 = obj.children().eq(6)[0].value;
        cmp7 = obj.children().eq(7)[0].value;
        cmp8 = obj.children().eq(8)[0].value;
        cmp9 = obj.children().eq(9)[0].value;
        cmp10 = obj.children().eq(10)[0].value;
        adicionarproduto($(this),cmp1,cmp2,cmp3,cmp4,cmp5,cmp6,cmp7,cmp8,cmp9,cmp10);

        var comp = $("#btncar span").text();
        if (comp == '') 
        { 
            comp = 1;
        } 
        else 
        {
            comp = parseInt(comp) + 1;
        }
        $("#btncar span").text(comp);
	});                        


    var mainMenu = (function() {
    
    var $listItems = $( '#mainmenu > div > ul > li' ),
        $menuItems = $listItems.children( 'a' ),
        $body = $( 'body' ),
        current = -1;
    
    function init() {
        console.log('entrou');
        $menuItems.on( 'click', open );
        $listItems.on( 'click', function( event ) { event.stopPropagation(); } );
    }
    
    function open( event ) {
    
        var $item = $( event.currentTarget ).parent( 'li.has-submenu' ),
            idx = $item.index();
        if($item.length != 0){
            if( current !== -1 ) {
                $listItems.eq( current ).removeClass( 'mainmenu-open' );
            }
    
            if( current === idx ) {
                $item.removeClass( 'mainmenu-open' );
                current = -1;
            }
            else {
                $item.addClass( 'mainmenu-open' );
                current = idx;
                $body.off( 'click' ).on( 'click', close );
            }
            return false;
        }
        else window.location = $item.find('a').attr('href');
    }
    
    function close( event ) {
        $listItems.eq( current ).removeClass( 'mainmenu-open' );
        current = -1;
    }
    
    return { init : init };
    
    })();



    mainMenu.init();


    $('.slidermenu2').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
        });

