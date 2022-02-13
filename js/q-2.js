const apiURL = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b530f441ebda46d2a3488e8d77b7c5a1"

const container = document.querySelector(".container")
container.innerHTML = ""; 
async function getNames() {
    try {
    const response = await fetch (apiURL);
    console.log(response)
    const responseJSON = await response.json();
    console.log(responseJSON)
    const resultsData = responseJSON.results;

    for (let i = 0; i < resultsData.length; i++){
        if(i >= 8){
            break;
        }
        console.log(resultsData[i].name)
        container.innerHTML += `<div class="box"><h2>Name: ${resultsData[i].name}</h2>
        <p>Rating: ${resultsData[i].rating}</p>
        <p>Tags: ${resultsData[i].tags.length}</p>
        </div>`
    };
    }
    catch (error){
        console.log("some error happened :(", error)
        container.innerHTML += `<p>Sorry, an error happened. Please try again.</p>`
    };
};
getNames();