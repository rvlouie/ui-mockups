let init = function() {
  console.log('page loaded')
}

let onetimeCopy = document.getElementById('one-time-copy');

let recurringCopy = document.getElementById('recurring-copy');

document.addEventListener('input', function (event) { 

  if (event.target.id !== 'interval') return;

  // console.log(event.target.value)

  switch(event.target.value) {
    case 'one-time':
      console.log('one-time only!')
      onetimeCopy.classList.remove('hide');
      recurringCopy.classList.add('hide');
      break
    case 'weekly':
      console.log('Every week!')
      onetimeCopy.classList.add('hide');
      recurringCopy.classList.remove('hide');
      break
    case 'bi-weekly':
      console.log('Every two weeks!')
      onetimeCopy.classList.add('hide');
      recurringCopy.classList.remove('hide');
      break
    case 'monthly':
      console.log('Every month!')
      onetimeCopy.classList.add('hide');
      recurringCopy.classList.remove('hide');
      break
  }
  


});

document.addEventListener('DOMContentLoaded', init);