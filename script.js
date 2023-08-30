$(document).ready(function () {
  $('#addTask').click(function () {
    var taskText = $('#taskInput').val().trim();
    if (taskText !== '') {
      var taskItem = $('<li>');

      var titleSpan = $('<span>').text(taskText);
      taskItem.append(titleSpan);

      var deleteButton = $('<button>').text('Delete');
      taskItem.append(deleteButton);

      var renameButton = $('<button>').text('Rename');
      taskItem.append(renameButton);

      $('#taskList').append(taskItem);

      $('#taskInput').val('');

      taskItem.click(function () {
        $(this).toggleClass('completed');
      });

      deleteButton.click(function () {
        taskItem.remove();
      });

      renameButton.click(function () {
        var newTaskText = prompt('Rename task to:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
          taskText = newTaskText;
          titleSpan.text(taskText);
        }
      });
    } else {
      alert("Please enter a task name before clicking 'Add'");
    }
  });
});
