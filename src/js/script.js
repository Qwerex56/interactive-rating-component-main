let choice = 0;

function SelectRating(score) {
  choice = score;
}

function SubmitScore() {
  if (choice == 0) {
    alert("Please select a valid rating");
    return;
  }

  const rate_state = document.querySelector("#state-rating");
  const thank_you_state = document.querySelector("#state-thank-you");
  const text = document.querySelector(".submitted-score");

  rate_state.style.display = 'none';
  thank_you_state.style.display = 'flex';
  text.innerHTML = 'You selected ' + choice + ' out of 5';
}