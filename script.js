(function () {
  function initMenu() {
    var btn = document.getElementById('menuBtn');
    var menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;

    btn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      btn.classList.toggle('open');
      menu.classList.toggle('open');
    };

    var links = menu.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
      links[i].onclick = function () {
        btn.classList.remove('open');
        menu.classList.remove('open');
      };
    }

    document.addEventListener('click', function (e) {
      if (!menu.classList.contains('open')) return;
      if (menu.contains(e.target) || btn.contains(e.target)) return;
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
})();
      
