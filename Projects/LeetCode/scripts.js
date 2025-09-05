
const searchButton = document.getElementById("submit-btn");
const usernameBox = document.getElementById("username-box");

const easyCircle = document.getElementById("easy");
const mediumCircle = document.getElementById("medium");
const hardCircle = document.getElementById("hard");

const easyLabel = document.getElementById("easyLabel");
const mediumLabel = document.getElementById("mediumLabel");
const hardLabel = document.getElementById("hardLabel");

const statusContainer = document.getElementsByClassName("status-container");

function isUsernameRight(username) {
    if (username.trim() === "") {
        alert("Please enter a username");
        return false;
    }

    const regex = /^[a-zA-Z0-9_]{3,15}$/;
    const valid = regex.test(username);
    if (!valid) {
        alert('Invalid Username');
    }
    return valid;

}

function updateProgress(solved, total, label, circle){
    const per = (solved/total)*100;
    label.textContent = `${solved}/${total}`;
    circle.style.setProperty("--progress-degree",`${per}%`)


}

function displayUserData(inputData){
    const totalQue = inputData.data.allQuestionsCount[0].count;
    const totalEasyQue = inputData.data.allQuestionsCount[1].count;
    const totalMediumQue = inputData.data.allQuestionsCount[2].count;
    const totalHardQue = inputData.data.allQuestionsCount[3].count;

    const totalSolvedQue = inputData.data.matchedUser.submitStats.acSubmissionNum[0].count;
    const totalSolvedEasyQue = inputData.data.matchedUser.submitStats.acSubmissionNum[1].count;
    const totalSolvedMediumQue = inputData.data.matchedUser.submitStats.acSubmissionNum[2].count;
    const totalSolvedHardQue = inputData.data.matchedUser.submitStats.acSubmissionNum[3].count;

    updateProgress(totalSolvedEasyQue, totalEasyQue, easyLabel, easy);
    updateProgress(totalSolvedMediumQue, totalMediumQue, mediumLabel, medium);
    updateProgress(totalSolvedHardQue, totalHardQue, hardLabel, hard);
}



async function fetchUserDetails(username) {

    try {
        searchButton.textContent = "Searching";
        searchButton.disabled = true;

        // const response = await fetch(url);
        const proxyUrl = "https://cors-anywhere.herokuapp.com/"
        const targetUrl = 'https://leetcode.com/graphql/';
        const myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        const graphql = JSON.stringify({
            query: `
                    query userSessionProgress($username: String!) {
                    allQuestionsCount {
                        difficulty
                        count
                    }
                    matchedUser(username: $username) {
                        submitStats {
                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                        totalSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                        }
                    }
                    }
                `,
            variables: { "username": `${username}` }
        })

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: graphql,
            redirect: "follow"
        };


        const response = await fetch(proxyUrl+targetUrl, requestOptions);
        if(!response.ok){
            alert("Unable to fetch ")
        } 
        const data = await response.json();
        console.log("Data : ", data);
        displayUserData(data);

    } catch (error) {
        statusContainer.innerHTML = `<p>No Data Found!!</p>`

    } finally {
        searchButton.textContent = "search";
        searchButton.disabled = false;
    }
}
searchButton.addEventListener('click', function () {
    const username = usernameBox.value;

    if (isUsernameRight(username)) {
        console.log("Loading....");
        fetchUserDetails(username);
        
    }
    else {
        alert("Invalid username");
    }
})

