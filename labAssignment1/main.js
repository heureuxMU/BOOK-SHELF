document.addEventListener('DOMContentLoaded', function () {
    const bookForm = document.getElementById('addBookForm');
    const bookList = document.getElementById('books');
  
    bookForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
  
      if (title && author) {
        const book = { title, author };
        addBookToList(book);
  
        clearForm();
      }
    });
  
    function addBookToList(book) {
      const tableRow = document.createElement('tr');
      const titleCell = document.createElement('td');
      const authorCell = document.createElement('td');
      const actionsCell = document.createElement('td');
      const removeButton = document.createElement('button');
  
      titleCell.textContent = book.title;
      authorCell.textContent = book.author;
  
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', function () {
        removeBook(tableRow);
      });
  
      actionsCell.appendChild(removeButton);
  
      tableRow.appendChild(titleCell);
      tableRow.appendChild(authorCell);
      tableRow.appendChild(actionsCell);
  
      bookList.appendChild(tableRow);
    }
  
    function clearForm() {
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    }
  
    function removeBook(row) {
      row.remove();
    }
  });
  