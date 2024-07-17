document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const imageInput = document.getElementById('image-input');
    const taskList = document.getElementById('task-list');
    const clearAllButton = document.getElementById('clear-all-button');
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const taskText = taskInput.value.trim();
      const taskImage = imageInput.files[0];
      if (taskText === '') {
        alert('Please enter a task');
        return;
      }
  
      addTask(taskText, taskImage);
      clearForm();
    });
  
    taskList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
        const taskItem = e.target.parentElement;
        taskList.removeChild(taskItem);
      } else if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
      }
    });
  
    clearAllButton.addEventListener('click', () => {
      clearAll();
    });
  
    function addTask(taskText, taskImage) {
      const taskItem = document.createElement('li');
  
      if (taskImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          taskItem.appendChild(img);
        };
        reader.readAsDataURL(taskImage);
      }
  
      const taskContent = document.createElement('span');
      taskContent.textContent = taskText;
      taskItem.appendChild(taskContent);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      taskItem.appendChild(deleteButton);
  
      taskList.appendChild(taskItem);
    }
  
    function clearForm() {
      taskInput.value = '';
      imageInput.value = '';
    }
  
    function clearAll() {
      taskList.innerHTML = '';
      clearForm();
    }
  });
  