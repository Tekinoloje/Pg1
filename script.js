

        let renderScores = document.querySelector('.mainScores');
        let btns = document.querySelectorAll('.btn');
        let scores = JSON.parse(localStorage.getItem('gameScores')) || 0;
        let msg = document.querySelector('.message');
        let choices = ['RED','GREEN','YELLOW'];
        let compColor = document.getElementById('computerChoice');
        let userColor = document.getElementById('userChoice');
        let viewable;
        renderScores.textContent = scores;


     
        btns.forEach((value)=>{
          value.addEventListener('click',()=>{
           
             
              if(scores == 0 || scores) {
              // the computer generating random numbers between 0 to 2 and is linked with the choices array
              let rand = Math.floor(Math.random () * 3);   

              // answer is the value of the button clicked
              let answer = value.textContent;

              if(choices[rand] == answer) {
                  //increasing score by 10 if the user choice is equal to the computer's choice
                  scores += 10;
                  renderScores.textContent = scores;
                  compColor.style.backgroundColor = choices[rand];
                  userColor.style.backgroundColor = answer;
                  viewable = true;
                  
                    console.log(renderScores.textContent)
                  //storing the new score value to the localstorage
                  localStorage.setItem('gameScores',JSON.stringify(scores));
                  msg.innerHTML = `You Win computer chose ${choices[rand]} you chose ${answer} <span style="color: green">scores +10</span>`

              } else if (choices[rand] !== answer) { 
                  //decreasing the score value by 5 if the user choice in not equal to computer's choice
                  scores -= 5;
                  renderScores.textContent = scores;

                  compColor.style.backgroundColor = choices[rand];
                  userColor.style.backgroundColor = answer;
                  viewable = true;

                  //storing the new score value to the localstorage
                  localStorage.setItem('gameScores',JSON.stringify(scores)); 
                  msg.innerHTML = `You Lose computer chose ${choices[rand]} you chose ${answer} <span style="color:red">scores -5</span>` 
                  console.log(renderScores.textContent)   
              } 
            }else {
                alert('there was a problem saving scores')
            }
          })
        });
        
        if(!viewable) {
            compColor.style.backgroundColor = 'grey';
            userColor.style.backgroundColor = 'grey';
        }

        btns.forEach((value)=>{
            value.style.backgroundColor = value.textContent;
        })

        if(renderScores.textContent == 'null') {
            renderScores.textContent = 0;
        }


        