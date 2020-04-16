let init = function() {
  console.log('page loaded')

  // $("#first-template-data").click(function(e) {

  //   console.log('hello?')

  //   e.preventDefault();

  //   var data = $("#milestone-first-template-form").serializeArray();

  //   $.each(data, function(i, obj) {

  //     localStorage.setItem(obj.name, obj.value);

  //   })
  
  // })

}

const interval = document.getElementById('interval');

let onetimeCopy = document.getElementById('one-time-copy');

let recurringCopy = document.getElementById('recurring-copy');

interval.addEventListener('input', function (event) { 

  // if (event.target.id !== 'interval') return;

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

const subsequentInterval = document.getElementById('subsequent-interval');

let onetimeSubsequentCopy = document.getElementById('one-time-subsequent-copy');

let recurringSubsequentCopy = document.getElementById('recurring-subsequent-copy');

let dateGap = document.getElementsByClassName('subsequent-date-gap');

subsequentInterval.addEventListener('input', function (event) { 

  switch(event.target.value) {
    case 'one-time':
      console.log('one-time only!')
      onetimeSubsequentCopy.classList.remove('hide');
      recurringSubsequentCopy.classList.add('hide');
      Array.from(dateGap).forEach(e => e.classList.add('hide'));
      break
    case 'weekly':
      console.log('Every week!')
      onetimeSubsequentCopy.classList.add('hide');
      recurringSubsequentCopy.classList.remove('hide');
      Array.from(dateGap).forEach(e => e.classList.remove('hide'));
      break
    case 'bi-weekly':
      console.log('Every two weeks!')
      onetimeSubsequentCopy.classList.add('hide');
      recurringSubsequentCopy.classList.remove('hide');
      Array.from(dateGap).forEach(e => e.classList.remove('hide'));
      break
    case 'monthly':
      console.log('Every month!')
      onetimeSubsequentCopy.classList.add('hide');
      recurringSubsequentCopy.classList.remove('hide');
      Array.from(dateGap).forEach(e => e.classList.remove('hide'));
      break
  }

});

document.addEventListener('DOMContentLoaded', init);