// console.log('Hello World!');

const h1Field = document.createElement('h1');
document.body.append(h1Field);
h1Field.innerHTML = 'RSS Virtual Keyboard';

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
    renderedKeyboard += `<div class="keyboard-key key-${keyboard[i]}">
    ${keyboard[i]}</div>`;
  }
  document.querySelector('#keyboard').innerHTML = renderedKeyboard;
};
renderKeyboard();

const SpaceKey = document.querySelector('.key-Space');
SpaceKey.classList.add('space-key-width');
