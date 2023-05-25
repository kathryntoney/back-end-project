

let form = document.querySelector('#form')



// let headers = { 'Content-type': 'application/json; charset=UTF-8' }


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log("form");
  
let dogID = 32
    let response = await fetch('/messages',{
        method:'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({dogID:dogID})
    })
    let msg = await response.json()
})
//pull from storage