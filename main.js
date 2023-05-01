const h1Field = document.createElement('h1');
document.body.append(h1Field);
h1Field.innerHTML = 'RSS Virtual Keyboard';

const screenForPrint = document.createElement('textarea');
screenForPrint.setAttribute('autofocus', 'autofocus');
document.body.append(screenForPrint);

const renderField = document.createElement('div');
renderField.className = 'render_field';
renderField.id = 'keyboard';
document.body.append(renderField);

const pField = document.createElement('p');
document.body.append(pField);
pField.innerHTML = 'Для корректной работы анимации кнопок язык физической клавиатуры должен соответствовать языку экранной клавиатуры. Клавиатура соответствует OS Windows. <br> Переключение раскладки - Ctrl + Alt.';

const keyboardEng = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-',
  '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
  '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
  ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
  'Shift', '▲', 'Ctrl', 'fn', 'Alt', 'Space', 'Alt', 'Ctrl', '◄', '▼', '►'];

const keyboard = keyboardEng;

const renderKeyboard = () => {
  let renderedKeyboard = '';
  for (let i = 0; i < keyboard.length; i += 1) {
    const num = keyboard[i].trim();
    renderedKeyboard += `<div class="keyboard-key key-0${i} key-${num} data="${num}">${num}</div>`;
  }
  document.querySelector('#keyboard').innerHTML = renderedKeyboard.toLowerCase();
};
renderKeyboard();

const SpaceKey = document.querySelector('.key-space');
SpaceKey.classList.add('space-key-width');

document.onkeydown = (event) => {
  console.log(event.code);
  if (event.code === 'Backquote') {
    document.querySelector('.key-00').classList.add('active');
  } else if (event.code === 'Equal') {
    document.querySelector('.key-012').classList.add('active');
  } else if (event.code === 'Backspace') {
    document.querySelector('.key-013').classList.add('active');
  } else if (event.code === 'Tab') {
    event.preventDefault();
    document.querySelector('.key-014').classList.add('active');
  } else if (event.code === 'Backslash') {
    document.querySelector('.key-027').classList.add('active');
  } else if (event.code === 'BracketLeft') {
    document.querySelector('.key-025').classList.add('active');
  } else if (event.code === 'BracketRight') {
    document.querySelector('.key-026').classList.add('active');
  } else if (event.code === 'Semicolon') {
    document.querySelector('.key-038').classList.add('active');
  } else if (event.code === 'Quote') {
    document.querySelector('.key-039').classList.add('active');
  } else if (event.code === 'Comma') {
    document.querySelector('.key-049').classList.add('active');
  } else if (event.code === 'Period') {
    document.querySelector('.key-050').classList.add('active');
  } else if (event.code === 'Slash') {
    document.querySelector('.key-051').classList.add('active');
  } else if (event.code === 'ShiftRight') {
    document.querySelector('.key-052').classList.add('active');
  } else if (event.code === 'ControlLeft') {
    document.querySelector('.key-054').classList.add('active');
  } else if (event.code === 'MetaLeft') {
    event.preventDefault();
    document.querySelector('.key-054').classList.add('active');
  } else if (event.code === 'AltLeft') {
    event.preventDefault();
    document.querySelector('.key-056').classList.add('active');
  } else if (event.code === 'Space') {
    document.querySelector('.key-057').classList.add('active');
  } else if (event.code === 'AltRight') {
    event.preventDefault();
    document.querySelector('.key-058').classList.add('active');
  } else if (event.code === 'ControlRight') {
    document.querySelector('.key-059').classList.add('active');
  } else if (event.code === 'ArrowLeft') {
    document.querySelector('.key-060').classList.add('active');
  } else if (event.code === 'ArrowUp') {
    document.querySelector('.key-053').classList.add('active');
  } else if (event.code === 'ArrowDown') {
    document.querySelector('.key-061').classList.add('active');
  } else if (event.code === 'ArrowRight') {
    document.querySelector('.key-062').classList.add('active');
  } else {
    document.querySelectorAll('.keyboard-key').forEach((el) => {
      el.classList.remove('active');
    });
    document.querySelector(`.key-${event.key.toLowerCase()}`).classList.add('active');
    console.log(event);
  }
};

