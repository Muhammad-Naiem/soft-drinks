(function ($) {
    $(function () {

        $('.hamburger').click(function () {
            $("body").toggleClass("navshown");
            $("html").toggleClass("navshown");
            $('body').toggleClass('arrow-animated')
            $('body').toggleClass('mobi-nav-shown')

        });
        
        $(window).on('scroll', function(){
            var ScrollY = $(this).scrollTop();
            
            if(ScrollY > 500){
                console.log(ScrollY)
                $('.back-button').fadeIn()
                
            }else{
                $('.back-button').fadeOut()
            }
        })
        
        $('.back-button').click(function () {
            $('html, body').animate({scrollTop: 0})

        });

        if ($('header').length) {
            var header = new Headroom(document.querySelector("header"), {
                tolerance: 0,
                offset: 0,
                classes: {
                    initial: "headroom",
                    pinned: "slideDown",
                    unpinned: "slideUp"
                }
            });
            header.init();
        }


    if($('.header-bg-white').length){
        $('body').addClass('header-white')
    }


        var $slider = $('.carousel-wrap');
        if ($slider.length) {
            var currentSlide;
            var slidesCount;
            var sliderCounter = document.createElement('div');
            sliderCounter.classList.add('slide-count-wrap');

            var updateSliderCounter = function (slick, currentIndex) {
                currentSlide = slick.slickCurrentSlide() + 1;
                slidesCount = slick.slideCount;
                $(sliderCounter).html('<span class="current">' + '' + currentSlide + '</span>' + '<em>' + '/' + '</em>' + '<span class="total">' + '' + slidesCount + '</span>')
            };

            $('.carousel-wrap').on('init', function (event, slick) {
                $('.arrow-wrap').append(sliderCounter);
                updateSliderCounter(slick);
            });

            $slider.on('afterChange', function (event, slick, currentSlide) {
                updateSliderCounter(slick, currentSlide);
            });

            var slickPrevBtn = $('.slick-prev');
            var slickNextBtn = $('.slick-next');

            $('.carousel-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: true,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                fade: true,
                prevArrow: slickPrevBtn,
                nextArrow: slickNextBtn
            });

        }

        $(".down-btn").click(function () {
            $('html, body').animate({
                scrollTop: $("#flavors-wrap").offset().top
            }, 100);

        });


        if ($('.flavors-slider').length) {
            $('.flavors-slider').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                adaptiveHeight: true,
            });
            $(window).on('resize', function () {
                $('.flavors-slider').slick('resize');

            });
        }

        if ($('.curry-club-item-wrap').length) {
            $('.curry-club-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
            });
            $(window).on('resize', function () {
                $('.curry-club-item-wrap').slick('resize');

            });
        }



        $(".scroll-to-section").click(function () {
            $('html, body').animate({
                scrollTop: $("#photo-gallery-wrap").offset().top
            }, 200);

        });
       
        // var player = new Vimeo.Player('taproom-video');
  



        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({});
        }
        if ($('#datetimepicker12').length) {

            moment.locale('en', {
                week: {
                    dow: 0
                }
            });
            $('#datetimepicker12').datetimepicker({
                inline: true,
                sideBySide: true,
                format: 'DD-MM-YY HH:mm',
                stepping: 30,
                // minDate: moment()
            });
            $('.calendar tr th.picker-switch').click(function (e) {
                e.stopPropagation()
            })
        }


        var currentYear = new Date().getFullYear();

        $('.age-gating-input-wrap input[type="number"]').change(function () {


            var $this = $(this).val();

            var TotalAge = currentYear - $this;
            $('.age-gating-input-wrap input[type="submit"]').click(function (e) {
                e.preventDefault()
                if (TotalAge > 20 && TotalAge < 100) {
                    $('body').addClass('age-verified')

                    setTimeout(function () {
                        window.location = 'home.php';
                    }, 2000)


                    $('body').removeClass('over-age')
                    $('body').removeClass('under-age')
                } else if (TotalAge > 100) {

                    $('.modal-over-age').fadeIn()

                    $('body').addClass('over-age')
                    $('body').removeClass('age-verified')
                    $('body').removeClass('under-age')
                } else {
                    $('body').addClass('under-age')
                    $('body').removeClass('age-verified')
                    $('body').removeClass('over-age')
                    $('.modal-under-age').fadeIn()
                }
            })
        })

        $('.close-icon').click(function () {
            $('.modal-wrap').fadeOut();
        })


        $('.calendar-arrow-right').click(function () {
            $('th.next').click()


        })

        $('.calendar-arrow-left').click(function () {
            $('th.prev').click()


        })


        var activeDate = $('td.day.active').text(),
            activeYear = $('th.picker-switch').eq(0).text(),
            activeMonth = activeYear.split(" ")[0],
            activeMainYear = activeYear.split(" ")[1]

        $('.active-date').text(activeDate + ',')
        $('.active-year').text(activeMainYear)
        $('.active-month').text(activeMonth)


//        $('.video-modal-btn-1').click(function (e) {
//            e.preventDefault()
//            var $this = $(this),
//                $thisAtte = $this.attr('href');
//            $('body').addClass('makeplay-video-modal-show')
//            $('#makplay-video').attr('src', $thisAtte + "?&autoplay=1")
//        })

        $('.makeplay-video-modal').click(function () {
            $('body').removeClass('makeplay-video-modal-show')
            $('#makplay-video').attr('src', '')
        })
        

        $('.dropdown-wrap').parent('li').addClass('has-sub-nav')
        $('.has-sub-nav').each(function () {
            var $this = $(this);

            $this.find('> a').mouseenter(function () {
                $this.find('.dropdown-wrap').fadeIn()
                $("body").addClass("sub-navShown");
            })
            $this.mouseleave(function () {
                $this.find('.dropdown-wrap').fadeOut();
                $("body").removeClass("sub-navShown");
            })
        })


        
        $('.beerShown > a').click(function(e){
            e.preventDefault();
            $('#our-beer-dropdown').show()
        })

        $(".taproom-video-1").each(function() {
            var src= $('#myDiv1').attr('data-src');
            $('.taproom-video-trigger-1').click(function (e) {
                e.preventDefault()
                $('body').addClass('taproom-video-modal-show-1')
                $(".taproom-video-1").each(function() {
                    $(this).attr('src', src);
                });
    
            })
            $('.taproom-video-modal').click(function () {
                $('body').removeClass('taproom-video-modal-show-1')
    
                        $(".taproom-video-1").each(function() {
                            $(this).attr('src','');
                        });
            })
            $('.taproom-video-modal-wrapper').click(function (e) {
                e.stopPropagation()
            })
        
        })
        
        
        
        $('.fest-trigger').click(function(e){
            e.preventDefault()
            var ThisLink = $(this).attr('href');
            $('body').addClass('makeplay-modal-1')
            $("#makplay-video-2").each(function() {
                $(this).attr('src', ThisLink);
            });
        })
        $('.makeplay-video-modal-1').click(function () {
            $('body').removeClass('makeplay-modal-1')
            $('#makplay-video-2').attr('src','');
           
        })
        $('.makeplay-video-modal-inner-1').click(function (e) {
            e.stopPropagation()
        })
        
        
        $(".taproom-video-2").each(function() {
            var src= $('#myDiv2').attr('data-src');
            $('.taproom-video-trigger-2').click(function (e) {
                e.preventDefault()
                $('body').addClass('taproom-video-modal-show-2')
                $(".taproom-video-2").each(function() {
                    $(this).attr('src', src);
                });
    
            })
            
            $('.taproom-video-modal').click(function () {
                $('body').removeClass('taproom-video-modal-show-2')
    
                        $(".taproom-video-2").each(function() {
                            $(this).attr('src','');
                        });
            })
            $('.taproom-video-modal-wrapper').click(function (e) {
                e.stopPropagation()
            })
        
        })
        
        setTimeout(function(){
            $('body').addClass('preloader-loaded')
        }, 3000)
        setTimeout(function(){
            $('.blink').addClass('eye-wink')
        }, 1800)
          
        setTimeout(function(){
            $('body').addClass('preloader-fully-loaded')
        }, 4200)


        if ($('.goes-well-with-slider-item-wrap').length) {
            $('.goes-well-with-slider-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                navigation: false,
                prevArrow: $('.arrow-left'),
                nextArrow: $('.arrow-right'),
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                fade: false,
                responsive: [
                    {
                      breakpoint: 1600,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        adaptiveHeight: true,
                      },
                    },
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        adaptiveHeight: true,
                      },
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                      },
                      
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      },
                      
                    },
                  ],
            });
            $(window).on('resize', function () {
                $('.goes-well-with-slider-item-wrap').slick('resize');

            });
        }

       

        if($('.single-info-image').length){


            

            var scrollAnimate = $('.single-info-animate-image figure'),
                scrollAnimateX = scrollAnimate.eq(0),
                scrollAnimateX2 = scrollAnimate.eq(1),
                scrollAnimate1 = $('.brewers-yeast-animate-image figure'),
                scrollAnimateX3 = scrollAnimate1.eq(0),
                scrollAnimateX4 = scrollAnimate1.eq(1);

            $(window).on('scroll', function(){
                var offsetX = $('.single-info-animate-image').offset().top / 8;
                var offsetX2 = $('.brewers-yeast-animate-image').offset().top / 6.5;
                var scrollTopPos = $(this).scrollTop() / 6;


                scrollAnimateX.css("transform", `translateX(${-scrollTopPos}px)`); 
                scrollAnimateX2.css("transform", `translateX(${scrollTopPos}px)`); 
                scrollAnimateX3.css("transform", `translateX(${-scrollTopPos}px)`); 
                scrollAnimateX4.css("transform", `translateX(${scrollTopPos}px)`); 
                
                scrollAnimateX.css("left", offsetX); 
                scrollAnimateX2.css("left", -offsetX);
                scrollAnimateX3.css("left", offsetX2); 
                scrollAnimateX4.css("left", -offsetX2);

            })
        }

        
        
        
        
        if($(".sticky-trigger").length){
            $('body').addClass("sticky-trigger")
        }
        

        if($('.privacy-tab-triger').length){
            var position = $(window).scrollTop(); 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop()
                    scrollYpos = $('.privacy-tab-triger').offset().top;
                if(scroll > scrollYpos){
                    if(scroll > position) {
                        $('.privacy-tab-triger > div').animate({'top': '30'}, 0)
                    } else {
                        $('.privacy-tab-triger > div').animate({'top': '120'}, 0)
                    }
                    position = scroll;
                }
            });
        }


        
    $('.taproom-modal-trigger a').click(function(){
        var src= $(this).attr('href');

        $('.taproom-hero-video-wrap').fadeIn()
        $(".taproom-hero-video-wrap iframe").attr('src', src);


    })
    $('.taproom-hero-video-wrap').click(function () {
    $(".taproom-hero-video-wrap iframe").attr('src','');
        $('.taproom-hero-video-wrap').fadeOut()
    })
    $('.taproom-hero-video-wrap iframe').click(function (e) {
        e.stopPropagation()
    })




    $('.dropdown-wrap').parent('li').addClass('has-sub-nav')
    $('.has-sub-nav').each(function () {
        var $this = $(this);

        $this.find('> a').mouseenter(function () {
            $this.find('.img/dropdown').fadeIn()
            $("body").addClass("sub-navShown");
        })
        $this.mouseleave(function () {
            $this.find('.img/dropdown').fadeOut();
            $("body").removeClass("sub-navShown");
        })
    })

    if($('.our-story').length){
        $('body').addClass('our-story')
    }
    

    $('.sub-sub-menu').parent('li').addClass('has-sub-sub-nav')
    $('.has-sub-sub-nav').each(function () {
        var $this = $(this);

        $this.mouseenter(function () {
            $this.find('.sub-sub-menu').fadeIn()
            $("body").addClass("sub-sub-navShown");
        })
        $this.mouseleave(function () {
            $this.find('.sub-sub-menu').fadeOut();
            $("body").removeClass("sub-sub-navShown");
        })
    })

    $('.sub-menu-dropdown').parent().addClass('has-sub-dropdown')
    $('.has-sub-dropdown').each(function () {
        var $this = $(this);

        $this.find('> a').mouseenter(function () {
            $this.find('.sub-menu-dropdown').fadeIn()
            $("body").addClass("sub-sub-navShown");
        })
        $this.mouseleave(function () {
            $this.find('.sub-menu-dropdown').fadeOut();
            $("body").removeClass("sub-sub-navShown");
        })
    })


    $('.beers-dropdown-nav-item ul li').mouseenter(function () {
        $('.beers-dropdown-thumb-wrap .beers-dropdown-thumb').hide();

        var activeTab = $(this).find('a').attr('rel');
        $(activeTab).show();
        return false;
    });
    $('.dropdown-makeplay-content ul li a').mouseenter(function () {
        $('.dropdown-makeplay-thumb .dropdown-makeplay-thumb-item').hide();

        var activeTab = $(this).attr('rel');
        $(activeTab).fadeIn();
        return false;
    });

    $('.footer-sub-nav').each(function(){
        var $$this = $(this)

        $$this.find('a').click(function (e) {
            e.preventDefault()
            $('.img/dropdown').hide();

            var activeTab = $(this).attr('href');
            $(activeTab).fadeIn();
            return false;
        });
    })



    $('.mobi-submenu').parent('li').addClass('has-mobi-submenu')
    $('.has-mobi-submenu').each(function () {
        var $this = $(this);

        $this.find('> a').click(function (e) {
            var $$this = $(this);
            e.preventDefault()
            $this.find('.mobi-submenu').slideToggle()
            $$this.toggleClass("mobi-submenuShown");
            $$this.parent($this).toggleClass("mobi-submenuShown");
        })
    })


    $('.mobi-sub-sub-menu').parent('li').addClass('has-mobi-sub-sub-menu')
    $('.has-mobi-sub-sub-menu').each(function () {
        var $this = $(this);

        $this.find('> a').click(function (e) {
            var $$this = $(this);
            e.preventDefault()
            $this.find('.mobi-sub-sub-menu').slideToggle()
            $$this.toggleClass("mobi-sub-submenuShown");
            $$this.parent($this).toggleClass("mobi-sub-submenuShown");
        })
    })

    $('.sub-menu-dropdown-mobile').parent('li').addClass('has-sub-menu-dropdown-mobile')
    $('.has-sub-menu-dropdown-mobile').each(function () {
        var $this = $(this);

        $this.find('> a').click(function (e) {
            var $$this = $(this);
            e.preventDefault()
            $this.find('.sub-menu-dropdown-mobile').slideToggle()
            $$this.toggleClass("mobi-sub-menu-dropdownShow");
            $$this.parent($this).toggleClass("mobi-sub-menu-dropdown");
        })
    })
    
        var elementTitle = $('.main-content-wrap').data('title');
        $(document).prop('title', `Soft Drink | ${elementTitle}`);
        
        
        if($('.privacy-page').length){
            $('body').addClass('privacy-page')
        }
        
        

    }) // End ready function.

    $(window).scroll(function () {

        $('.beers-thumb-right, .flavor-thumb-right, .partners-thumb-1').each(function () {
            if ($(this).offset().top = $(window).scrollTop()) {
                var difference = $(window).scrollTop() - $(this).offset().top;
                var half = -(difference / 2.6) + 'px',
                    transform = 'translate3d(' + half + ',0 ' + ',0)';
                $(this).find('img').css('transform', transform);
            } else {
                $(this).find('img').css('transform', 'translate3d(0,0,0)');
            }
        });
    });

    $(window).scroll(function () {

        $('.beers-thumb-left, .flavor-thumb-left, .partners-thumb-2').each(function () {
            if ($(this).offset().top = $(window).scrollTop()) {
                var difference = $(window).scrollTop() - $(this).offset().top;
                var half = (difference / 2.6) + 'px',
                    transform = 'translate3d(' + half + ',0 ' + ',0)';
                $(this).find('img').css('transform', transform);
            } else {
                $(this).find('img').css('transform', 'translate3d(0,0,0)');
            }
        });







    });



    $('body').addClass('preloader-loading')

    
    
    
    var mac = 0;
    if (navigator.userAgent.indexOf('Mac') > 0) {
        mac = 1;
    } else {
        mac = 0;
    }
    if (1 == mac) {
        $('body').addClass('mac-os');
    } else {
        $("body").addClass('win-os');
    }



})(jQuery)