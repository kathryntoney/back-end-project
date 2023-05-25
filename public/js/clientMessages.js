

let form = document.querySelector('#form')



// let headers = { 'Content-type': 'application/json; charset=UTF-8' }


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    console.log("form");
    let nums ={userANumber:"17705466265", userBNumber:"18328141362"}
//  let userANumber = req.session.phonenum
// let userBNumber = localStorage.getItem('userBNumber')
let dogID = 32
    let response = await fetch('/messages',{
        method:'POST',
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify({dogID:dogID})
    })
    let msg = await response.json()
})
//pull from storage