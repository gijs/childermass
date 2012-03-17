namespace("Childermass.Views.Mustachioed", {
  mustachify: function(templateName, attributes) {
    return Mustache.to_html($('script["text/x-mustache-template"][name=' + templateName + ']').html(), attributes);
  }
});
