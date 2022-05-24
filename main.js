const h1 = document.querySelector('h1')

function clickHeading(event) {
    console.log('clicked', event);
}

h1.addEventListener('mouseover', clickHeading)

const form = document.querySelector('form')
// const inputNumber = document.querySelector('input[type=number]')

function formSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData)

    console.log(formValues);
}

form.addEventListener('submit', formSubmit)

const user = {
    name: 'John',
    surname: 'Doe'
}

const jsonUser = JSON.stringify(user)

console.log(JSON.parse(jsonUser))


const users = ['John', 'Peter', 'Andrej']

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

users.map(item => {
    console.log(item)
})

console.log(users.find(item => item === 'John'))

const list = document.querySelector('.section-lists ol')

function addElement(name, status) {
    const newElement = document.createElement('li');
    newElement.classList.add("item")

    const userName = document.createElement('span')
    userName.innerText = name + " " + status

    newElement.appendChild(userName)

    list.appendChild(newElement)
}

const html = document.querySelector('html')

html.addEventListener('keyup', function(event) {
    console.log(event.key)
})

async function getDataFromApi() {
    const req = await fetch('https://gorest.co.in/public/v2/users')
    const data = await req.json()

    data.map(item => {
        addElement(item.name, item.status)
    })
}

getDataFromApi()
