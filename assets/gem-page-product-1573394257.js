

            jQuery(function() {
                var $module = jQuery('#m-1569522558247').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1569522558247-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1569522558247-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1569522558247-2').children('.module');
                $module.gfV3ProductPrice();
            });
        jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1653381673120').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1653381673120').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1653381673120');
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
                  jQuery('#m-1653381673120').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1653381673120').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1653381673120').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
    jQuery(function() {
        var $module = jQuery('#m-1569524684404').children('.module');
        $module.gfV3ProductDesc();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569524378754').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1569525577573').children('.module');
    });
  
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1578415917389').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1578415917389').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1578415917389');
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
                            jQuery('#m-1578415917389').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1578415917389').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1578415917389').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  
    jQuery(function() {
        var $module = jQuery('#m-1569762416838').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569762416838-0').children('.module');
        var effect = $module.attr('data-effect');
        $module.gfV3ProductImage({
            'effect': effect
        })
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569762416838-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569762416838-2').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1570467587275').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1573319164360').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1570469182964').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1570469182964-0').children('.module');
        var effect = $module.attr('data-effect');
        $module.gfV3ProductImage({
            'effect': effect
        })
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1570469182964-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1570469182983').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1570469182875').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1573319191768').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569762893178').children('.module');
        $module.gfV3Product();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569762893178-0').children('.module');
        var effect = $module.attr('data-effect');
        $module.gfV3ProductImage({
            'effect': effect
        })
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1569762893178-1').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1570468920901').children('.module');
        $module.gfV3ProductPrice();
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1570467819847').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1573319210643').children('.module');
    });
  