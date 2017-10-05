jQuery('.navigation a').on('click', function (event) {
  var target 	= jQuery(this)
  var element = target.attr('href')
  jQuery('.navigation a').removeClass('active')
  target.addClass('active')

  jQuery('body, html').animate({
    scrollTop: jQuery(element).offset().top - 70
  }, 800)
})

jQuery('#EnablementGuide a').on('click', function (event) {
  var target = jQuery(this)
  var element = target.attr('href')
  jQuery('.navigation a').removeClass('active')
  target.addClass('active')

  jQuery('body, html').animate({
    scrollTop: jQuery(element).offset().top - 70
  }, 800)

  // document.location.hash = hashMatch()
})

function hashMatch () {
  var navChildren = $('.navigation').children()
  console.log(navChildren)
  for (i = 0; i < navChildren.length; i++) {
  	if (document.location.hash === navChildren[i].hash) {
  		// console.log('we have a match')
  		// console.log(navChildren[i])
  		navChildren[i].className = 'active'
  		// return navChildren[i].hash
  	}
  }
}
