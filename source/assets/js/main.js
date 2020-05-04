// ***********************
// Boards animation
// ***********************

function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;
  var elemBottom = el.getBoundingClientRect().bottom;
  return (elemTop >= 0) && (elemBottom <= window.innerHeight + 200);
}

function inViewWithOffset(el, offset) {
  offset = offset ? offset : 0;
  return el.getBoundingClientRect().top <= (window.innerHeight - offset);
}

function boardsInit() {
  var numOfTilesToLoad = 3;
  if (window.innerWidth < 1150 && window.innerWidth > 764) {
    numOfTilesToLoad = 2;
  } else if (window.innerWidth < 764) {
    numOfTilesToLoad = 1;
  }

  if (!$('#boards')) return false;

  var $lastItem = $('.boards__showcase a').not('.boards__showcase-d-none').last();
  var $itemsToLoad = $('.boards__showcase .boards__showcase-d-none').slice(0, numOfTilesToLoad);
  var $itemsToDisplay;

  $(document).scroll(function() {
    if ($lastItem[0] && isScrolledIntoView($lastItem[0])) {
      $itemsToLoad.removeClass('boards__showcase-d-none');
      $lastItem = $itemsToLoad.last();
      $itemsToDisplay = $('.boards__showcase .boards__showcase-hidden').slice(0, numOfTilesToLoad);
      $itemsToLoad = $('.boards__showcase .boards__showcase-d-none').slice(0, numOfTilesToLoad);
    }

    if ($itemsToDisplay && $itemsToDisplay.length > 0) {
      if (inViewWithOffset($itemsToDisplay.last()[0], 200)) {
        $itemsToDisplay.removeClass('boards__showcase-hidden');
      }
    }
  });
}

boardsInit();

// ***********************
// GitHub feed
// ***********************

GitHubActivity.feed({
  username: "SymbiFlow",
  selector: "#feed",
  limit: 10 // optional
  //repository: "your-repo", // optional
});

// ***********************
// Twitter feed
// ***********************

$('.news__twitter').delegate('#twitter-widget-0', 'DOMSubtreeModified propertychange', function () {
  customizeTweetMedia();
});

var customizeTweetMedia = function () {
  $('.news__twitter').find('.twitter-timeline').contents().find('.timeline-Tweet-text').css({
    'font-size': '16px',
    'color': '#6d6d6d',
    'line-height': '24px',
    'font-weight': 'normal',
  });
  $('.news__twitter').find('.twitter-timeline').contents().find('.timeline-Header').css('height', '70px');
  $('.news__twitter').find('.twitter-timeline').contents().find('.link').css('color', '#9258FF');
  $('.news__twitter').find('.twitter-timeline').contents().find('.customisable-highlight').css('color', '#5a2ab5');
  $('.news__twitter').find('.twitter-timeline').contents().find('.PrettyLink').css('color', '#9258FF');
  $('.news__twitter').find('.twitter-timeline').contents().find('.timeline-Header-title').css({
    'font-family': 'Nunito,sans',
    'font-weight': 'normal',
    'font-size': '21px',
    'padding': '17px 10px 5px',
    'color': '#6d6d6d',
  });

  // Call the function on dynamic updates in addition to page load
  $('.news__twitter').find('.twitter-timeline').contents().find('.timeline-TweetList').bind('DOMSubtreeModified propertychange', function () {
    customizeTweetMedia(this);
  });
}

// ***********************
// Talks
// ***********************

const gliderOptions = {
  type: 'carousel',
  perView: '4',
  autoplay: '4000',
  gap: 40,
  animationTimingFunc: 'ease-out',
  breakpoints: {
    1200: {
      perView: 3
    },
    850: {
      perView: 2
    },
    650: {
      perView: 1
    }
  }
}

new Glide('.glide', gliderOptions).mount()
const lightbox = GLightbox({selector: 'glightbox2'})
