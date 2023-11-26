var typingText = document.querySelector('.typing-text');

var text = typingText.innerHTML;

typingText.innerHTML = '';

var chars = text.split('');

chars.forEach(function (char, index) {
  setTimeout(function () {
    typingText.innerHTML += char;
  }, 100 * index);
});

var type1 = document.querySelector('.type1');

var text = type1.innerHTML;

type1.innerHTML = '';

var chars = text.split('');

chars.forEach(function (char, index) {
  setTimeout(function () {
    type1.innerHTML += char;
  }, 100 * index);
});

var text3 = document.querySelector('.text3');

var text = text3.innerHTML;

text3.innerHTML = '';

var chars = text.split('');

chars.forEach(function (char, index) {
  setTimeout(function () {
    text3.innerHTML += char;
  }, 100 * index);
});
