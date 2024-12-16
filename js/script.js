// Object to track votes for each cat
let votes = {
    Maxwell: 7,
    Tenley: 6,
    Mona: 4
};

// Function to handle form submission and update results
function submitPoll(formId) {
    const name = document.getElementById(formId + "-name").value;
    const favoriteCat = document.getElementById(formId + "-favoriteCat").value;

    if (name && favoriteCat) {
        // Update the vote count
        votes[favoriteCat] += 1;

        // Get the form element (either pollForm or pollForm2)
        const pollForm = document.getElementById(formId);

        // Replace form with colorful and celebratory results
        pollForm.innerHTML = `
            <div class="results-container">
                <h4 class="celebration">Thank you for voting, ${name}!</h4>
                <div class="results">
                    <div class="result-box" style="background-color: #8B0000;">
                        Maxwell: ${votes.Maxwell} votes
                    </div>
                    <div class="result-box" style="background-color: #8B4513;">
                        Tenley: ${votes.Tenley} votes
                    </div>
                    <div class="result-box" style="background-color: #8B008B;">
                        Mona: ${votes.Mona} votes
                    </div>
                </div>
            </div>
        `;
    } else {
        alert("Please fill in both fields before submitting.");
    }
}

// Example usage: Attach submitPoll to a submit button click event
document.getElementById("submitButton").addEventListener("click", function(){
    submitPoll("pollForm");  
});
