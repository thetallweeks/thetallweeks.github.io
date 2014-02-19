// Slide In Menu
(function () {
  var $menuTrigger = document.getElementById('menu-trigger'),
      $menu = document.getElementById('menu'),
      $close = document.getElementById('menu-close'),
      revealed = false;

  $menu.classList.add('menu-closed');

  $menuTrigger.addEventListener('click', function() {
    if (!revealed) {
      reveal($menu);
    } else {
      close($menu);
    }
  }, false);

  $close.addEventListener('click', function() {
    close($menu);
  });

  // Trigger slideout
  var reveal = function (elem) {
    elem.classList.add('menu-open');
    elem.classList.remove('menu-closed');
    revealed = true;
  };

  // Hide elements
  var close = function (elem) {
    elem.classList.remove('menu-open');
    elem.classList.add('menu-closed');
    revealed = false;
  };

})();

// Topics List
(function() {
  var $topic =  $('[data-topic]'),
      $topicFilter = $('[data-topic-filter]');

  $topic.addClass('is-hidden');

  $topicFilter.on('click', function(e) {
    e.preventDefault();

    var id = $(this).attr("href");
    id = String(id);

    $topic.addClass('is-hidden');
    $(id).removeClass('is-hidden');

    $topicFilter.removeClass('is-current');
    $(this).addClass('is-current');
  });

})();