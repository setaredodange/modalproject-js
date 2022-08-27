const btnElem =  document.querySelector('button')
const modalElem = document.querySelector('.modal-parent')
const sectionElem =  document.querySelector('section')
const spanElem = document.querySelector('.X')


function openModalHandler(){
  modalElem.style.display = "block"
  sectionElem.style.filter = " blur(10px)"


}


function closedModalHandler(){
  modalElem.style.display = "none"
  sectionElem.style.filter = " blur(0px)"
}


function escModalHandler(event){
  console.log(event)

  if (event.keyCode ===27)
  modalElem.style.display = "none"
  sectionElem.style.filter = " blur(0px)"
}




btnElem.addEventListener('click', openModalHandler );
spanElem.addEventListener('click', closedModalHandler )
window.addEventListener('keydown', escModalHandler )
