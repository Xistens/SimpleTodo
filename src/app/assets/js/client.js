const todoText = document.getElementById('todoText');
const todoList = document.querySelector('.todo-list');

function addElements(data) {
  for (let i = 0, j = data.length; i < j; i++) {
    todoList.insertAdjacentHTML('beforeend', `
      <li class="list-group-item">
        <div class="text-holder">
          ${data[i].content}
          <div class="btn-group float-right">
            <button id="${i}" class="delete btn btn-warning">Delete</button>
            <button class="edit btn btn-success">Edit</button>
          </div>
        </div>
      </li>
    `);
  }
}

function getTasks(callback) {
  fetch('/readTasks', {
    method: 'GET',
  }).then((res) => {
    return res.json();
  }).then((data) => {
    callback(data);
  }).catch((err) => {
    console.error(err);
  });
}

function addTask() {
  const data = { data: todoText.value };

  fetch('/addTask', {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((res) => {
    console.log(res);
  });

  return false;
}

todoText.addEventListener('keypress', (evnt) => {
  if ((evnt.which || evnt.code) === 13) {
    addTask();
  }
});

getTasks(addElements);
