const form = document.querySelector('#task-form');
const task_list = document.querySelector('.collection');
const clr_btn = document.querySelector('.clr-tasks');
const filter = document.querySelector('#filter');
const task_input = document.querySelector('#task');


loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  task_list.addEventListener('click', removeTask);
  filter.addEventListener('keyup', addFilter);
  clr_btn.addEventListener('click', clearTasks);

}

function addTask(e) {
  if (task_input.value === '') {
    alert('Add a Task');
  } else {
    const li = document.createElement('li');
    li.className = '.collection-item';
    li.appendChild(document.createTextNode(task_input.value));
    const link = document.createElement('a');
    link.className = 'secondary-content delete-item';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    task_list.appendChild(li);
    task_input.value = '';
    e.preventDefault();
  }

}

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function addFilter(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}

function clearTasks() {
  task_list.innerHTML = '';
}

