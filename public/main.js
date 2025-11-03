const img = document.querySelector('#preview')
const url = document.querySelector('#url')
document.querySelector('#url').addEventListener('input', () => img.src=url.value)

const daddyName = document.querySelector('h3')
const input_name = document.querySelector('#input_name')
document.querySelector('#input_name').addEventListener('input', () => daddyName.innerText = input_name.value)

const daddyDesc = document.querySelector('h4')
const description = document.querySelector('#description')
document.querySelector('#description').addEventListener('input', () => daddyDesc.innerText = description.value)

console.log(villians)

const displays = document.querySelectorAll('.display')
Array.from(displays).forEach((picture) => {
    picture.addEventListener('click',() => {
        document.querySelector('#zoomedPic').src = picture.src
        const villian = villians.find((object) => 
            object.url===picture.src
        )
        document.querySelector('#zoomedName').innerText = villian.name
        document.querySelector('#zoomedDesc').innerText = villian.description
    })
})

