

(function( jQuery ){
  var $module = jQuery('#m-1656650218808').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
(function(jQuery) {
  var $module = jQuery('#m-1656650218842').children('.module');
  var effect = $module.attr('data-effect');
  var magnify = $module.attr('data-zoom-level');
  var displayType = $module.attr('data-displaytype');
  $module.gfV3ProductImage({
    'effect': effect,
    'displayType': displayType,
    'magnify': magnify
  });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
  var $module = jQuery('#m-1656650218914').children('.module');
  $module.gfV4ProductImageList({
    onImageClicked: function(imageUrl, imageZoomUrl) {}
  });

  var style = $module.attr('data-style');
  switch(style) {
    case 'slider':
    var navspeed = $module.data('navspeed'),
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

      marginlg = parseInt($module.data('mlg')),
      marginmd = parseInt($module.data('mmd')),
      marginsm = parseInt($module.data('msm')),
      marginxs = parseInt($module.data('mxs'));

    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
    if(mode == 'production') {
      var loop = $module.data('loop'),
        autoRefresh = true;
    } else {
      var loop = 0,
        autoRefresh = false;
    }
    $module.find('.gf_product-images-list').children().each( function( index ) {
      jQuery(this).attr( 'data-position', index );
    });
    $module.find('.gf_product-images-list').owlCarousel({
      mouseDrag: false,
      navSpeed: navspeed,
      autoRefresh: autoRefresh,
      autoWidth: !1,
      loop: loop,
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
      },
      onInitialized: function(){
        $module.closest('.module-wrap[data-label="(P) Image List"]').addClass('gf-carousel-loaded');
      }
    }); 
    break;
  }
})(window.GemQuery || jQuery); 
    (function( jQuery ){
  // var $module = jQuery('#m-1656650218817').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656650218823').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656650218823').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656650218823');
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
                  jQuery('#m-1656650218823').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656650218823').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656650218823').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656650218785').children('.module');
  var swatchText = $module.attr('data-swatch-text') != undefined ? $module.attr('data-swatch-text') : '1';
  $module.gfV3ProductSwatches({
    swatchText: swatchText,
    onSwatchSelected: function(variant, $swatch) {}
  });
})(window.GemQuery || jQuery);
    
(function(jQuery) {
    var $module = jQuery('#m-1656650218776').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1656650218825').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    (function( jQuery ){
  // var $module = jQuery('#m-1656650218767').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1656650605748').children('.module');   
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
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
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
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1656650470175').children('.module');
    var single = $module.attr('data-single');
    var openDefault = $module.attr('data-openDefault');
    var openTab = $module.attr('data-openTab');
    var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

    if(openDefault == 0 || openDefault == '0') {
      openTab = '0';
    }

    $module.gfAccordion({
      single: single,
      openTab: openTab,
      mode: mode,
      onChanged: function() {	
        // Fix (P) Desc read more bug	
        $module.find('.module-wrap[data-label="(P) Description"]').each(function(index, el) {	
          if (jQuery(el).children('.module').data('gfv3productdesc') != undefined) {	
            jQuery(el).children(".module").data("gfv3productdesc").initReadMore();	
          }	
        })	
      }
    });

    var borderColor = $module.attr('data-borderColor');
    var borderSize = $module.attr('data-borderSize');

    $module.children('[data-accordion]').children('[data-control]').css('border-bottom', borderSize + ' solid ' + borderColor);
    $module.children('[data-accordion]').children('[data-content]').children().css('border-bottom', borderSize + ' solid ' + borderColor);
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    jQuery(function() {
  var $hero = jQuery('#m-1601293721958');
  var $module = jQuery('#m-1601293721958').children('.module');

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
    
(function( jQuery ){
  var $module = jQuery('#m-1656768892564').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
    
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1656650629006').children('.module');   
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
        autoRefresh = true, 
        loop = $module.data('loop');
    } else {
    var autoplay = 0, 
        autoRefresh = false, 
        loop = 0;
    }

    var initCarousel = function() {
      $module.owlCarousel({
        mouseDrag: false,
        autoplayHoverPause: autoplayhoverpause,
        autoplay: autoplay,
        autoRefresh: autoRefresh,
        autoplaySpeed: navspeed,
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
        },
        onInitialized: function () {
          $module.closest('.module-wrap[data-label="Carousel"]').addClass('gf-carousel-loaded');
          jQuery(window).trigger("resize");
        }
      });
    }
    
    // Fix nested carousel bug	
    if ($module.parent().parent().closest('.module-wrap[data-label="Carousel"]').length > 0) {	
      setTimeout(function() {	
        initCarousel();	
      }, 300)	
    } else {	
      initCarousel();	
    }
  } catch(err) {}
})( window.GemQuery || jQuery );
    
    jQuery(function() {
  var $module = jQuery('#m-1601293722064').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1601293721996').children('.module');
});
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1601293722061').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1601293722061').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1601293722061');
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
                            jQuery('#m-1601293722061').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1601293722061').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1601293722061').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1601293721930').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293721930-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293721930-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293800609').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1656651134516').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293721913').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293721913-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293721929').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293794632').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1656651146272').children('.module');
    });
  
    
    jQuery(function() {
        var $module = jQuery('#m-1601293721901').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293721901-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293721946').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601293788569').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1656651151907').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210377').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210377-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210408').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210410').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1656651210387').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210357').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210357-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210357-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210452').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1656651210425').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210361').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210361-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210367').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1656651210402').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1656651210439').children('.module');
    });
  
        jQuery(function() {
            var $module = jQuery('#m-1601293722082').children('.module');
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
    