const API = 'https://api.imgflip.com/get_memes'
const memeButton = document.querySelector('#random-meme')
memeButton.textContent = "RANDOMIZE"
const inputs = document.querySelectorAll('.box')


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
          
    })
      
  })

  inputs.forEach(input => {
    input.addEventListener('dragstart', e => {
      drag(e)
      input.classList.add('dragging')
    })
  })

  inputs.addEventListener('dragend')


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

  


