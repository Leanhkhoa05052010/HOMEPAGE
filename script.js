document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

document.getElementById('voice-search-btn').addEventListener('click', function() {
    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = function(event) {
            const query = event.results[0][0].transcript;
            document.getElementById('search-input').value = query;
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        };

        recognition.onerror = function(event) {
            console.error('Speech recognition error', event);
        };

        recognition.start();
    } else {
        alert('Speech recognition not supported in this browser. Please use a different browser.');
    }
});
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();  // Initial call to display the clock immediately
