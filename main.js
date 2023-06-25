const API_KEY = "24b2e280";
// const
const apiCall = async () => {
  const valu = document.getElementById("val1");
  const searchValue = valu.value;
  const search=searchValue.trim();
  console.log(search)
  const API_URL = `http://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}`;

  const response = await fetch(API_URL);
  const jsonData = await response.json();
  const data = await jsonData.Search;
//   console.log(jsonData);
  console.log(data);
  data.forEach((element) => {

    //  continer.insertAdjacentHTML(
    //   "beforeend",
    //   `<div id="titleid">Title : ${element["Title"]}</div>`
    // );
      desid.insertAdjacentHTML(
        "beforeend",
        `<img class="img" src=${element["Poster"]}></img>`
      );

      desid.insertAdjacentHTML(
        "beforeend",
        `<div id="titleid">Title : ${element["Title"]}</div>`
      );
      desid.insertAdjacentHTML(
        "beforeend",
        `<div id="typeid">Type : ${element["Type"]}</div>`
      );
      desid.insertAdjacentHTML(
        "beforeend",
        `<div id="typeid">Year : ${element["Year"]}</div>`
      );
  });
};
const getData = document.getElementById("btn");
getData.onclick = apiCall;

// const response= fetch(API_URL);
// response.then((res)=>{
//     return res.json()
// }).then((data)=>{
//     console.log("data :", data.Search)
//     return data.Search;
// })


// const title = document.getElementById("titleid");
      // title.innerHTML = `Title${element["Title"]}`;
      // const type = document.getElementById("typeid");
      // type.innerHTML = "molajat";
      // const year = document.getElementById("yearid");
      // year.innerHTML = "molajat";