document.addEventListener('DOMContentLoaded', () => {


  document.querySelectorAll(`dt`).forEach(item => {
    console.log(item.nextElementSibling);
    item.addEventListener('click', Userclick)
  })

  function Userclick(e) {
    if(e.target.className == 'list-word'){
      let selectedList = document.querySelector('.list-word--selected');

      if(selectedList != null) {
        DisableList(selectedList)
      }
      
      EnableList(e.target)
    }else {
      DisableList(e.target)
    }
  
  }

  function EnableList(list) {
    list.nextElementSibling.classList.remove('list-description')
    list.nextElementSibling.classList.add('list-description--selected')
    list.classList.add('list-word-selected')
    console.log(list.nextElementSibling)
  }
  
  function DisableList(list) {
    list.classList.remove('list-word-selected')
    list.nextElementSibling.classList.add('list-description')
    list.nextElementSibling.classList.remove('list-description--selected')

  }



})