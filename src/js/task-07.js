// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
//  и изменяет инлайн - стиль span#text обновляя свойство font - size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const getInput = document.querySelector('#font-size-control');
const spanInInput = document.querySelector('#text');

const onRangeChange = (event) => {
  spanInInput.style.fontSize = `${event.currentTarget.value}px`
}

getInput.addEventListener('input', onRangeChange )