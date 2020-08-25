window.addEventListener('DOMContentLoaded', function() {
  const form = document.forms[0];
  

  form.addEventListener('submit', function(e) {
    
    const des = form.elements['description'].value
    const loc = form.elements['location'].value
    let full_time = form.elements['full_time'].checked

    if (full_time) {
      full_time = 'on'
    } else {
      full_time = ''
    }

    let url = `https://still-spire-37210.herokuapp.com/positions.json?description=${des}&location=${loc}&full_time=${full_time}`
    
    console.log(url)
    
    fetch(url)
    .then(response => response.json())
    .then(jobs => {
      const job = jobs
      console.log(job)
    })
  })
})