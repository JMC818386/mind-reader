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
        {//state 1 (currentPage 0)
            headerElement: "I can read your mind",
            middleBtn: "",
            pElementOne: "",
            pElementTwo: "",
            bottomBtn: "GO"
        },

        {//state 2 (currentPage 1)
            headerElement:"Pick a number from 01-99",
            middleBtn: "NEXT",
            pElementOne: "when you have your number click next",
            pElementTwo: "",
            bottomBtn: "RESET"
        },

        {//state 3 (currentPage 2)
            headerElement: "Add both digits together to get a new number",
            middleBtn: "NEXT",
            pElementOne: "Ex: 14 is 1 + 4 = 5",
            pElementTwo: "click to proceed",
            bottomBtn: "RESET"
        },

        {//state 4 (currentPage 3)
            headerElement: "Subtract your new number from the original number",
            middleBtn: "NEXT",
            pElementOne: "Ex: 14 - 5 = 9",
            pElementTwo: "click to proceed",
            bottomBtn: "RESET"
        },

        {//state 5 (currentPage 4)
            headerElement: "Symbols will appear here",
            middleBtn: "REVEAL",
            pElementOne: "Find your new number",
            pElementTwo: "Note the symbol beside the number",
            bottomBtn: "RESET"
        },

        {//state6 (currentPage 5)
            headerElement:"&",
            middleBtn: "",
            pElementOne: "Your symbol is:",
            pElementTwo: "",
            bottomBtn: "RESET"
        },
    ]
}

function init() {
    //grab FIRST page from state (currentPage 0)
    let firstPage = state.pageState[state.currentPage]
    console.log(firstPage)
    console.log(state.currentPage)
    //update header element 
    headerElement.innerText = firstPage.headerElement
    //hide middle button
    middleBtn.style.display = "none";
    //hide p element 1
    pElementOne.style.display = "none";
    //hide p element 2
    pElementTwo.style.display = "none";
    //update bottom button
    bottomBtn.innerText = firstPage.bottomBtn

    //grab SECOND page from state (currentPage 1)
    let secondPage = state.pageState[state.currentPage]
    //update header element
    headerElement.innerText = secondPage.headerElement
    //update middle button
    middleBtn.innerText = secondPage.middleBtn
    //update p element 1
    pElementOne.innerText = secondPage.pElementOne
    //update p element 2
    pElementTwo.style.display = "none";
    //update bottom button
    bottomBtn.innerText = secondPage.bottomBtn

    //grab third page from state (currentPage 2)
    let thirdPage = state.pageState[state.currentPage]
    //update header element
    headerElement.innerText = thirdPage.headerElement
    //update middle button
    middleBtn.innerText = thirdPage.middleBtn
    //update p element 1
    pElementOne.innerText = thirdPage.pElementOne
    //update p element 2
    pElementTwo.innerText = thirdPage.pElementTwo
    //update bottom button
    bottomBtn.innerText = thirdPage.bottomBtn

    //grab fourth page from state (currentPage 3)
    let fourthPage = state.pageState[state.currentPage]
    //update header element
    headerElement.innerText = fourthPage.headerElement
    //update middle button
    middleBtn.innerText = fourthPage.middleBtn
    //update p element 1
    pElementOne.innerText = fourthPage.pElementOne
    //update p element 2
    pElementTwo.innerText = fourthPage.pElementTwo
    //update bottom button
    bottomBtn.innerText = fourthPage.bottomBtn

    //grab fifth page from state (currentPage 4)
    let fifthPage = state.pageState[state.currentPage]
    //update header element
    headerElement.innerText = fifthPage.headerElement
    //update middle button
    middleBtn.innerText = fifthPage.middleBtn
    //update p element 1
    pElementOne.innerText = fifthPage.pElementOne
    //update p element 2
    pElementTwo.innerText = fifthPage.pElementTwo
    //update bottom button
    bottomBtn.innerText = fifthPage.bottomBtn

    //grab sixth page from state (currentPage 5)
    let sixthPage = state.pageState[state.currentPage]
    //update header element
    headerElement.innerText = sixthPage.headerElement
    //update middle button
    middleBtn.style.display = "none";
    //update p element 1
    pElementOne.innerText = sixthPage.pElementOne
    //update p element 2
    pElementOne.innerText = sixthPage.pElementOne
    //update bottom button
    bottomBtn.innerText = sixthPage.bottomBtn
}

init()
console.log(secondPage)


//Create eventListener for middle button that renders elements to page based on current page state

////Create eventListener for bottom button that renders elements to page based on current page state