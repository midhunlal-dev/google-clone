const form = document.querySelector(".search-form");
const input = document.querySelector(".search-box input");
const luckyBtn = document.querySelector("#lucky-btn");


function searchGoogle(lucky = false) {
  const query = input.value.trim();

  if (query === "") return; 

  let url = "https://www.google.com/search?q=" + encodeURIComponent(query);

  if (lucky) {
    url += "&btnI=1"; 
  }

  window.location.href = url;
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  searchGoogle();
});


luckyBtn.addEventListener("click", function () {
  searchGoogle(true);
});
