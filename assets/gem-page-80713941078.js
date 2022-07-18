

(function( jQuery ){
  // var $module = jQuery('#m-1633104110746').children('.module');
  // You can add custom Javascript code right here.
})( window.GemQuery || jQuery );
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
(function( jQuery ){
  var $module = jQuery('#m-1633104110775').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
    
    
(function(jQuery) {
    var $module = jQuery('#m-1633104110772').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
(function( jQuery ){
  var $module = jQuery('#m-1633104110817').children('.module');
  $module.gfV3ProductCartButton({ onItemAdded: function(data) {}});
})( window.GemQuery || jQuery );
    
    
    
    
    
        jQuery(function() {
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1633104110731').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1633104110731').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1633104110731');
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
                            jQuery('#m-1633104110731').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1633104110731').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1633104110731').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  
    
    
    
    
    
    
    jQuery(function() {
        var $module = jQuery('#m-1633104110705').children('.module');
    });
  
    jQuery(function() {
        var $module = jQuery('#m-1633104110735').children('.module');
    });
  
    jQuery(function() {
        try {
            var $module = jQuery('#m-1633104110740').children('.module');
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
    });
  
    
(function( jQuery ){
  var $module = jQuery('#m-1633521442951').children('.module');
  $module.gfV3Product();
})( window.GemQuery || jQuery );
    
(function(jQuery) {
  var $module = jQuery('#m-1633521442951-0').children('.module');
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
    var $module = jQuery('#m-1633521442951-2').children('.module');
    $module.gfV3ProductPrice({
        displayCurrency: true
    });
})(window.GemQuery || jQuery);
    
    jQuery(function() {
        var $module = jQuery('#m-1633521478270').children('.module');
        $module.gfV3ProductCartButton({ onItemAdded: function() {}});
    });
  
    
    