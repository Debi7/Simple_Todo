// создаем новый элемент с тегом li
const element = document.createElement("li");
// добавляем ему класс
element.classList.add("text");
// запихиваем внутрь его какой то контент
element.innerHTML = "Это контент";

// добавляем в конец контейнера
container.appendChild(element);
