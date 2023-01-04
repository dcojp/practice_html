import score from 'https://dcojp.github.io/practice_html/score.json' assert {type: 'json'}

const tr = document.createElement('tr');
const th = document.createElement('th');

const $tab = document.getElementById('js-tab');

$tab.appendChild(tr);

console.log(score[0].title);