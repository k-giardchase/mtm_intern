$(document).ready(function() {
  $('#sidebar').affix({
    offset: {
      top: $('.navbar-default').height()
    }
  });
});
