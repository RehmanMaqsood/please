function getOptions () {
  var defaults = {
    'rating-bar': true
  };

  var options = JSON.parse(localStorage.getItem('vidiq_options'));

  if (!options) {
    localStorage.setItem('vidiq_options', JSON.stringify([defaults]));
    options = [defaults];
  }

  return options ? options[0] : undefined;
}

function updateSetting () {
  var settings = getOptions();
  settings[this.id] = JSON.parse(this.checked);
  localStorage.setItem('vidiq_options', JSON.stringify([settings]));
}

function loadSettings () {
  var settings = getOptions();
  var ratingBar = settings['rating-bar'];
  document.getElementById('rating-bar').checked = ratingBar;
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  loadSettings();

  var inputs = document.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', updateSetting);
  }
});
