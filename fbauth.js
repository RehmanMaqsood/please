/* eslint-disable */

function finish() {
  chrome.runtime.sendMessage({
    method: 'broadcast',
    message: { type: 'fbauth' }
  });
  close();
}

function auth() {
  var redirect_uri = window.location.href + '?success';

  document.querySelector('input[name="redirect_uri"]').value = redirect_uri;
  document.querySelector('form[name="facebook-auth"]').submit();
}

window.addEventListener('load', function () {
  if (window.location.href.match(/success/)) {
    finish();
  } else {
    auth();
  }
});
