const API = 'https://api.imgflip.com/get_memes'
const memeButton = document.querySelector('#random-meme')
memeButton.textContent = "RANDOMIZE"


  fetch(API)
    .then(resp => resp.json())
    .then(memeData => {
      const memes = memeData.data.memes;
      memeButton.addEventListener('click', () => {
          const newMemes = memes[Math.floor((Math.random()*memes.length))];
          const memeImage = document.querySelector('#meme-image');
          const singleMeme = document.querySelector('#image');
          boxes = newMemes.box_count;
          singleMeme.src = newMemes.url;
          memeImage.append(singleMeme);
          memeImage.src = newMemes.url;
          console.log(newMemes);
          console.log(boxes);

          if(boxes === 2){
            
          }
    })
  })

  function allowDrop(e) {
    e.preventDefault();
  }
  
  function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
  }
  
  function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  


