var $ = window.$ = require('jquery');
var _ = require('underscore');
var PNotify = require('pnotify');
require('pnotify.buttons');
require('pnotify.nonblock');
require('pnotify.callbacks');
require('pnotify.confirm');
require('pnotify.desktop');
require('pnotify.mobile');
require('pnotify.animations');
require('bootstrap');


var API = {};

// Validates a string as email
API.validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

// Inits navigation buttons that scroll to next section
API.initNav = function () {
	$('.js-nav').on('click', function(e) {
		var navTarget = $(e.currentTarget).closest('section').next('section');
		$('html, body').animate({
	        scrollTop: navTarget.offset().top
	    }, 600);
	});
};

// Configures Pnotify to use bootstrap theme
API.configPnotify = function() {
    // Set PNotify styling to bootstrap 3
    PNotify.prototype.options.styling = 'bootstrap3';
};

// Init navigation
API.initNav();
// Configure Pnotify
API.configPnotify();

// Show test notice
new PNotify({
    title: 'Regular Notice',
    text: 'Check me out! I\'m a notice.'
});
