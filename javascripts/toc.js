$(function() {
  $('.document-navigation').append('<strong>Outline</strong><br/><br/>');
  $('h1, h2, h3').each(function(i) {
    $(this).attr('id', 'heading' + i);
    $('<a>')
      .attr('class', 'toc-' + this.tagName)
      .attr('href', '#heading' + i)
      .text($(this).text())
      .appendTo('.document-navigation');
  });
});
