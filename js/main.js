//Initiaize variables that call HTML elements to page
//Delcare header element
let headerElement = document.getElementById("headerElement");
//Declare middle button element
let middleBtn = document.getElementById("middleBtn");
//Declare first p element
let pElementOne = document.getElementById("pElementOne");
//Delare second p element
let pElementTwo = document.getElementById("pElementTwo");
//Declare bottom button
let bottomBtn = document.getElementById("bottomBtn");

//Create object containing arrays holding key value pairs for each state
let state = {
    currentPage: 0,
    pageState: [
        {//state 1
            headerElement: "I can read your mind",
            middleBtn: "",
            pElementOne: "",
            pElementTwo: "",
            bottomBtn: "GO"
        },

        {//state 2
            headerElement:"Pick a number from 01-99",
            middleBtn: "NEXT",
            pElementOne: "when you have your number click next",
            pElementTwo: "",
            bottomBtn: "RESET"
        },

        {//state 3
            headerElement: "Add both digits together to get a new number",
            middleBtn: "NEXT",
            pElementOne: "Ex: 14 is 1 + 4 = 5",
            pElementTwo: "click to proceed",
            bottomBtn: "RESET"
        },

        {//state 4
            headerElement: "Subtract your new number from the original number",
            middleBtn: "NEXT",
            pElementOne: "Ex: 14 - 5 = 9",
            pElementTwo: "clickto proceed",
            bottomBtn: "RESET"
        },

        {//state 5
            headerElement: "",
            middleBtn: "REVEAL",
            pElementOne: "Find your new number",
            pElementTwo: "Not the symbol beside the number",
            bottomBtn: "RESET"
        },

        {//state6
            headerElement:"",
            middleBtn: "",
            pElementOne: "Your symbol is:",
            pElementTwo: "",
            bottomBtn: "RESET"

        },
    ]
}

function init() {
    //grab first page from state
    let firstPage = state.pageState[state.currentPage]
    console.log(firstPage)
    console.log(state.currentPage)
    //update header element 
    headerElement.innerText = firstPage.headerElement
    //update bottom button
    bottomBtn.innerText = firstPage.bottomBtn
    //hide middle button
    middleBtn.style.display = "none";
    //hide p element 1
    pElementOne.style.display = "none";
    //hide p element 2
    pElementTwo.style.display = "none";
    
    //grab second page from state
    let secondPage = state.pageState[state.currentPage]

    //grab third page from state
    let thirdPage = state.pageState[state.currentPage]

    //grab fourth page from state
    let fouthPage = state.pageState[state.currentPage]

    //grab fifth page from state
    let fifthPage = state.pageState[state.currentPage]

    //grab sixth page from state
    let sixthPage = state.pageState[state.currentPage]
}
init()



//Create eventListener for middle button that renders elements based on current page state

//Create eventListener for bottom button