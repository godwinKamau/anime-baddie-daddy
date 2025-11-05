//========================Villian Previews
const img = document.querySelector('#preview')
const url = document.querySelector('#url')
document.querySelector('#url').addEventListener('input', () => img.src=url.value)

const daddyName = document.querySelector('h3')
const input_name = document.querySelector('#input_name')
document.querySelector('#input_name').addEventListener('input', () => daddyName.innerText = input_name.value)

const daddyDesc = document.querySelector('h4')
const description = document.querySelector('#description')
document.querySelector('#description').addEventListener('input', () => daddyDesc.innerText = description.value)

//========================Villian Display from List
const displays = document.querySelectorAll('.display')
const zoomedPic = document.querySelector('#zoomedPic')
const zoomedName = document.querySelector('#zoomedName')
const zoomedDesc = document.querySelector('#zoomedDesc')
const picContainer = document.querySelector('.pic-container')

Array.from(displays).forEach((picture) => {
    picture.addEventListener('click', () => {
        
        if(picContainer.classList.contains('fadeInTransition')) {
            refresh(picture)
        } else {
            zoomedPic.src = picture.src
            picContainer.classList.add('fadeInTransition')
        }

        const villian = villians.find((object) => 
            object.url===picture.src
        )
        zoomedName.innerText = villian.name
        zoomedDesc.innerText = villian.description
    })
})

async function refresh(picture) {
    picContainer.classList.remove('fadeInTransition')
    await new Promise(resolve => setTimeout(resolve, 1000))
    zoomedPic.src = picture.src
    picContainer.classList.add('fadeInTransition')
}

//=========Ranking of Kings
//=======================Thumbs Up
document.querySelector('.fa-thumbs-up').addEventListener('click',thumbsUp)
function thumbsUp(){
    const name = document.querySelector('#zoomedName').innerText
    console.log(name)
    fetch('/thumbsUp', {
        method:"POST",
        body: JSON.stringify({name:name}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => window.location.href = data.redirect)
}

//=======================Thumbs Down
document.querySelector('.fa-thumbs-down').addEventListener('click',thumbsDown)
function thumbsDown(){
    const name = document.querySelector('#zoomedName').innerText
    console.log(name)
    fetch('/thumbsDown', {
        method:"POST",
        body: JSON.stringify({name:name}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => window.location.href = data.redirect)
}

//=======================Delete
document.querySelector('.fa-trash').addEventListener('click',deleteVillian)
function deleteVillian(){

    const name = document.querySelector('#zoomedName').innerText
    console.log(name)
    fetch('/deleteVillian', {
        method:"POST",
        body: JSON.stringify({name:name}),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then(res => res.json())
    .then(data => window.location.href = data.redirect)
}

//========================cool transitions
