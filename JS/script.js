
 
  let luce = document.querySelector('.ampoule2')
  function maFonction (){
    luce.style.display="initial"
  }

  function maFonction2 (){
    luce.style.display="none"
  }
  document.querySelector("#off").addEventListener('click', maFonction2);
  document.querySelector("#on").addEventListener('click', maFonction);

