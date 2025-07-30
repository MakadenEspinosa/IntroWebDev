//https://zenquotes.io/api/[mode]/[key]
async function getQuote(quote) {
    showLoading();
    
    try {
        const response = await fetch(`https://zenquotes.io/api/today`);
        if (!response.ok) {
            throw new Error('Quote not found. Please try again later');
        }
        const quoteData = await response.json();
        console.log(quoteData); 
        displayQuote(quoteData);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoading();
    }   
}

function displayQuote(quoteData) {
    const quoteText = quoteData[0].q;
    const quoteAuthor = quoteData[0].a;
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

