const login = async function() {
  const response = fetch("http://127.0.0.1:3000/users/login", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      email: "gao@gmail.com",
      password: "siths1234"
    })
  }).then(async result => {
    return await result.json();
  });
  console.log(response);
};

login();
