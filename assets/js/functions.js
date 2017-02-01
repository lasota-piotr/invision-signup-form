// Browser detection for when you get desperate. A measure of last resort.

// http://rog.ie/post/9089341529/html5boilerplatejs
// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }

// Uncomment the below to use:
// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);


function initPage(){

	// your functions go here

	console.log('page loaded');

  $(".js-sign-up-form__input").focus(function(){
    $(this).parent().addClass("sign-up-form__group--focus");
    $(this).parent().addClass("sign-up-form__group--filled");
  });

  $(".js-sign-up-form__input").focusout(function(){
    $(this).parent().removeClass("sign-up-form__group--focus");
    if($(this).val() == '') {
      $(this).parent().removeClass("sign-up-form__group--filled");
    }
  });

};


