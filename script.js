const quoteContainer =  document.querySelector('#quote');
const authorContainer =  document.querySelector('#author');
const quoteGeneratorContainer =  document.querySelector('#new-quote');

async function fetchData(){
    const url = 'https://api.api-ninjas.com/v1/quotes';
    try{
    const response = await fetch(url, {
        method: 'GET',
        headers:{
            'X-Api-Key': '2SDe6er07O8k/MeQqUZ8Sg==LcP9xQQim372IhY1',
        },
        contentType: 'application/json',
    })
    if(!response.ok){
        throw new Error(console.log('error',Error));
    }
    const data = await response.json();
    console.log(data)
    return data
    }
    catch(error){
        console.log('error', error)
    }

}

quoteGeneratorContainer.addEventListener('click', () =>{
    
})



fetchData()