document.onkeyup = (event) => {
  if (event.code === 'Backquote') {
    document.querySelector('.key-00').classList.remove('active');
  } else if (event.code === 'Equal') {
    document.querySelector('.key-012').classList.remove('active');
  } else if (event.code === 'Backspace') {
    document.querySelector('.key-013').classList.remove('active');
  } else if (event.code === 'Tab') {
    document.querySelector('.key-014').classList.remove('active');
  } else if (event.code === 'BracketLeft') {
    document.querySelector('.key-025').classList.remove('active');
  } else if (event.code === 'BracketRight') {
    document.querySelector('.key-026').classList.remove('active');
  } else if (event.code === 'Backslash') {
    document.querySelector('.key-027').classList.remove('active');
  } else if (event.code === 'Semicolon') {
    document.querySelector('.key-038').classList.remove('active');
  } else if (event.code === 'Quote') {
    document.querySelector('.key-039').classList.remove('active');
  } else if (event.code === 'Comma') {
    document.querySelector('.key-049').classList.remove('active');
  } else if (event.code === 'Period') {
    document.querySelector('.key-050').classList.remove('active');
  } else if (event.code === 'Slash') {
    document.querySelector('.key-051').classList.remove('active');
  } else if (event.code === 'ShiftRight') {
    document.querySelector('.key-052').classList.remove('active');
  } else if (event.code === 'ControlLeft') {
    document.querySelector('.key-054').classList.remove('active');
  } else if (event.code === 'MetaLeft') {
    event.preventDefault();
    document.querySelector('.key-054').classList.remove('active');
  } else if (event.code === 'AltLeft') {
    document.querySelector('.key-056').classList.remove('active');
  } else if (event.code === 'Space') {
    document.querySelector('.key-057').classList.remove('active');
  } else if (event.code === 'AltRight') {
    document.querySelector('.key-058').classList.remove('active');
  } else if (event.code === 'ControlRight') {
    document.querySelector('.key-059').classList.remove('active');
  } else if (event.code === 'ArrowLeft') {
    document.querySelector('.key-060').classList.remove('active');
  } else if (event.code === 'ArrowUp') {
    document.querySelector('.key-053').classList.remove('active');
  } else if (event.code === 'ArrowDown') {
    document.querySelector('.key-061').classList.remove('active');
  } else if (event.code === 'ArrowRight') {
    document.querySelector('.key-062').classList.remove('active');
  } else {
    document.querySelector(`.key-${event.key.toLowerCase()}`).classList.remove('active');
  }
};

function removeCapslocked() {
  document.querySelectorAll('.keyboard-key').forEach((el) => {
    if (el.classList.contains('capslocked')) {
      el.classList.remove('capslocked');
      console.log('removed!');
      el.innerHTML = el.innerHTML.toLowerCase(); // eslint-disable-line no-param-reassign
    }
  });
}

function getCapslocked() {
  document.querySelectorAll('.keyboard-key').forEach((el) => {
    el.classList.add('capslocked');
    el.innerHTML = el.innerHTML.toUpperCase(); // eslint-disable-line no-param-reassign
    console.log(el.innerHTML);
  });
}

renderField.addEventListener('mousedown', (e) => {
  document.querySelectorAll('.keyboard-key').forEach((el) => {
    el.classList.remove('active');
  });
  const targetClick = e.target.closest('div.keyboard-key');
  let targetKey = e.target.innerHTML;
  if (targetKey === 'space') {
    targetKey = '\t';
  } else if (targetKey === 'backspace') {
    targetKey = '';
    screenForPrint.value = screenForPrint.value.substring(0, screenForPrint.value.length - 1);
  } else if (targetKey === 'tab') {
    targetKey = '\t';
  } else if (targetKey === 'enter') {
    targetKey = '\n';
  } else if (targetKey === '►') {
    targetKey = '';
  } else if (targetKey === 'capslock') {
    targetKey = '';
    getCapslocked();
  } else if (targetKey === 'CAPSLOCK') {
    targetKey = '';
    removeCapslocked();
  }

  targetClick.classList.add('active');
  screenForPrint.value += targetKey;
  console.log(targetClick);
  console.log(targetKey);
});

window.onmouseup = () => {
  document.querySelectorAll('.keyboard-key').forEach((el) => {
    el.classList.remove('active');
  });
};
