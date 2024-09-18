    const input = document.getElementById("input");
    const createButton = document.getElementById("create_button");
    const todoList = document.getElementById("todo_list");

    const createTodo = () => {

        if (input.value.trim() === "") return alert("Напишите что-нибудь!");
        const div = document.createElement("div");
        const text = document.createElement('h3');
        const buttons_div = document.createElement("div");
        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        div.setAttribute('class', 'block_text');
        buttons_div.setAttribute("class", "buttons_div");
        deleteButton.setAttribute('class', 'delete_button');
        editButton.setAttribute('class', 'edit_button');
        text.innerHTML = input.value;

        div.append(text);
        todoList.append(div);
        div.append(buttons_div);

        input.value = "";

        deleteButton.textContent = "DELETE";
        deleteButton.onclick = () => div.remove();

        editButton.textContent = "EDIT";
        editButton.onclick = () => {
            const newTodoText = prompt('Введите новый текст', text.textContent);
            if (newTodoText) {
                text.textContent = newTodoText;
            }
        }

        buttons_div.append(deleteButton);
        buttons_div.append(editButton);
    };

    createButton.onclick = () => createTodo();

    input.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') return createTodo(); {}
    });
