const API_KEY = "91466d74673c81a3f639ea04fea0d36a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
   
    // JS가 아래 URL을 호출하였음
    // fetch는 promise로, 시간이 좀 걸린 뒤에 일어나는 것이다.
    fetch(url)
        .then(response => response.json())
        .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${"지금의 날씨는 " + data.weather[0].main} / ${"온도 "+data.main.temp + "도"}`
        city.innerText = "당신의 도시는 " + data.name;
    });
}

// 위치정보를 조회해서 그와 관련된 객체데이터를 넘겨준다.
// 그걸 우리는 position이라는 매개변수 이름을 통해 받아오는 것!

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
//인자 중 하나는 실행이 잘 됬을 때 함수, 하나는 에러가 떴을 때 함수