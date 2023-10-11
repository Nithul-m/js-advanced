// fetch("https://restcountries.com/v2/all")
// .then((data) => data.json())
// .then((res) =>dataFromAPI(res))
// .catch((err) =>{

// console.log(err.message);
// })
// function dataFromAPI(data) {
//     let html_content = ``;
//     data.forEach((post) => {
//         html_content += `<tr>
//         <select class="form-select" aria-label="Default select example">
//         <option selected>select country</option>
//         <option value="1"><td>${post.name}</td></option>
        
//       </select>
        
        
//             <td>${post.alpha3Code}</td>
//             <td>${post.capital}</td>
//             <td>${post.currencies}</td>

//         </tr>`
        

//     });

//     let ele = document.getElementById("postsContent");

//     ele.innerHTML = html_content;
// }




function fetchData(){
const selectElement = document.getElementById("countries");

fetch("https://restcountries.com/v2/all")
.then((data) => data.json())
.then((res) => {
    res.forEach((country) => {
        const countryOption = document.createElement('option');
        countryOption.text = country.name;
        countryOption.value = country.name;
        selectElement.append(countryOption);
        // console.log(country.name);

    })
})
// res.forEach((country) => {
//     const countryOption = document.createElement('option');
//     countryOption.text = country.name;
//     countryOption.value = country.name;

//     selectElement.append(countryOption);

 }

function getCountryData(){

    const selectedCountry = document.getElementById('countries').value;
    console.log(selectedCountry);
    fetch(`https://restcountries.com/v2/name/${selectedCountry}?fullText=true`)
    .then ((data) => data.json())
    .then ((countryData) => {
        const countryName = countryData[0].name;
        const countryFlag = countryData[0].flags.png;
        const countryCapital = countryData[0].capital
        const countryCurrencies = countryData[0].currencies[0].name
        const countryArea = countryData[0].area
        const countryRegion = countryData[0].region
        const countryDataShow = countryData[0]
        console.log(countryFlag);
        console.log(countryName);
        console.log(countryCapital);
        console.log(countryCurrencies);
        console.log(countryArea);
        console.log(countryRegion);
        console.log(countryDataShow);

        let htmlData = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${countryFlag}" alt="${countryName}">
        <div class="card-body" style="background-color: antiquewhite">
          <h3 class="card-title" style="text-transform: uppercase; text-decoration: underline"; >${countryName}</h3>
          <h6 class="card-text" style="color: red">Capital : ${countryCapital}</h6>
          <h6 class="card-text" style="background-color: blue">Currency : ${countryCurrencies}</h6>
          <h6 class="card-text" style="text-align: center;color: red">Area : ${countryArea}</h6>
          <h6 class="card-text" style="background-color: blue">Region : ${countryRegion}</h6>
          
        </div>
      </div>`

      document.getElementById("countryDataDisplay").innerHTML = htmlData;
      
      let htmlData1 = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${countryFlag}" alt="${countryName}">
        <div class="card-body" style="background-color: antiquewhite">
          <h3 class="card-title" style="text-transform: uppercase; text-decoration: underline"; >${countryName}</h3>
          <h6 class="card-text" style="color: red">Capital : ${countryCapital}</h6>
          <h6 class="card-text" style="background-color: blue">Currency : ${countryCurrencies}</h6>
          <h6 class="card-text" style="text-align: center;color: red">Area : ${countryArea}</h6>
          <h6 class="card-text" style="background-color: blue">Region : ${countryRegion}</h6>
          
        </div>
      </div>`

      document.getElementById("countryDataDisplay1").innerHTML = htmlData1;

     
      let htmlData2 = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${countryFlag}" alt="${countryName}">
        <div class="card-body" style="background-color: antiquewhite">
          <h3 class="card-title" style="text-transform: uppercase; text-decoration: underline"; >${countryName}</h3>
          <h6 class="card-text" style="color: red">Capital : ${countryCapital}</h6>
          <h6 class="card-text" style="background-color: blue">Currency : ${countryCurrencies}</h6>
          <h6 class="card-text" style="text-align: center;color: red">Area : ${countryArea}</h6>
          <h6 class="card-text" style="background-color: blue">Region : ${countryRegion}</h6>
          
        </div>
      </div>`

      document.getElementById("countryDataDisplay2").innerHTML = htmlData2;


      
    })
}

window.addEventListener('load', function(){
    fetchData();
})
getCountryData();