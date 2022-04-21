'use strict'

// getting elements
const adviceNo = document.querySelector(".advice-no")
const adviceText = document.querySelector(".advice-text")
const btnLoad = document.querySelector(".btn-load")

// function for getting the advice
const getAdvice = async function (e) {
    // awating the promise fetched by the fetch func
    const adviceRes = await fetch("https://api.adviceslip.com/advice")
    
    // destructering the results from the await result
    const {slip: {id, advice}} = await adviceRes.json()

    // setting the advice no and advice text
    adviceNo.textContent = id
    adviceText.textContent = `"${advice}"`

    console.log(e)
}

// initialization
getAdvice()

// adding the click event listener
btnLoad.addEventListener("click", getAdvice)

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//     .then(function(registration) {
//       console.log('Registration successful, scope is:', registration.scope);
//     })
//     .catch(function(error) {
//       console.log('Service worker registration failed, error:', error);
//     });
//   }