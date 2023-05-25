const handleSearchClick = async () => {
    try {
      const zipCode = document.getElementById('zipCodeInput').value;
     
      const response = await fetch('/ktmatch', {
        method: 'POST',
         headers: {'Content-type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(zipCode)
      });
      let data = await response.json()
      console.log(data);
      if (response.ok) {
        const allDogs = await response.json();
        console.log(allDogs);
        // Handle the response data as needed
      } else {
        console.error('Error occurred during search:', response.status);
      }
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };
  const searchButton = document.getElementById('searchButton');
  console.log(searchButton);
  searchButton.addEventListener('click', handleSearchClick);


// const handleSearchClick = async () => {
//     try{
//         const zipCode = document.getElementById('zipCodeInput').value;
//         const response = await axios.post('/ktmatch', { params: { zipCode } });
//     }catch (error){
//         console.error('Error occurred during search:', error);
//     }
// }
// const searchButton = document.getElementById('searchButton');
// searchButton.addEventListener('click', handleSearchClick);