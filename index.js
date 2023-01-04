import score from 'https://dcojp.github.io/practice_html/score.json' assert {type: 'json'}

const tr = document.createElement('tr');
const th = document.createElement('th');

const $tab = document.getElementById('js-tab');

trAppended = $tab.appendChild(tr);
th.innerText = 'Tp0';
trAppended.appendChild(th);

console.log(score[0].title);