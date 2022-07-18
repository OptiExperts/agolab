

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
        var $module = jQuery('#m-1578416572638').children('.module');
        $module.gfV3ProductImageList({
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
                $module.find('.gf_product-images-list').owlCarousel({
                    mouseDrag: true,
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
                    }
                });
                break;
        }
    });
  
            jQuery(function() {
                var $module = jQuery('#m-1569522558247-1').children('.module');
            });
        
    jQuery(function() {
      var $module = jQuery('#m-1569761701545').children('.module');
    });
  
            jQuery(function() {
                var $module = jQuery('#m-1569522558247-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
    jQuery(function() {
      var $module = jQuery('#m-1569525577573').children('.module');
    });
  
    
    jQuery(function() {
      var $module = jQuery('#m-1569666914981').children('.module');
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1569666998558').children('.module');
    });
  
    jQuery(function() {
      var $module = jQuery('#m-1569666998180').children('.module');
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
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            var $module = jQuery('#m-1578416635425').children('.module');
            if (mode == 'dev') {
                jQuery('#m-1578416635425').attr('data-name', '').css('background-image', 'none').css('min-height', '50px').removeAttr('data-image');
                
                var flag = true;
                var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1578416635425');
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
                            jQuery('#m-1578416635425').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
                        }
                        if (name != '' && name != 'Custom Code') {
                            flag = false;
                            jQuery('#m-1578416635425').attr('data-name', name);
                        }
                    } catch(error) {
                        console.log(error);
                    }
                }
                if (flag) {
                    jQuery('#m-1578416635425').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
                }
            }
        });
  