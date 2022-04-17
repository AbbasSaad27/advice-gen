'use strict'

// getting elements
const adviceNo = document.querySelector(".advice-no")
const adviceText = document.querySelector(".advice-text")
const btnLoad = document.querySelector(".btn-load")

// function for getting the advice
const getAdvice = async function () {
    // awating the promise fetched by the fetch func
    const adviceRes = await fetch("https://api.adviceslip.com/advice")
    
    // destructering the results from the await result
    const {slip: {id, advice}} = await adviceRes.json()

    // setting the advice no and advice text
    adviceNo.textContent = id
    adviceText.textContent = `"${advice}"`
}

// initialization
getAdvice()

// adding the click event listener
btnLoad.addEventListener("click", getAdvice)