$(document).ready(function() {

	/* GENERAL
	*************/

	/* START Code snippet to handle Same page-scrolling, courtesy of CSSTricks */

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {

			//Close menu and slide it out of viewport when user clicks on a link in the menu
			mobileNav.slideUp();
			desktopNav.slideUp();
			closeMobileMenu();

	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
	      &&
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        })
	      }
	    }
	  });

		/* END of Same-page scrolling snippet */

		/* Click-handlers for the Portfolio-section */

   // Open tabs
		$(".ml-projects-thumb").click(function(){

			var elemIdNr = (($(this).attr("id").substr(-2)));

			$("#ml-web-project-" + elemIdNr).slideDown("slow");
			TweenMax.to("#ml-web-project-iframe-" + elemIdNr, 0.5, {display:"block", opacity:1, delay:0.5});
			TweenMax.to("#ml-web-project-thumb-"  + elemIdNr, 0.5, {opacity:0, display:"none"});
			mobileNav.slideUp();
			closeMobileMenu();

			$(window).scrollTo("#ml-web-project-thumb-" + elemIdNr, 1000);
		})

   // Close tabs
		$(".ml-projects-collapse-tab").click(function(){

			var elemIdNr = (($(this).attr("id").substr(-2)));

			$("#ml-web-project-" + elemIdNr).slideUp("slow");
			TweenMax.to("#ml-web-project-iframe-"  + elemIdNr, 0.5, {display:"none", opacity:0});
			TweenMax.to("#ml-web-project-thumb-"  + elemIdNr, 0.7, {display:"inline-block", opacity:1});

			$(window).scrollTo("#ml-projects", 1000);
		})

		/* Animations */

		// Profile Bubble Intro Animation
			TweenMax.staggerFromTo(["#ml-profile", "#ml-profile-github-badge", "#ml-profile-linkedin-badge"], 1, {scale:0}, {scale:1, ease:Back.easeOut, delay:0.6}, 0.7);

		// Profile Bubble Bumper Animation
			var mlBubbleAnimTl = new TimelineMax({delay:10, repeat:3, repeatDelay:10});

			var mlTypingTxtAnimTlWS_DYN_INS_RAND =  new TimelineMax({paused:true});

			mySplitText = new SplitText("#ml-typing-txt-01", {type:"words,chars", charsClass: "charTypeTxt++"});
			mySplitText02 = new SplitText("#ml-typing-txt-02", {type:"words,chars", charsClass: "charTypeTxtB++"});
			mySplitText03 = new SplitText("#ml-typing-txt-03", {type:"words,chars", charsClass: "charTypeTxtC++"});
			mySplitText04 = new SplitText("#ml-typing-txt-04", {type:"words,chars", charsClass: "charTypeTxtD++"});
			mySplitText05 = new SplitText("#ml-typing-txt-05", {type:"words,chars", charsClass: "charTypeTxtE++"});
			mySplitText06 = new SplitText("#ml-typing-txt-06", {type:"words,chars", charsClass: "charTypeTxtF++"});

			chars = mySplitText.chars;
			chars02 = mySplitText02.chars;
			chars03 = mySplitText03.chars;
			chars04 = mySplitText04.chars;
			chars05 = mySplitText05.chars;
			chars06 = mySplitText06.chars;

			mlTypingTxtAnimTlWS_DYN_INS_RAND
						.set(".ml-typing-txt", {display:"block"})
						.staggerFrom(chars,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
						.fromTo(".charTypeTxt5", 0.4, {opacity:0}, {opacity:1, repeat:3, yoyo:true, ease: Linear.easeNone})
						.staggerTo(chars,0.01, {opacity:0, ease:Power1.easeIn}, -0.08, "+=0.1")
						.staggerFrom(chars02,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
						.fromTo(".charTypeTxtB6", 0.4, {opacity:0}, {opacity:1, repeat:3, yoyo:true, ease: Linear.easeNone})
						.staggerTo(chars02,0.01, {opacity:0, ease:Power1.easeIn}, -0.08, "+=0.1")
						.staggerFrom(chars03,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
						.fromTo(".charTypeTxtC5", 0.4, {opacity:0}, {opacity:1, repeat:3, yoyo:true, ease: Linear.easeNone})
						.staggerTo(chars03,0.01, {opacity:0, ease:Power1.easeIn}, -0.08, "+=0.1")
						.staggerFrom(chars04,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
						.fromTo(".charTypeTxtD4", 0.4, {opacity:0}, {opacity:1, repeat:3, yoyo:true, ease: Linear.easeNone})
						.staggerTo(chars04,0.01, {opacity:0, ease:Power1.easeIn}, -0.08, "+=0.1")
						.staggerFrom(chars05,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
						.fromTo(".charTypeTxtE5", 0.4, {opacity:0}, {opacity:1, repeat:3, yoyo:true, ease: Linear.easeNone})
						.staggerTo(chars05,0.01, {opacity:0, ease:Power1.easeIn}, -0.08, "+=0.1")
						.staggerFrom(chars06,0.01, {opacity:0, ease:Power1.easeIn}, 0.08, "+=0.1")
						.fromTo(".charTypeTxtF5", 0.4, {opacity:0}, {opacity:1, repeat:3, yoyo:true, ease: Linear.easeNone})
						.staggerTo(chars06,0.01, {opacity:0, ease:Power1.easeIn}, -0.08, "+=0.1");

					mlBubbleAnimTl
						.to("#ml-profile-linkedin-badge", 0.3, {scale:0})
						.to("#ml-profile-github-badge", 0.3, {scale:0}, "-=0.25")
						.to("#ml-profile", 1, {rotationY:180}, "+=0.20")
						.to("#ml-profile", 1, {borderWidth:2, borderStyle:"solid", borderColor:"#ececec", backgroundColor:"transparent"}, "-=0.9")
						.add(mlTypingTxtAnimTlWS_DYN_INS_RAND.play())
						.to("#ml-profile", 1, {rotationY:0}, "+=0.20")
						.to("#ml-profile", 1, {borderWidth:0, backgroundColor:"#e8e8e8"}, "-=0.9")
						.to("#ml-profile-linkedin-badge", 0.3, {scale:1})
						.to("#ml-profile-github-badge", 0.3, {scale:1}, "-=0.25");

		var skillsMetersAnimTl = new TimelineMax();
		/* On Screen Elements check - Courtesy of OnScreen.JS */
		var inScreen = new OnScreen();

		inScreen.on('enter', '.ml-projects-thumb', (element, event) => {
			TweenMax.staggerTo(".ml-projects-thumb", 0.40, {opacity:1}, 0.4);
		});

		inScreen.on('enter', '.ml-skills-on-screen', (element, event) => {
			skillsMetersAnimTl
				.to("#ml-skill-meter-graphics", 0.40, {width:"90%"})
				.to("#ml-skill-meter-web", 0.40, {width:"80%"})
				.to("#ml-skill-meter-web", 0.40, {width:"80%"})
				.to("#ml-skill-meter-cms", 0.40, {width:"50%"})
				.to("#ml-skill-meter-git", 0.40, {width:"50%"})
				.to("#ml-skill-meter-ux", 0.40, {width:"50%"})
				.to("#ml-skill-meter-mtngraphics", 0.40, {width:"50%"});

		});

		inScreen.on('enter', '.ml-toolbox-icon', (element, event) => {
			TweenMax.staggerTo(".ml-toolbox-icon", 0.40, {scale:1,ease:Back.easeOut}, 0.7);
		});

		inScreen.on('enter', '.ml-social-icon', (element, event) => {
			TweenMax.staggerTo(".ml-social-icon", 0.40, {scale:1,ease:Back.easeOut}, 0.2);
		});

	//Mobile menu to sticky position on scroll event
	var scrollContainer = $("#ml-wrapper");
  var mobileNav = $("#ml-mobile-navigation-content-wrapper");
	var mobileMenu = $("#ml-menu-icon-wrapper");
	var desktopNav = $("#ml-desktop-navigation-content-wrapper");
	var userWindow = $(window);
	var userPos = userWindow.scrollTop();
	var scrollUp = false;
	var scrollMenu;

  scrollContainer.on("touchmove", scrollToFixed); // For iOS/Android
	scrollContainer.on("touchmove", hideFixedScroll); // For iOS/Android
  userWindow.on("scroll", scrollToFixed); //For Desktop
	userWindow.on("scroll", hideFixedScroll); //For Desktop

	window.onload = function(){
		if (userWindow.scrollTop() > 0){
		TweenMax.set("#ml-mini-profile-wrapper", {display:"none"});
		}
	}

  function scrollToFixed() {

    if (userWindow.scrollTop() > 150) {
      mobileMenu.addClass("ml-menu-scrolled");
			desktopNav.addClass("ml-desktop-menu-scrolled");
			TweenMax.set("#ml-mini-profile-wrapper", {display:"block"});
			TweenMax.set(".ml-desktop-mini-social-icon", {display:"block"});
			TweenMax.set("#ml-desktop-navigation-content", {width:557});

    } else if (userWindow.scrollTop() > 0) {
      mobileMenu.removeClass("ml-menu-scrolled");
			desktopNav.removeClass("ml-desktop-menu-scrolled");
			TweenMax.set("#ml-mini-profile-wrapper", {display:"none"});
			TweenMax.set(".ml-desktop-mini-social-icon", {display:"none"});
			TweenMax.set("#ml-desktop-navigation-content", {width:460});
    }
  }

	function hideFixedScroll(){

		scrollMenu = userWindow.scrollTop();
		// Check browser width to verify which menu that should be handled. Depending on if user is on mobile or desktop
		if (window.innerWidth <= 1024) {
			if (scrollMenu > userPos && !scrollUp){
				mobileNav.stop().slideUp();
				scrollUp = !scrollUp;
				TweenMax.set(["#ml-menu-icon",".ml-mini-social-icon"], {display:"none", delay:0.1});
				TweenMax.set("#ml-mobile-navigation-content", {display:"none"});
			} else if (scrollMenu < userPos && scrollUp){
				mobileNav.stop().slideDown();
				scrollUp = !scrollUp;
				TweenMax.set(["#ml-menu-icon",".ml-mini-social-icon"], {display:"block", delay:0.1});
				TweenMax.set("#ml-mobile-navigation-content", {display:"block"});
			}
			userPos = scrollMenu;

		} else {
			if (scrollMenu > userPos && !scrollUp){
				desktopNav.stop().slideUp();
				scrollUp = !scrollUp;
				TweenMax.set("#ml-desktop-navigation-content", {display:"none"});
				TweenMax.set(".ml-desktop-mini-social-icon", {display:"none", delay:0.1});
			} else if (scrollMenu < userPos && scrollUp){
				desktopNav.stop().slideDown();
				scrollUp = !scrollUp;
				TweenMax.set("#ml-desktop-navigation-content", {display:"block"});
				TweenMax.set(".ml-desktop-mini-social-icon", {display:"block", delay:0.1});
			}
			userPos = scrollMenu;

		}

	}
	/* MOBILE MENU slide down/up logic */

	var mobileNavWrapper = $("#ml-mobile-navigation-wrapper");
	var mobileMenuOpen =  $("#ml-menu-icon");
	var mobileMenuClose = $("#ml-menu-close-icon");

	function openMobileMenu(){
		TweenMax.fromTo("#ml-menu-icon", 0.7, {opacity:1}, {opacity:0, display:"none"});
		TweenMax.fromTo("#ml-menu-close-icon", 0.7, {opacity:0, display: "block"}, {opacity:1});
		TweenMax.to("#ml-mobile-navigation-content", 0.7, {yPercent:"129%", ease: Power2.easeOut});
	}

	function closeMobileMenu(){
		TweenMax.fromTo("#ml-menu-close-icon", 0.7, {opacity:1}, {opacity:0, display:"none"});
		TweenMax.fromTo("#ml-menu-icon", 0.7, {opacity:0, display: "block"}, {opacity:1});
		TweenMax.to("#ml-mobile-navigation-content", 0.7, {yPercent:0});
	}

	mobileMenuOpen.click(openMobileMenu);
	mobileMenuClose.click(closeMobileMenu);

	// Display current year in footer

		var dateStamp = new Date();
		var currentYearJs = dateStamp.getFullYear();

			document.getElementById("ml-footer-current-year").innerHTML = currentYearJs;

});
