const resDiv= document.querySelector('#results')
const resBtn= document.querySelector('#getData')

resBtn.addEventListener('click',() => {
    getAdvice();
})

function getAdvice(){
fetch('https://api.adviceslip.com/advice') .then (response => {

    return response.json();
}).then(AdviceData => {
console.log(AdviceData)


}).catch((error) => {
console.log(error)
});
}