// Initialize Variables
const quoteContainer =  document.querySelector('#quote');
const authorContainer =  document.querySelector('#author');
const quoteGeneratorContainer =  document.querySelector('#new-quote');
const tweetBtn = document.querySelector('#tweet-quote');

// fetch Data
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
        throw new Error(console.log('HTTP error!',response.status));
    }
    const data = await response.json();
    console.log(data)
    return data
    }
    catch(error){
        console.log('error', error)
    }

}
// functioning of button
quoteGeneratorContainer.addEventListener('click', () =>{
    quoteDisplayer()
})

// functionality of xBtn 
tweetBtn.addEventListener('click', () =>{
    postOnxCom();
})
// Post on x.com
function postOnxCom(){
    const quote = quoteContainer.innerHTML;
    const author = authorContainer.innerHTML;
    const post  =`${quote} ${author}`
    const tweetURl = `https://x.com/intent/tweet?text=${encodeURIComponent(post)}`;
    window.open(tweetURl, '_blank');
}

// Display Quote
async function quoteDisplayer() {
try{
    const data = await fetchData();
    quoteContainer.innerHTML = data[0].quote;
    authorContainer.innerHTML = data[0].author;
}
    catch(error){
        console.log('error', error)
    }
  

}


fetchData()