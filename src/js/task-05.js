// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка "Anonymous".

const getInput = document.getElementById('name-input')

const spanInInput = document.getElementById('name-output')

getInput.addEventListener("input", (e) => {
  spanInInput.textContent = e.currentTarget.value || 'Anonymous'
});