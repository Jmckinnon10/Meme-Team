const API = 'https://api.imgflip.com/get_memes'

  fetch(API)
    .then(resp => resp.json())
    .then(memeData => {
       const memes = memeData.data.memes
    // console.log(newMemes)
       randomMeme(memes)
      //  console.log(memeData.data.memes[0].url)
   
  })

  
  const memeButton = document.querySelector('#random-meme')
  function randomMeme(memes) {
    
    const newMemes = memes[Math.floor((Math.random()*memes.length))]
    //console.log(newMemes.url)
     
    const memeButton = document.querySelector('#random-meme')
    memeButton.textContent = "RANDOMIZE"
    const memeImage = document.querySelector('#meme-image')
    const singleMeme = document.createElement('img')
    
    singleMeme.src = newMemes.url
    memeImage.append(singleMeme)
    memeImage.src = newMemes.url
    //console.log(memeImage.src)

  }


