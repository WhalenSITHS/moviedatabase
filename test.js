const login = async function() {
  try {
    const result = await fetch("http://127.0.0.1:3000/users/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: {
        email: "gao@gmail.com",
        password: "siths1234"
      }
    });
    const data = await result.json();

    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

login();
