const getRandomIntNumberInRange = (min,max) => {
return Math.floor(Math.random()*max)+min
}

document.querySelector('#dice').addEventListener('click', () =>{
    const randomized_number = getRandomIntNumberInRange(1,6)

    document.querySelector('#dice img').src = './img/' + randomized_number + '.png'
})
