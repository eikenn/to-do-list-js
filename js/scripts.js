const input = document.querySelector('.input-task')
const button = document.querySelector('.button-add-task')
const fullList = document.querySelector('.list-tasks')

let itemsList = []

function addNewItems() {
    checkItems()
    itemsList.push({
        task: input.value,
        done: false
    })
    input.value = ''
    showItems()
}

function checkItems(event) {
    if(input.value == "") {
        alert("Please, type something!")
        event.preventDefault()
    } 
}

function showItems() {

    let newList = ''

    itemsList.forEach((item, position)  => {

        newList = newList + `<li class="task ${item.done && "done"}">
        <img src="images/green-check.png" alt="Check" onclick="itemDone(${position})">
        <p>${item.task}</p>
        <img src="images/red-trash.png" alt="Trash" onclick="deleteItem(${position})">
        </li>`
    })

    fullList.innerHTML = newList

    localStorage.setItem('list', JSON.stringify(itemsList))
    
}

function itemDone(position) {
    itemsList[position].done = !itemsList[position].done
    showItems()
}

function deleteItem(position) {
    itemsList.splice(position, 1)
    showItems()
}

function tasksReload() {
    const localStorageTasks = localStorage.getItem('list')

    if(localStorageTasks) {
        itemsList = JSON.parse(localStorageTasks)
    }

    showItems()
}

tasksReload()

button.addEventListener("click", addNewItems)

document.addEventListener("keydown", ({ key }) => {

    if(key == "Enter") {
        addNewItems()
    }
})