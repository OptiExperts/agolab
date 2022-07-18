

        jQuery(function() {
            var $hero = jQuery('#m-1570445486580');
            var $module = jQuery('#m-1570445486580').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $module.children('.hero-link').hide();
            }

            var height = $.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);

                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');

                $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                    'background-image'      : backgroundImage,
                    'background-size'       : backgroundSize,
                    'background-position'   : backgroundPosition,
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    console.log('>> background image: ' + backgroundImage);

                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1573416009156').children('.module');   
            var navspeed = $module.data('navspeed'),
                autoplaytimeout = $module.data('autoplaytimeout'),
                autoplayhoverpause = $module.data('autoplayhoverpause'),
                navlg = $module.data('navlg'),
                navmd = $module.data('navmd'),
                navsm = $module.data('navsm'),
                navxs = $module.data('navxs'),
                collg = $module.data('collg'),
                colmd = $module.data('colmd'),
                colsm = $module.data('colsm'),
                colxs = $module.data('colxs'),
                dotslg = $module.data('dotslg'),
                dotsmd = $module.data('dotsmd'),
                dotssm = $module.data('dotssm'),
                dotsxs = $module.data('dotsxs'),
                marginlg = parseInt($module.data('marginlg')),
                marginmd = parseInt($module.data('marginmd')),
                marginsm = parseInt($module.data('marginsm')),
                marginxs = parseInt($module.data('marginxs'));

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'production') {
                var autoplay = $module.data('autoplay'), 
                    loop = $module.data('loop');
            } else {
                var autoplay = 0, 
                    loop = 0;
            }
        
            $module.owlCarousel({
                mouseDrag: false,
                autoplayHoverPause: autoplayhoverpause,
                autoplay: autoplay,
                autoplayTimeout: autoplaytimeout,
                loop: loop,
                navSpeed: navspeed,
                autoWidth: !1,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:colxs,
                        nav: navxs,
                        dots:dotsxs,
                        margin: marginxs
                    },
                    768:{
                        items:colsm,
                        nav: navsm,
                        dots:dotssm,
                        margin: marginsm
                    },
                    992:{
                        items:colmd,
                        nav: navmd,
                        dots:dotsmd,
                        margin: marginmd
                    },
                    1200:{
                        items:collg,
                        nav: navlg,
                        dots:dotslg,
                        margin: marginlg
                    }
                }
            }); 
        }); 
    
    jQuery(function() {
        var $hero = jQuery('#m-1570453271084');
        var $module = jQuery('#m-1570453271084').children('.module');

        var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
        var $heroLink = $hero.children('.hero-link');
        if(mode == 'dev' && $heroLink.length > 0) {
             $hero.children('.hero-link').hide();
        }
        if (mode == 'production' && $heroLink.length > 0) {
            $module.off('click.openLink').on('click.openLink', function(e) {
                var $target = jQuery(e.target);
                if ($target.length > 0){
                    var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
                    if (linkTarget == "") {
                        var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
                        var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
                        if (link != "") {
                            if (newTab == "") {
                                window.location.href = link;
                            } else {
                                window.open(link, newTab);
                            }
                        }
                    }
                };
            })
        }

        var height = jQuery.trim($module.attr('data-height'));
        if(height == undefined || height == '') {
            $hero.attr('style', 'height: auto!important');
            jQuery(window).resize(function(){
                $hero.attr('style', 'height: auto!important');
            });
        } else {
            $hero.removeAttr('style');
        }

        var effect = $module.attr('data-effect');
        var transition = $module.attr('data-transition');

        if(effect == 'effect-zoom') {
            $module.parent().addClass(effect);

            setTimeout(function() {
                var backgroundImage = $module.parent().css('background-image');
                var backgroundSize = $module.parent().css('background-size');
                var backgroundPosition = $module.parent().css('background-position');
                $module.siblings('.gf_hero-bg-wrap').css({
                    'background-image'      : 'inherit',
                    'background-size'       : 'inherit',
                    'background-position'   : 'inherit',
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                })
                $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                    'background-image'      : 'inherit',
                    'background-size'       : 'inherit',
                    'background-position'   : 'inherit',
                    '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                    '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                    '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                    '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                    'transition'            : 'transform ' + transition + 's ease-in-out'
                });
            }, 300);
        }

        if($module.attr('data-fixedMode') == '1'){
            $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

            jQuery(window).resize(function(){
                var backgroundImage =  $module.parent().css('background-image');
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
            });
        } else {
            $module.parent().removeAttr('style');
        }
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572620281666').children('.module');
        $module.gfV3Product();
    });
  
(function(jQuery) {
  var $module = jQuery('#m-1619984455513').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1572620281666-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572620281666-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572812924156').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572813301206').children('.module');
        $module.gfV3Product();
    });
  
(function(jQuery) {
  var $module = jQuery('#m-1619984457885').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1572813301206-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572813301206-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572813301219').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572813445366').children('.module');
        $module.gfV3Product();
    });
  
(function(jQuery) {
  var $module = jQuery('#m-1619984466896').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1572813445366-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572813445366-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1572813445335').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1619982866197').children('.module');
        $module.gfV3Product();
    });
  
(function(jQuery) {
  var $module = jQuery('#m-1619984474691').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  })
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1619982866197-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1619982866197-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1619982866284').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162782').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162782-0').children('.module');
        var effect = $module.attr('data-effect');
        $module.gfV3ProductImage({
            'effect': effect
        })
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162782-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162782-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162925').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621486473').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621486473-0').children('.module');
        var effect = $module.attr('data-effect');
        $module.gfV3ProductImage({
            'effect': effect
        })
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621486473-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621486473-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621486484').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162841').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162841-0').children('.module');
        var effect = $module.attr('data-effect');
        $module.gfV3ProductImage({
            'effect': effect
        })
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162841-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162841-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621162910').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621478804').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621478804-0').children('.module');
        var effect = $module.attr('data-effect');
        $module.gfV3ProductImage({
            'effect': effect
        })
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621478804-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621478804-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1581621478806').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1571068313933').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1571068313933').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1571068313933');
                if ($bkLiquid && $bkLiquid.length > 0) {
                    var $settings = $bkLiquid.find('.settings');
                    try {
                        var name = '';
                        var imageUrl = '';
                        settings = JSON.parse($settings.html());
                        for (var i = 0; i < settings.length; i++) {
                            if (settings[i].name == 'name') {
                                name = settings[i].default_value
                            }
                            if (settings[i].name == 'image') {
                                imageUrl = settings[i].default_value
                            }
                        }
                        if (imageUrl != '') {
                            flag = false;
                            jQuery('#m-1571068313933').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1571068313933').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1571068313933').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  
        jQuery(function() {
            var $module = jQuery('#m-1570373144649').children('.module');
            var single   = $module.attr('data-single');
            var openDefault  = $module.attr('data-openDefault');
            var openTab  = $module.attr('data-openTab');
            var mode     = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

            if(openDefault == 0 || openDefault == '0') {
                openTab = '0';
            }

            $module.gfAccordion({
                single: single,
                openTab: openTab,
                mode: mode
            });

            var borderColor = $module.attr('data-borderColor');
            var borderSize = $module.attr('data-borderSize');

            $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
            $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
        });
    