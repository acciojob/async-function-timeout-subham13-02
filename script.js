//your JS code here. If required.
// script.js
document.getElementById('btn').addEventListener('click', showMessage);

async function showMessage() {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;
  const outputDiv = document.getElementById('output');

  // Clear previous output
  outputDiv.innerHTML = '';

  // Validate inputs
  if (!textInput || !delayInput) {
    outputDiv.innerText = 'Please enter a message and a delay.';
    return;
  }

  const delay = parseInt(delayInput);

  try {
    // Wait for the specified delay before resolving with the message
    await delayAsync(delay);

    // Display the message on the webpage
    outputDiv.innerText = textInput;
  } catch (error) {
    // Handle any errors that occur during the delay
    outputDiv.innerText = 'An error occurred.';
    console.error(error);
  }
}

function delayAsync(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
