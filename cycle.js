(function ($) {

  Drupal.behaviors.cycle = {
    attach: function (context, settings) {
      $.each(settings.cycle, function (id) {
        $('#' + id).cycle(this);
      });
    }
  };

})(jQuery);
