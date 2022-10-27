const API = 'https://api.imgflip.com/get_memes'
const memeButton = document.querySelector('#random-meme')
memeButton.textContent = "RANDOMIZE"


  fetch(API)
    .then(resp => resp.json())
    .then(memeData => {
       const memes = memeData.data.memes
    // console.log(newMemes)
      // randomMeme(memes)
      //  console.log(memeData.data.memes[0].url) 
     // const newMemes = memes[Math.floor((Math.random()*memes.length))]
   // makeTheMeme(newMemes)
      memeButton.addEventListener('click', () => {
          const newMemes = memes[Math.floor((Math.random()*memes.length))]
         
          
          // const memeButton = document.querySelector('#random-meme')
          // memeButton.textContent = "RANDOMIZE"
          const memeImage = document.querySelector('#meme-image')
          const singleMeme = document.querySelector('#image')
          
          singleMeme.src = newMemes.url
          memeImage.append(singleMeme)
          memeImage.src = newMemes.url
          console.log(newMemes)

    })
   
  })

function grabTextBox() {
    fetch(API)
    .then(res => res.json())
    .then((memeData) => {
        console.log(memeData)
        textBoxValue(memeData)

    })
}

function textBoxValue(memeData) {
    memeData.forEach(textBoxContent(memeData));
}

function textBoxContent(memeData) {
    const memes = memeData.data.memes
    const newMemes = memes[Math.floor((Math.random()*memes.length))]
    const boxCount = memeData.data.memes[0].box_count;
    console.log(newMemes.box_count)
    console.log(boxCount)
}

function init(){
    grabTextBox()
}

init()