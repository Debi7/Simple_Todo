document.addEventListener('DOMContentLoaded', function () {
  const buttonTodo = document.querySelector('.button');
  buttonTodo.addEventListener('click', createTodos);

  function createTodos() {
    const inputText = prompt('Создать задание');

    const todoItem = document.createElement('li');
    todoItem.classList.add('text');
    todoItem.innerHTML = inputText;

    const todoList = document.querySelector('.todo-box');
    todoList.appendChild(todoItem);

    if (inputText === null) {
      // проверка на отмену (prompt() возвращает null, если была произведена отмена)
      todoList.removeChild(todoItem);
    } else if (inputText === '') {
      todoList.removeChild(todoItem);
      prompt('', 'Вы не создали задание');
    }

    //клик по лишке и изменение текста в ней через prompt
    todoItem.addEventListener('click', changeTextItem);

    function changeTextItem() {
      const promptText = todoItem.innerHTML;
      const newPromptText = prompt('Изменить задание', promptText);
      todoItem.innerHTML = newPromptText;

      if (newPromptText === null) {
        todoItem.innerHTML = promptText;
      }
    }

    //создаём кнопку внутри li, по клику на неё - удалять эту лишку
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('deleteItem');
    btnDelete.textContent = 'Delete';

    todoItem.append(btnDelete);
    btnDelete.addEventListener('click', deleteItem);

    function deleteItem() {
      todoItem.removeEventListener('click', changeTextItem);
      todoItem.remove();
    }
  }
});
