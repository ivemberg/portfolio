(function () {
  var buttons = document.querySelectorAll('.filter');
  var items = document.querySelectorAll('.card-item');
  var count = document.getElementById('app-count');

  function matches(item, filter) {
    var platforms = item.dataset.platforms.split(' ');
    var live = item.dataset.live === 'true';
    if (filter === 'all') return true;
    if (filter === 'live') return live;
    if (filter === 'soon') return !live;
    return platforms.indexOf(filter) !== -1;
  }

  function apply(filter) {
    var visible = 0;
    items.forEach(function (item) {
      var show = matches(item, filter);
      item.hidden = !show;
      if (show) visible += 1;
    });
    buttons.forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.filter === filter ? 'true' : 'false');
    });
    count.textContent = visible + ' APP';
  }

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      apply(btn.dataset.filter);
    });
  });
})();
