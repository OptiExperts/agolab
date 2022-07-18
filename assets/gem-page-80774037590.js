
jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1628421442356').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1628421442356').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1628421442356');
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
                  jQuery('#m-1628421442356').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1628421442356').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1628421442356').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1633945676451').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1633945676451').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1633945676451');
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
                  jQuery('#m-1633945676451').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1633945676451').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1633945676451').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
    
(function( jQuery ){
  var $module = jQuery('#m-1633945676467').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1633945676393').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1633945676366').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    
    
(function( jQuery ){
  var $module = jQuery('#m-1633945676484').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1633945676481').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1633945676435').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    
    
(function( jQuery ){
  var $module = jQuery('#m-1633945676465').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1633945676419').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1633945676487').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    
    
(function( jQuery ){
  var $module = jQuery('#m-1633945676462').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1633945676452').children('.module');
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
var $module = jQuery('#m-1633945676395').children('.module');
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
          var loop = $module.data('loop');
      } else {
          var loop = 0;
      }
      $module.find('.gf_product-images-list').children().each( function( index ) {
        jQuery(this).attr( 'data-position', index );
      });
      $module.find('.gf_product-images-list').owlCarousel({
          mouseDrag: false,
          navSpeed: navspeed,
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
    jQuery(function() {
  var $module = jQuery('#m-1633945676418').children('.module');
});
    
    
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1633946007855').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1633946007855').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1633946007855');
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
                  jQuery('#m-1633946007855').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1633946007855').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1633946007855').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
    
(function( jQuery ){
  var $module = jQuery('#m-1633946007805').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1633946007794').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1633946007759').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    
    
(function( jQuery ){
  var $module = jQuery('#m-1633946007735').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1633946007771').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1633946007815').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    
    
(function( jQuery ){
  var $module = jQuery('#m-1633946007744').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
    var $module = jQuery('#m-1633946007776').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1633946007800').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    
    
(function( jQuery ){
  var $module = jQuery('#m-1633946007839').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1633946007894').children('.module');
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
var $module = jQuery('#m-1633946007746').children('.module');
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
          var loop = $module.data('loop');
      } else {
          var loop = 0;
      }
      $module.find('.gf_product-images-list').children().each( function( index ) {
        jQuery(this).attr( 'data-position', index );
      });
      $module.find('.gf_product-images-list').owlCarousel({
          mouseDrag: false,
          navSpeed: navspeed,
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
    jQuery(function() {
  var $module = jQuery('#m-1633946007829').children('.module');
});
    jQuery(function() {
  var $hero = jQuery('#m-1628421343181');
  var $module = jQuery('#m-1628421343181').children('.module');

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
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1628421417520').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1628421417520').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1628421417520');
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
                            jQuery('#m-1628421417520').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1628421417520').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1628421417520').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343057').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343057-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343057-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421371823').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421377304').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343205').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343205-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343218').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421393232').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421402209').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343066').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343066-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421343060').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421392732').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628421399748').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
        jQuery(function() {
            var $module = jQuery('#m-1628421343053').children('.module');
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
    