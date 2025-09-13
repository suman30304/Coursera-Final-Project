document.addEventListener('DOMContentLoaded', () => {
    const recText = document.getElementById('recText');
    const recName = document.getElementById('recName');
    const container = document.getElementById('recommendationList');
    const popup = document.getElementById('popup');

    document.querySelector('.recommendation-form button').addEventListener('click', () => {
        const text = recText.value.trim();
        if (!text) return alert("Please enter a recommendation!");

        // Add new recommendation
        const newRec = document.createElement('blockquote');
        newRec.innerHTML = `"${text}" <span>- ${recName.value || "Anonymous"}</span>`;
        container.appendChild(newRec);

        // Clear form
        recText.value = '';
        recName.value = '';

        // Show popup
        popup.style.display = 'block';
    });

    // Close popup
    document.querySelector('#popup button').addEventListener('click', () => {
        popup.style.display = 'none';
    });
});
