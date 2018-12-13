$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('nav').addClass('change');
		$('ul.nav.navbar-nav li a').addClass('change2');
	
		
    }
    else {
    $('nav').removeClass('change');
	
	$('ul.nav.navbar-nav li a').removeClass('change2');
    }
  });
  
  });
  
  $(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 380 && $(document).scrollTop() < 780  ) {
    	$('h1#textotesli').addClass('naslov');
		$('p#textotesli').addClass('naslov');
	    $('p#textotesli1').addClass('naslov');
		$('p#textotesli2').addClass('naslov');
		$('p#textotesli3').addClass('naslov');
    }
    else {
    $('h1#textotesli').removeClass('naslov');
		$('p#textotesli').removeClass('naslov');
	$('p#textotesli1').removeClass('naslov');
		$('p#textotesli2').removeClass('naslov');
		$('p#textotesli3').removeClass('naslov');
	
    }
  });
  
  });
  
  
  
  
  
  $(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 800    && $(document).scrollTop() < 1600) {
    	$('h1#textizumi').addClass('naslov1');
		$('p#textizumi').addClass('naslov1');
	    $('p#textizumi1').addClass('naslov1');
		$('p#textizumi2').addClass('naslov1');
	
    }
    else {
    $('h1#textizumi').removeClass('naslov1');
		$('p#textizumi').removeClass('naslov1');
	$('p#textizumi1').removeClass('naslov1');
		$('p#textizumi2').removeClass('naslov1');
	
	
    }
  });
  
  });
  
  
  
  
  
    $(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 2650)    {
    	$('div#kontaktfield').addClass('form');
		$('a#face').addClass('time');
		$('a#pint').addClass('time1');
    }
    else {
 $('div#kontaktfield').removeClass('form');
	$('a#face').removeClass('time');
	$('a#pint').removeClass('time1');
	
    }
  });
  
  });
  
  
  
  
  
   $(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 2900)    {
    	$('div#potpisfooter img').addClass('pokazi');
		
    }
    else {
   	$('div#potpisfooter img').removeClass('pokazi');
	
	
    }
  });
  
  }); 
  
  
  
  
  
  
  
  
  
  var countDownDate = new Date("Sep 5, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);









