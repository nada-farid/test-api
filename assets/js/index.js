let finalRes;
let dt = document.getElementById("showData")

async function getData(cat) {

  let myData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=3a77dce0c66e410e995fedaebf2f6d69`)
  let result = await myData.json();
  finalRes = result.articles
  console.log(finalRes);
  displayData();
}

getData('health');

function displayData() {

  console.log(dt);
  dt.innerHTML = ``
  for (let i = 0; i < finalRes.length; i++) {
    finalRes[i].description && finalRes[i].urlToImage ?
      dt.innerHTML += `<div class="col-md-4">
    <img src="${finalRes[i].urlToImage}" class="w-100">
    <h5>${finalRes[i].title}</h5>
    <p>${finalRes[i].description}</p>
    </div>`: '';
  }
}

let values = document.querySelectorAll('li');
for (let i = 0; i < values.length; i++) {
  values[i].addEventListener('click', function (e) {
    let myCat = e.target.getAttribute('category')
    console.log(myCat);
    getData(myCat)

  })
}