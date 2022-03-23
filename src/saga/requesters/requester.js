const fetcher = async () => {
  try {
    let response = await fetch("http://localhost:3000/User");
    let responseJson = await response.json();
    return responseJson;
  } catch (err) {
    throw err;
  }
};
const oneFetcher = async ({ id1 }) => {
  try {
    let response = await fetch(`http://localhost:3000/User/${id1}`);
    let responseJson = await response.json();
    return responseJson;
  } catch (err) {
    throw err;
  }
};
const poster = async (data) => {
  try {
    let response = await fetch("http://localhost:3000/User/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let responseJson = await response.json();
    return responseJson;
  } catch (err) {
    throw err;
  }
};
const deleter = async (id) => {
  try {
    let response = await fetch(`http://localhost:3000/User/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (err) {
    throw err;
  }
};
const updater = async ({ id1, userObj }) => {
  try {
    console.log(id1);
    let response = await fetch(`http://localhost:3000/User/${id1}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    let responseJson = await response.json();
    console.log(responseJson);
    return responseJson;
  } catch (err) {
    throw err;
  }
};

export { fetcher, poster, deleter, oneFetcher, updater };
