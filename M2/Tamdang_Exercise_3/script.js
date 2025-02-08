 // Fetch data from a public API
 fetch('https://randomuser.me/api/')
 .then(response => response.json())  // Parse the response as JSON
 .then(data => {
     // Extract user data from the response
     const user = data.results[0];
     const userDataDiv = document.getElementById('userData');
     
     // Display user data on the page
     userDataDiv.innerHTML = `
         <p>Name: ${user.name.first} ${user.name.last}</p>
         <p>Email: ${user.email}</p>
         <p>Location: ${user.location.country}, ${user.location.street.number} ${user.location.street.name}</p>
         <p>Contact: ${user.phone}</p>
         <img src="${user.picture.medium}" alt="User Image">
     `;
 })
 .catch(error => console.error('Error fetching data:', error));