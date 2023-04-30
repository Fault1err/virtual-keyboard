// console.log('Hello World!');

const h1Field = document.createElement('h1');
document.body.append(h1Field);
h1Field.innerHTML = 'RSS Virtual Keyboard';

const screenForPrint = document.createElement('textarea');
document.body.append(screenForPrint);

const renderField = document.createElement('div');
renderField.className = 'render_field';
renderField.id = 'keyboard';
document.body.append(renderField);
// renderField.innerHTML = 'Hello World!';

const keyboardEng = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
  '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
  'Shift', '▲', 'CtrlLeft', 'fn', 'Alt', 'Space', 'Alt', 'CtrlRight', '◄', '▼', '►'];

const keyboard = keyboardEng;

const renderKeyboard = () => {
  let renderedKeyboard = '';
  for (let i = 0; i < keyboard.length; i += 1) {
    const num = keyboard[i].trim();
    renderedKeyboard += `<div class="keyboard-key key-${num} data="${num}">${num}</div>`;
  }
  document.querySelector('#keyboard').innerHTML = renderedKeyboard;
};
renderKeyboard();

const SpaceKey = document.querySelector('.key-Space');
SpaceKey.classList.add('space-key-width');

document.onkeydown = function (event) {
  // console.log(event.code);
  // console.log(event.key);
  // console.log(event);
  // document.querySelectorAll('.keyboard-key').forEach((el) => {
  //   el.classList.remove('active');
  // });
  document.querySelector(`.key-${event.key}`).classList.add('active');
};

document.onkeyup = function (event) {
  document.querySelector(`.key-${event.key}`).classList.remove('active');
};
