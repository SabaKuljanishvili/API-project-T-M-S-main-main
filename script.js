document.addEventListener("DOMContentLoaded", () => {
    fetch("https://railway.stepprojects.ge/api/trains")
        .then(resp => resp.json())
        .then(resp => {
            userArr = resp;
            filteredUsers = userArr;
            renderUsers(0, 8);
            fillOptions(userArr);
        });

    let cont = document.querySelector('.cont');
    let inp = document.querySelector('.inp');
    let selDay = document.querySelector('.sel-day');
    let selDeparture = document.querySelector('.sel-departure');
    let selArrival = document.querySelector('.sel-arrival');
    let btnMore = document.querySelector('.btn-more');
    
    let userArr = [];
    let filteredUsers = [];
    let shownCount = 8; 

    function renderUsers(start, end) {
        cont.innerHTML = "";
        let slicedUsers = filteredUsers.slice(0, end);

        slicedUsers.forEach(item => {
            cont.innerHTML += `<div class="mat">
                <h1 class="name">${item.name}</h1>
                <p class="from">დან: ${item.from}</p>
                <p class="to">მდე: ${item.to}</p>
                <p class="departure">გასვლა: ${item.departure}</p>
                <p class="arrive">ჩასვლა: ${item.arrive}</p>
                <p class="date">📅 ${item.date}</p>
                <a href="train.html?id=${item.id}" class="bntOne">ყიდვა </a>
            </div>`;
        });

        btnMore.style.display = end < filteredUsers.length ? "block" : "none";
    }

    function fillOptions(arr) {
        let days = new Set(arr.map(train => train.date));
        let departures = new Set(arr.map(train => train.departure));
        let arrivals = new Set(arr.map(train => train.arrive));

        selDay.innerHTML = `<option value="-1">კვირის დღე</option>`;
        selDeparture.innerHTML = `<option value="-1">გასვლის დრო</option>`;
        selArrival.innerHTML = `<option value="-1">ჩასვლის დრო</option>`;

        days.forEach(day => selDay.innerHTML += `<option value="${day}">${day}</option>`);
        departures.forEach(dep => selDeparture.innerHTML += `<option value="${dep}">${dep}</option>`);
        arrivals.forEach(arr => selArrival.innerHTML += `<option value="${arr}">${arr}</option>`);

        selDay.addEventListener("change", filterResults);
        selDeparture.addEventListener("change", filterResults);
        selArrival.addEventListener("change", filterResults);
        inp.addEventListener("input", filterResults);
    }

    function filterResults() {
        let searchText = inp.value.toLowerCase().trim();    
        let selectedDay = selDay.value;
        let selectedDeparture = selDeparture.value;
        let selectedArrival = selArrival.value;

        filteredUsers = userArr.filter(item => {
            let matchesDirection = item.to.toLowerCase().includes(searchText) || 
                                   item.from.toLowerCase().includes(searchText);
            let matchesDay = selectedDay === "-1" || item.date === selectedDay;
            let matchesDeparture = selectedDeparture === "-1" || item.departure === selectedDeparture;
            let matchesArrival = selectedArrival === "-1" || item.arrive === selectedArrival;

            return matchesDirection && matchesDay && matchesDeparture && matchesArrival;
        });

        shownCount = 8;
        cont.innerHTML = "";
        if (filteredUsers.length === 0) {
            cont.innerHTML = `<p class="not-found">🚫 ვერ მოიძებნა</p>`;
            btnMore.style.display = "none";
            return;
        }

        renderUsers(0, shownCount);
    }

    btnMore.addEventListener("click", () => {
        shownCount += 8;
        renderUsers(0, shownCount);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let token = localStorage.getItem("token");
    const authLink = document.getElementById("authLink");

    if (token) {
        authLink.textContent = "Log Out";
        authLink.classList.add("btnLogout");
        authLink.href = "#";
        authLink.addEventListener("click", function(event) {
            event.preventDefault();
            logout();
        });
    } else {
        authLink.textContent = "Login";
        authLink.classList.remove("btnLogout");
        authLink.href = "login.html";
    }

    function logout() {
        localStorage.removeItem("token");
        window.location.href = "index.html";
    }
});