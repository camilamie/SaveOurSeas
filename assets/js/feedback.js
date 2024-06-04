let feedbacks = [];
let currentEditIndex = null;

function addFeedback() {
    const feedbackInput = document.getElementById('feedback-input');
    const feedbackText = feedbackInput.value.trim();

    if (feedbackText === '') return;

    if (currentEditIndex !== null) {
        feedbacks[currentEditIndex] = feedbackText;
        currentEditIndex = null;
    } else {
        feedbacks.push(feedbackText);
    }

    feedbackInput.value = '';
    renderFeedbackList();
}

function editFeedback(index) {
    const feedbackInput = document.getElementById('feedback-input');
    feedbackInput.value = feedbacks[index];
    currentEditIndex = index;
}

function deleteFeedback(index) {
    feedbacks.splice(index, 1);
    renderFeedbackList();
}

function renderFeedbackList() {
    const feedbackList = document.getElementById('feedback-list');
    feedbackList.innerHTML = '';

    feedbacks.forEach((feedback, index) => {
        const feedbackItem = document.createElement('div');
        feedbackItem.className = 'feedback-item';
        feedbackItem.innerHTML = `
            <span>${feedback}</span>
            <span class="actions">
                <button onclick="editFeedback(${index})">Edit</button>
                <button onclick="deleteFeedback(${index})">Delete</button>
            </span>
        `;
        feedbackList.appendChild(feedbackItem);
    });
}