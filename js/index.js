(function(){
  'use strict';

  class Menu {
    constructor(settings) {
      this.nodeMenu = settings.nodeMenu;
      settings.nodeMenuButton.addEventListener('click', this.toggle.bind(this));
    }

    toggle() {
      return this.nodeMenu.classList.toggle('js-menu_activated');
    }
  }

  let nodeMenu = document.querySelector('body');

  new Menu({
    nodeMenu: nodeMenu,
    nodeMenuButton: nodeMenu.querySelector('.js-menu__toggle')
  });
})();

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// The highlight text //

/**
  Javascript isn't required for this effect,
  I just added a quick piece of jQuery code
  to simulate a hover for the animated preview
  on CodePen.io.
*/

// simulation code, ignore it.
// $(function() {
//   setTimeout(function() {
//     $("article.highlight").toggleClass("hover");
//     setTimeout(function() {
//       $("article.highlight").toggleClass("hover");
//     }, 2000);
//   }, 1000);
// });
