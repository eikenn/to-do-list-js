const input = document.querySelector('.input-task')
const button = document.querySelector('.button-add-task')
const fullList = document.querySelector('.list-task')

let itemsList = []

function addNewItems() {
    itemsList.push(input.value)
    showItems()
}

function showItems() {

    let newList = ''

    itemsList.forEach((task)  => {

        newList = newList + `<li class="task">
        <img src="images/green-check.png" alt="Check">
        <p>${task}</p>
        <img src="images/red-trash.png" alt="Trash">
        </li>`
    })

    fullList.innerHTML = newList
    
}



button.addEventListener('click', addNewItems)