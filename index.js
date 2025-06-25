// Add your code here
function submitData(name, email) {
  const formData = {
    name: name,
    email: email
  };

  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  return fetch("http://localhost:3000/users", configObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      const body = document.querySelector("body");
      const idElement = document.createElement("p");
      idElement.textContent = `ID: ${object.id}`;
      body.appendChild(idElement);
    })
    .catch(function (error) {
      const body = document.querySelector("body");
      const errorElement = document.createElement("p");
      errorElement.textContent = error.message;
      body.appendChild(errorElement);
    });
}


