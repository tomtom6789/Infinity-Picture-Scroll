const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')


let photosArray = []
let imgloadeddd = 0
let allImgs = 0
let ready = false



// Unsplash APi
const count = 30;
const apiKey = 'gfmF9WwJhDBr0msBkqUqzz7bZAwWOlp4ggRAr6wuW-I'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


// Check if all images were loaded
function imgLoaded(){
    console.log('image loaded')
    imgloadeddd++
    if(imgloadeddd === allImgs){
        ready = true 
        loader.hidden = true
        // console.log(ready)
    }
}


/// Fetch Photos from unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray =  await response.json();
        displayPhotos(photosArray);
    } catch(error){

    }
}

//  Helper function to set Attributes on Elements
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

/// Create elements for links & photo, then add to DOM
function displayPhotos(){

    imgloadeddd === 0
    allImgs = photosArray.length
    // Run function for each object in PhotosArray
    photosArray.forEach((photo) => {

        // Create <a> to link to full photo
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })

        // create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.discription,
            title: photo.discription
        })
        
        // Add eventlistner when each is finished loading
        img.addEventListener('load', imgLoaded)

        //Add item and image into Image container 
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}


// Reload all imgs when user scroll almost to the end of the page
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready)
    getPhotos();
})




// On load
getPhotos()