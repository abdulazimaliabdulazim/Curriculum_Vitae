const name_ = document.getElementById("name");
const job_ = document.getElementById("job");
const overview_ = document.getElementById("overview");
const email_ = document.getElementById("email");
const phoneNumber_ = document.getElementById("number");
const data_ = document.getElementById("data");
const website_ = document.getElementById("website");
const location_ = document.getElementById("location");
const nationality_ = document.getElementById("nationality");
const submit_ = document.querySelector("[type='submit']");
let check = document.querySelector(".check");
let img = document.querySelector("#img");
img.style.cssText =
  "width: 100px;border-radius: 50%;outline: 2px solid var(--mine-color); display: none";
let upload = document.querySelector("#upload");

function clare() {
  name_.value = "";
  job_.value = "";
  overview_.value = "";
  email_.value = "";
  phoneNumber_.value = "";
  data_.value = "";
  website_.value = "";
  location_.value = "";
  nationality_.value = "";
}

let srcImage;
upload.onchange = function () {
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    srcImage = file.result;
  };
};

let myArray = [];

// if (window.localStorage.getItem("data") != null) {
//   myArray = JSON.parse(window.localStorage.getItem("data"));
// } else {
//   myArray = [];
// }

submit_.onclick = function getData() {
  const myData = {
    name_: name_.value,
    job_: job_.value,
    overview_: overview_.value,
    email_: email_.value,
    phoneNumber_: phoneNumber_.value,
    data_: data_.value,
    website_: website_.value,
    location_: location_.value,
    nationality_: nationality_.value,
    upload: upload.value,
  };
  myArray.push(myData);
  window.localStorage.setItem("data", JSON.stringify(myArray));
  clare();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  check.style.cssText = "color: red; cursor: pointer;";

  check.onclick = function () {
    let head = document.querySelector("head");
    head.innerHTML = `<meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <!-- <link rel="stylesheet" href="css/style.css" /> -->
      <style>
        * {
          margin: 0;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: "Cairo", sans-serif;
          direction: rtl;
        }
  
        :root {
          --mine-color: #de331b;
          --mine-color-section: #a62614;
        }
  
        .container {
          width: 800px;
          margin: 50px auto;
          background-color: white;
          border: 5px solid var(--mine-color-section);
          border-radius: 20px;
          padding-left: 10px;
          padding-right: 10px;
        }
  
        @media (min-width: 767px) {
          .container {
            width: 700px;
          }
        }
        @media (min-width: 967px) {
          .container {
            width: 100%;
          }
        }
        @media (min-width: 1199px) {
          .container {
            width: 1150px;
          }
        }
  
        body {
          background-color: red;
        }
        header .info {
          padding-top: 40px;
          padding-bottom: 40px;
          width: 500px;
          margin: auto;
          text-align: center;
        }
        header .info img.logo {
          width: 100px;
          border-radius: 50%;
          outline: 2px solid var(--mine-color);
        }
        header .info small {
          color: var(--mine-color);
          font-size: 20px;
        }
        header .info h1 {
          font-size: 1.875rem;
          margin: 15px 0;
        }
        header .container .card {
          padding-top: 20px;
          padding-bottom: 20px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 15px;
        }
        header .container hr {
          background-color: #eee;
        }
        header .container .card .text {
          display: flex;
          align-items: center;
        }
        header .container .card .text i {
          background-color: var(--mine-color);
          padding: 10px;
          color: white;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        header .container .card .text span {
          display: flex;
          align-items: center;
          background-color: #fff2ed;
          height: 30px;
          width: 100%;
          text-indent: 15px;
        }
      </style>
      <!-- Font Awesome -->
      <link rel="stylesheet" href="css/all.min.css" />
      <!-- Google Font -->
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@700&family=Jomhuria&family=Mouse+Memoirs&family=Open+Sans:ital,wght@0,300;0,400;1,300;1,400;1,700&family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <!-- Normalize -->
      <link rel="stylesheet" href="css/normalize.css" />`;

    let body = document.querySelector("body");
    body.innerHTML = `<header>
    <h1 style="position: relative; margin: auto; width: 200px; color: white; padding: 30px 0 0">
          السيرة الذاتية
        </h1>
        <div class="container">
          <div class="info">
            <img src="${srcImage}" alt="لا يوجد صورة" class="logo" />
            <h1>${myData.name_}</h1>
            <small>${myData.job_}</small>
          </div>
          <hr />
          <div class="card">
            <div class="text">
              <i class="fa-solid fa-phone"></i>
              <span>${myData.phoneNumber_}</span>
            </div>
            <div class="text">
              <i class="fa-regular fa-envelope"></i>
              <span>${myData.email_}</span>
            </div>
            <div class="text">
              <i class="fa-solid fa-fingerprint"></i>
              <span>رجل</span>
            </div>
            <div class="text">
              <i class="fa-solid fa-house"></i>
              <a href="${myData.website_}">موقع</a>
            </div>
            <div class="text">
              <i class="fa-brands fa-font-awesome-flag fa-fw fa-2x"></i>
              <span>${myData.nationality_}</span>
            </div>
            <div class="text">
              <i class="fa-sharp fa-solid fa-stopwatch-20"></i>
              <span>${myData.data_}</span>
            </div>
            <div class="text">
              <i class="fa-solid fa-location-dot"></i>
              <span>${myData.nationality_}</span>
            </div>
            <div class="text">
              <i class="fa-solid fa-hand-fist"></i>
              <span>أعزب</span>
            </div>
            <div class="text">
              <i class="fa-brands fa-yandex-international"></i>
              <span>${myData.location_}</span>
            </div>
            <div class="text">
              <i class="fa-solid fa-magnifying-glass"></i>
              <span>أتم الخدمة العسكرية ✓</span>
            </div>
          </div>
        </div>
      </header>`;
  };
};
