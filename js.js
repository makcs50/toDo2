const list = document.getElementById('list');
const input = document.getElementById('input');
const addButton = document.getElementById('button');

const array = [
    // {
    //     text: "первое дело",
    //     done: true
    //   },
    //   {
    //     text: "второе дело",
    //     done: true
    //   },
    //   {
    //     text: "третье дело",
    //     done: true
    //   },
    //   {
    //     text: "четвертое дело",
    //     done: true
    //   },
    //   {
    //     text: "пятое дело",
    //     done: true
    //   },
]


function render(array) {
    list.textContent = '';   

    for(let i = 0; i < array.length; i++){
        const div = document.createElement('div');
        div.classList.add('flex__task');
        const textConteiner = document.createElement('div')
        textConteiner.textContent = array[i].text;

        const chexBox = document.createElement('input')
        chexBox.setAttribute('type', 'checkbox')
        chexBox.classList.add('checkbox_class')

        const taskDiv = document.createElement('div')
        taskDiv.classList.add('task_text');
        // taskDiv.textContent = input.value;
        // taskDiv.style.textDecoration = 'none'

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove_btn');
        removeButton.textContent = 'x';
        
        list.append(div)
        div.append(chexBox, textConteiner, removeButton);
        // div.appendChild(taskDiv);
        
       
        
        
        
        removeButton.addEventListener('click', () => {
            // e.target.parrentElement.remove()
            itemRemove(i)
            console.log(i);
        })

        chexBox.addEventListener('change', () => {
        checkTodo()
        if (chexBox.checked) {

            div.classList.add('inactive');
        } else {
            div.classList.remove('inactive');
        }
    });
        
        function itemRemove(index){
            console.log(index);
            array.splice(index, 1)
            render(array)
        }


    }
    return list
    
}

render(array)


function addTodo(el){
    // list.textContent = '';
    array.push({text: el, done: true});
    render(array)
}


addButton.addEventListener('click', (e) => {
    e.preventDefault();


    addTodo(input.value);
    input.value = '';
    // remove(i)

})

function checkTodo(index) {
    array[index].done = !array[index].done;
  }

  


