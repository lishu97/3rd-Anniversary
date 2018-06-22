var reg = /Android|webOS|iPhone|iPod|BlackBerry/i;
var x = window.innerWidth / clientWidth;
var y = window.innerHeight / clientHeight;

$('body').css('webkitTransform','scale(' + x + ',' + y + ')');   /* for Chrome || Safari */
$('body').css('msTransform','scale(' + x + ',' + y + ')');       /* for Firefox */
$('body').css('mozTransform','scale(' + x + ',' + y + ')');      /* for IE */
$('body').css('oTransform','scale(' + x + ',' + y + ')');        /* for Opera */

if(reg.test(navigator.userAgent)) {
  $('body').css('transform', 'rotate(90deg)');
  $('#loveHeart').css('position', 'relative');
  $('#words').css({ 'position': 'absolute', 'top': '28%', 'left': '12%' });
}