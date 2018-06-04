// JS Goes here - ES6 supported

document
  .getElementById('js-nav-toggle')
  .addEventListener('click', (e) => {

    let className = 'nav-open';
    let el = document.getElementById('js-body');

    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(' ');
      var existingIndex = classes.indexOf(className);

      if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
      else
        classes.push(className);

      el.className = classes.join(' ');
    }
  });
