const openModalButton = document.getElementById('openModal');
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');
const menu = document.getElementById("menu-convenios");

openModalButton.addEventListener('click', () => {
  console.log("abriendo");
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Optional: Close the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});   


const onChange = () => {
  let string
  switch(menu.value){
    case "tft":
      console.log("elegiste tft");
      string = "";
      break;
    case "ocde":
      console.log("elegiste ocde");
      string = "";
      break;
    case "tvf":
      console.log("elegiste ocde");
      string = "";
      break;
    case "sanborja":
      console.log("elegiste ocde");
      string = "";
      break;
    case "chileargentina":
      console.log("elegiste ocde");
      string = "";
      break;
    default:
      console.log("elige una opcion");
  }
}
