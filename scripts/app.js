const cartegoryElements = document.querySelectorAll('.category');
const subCartegoryElements = document.querySelectorAll('.sub-category');

function deleteDisableClass(event){
  for (const subCartegoryElement of subCartegoryElements){
    subCartegoryElement.classList.add('disable');
  }
  let categoryNum = event.target.dataset.categoryNum;
  const parentElement = event.target.parentElement;

  if(event.target.nodeName == 'P'){
    categoryNum = parentElement.dataset.categoryNum;
  }
  subCartegoryElements[categoryNum -1].classList.remove('disable');
}

for (const cartegoryElement of cartegoryElements){
  cartegoryElement.addEventListener('click',deleteDisableClass);
}
