
jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1593943551325').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1593943551325').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1593943551325');
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
                  jQuery('#m-1593943551325').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1593943551325').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1593943551325').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1656759957778').children('.module');   
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
            var $module = jQuery('#m-1593943551423').children('.module');
        }); 
    
    
    jQuery(function() {
        var $module = jQuery('#m-1633009070302').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656760737617').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656760737617').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656760737617');
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
                  jQuery('#m-1656760737617').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656760737617').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656760737617').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656760440961').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656760712534').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1633009070336').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656762108786').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656762108739').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656762108739').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656762108739');
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
                  jQuery('#m-1656762108739').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656762108739').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656762108739').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656762108728').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656762108779').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656762108683').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656762857792').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656762857831').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656762857831').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656762857831');
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
                  jQuery('#m-1656762857831').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656762857831').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656762857831').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656762857745').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656762857756').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656762857765').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656762857817').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656762857791').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656762857791').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656762857791');
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
                  jQuery('#m-1656762857791').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656762857791').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656762857791').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656762857793').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656762857712').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656762857729').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656764121668').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656764121581').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656764121581').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656764121581');
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
                  jQuery('#m-1656764121581').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656764121581').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656764121581').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656764121604').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656764121671').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656764121720').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656764121614').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656764121687').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656764121687').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656764121687');
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
                  jQuery('#m-1656764121687').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656764121687').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656764121687').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656764121617').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656764121641').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656764121577').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656764656689').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656764656633').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656764656633').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656764656633');
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
                  jQuery('#m-1656764656633').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656764656633').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656764656633').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656764656632').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656764656643').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656764656642').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656764656665').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656764656635').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656764656635').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656764656635');
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
                  jQuery('#m-1656764656635').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656764656635').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656764656635').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656764656601').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656764656621').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656764656679').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656764969179').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656764969075').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656764969075').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656764969075');
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
                  jQuery('#m-1656764969075').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656764969075').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656764969075').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656764969151').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656764969090').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656764969119').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656764969152').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656764969098').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656764969098').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656764969098');
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
                  jQuery('#m-1656764969098').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656764969098').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656764969098').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656764969197').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656764969161').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656764969170').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656765185183').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656765185125').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656765185125').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656765185125');
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
                  jQuery('#m-1656765185125').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656765185125').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656765185125').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656765185099').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656765185101').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656765185114').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656765185134').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656765185118').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656765185118').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656765185118');
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
                  jQuery('#m-1656765185118').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656765185118').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656765185118').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656765185100').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656765185117').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656765185068').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656765404214').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656765404222').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656765404222').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656765404222');
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
                  jQuery('#m-1656765404222').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656765404222').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656765404222').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656765404226').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656765404165').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656765404156').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656765404180').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656765404153').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656765404153').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656765404153');
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
                  jQuery('#m-1656765404153').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656765404153').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656765404153').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656765404159').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656765404210').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656765404244').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656765688076').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656765688171').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656765688171').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656765688171');
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
                  jQuery('#m-1656765688171').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656765688171').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656765688171').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656765688081').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656765688174').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656765688121').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656765688074').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656765688179').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656765688179').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656765688179');
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
                  jQuery('#m-1656765688179').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656765688179').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656765688179').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656765688101').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656765688143').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656765688116').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656766323391').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656766323419').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656766323419').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656766323419');
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
                  jQuery('#m-1656766323419').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656766323419').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656766323419').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656766323450').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656766323448').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656766323441').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656766323445').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656766323375').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656766323375').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656766323375');
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
                  jQuery('#m-1656766323375').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656766323375').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656766323375').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656766323464').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656766323474').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656766323420').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656766531421').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656766531430').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656766531430').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656766531430');
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
                  jQuery('#m-1656766531430').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656766531430').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656766531430').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656766531416').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656766531493').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656766531369').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    jQuery(function() {
        var $module = jQuery('#m-1656766531335').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1656766531436').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1656766531436').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1656766531436');
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
                  jQuery('#m-1656766531436').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1656766531436').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1656766531436').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
(function(jQuery) {
  var $module = jQuery('#m-1656766531407').children('.module');
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

  var blankOption = $module.attr('data-blankoption');
  var blankOptionText = $module.attr('data-blankoptiontext');
  var style = $module.attr('data-style');

  $module.gfV3ProductVariants({
    mode: mode,
    blankOption: blankOption,
    blankOptionText: blankOptionText,
    style: style,
    onVariantSelected: function(variant, $select) {}
  });
})(window.GemQuery || jQuery); 
    
(function(jQuery) {
    var $module = jQuery('#m-1656766531389').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1656766531405').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
      
    
    
    
    jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1593943551678').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1593943551678').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1593943551678');
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
                  jQuery('#m-1593943551678').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1593943551678').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1593943551678').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
        jQuery(function() {
            var $hero = jQuery('#m-1593943551698');
            var $module = jQuery('#m-1593943551698').children('.module');

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
    