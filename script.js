const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Believe you can and you're halfway there.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Keep your face always toward the sunshine—and shadows will fall behind you."
];

const quoteEl = document.getElementById("quote");
const newQuoteBtn = document.getElementById("new-quote");

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
});
