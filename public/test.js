const login = async (email, password) => {
  try {
    const result = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/users/login",
      data: {
        email,
        password
      }
    });
    console.log(result);
    await console.log(document.cookie);
  } catch (error) {
    console.log(error);
  }
};
login("gao@gmail.com", "siths1234");

/* const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", login);

function login(e) {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  e.target.reset();
  const url = "http:///localhost:3000/users/login";
  const options = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json"
    }
  };
  fetch(url, options);
}
 */
