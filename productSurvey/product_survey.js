document.getElementById('submitBtn').onclick = submitFeedback; // Set onclick once

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});

function submitFeedback() {
    const username = getElementValue('name');
    const age = getElementValue('age');
    const email = getElementValue('email');
    const job = getElementValue('job');
    const designation = getElementValue('designation');
    const productType = getElementValue('productType');
    const feedback = getElementValue('feedbackText');

    alert('Thank you for your valuable feedback!');

    updateElementInnerHTML('userName', username);
    updateElementInnerHTML('userAge', age);
    updateElementInnerHTML('userEmail', email);
    updateElementInnerHTML('userJob', job);
    updateElementInnerHTML('userDesignation', designation);
    updateElementInnerHTML('userProductChoice', productType);
    updateElementInnerHTML('userFeedback', feedback);

    document.getElementById('userInfo').style.display = 'block';
}

function getElementValue(id) {
    const element = document.getElementById(id);
    return element ? element.value : ''; 
}

function updateElementInnerHTML(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.innerHTML = value;
    }
}
