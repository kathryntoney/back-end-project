


const handleSearchClick = async () => {
    try{
        const zipCode = document.getElementById('zipCodeInput').value;
        const response = await axios.get('/match', { params: { zipCode } });
       
    }catch (error){
        console.error('Error occurred during search:', error);

    }
}
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearchClick);