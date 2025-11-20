
const facts = [
  "Aurora Borealis kan sees best i Nord-Norge!",
  "Lyset fra solen bruker 8 minutter til jorden.",
  "En dag på Venus er lengre enn et år på Venus."
];

function showFact() {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('fact').innerText = randomFact;
}
