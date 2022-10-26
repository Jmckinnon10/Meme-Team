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


// function makeTheMeme (newMemes) {
//   memeButton.addEventListener('click', () => {
//     //const newMemes = memes[Math.floor((Math.random()*memes.length))]
   
    
//     // const memeButton = document.querySelector('#random-meme')
//     // memeButton.textContent = "RANDOMIZE"
//     const memeImage = document.querySelector('#meme-image')
//     const singleMeme = document.querySelector('#image')
    
//     singleMeme.src = newMemes.url
//     memeImage.append(singleMeme)
//     memeImage.src = newMemes.url
//     console.log(newMemes)

// })
// }
  


