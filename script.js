const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')


let photosArray = []



// Unsplash APi
const count = 10;
const apiKey = 'gfmF9WwJhDBr0msBkqUqzz7bZAwWOlp4ggRAr6wuW-I'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`




async function getPhotos(){
    try {
        const response = await fetch(apiUrl)
        photosArray =  await response.json();
        displayPhotos(photosArray)
    } catch(error){

    }
}


function displayPhotos(){
    console.log(photosArray)
//    data.forEach((photo) => {

//    });
}



getPhotos()