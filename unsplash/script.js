// const baseurl = 'https://api.unsplash.com/search/photos?page=1&query=cat&client_id=LfJX1YXR2ivnAyUARlX41CGwfwtueJ1L2oXzKXiPK0U&per_page=9'


const accessKey = "LfJX1YXR2ivnAyUARlX41CGwfwtueJ1L2oXzKXiPK0U";


var form = document.querySelector(".form")
var searchInput = document.querySelector(".search-input")
var imageContainer = document.querySelector(".image-container")
var loadMore = document.querySelector(".load-more")

let keyword = ""
let page = 1
 

async function getImages() {
    keyword = searchInput.value

    const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=10`)

    const data = await response.json()

    const results = data.results


    results.map((data) => {
        const image = document.createElement("img")
        image.classList.add("image")
        image.src = data.urls.small

        imageContainer.appendChild(image)
    })

}


form.addEventListener("submit", function (e) {
    e.preventDefault()
    imageContainer.innerHTML = ""
    getImages()
})

loadMore.addEventListener("click", function () {
    page++;
    getImages()
})