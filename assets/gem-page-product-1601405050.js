

          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1601408805412').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1601408805412').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1601408805412');
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
                  jQuery('#m-1601408805412').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1601408805412').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1601408805412').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      jQuery(function() {
  var $module = jQuery('#m-1601408704723').children('.module');
});
    jQuery(function() {
      var $module = jQuery('#m-1601408704812').children('.module');
    });
  jQuery(function() {
  var $hero = jQuery('#m-1601408704811');
  var $module = jQuery('#m-1601408704811').children('.module');

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
});jQuery(function() {
  var $module = jQuery('#m-1601408704726').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1601408704852').children('.module');
});
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1601408704819').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1601408704819').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1601408704819');
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
                            jQuery('#m-1601408704819').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1601408704819').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1601408704819').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  
    
    jQuery(function() {
      var $module = jQuery('#m-1601408704807').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704813').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704813-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704813-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408893284').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704764').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704764-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704836').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408882382').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704799').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704799-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704872').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408888529').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704867').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704867-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704725').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601576020001').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704853').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704853-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704853-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601576027081').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704724').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704724-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601408704850').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1601576020600').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
        jQuery(function() {
            var $module = jQuery('#m-1601408704701').children('.module');
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
    