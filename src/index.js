function updateTime() {

//city 1
    let city1Element = document.querySelector("#city-1");
    if (city1Element) {
        let city1DateElement = city1Element.querySelector(".date");
        let city1TimeElement = city1Element.querySelector(".time");
        let city1Time = moment().tz("Europe/London");

        city1DateElement.innerHTML = city1Time.format("MMMM Do YYYY")
        city1TimeElement.innerHTML = city1Time.format ("LTS");
    }

//city 2
    let city2Element = document.querySelector("#city-2");
    if(city2Element) {
        let city2DateElement = city2Element.querySelector(".date");
        let city2TimeElement = city2Element.querySelector(".time");
        let city2Time = moment().tz("Europe/Paris");

        city2DateElement.innerHTML = city2Time.format("MMMM Do YYYY")
        city2TimeElement.innerHTML = city2Time.format ("LTS");
    }
}

function updateCity (event) {
    let cityTimeZone = event.target.value;
    if(cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div>
    <div>
        <div> ${cityName} 🌐</div>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        <div class="time">${cityTime.format ("LTS")}</div>
    </div>
    <a class="back" href="/"> ↩ Back to main </a>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change",updateCity);