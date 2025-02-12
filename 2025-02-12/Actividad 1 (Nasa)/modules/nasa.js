async function cargar(fecha) {
  let url = new URL("https://api.nasa.gov/planetary/apod");
  url.searchParams.set("api_key", "DEMO_KEY");
  url.searchParams.set("date", fecha);

  let response = await fetch(url);

  if (!response.ok) {
    console.error(`Error ${response.status}: ${response.statusText}`);
  } else {
    let data = await response.json();
    let eImg = data.hdurl;
    console.log(eImg);
    
    return eImg;
  }
}

export { cargar };