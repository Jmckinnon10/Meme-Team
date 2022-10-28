const LOCALAPI = ' http://localhost:3000/memes'
const API = 'https://api.imgflip.com/get_memes'
const memeButton = document.querySelector('#random-meme')
memeButton.textContent = "RANDOMIZE"
const inputs = document.querySelectorAll('.box')
const form = document.querySelector('#meme-content')
const imageCollection = document.querySelector('#collection')
const imageCard = document.createElement('div')
imageCard.id = 'card'

  fetch(API)
    .then(resp => resp.json())
    .then(memeData => {
      const memes = memeData.data.memes;
      console.log(memes)
      memeButton.addEventListener('click', () => {
          const newMemes = memes[Math.floor((Math.random()*memes.length))];
          const memeImage = document.querySelector('#meme-image');
          const singleMeme = document.querySelector('#image');
          const name = document.querySelector('h2')
          const url = document.querySelector('#url')

          url.textContent = newMemes.url
          name.textContent = newMemes.name
          boxes = newMemes.box_count;
          singleMeme.src = newMemes.url;
          memeImage.append(singleMeme);
          memeImage.src = newMemes.url;
          
    })  
  })
      
fetch(' http://localhost:3000/memes')
  .then(resp => resp.json())
  .then(localMemes => {
    renderMemes(localMemes)

  })

function renderMemes(localMemes){
  localMemes.forEach(renderImages)
}
  

function renderImages(memes) {
  console.log(memes)
  const localImage = document.createElement('img')
  const memeName = document.createElement('h3')
  
  memeName.textContent = memes.name
  localImage.src = memes.image
  console.log(localImage.src)
  //li.append(localImage)
  imageCollection.append(imageCard)
  imageCard.append(memeName, localImage)
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const newImage = {
    image: e.target[0].value
  }
    renderImages(newImage)
})


