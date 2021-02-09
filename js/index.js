document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelectorAll('.icon');



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
  
    list.nextElementSibling.classList.add('list-description--selected')

    list.classList.add('list-word--selected')
    list.children[0].classList.add('icon-active');
    
    console.log(list.children[0])
    
  }
  
  function DisableList(list) {
    list.classList.remove('list-word--selected')
    // list.classList.add('list-word')
    list.children[0].classList.remove('icon-active');
    
    // list.nextElementSibling.classList.add('list-description')
    list.nextElementSibling.classList.remove('list-description--selected')

  }

  



})