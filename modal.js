// const key = JSON.parse(localStorage.getItem("key"))

const modal = document.getElementById("myModal");


const btn1 = document.getElementById("myBtn");


const btn2 = document.getElementsByClassName("close-modal")[0];




btn1.onclick = function() {
  modal.style.display = "block";
}


btn2.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const titre = document.querySelector("#titre");

const auteur = document.querySelector("#auteur");

const lesLivres = document.querySelector("#mesLivres")



const btn = document.getElementById("bouton");
btn.addEventListener("click", btnEnreg)
    function btnEnreg(event){
        event.preventDefault()  

        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        
        
        const newBook = document.createElement("li");
        newBook.innerText = "hey";
        newBook.classList.add("book-item");
        bookDiv.appendChild(newBook);

        //bouton lu

        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        bookDiv.appendChild(completedButton);

         //bouton supprimer

         const suppButton = document.createElement("button");
         suppButton.innerHTML = '<i class="fas fa-trash"></i>';
         suppButton.classList.add("supp-btn");
         bookDiv.appendChild(suppButton);


         lesLivres.appendChild(bookDiv);
      }

      



      

    
    



  


  

    

