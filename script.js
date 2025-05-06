const generateBtn = document.querySelector('.generate-btn')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('.meme-image')
const authorName = document.querySelector('.author span')

function getmeme()
{
    fetch('https://meme-api.com/gimme/wholesomememes')
        .then((res) => res.json())
        .then((data) =>
        {
            const{author, title, url} = data
            authorName.innerText = author
            memeTitle.innerText = title
            memeImage.src = url
        })
}

getmeme()

generateBtn.addEventListener('click', () => {
    getmeme()
})