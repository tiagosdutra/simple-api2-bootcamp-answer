//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFunction)

// `https://api.nasa.gov/planetary/apod?api_key=r2o1xc86wWU3uZKCphX8NWzAB2xNhJB6xsD6cbEm`

function getFunction(){
    let userVal = document.querySelector('input').value
    console.log(userVal)
    let url =  `https://pokeapi.co/api/v2/pokemon/${userVal}`
    fetch(url.toLowerCase())     
    .then(res => res.json()) 
// parse response as JSON     
    .then(data => {       
    console.log(data)     
    document.querySelector('h2').innerText = data.name
    document.querySelector('img').src = data.sprites.front_default
    // document.querySelector('h3').innerText = data.explanation

        fetch(`https://g.tenor.com/v1/search?q=${data.name}&key=6ODY42ZWIMUU&limit=8`)     
        .then(res => res.json()) 
        // parse response as JSON     
        .then(data => {       
        console.log(data)     
        document.querySelector('.gifOne').src = data.results[0].media[0].gif.url

        })     
        .catch(err => {         
        console.log(`error ${err}`)     
        }); 
    })     
    .catch(err => {         
    console.log(`error ${err}`)     
    }); 
    
}

// https://g.tenor.com/v1/search?q=${userVal}&key=6ODY42ZWIMUU&limit=8