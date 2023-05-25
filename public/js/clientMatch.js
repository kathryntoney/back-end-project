//grab DOM elements

let container = document.querySelector('.container')

container.addEventListener('click', async (e) => {
    if(e.target.className === "main-btn"){

        let id = e.target.id
        fetchNumber(id)
        


        }
    
    



})

const fetchNumber = async(id)=> {
    let result = await fetch(`/messages/${id}`) 
    let record = await result.json()
   record.phonenum= localStorage.setItem('userBNumber', 'record.phonenum')

    //put the userBstorage in localstorage
}



