import "/src/scss/style.scss"
import { searchPeople } from './service';

const people = document.getElementById("people");

const persons = await searchPeople();

console.log(persons[1].name);
function createHTML(){
for(let i = 0; i < persons.length; i ++){
   const card = document.createElement("li");
   people?.appendChild(card);

   const title = document.createElement("h2");
   card.appendChild(title);
   title.innerHTML = persons[i].name; 

   const height = document.createElement("h3");
   card.appendChild(height);
   height.innerHTML = persons[i].height;
   
   const birth_year = document.createElement("p");
   card.appendChild(birth_year);
   birth_year.innerHTML = persons[i].birth_year;

   }
};

createHTML();
