try{
  var el=document.getElementById('harbor_ul_a').getElementsByTagName('a');
  var url=document.location.href;
  for(var i=0;i<el.length; i++){
    if (url==el[i].href){
      el[i].className += 'harbor_ul_a_act';
    };
  };
}catch(e){}

jQuery(document).ready(function( $ ) {
         // Pretty simple huh?
         var scene = document.getElementById('scene');
         var parallax = new Parallax(scene);
});

jQuery(document).ready(function( $ ) {
         // Pretty simple huh?
         var scene = document.getElementById('scenePlan');
         var parallax = new Parallax(scene);
});

jQuery(document).ready(function( $ ) {
         // Pretty simple huh?
         var scene = document.getElementById('sceneCenterUser');
         var parallax = new Parallax(scene);
});

new WOW().init();

$(document).on('click', function (e) {
  $('<div class="cursor">')
    .css({
      top: e.clientY,
      left: e.clientX
    })
    .appendTo($(document.body))
    .on('animationend webkitAnimationEnd', function (e) {
      $(this).remove();
    });
});

window.addEventListener("mousewheel", function(e) {
    if (e.ctrlKey) {
      e.preventDefault();
      return false;
    }
  });