document.getElementById('submit-quiz').addEventListener('click', function() {
  let score = 0;
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  
  if(q1 && q1.value === 'yes') score++;
  if(q2 && q2.value === 'yes') score++;

  let resultMessage = score == 2 ?
    "It might be helpful to talk to someone about your mental health.":
    "You're doing well, but it's always good to check in with yourself!";

document.getElementById('quiz-result').innerText = resultMessage;
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for contacting us!")
});