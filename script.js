const imageContainer = document.getElementById('image-container')
const loader = document.getElementById('loader')


let photosArray = []



// Unsplash APi
const count = 30;
const apiKey = 'gfmF9WwJhDBr0msBkqUqzz7bZAwWOlp4ggRAr6wuW-I'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`



/// Fetch Photos from unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photosArray =  await response.json();
        displayPhotos(photosArray);
    } catch(error){

    }
}


function setAttributes(element, attributes){
    for (const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}
/// Create elements for links & photo, then add to DOM
function displayPhotos(){
    console.log(photosArray)
    photosArray.forEach((photo) => {

        const item = document.createElement('a');
        // item.setAttribute('href',photo.links.html);
        // item.setAttribute('target', '_blank')
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })

        const img = document.createElement('img');
        // img.setAttribute('src', photo.urls.regular)
        // img.setAttribute('alt', photo.discription)
        // img.setAttribute('title',photo.discription)
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.discription,
            title: photo.discription
        })
        //Add item and image into Image container 
        item.appendChild(img)
        imageContainer.appendChild(item)
    })


}



getPhotos()