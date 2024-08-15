import Cookies from "js-cookie";

const url = "https://soen287project-backend-4rxrbtvcva-nn.a.run.app";

export async function register(firstname, lastname, email, password) {
  const response = await fetch(`${url}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    }),
  });
  const data = await response.json();
  console.log(response.status);
  console.log(data);
}

export async function login(email, password) {
  const response = await fetch(`${url}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  console.log("login ran");
  const data = await response.json();
  Cookies.set("jwtToken", data.token);
}

export async function getPets(token) {
  const response = await fetch(`${url}/user/pets`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(response.status);
  console.log(data);
}
