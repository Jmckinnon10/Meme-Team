const API = 'https://api.imgflip.com/get_memes'

fetch(API)
  .then(resp => resp.json())
  .then(memeData => {
    renderMemes(memeData)

  })



function renderMemes(memeData){
  memeData.data.memes.forEach(meme => {
    console.log(meme)

    const div = document.querySelector('#container')
    const image = document.createElement('img')
    const textBox = document.createElement('h1')

    textBox.innerHTML = meme.box_count
   
    image.id = 'memeImage'
    //console.log(image.id)
    image.src = meme.url
    //console.log(image.src)
    div.append(image, textBox)
    

  })
 }