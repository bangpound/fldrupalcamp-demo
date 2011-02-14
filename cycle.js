(function ($) {

  Drupal.behaviors.cycle = {

    attach: function (context, settings) {

      // Settings object properties are element IDs and the values are settings
      // for jQuery Cycle.
      $.each(settings.cycle, function (id) {
        $('#' + id).cycle(this);
      });
    }
  };

})(jQuery);
