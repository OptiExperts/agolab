
jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1628081604439').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1628081604439').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1628081604439');
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
                  jQuery('#m-1628081604439').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1628081604439').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1628081604439').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});jQuery(function() {
  var $module = jQuery('#m-1628081550852').children('.module');
});
    jQuery(function() {
      var $module = jQuery('#m-1628081550943').children('.module');
    });
  jQuery(function() {
  var $hero = jQuery('#m-1628081550907');
  var $module = jQuery('#m-1628081550907').children('.module');

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
  var $module = jQuery('#m-1628081550908').children('.module');
});jQuery(function() {
  var $module = jQuery('#m-1628081550958').children('.module');
});
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1628081564157').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1628081564157').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1628081564157');
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
                            jQuery('#m-1628081564157').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1628081564157').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1628081564157').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  
    jQuery(function() {
      var $module = jQuery('#m-1628081550849').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550825').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550825-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550825-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081629491').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550831').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550831-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550977').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081636615').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550981').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550981-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550933').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081643217').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550991').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550991-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550966').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628092915535').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550805').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550805-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550805-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628092910317').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550816').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550816-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628081550984').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1628092903982').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
        jQuery(function() {
            var $module = jQuery('#m-1628081550982').children('.module');
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
    