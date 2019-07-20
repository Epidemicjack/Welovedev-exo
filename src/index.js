//la fonction de suppression/rajout est issu d'un tutoriel de Net Ninja 

var membre = document.getElementsByTagName('li')

// effacer membre
membre.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

// Ajouter membre
const addForm = document.forms['nouveaumembre'];
addForm.addEventListener('submit', function(e){
  //empêche le reload auto
  e.preventDefault();

const value = addForm.querySelector('input[type="text"]').value;
const li = document.createElement('li');
const membre = document.createElement('span');
const deleteBtn = document.createElement('span');

// récuperer valeur du form et injecter dans la liste
deleteBtn.textContent ='delete';
membre.textContent = value;

li.appendChild(membre);
li.appendChild(deleteBtn);
listing.appendChild(li);


});
