IP = "192.168.1.38"
PORT = "3000"
ROUTE = "grid"

export async function upload(image) {

  /*
  const data = new FormData();
  data.append("image", image);

  const url = IP + ":" + PORT + "/" + ROUTE;

  return await fetch(url, {
    method: "POST",
    body: data,
  });
  */

  try {

    const response = await fetch('http://192.168.1.38/3000')
    const json = await response.json();
    console.log("res : " + json);
    return json;

  } catch (error) {

    console.log(error);
    return error;

  }

}