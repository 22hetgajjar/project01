fetch('https://api.example.com/courses')
  .then(response => response.json())
  .then(data => {
    // Process the data and populate the course cards dynamically
  })
  .catch(error => {
    console.error('Error:', error);
  });
