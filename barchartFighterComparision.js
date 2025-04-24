$(document).ready(function () {
    $('.bar.left').each(function () {
      const value = $(this).data('value');
      $(this).css('width', value + '%');
    });
  
    $('.bar.right').each(function () {
      const value = $(this).data('value');
      $(this).css('width', value + '%');
    });
  });
  