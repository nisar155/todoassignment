// Global variable to track the number of completed tasks
let completedTasks = 0;

// Login Form Handling
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        window.location.href = 'main.html';
    } else {
        alert('Invalid username or password');
    }
});

// Function to Fetch and Display Todos
function change() {
    console.log("Button clicked");

    // Using fetch for modern, cleaner AJAX
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())  // Convert response to JSON
        .then(data => {
            let output = '<table class="table table-bordered"><thead><tr><th>Title</th><th>Status</th></tr></thead><tbody>';

            // Loop through the data and create table rows
            data.forEach(item => {
                output += `<tr>
                            <td>${item.title}</td>
                            <td>
                                <input 
                                    type="checkbox" 
                                    ${item.completed ? 'checked' : ''} 
                                    ${item.completed ? 'disabled' : ''} 
                                    onclick="toggleStatus(this)">
                            </td>
                        </tr>`;
            });

            output += '</tbody></table>';  // Close the table tags

            // Insert the table into the DOM
            document.getElementById('todo-table').innerHTML = output;
        })
        .catch(error => {
            console.error('Error fetching todos:', error);
        });
}

// Function to handle checkbox status toggle
function toggleStatus(checkbox) {
    // Increment or decrement the completed task counter
    if (checkbox.checked) {
        completedTasks++;
    } else {
        completedTasks--;
    }

    console.log(`Completed tasks: ${completedTasks}`);

    // Check if the number of completed tasks is 5
    if (completedTasks === 5) {
        alert("Congratulations! You have completed five tasks.");
    }
}
