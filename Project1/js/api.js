
// https://api.quotable.io/random - supports CORS, no API key needed
async function getQuote() {
    showLoading();
    hideError();
    console.log('getQuote called');
    try {
        // Use Advice Slip API (supports CORS, no API key needed)
        const response = await fetch('https://api.adviceslip.com/advice');
        console.log('Fetch response:', response);
        if (!response.ok) {
            throw new Error('Quote not found. Please try again later');
        }
        const data = await response.json();
        // Advice Slip API returns { slip: { id, advice } }
        const quoteData = {
            content: data.slip.advice,
            author: 'Advice Slip'
        };
        console.log('Quote data:', quoteData);
        displayQuote(quoteData);
    } catch (error) {
        console.error('Error fetching quote:', error);
        //showError('Error: ' + error.message + ' Showing fallback quote.');
        // Fallback quote in case the API fails (The website went down recently but should be back up soon)
        const fallbackQuote = {
            content: "The only way to do great work is to love what you do.",
            author: "Steve Jobs"
        };
        displayQuote(fallbackQuote);
    } finally {
        hideLoading();
    }
}

function displayQuote(quoteData) {
    // quotable.io returns { content: "...", author: "..." }
    console.log('displayQuote called with:', quoteData);
    if (!quoteData || !quoteData.content || !quoteData.author) {
        showError('Invalid quote data received.');
        return;
    }
    const quoteText = quoteData.content;
    const quoteAuthor = quoteData.author;
    document.getElementById('quote-result').textContent = `"${quoteText}" - ${quoteAuthor}`;
    document.getElementById('quote-section').style.display = 'block';
}

function showLoading() {
    document.getElementById('loading').style.display = 'block';
}   

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}   

function showError(message) {
    document.getElementById('error').textContent = message;
    document.getElementById('error').style.display = 'block';
}

function hideError() {
    document.getElementById('error').style.display = 'none';
}   

