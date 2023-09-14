const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const url = `${process.argv[2]}`;

// Make an HTTP GET request to fetch the task data.
request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    // Parse the JSON response.
    const tasks = JSON.parse(body);

    // Create an object to store the count of completed tasks for each user.
    const taskCountsByUser = {};

    // Filter tasks for completed tasks and count them for each user.
    tasks.forEach((task) => {
      if (task.completed) {
        const userId = task.userId;
        taskCountsByUser[userId] = (taskCountsByUser[userId] || 0) + 1;
      }
    });


        // Create an empty object.
        const myObject = {};

        // Use a for loop to populate the object.
        for (const userId in taskCountsByUser) {
          myObject[userId] = taskCountsByUser[userId];
        }
    
        // Now, myObject contains { 'key1': 'value1', 'key2': 'value2', 'key3': 'value3' }.
        console.log(myObject);
  }
});
