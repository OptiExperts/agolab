

    
(function( jQuery ){
  try {
    var $module = jQuery('#m-1656653727068').children('.module');
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
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656653754773').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654043248').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654052944').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654051515').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654050084').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654049057').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654048153').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654047785').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654047269').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654046975').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654046576').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654046140').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654143443').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654142369').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654141374').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654140655').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654140083').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654139394').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654194082').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654193207').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654192461').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654191651').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654190926').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654190089').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    
    
(function( jQuery ){
  var $module = jQuery('#m-1656654189525').children('.module');
  if(jQuery().gfYoutube) {
    $module.gfYoutube();
  }
})( window.GemQuery || jQuery );
    