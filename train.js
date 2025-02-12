document.addEventListener("DOMContentLoaded", () => {
    let params = new URLSearchParams(window.location.search);
    let trainId = params.get("id");

    if (!trainId) {
        document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
        return;
    }

    // infos migeba
    fetch("https://railway.stepprojects.ge/api/trains")
        .then(resp => resp.json())
        .then(data => {
            let train = data.find(t => t.id == trainId);
            if (!train) {
                document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
                return;
            }

            document.getElementById("train-name").textContent = train.name;
            document.getElementById("train-from").textContent = `დან: ${train.from}`;
            document.getElementById("train-to").textContent = `მდე: ${train.to}`;
            document.getElementById("train-departure").textContent = `გასვლა: ${train.departure}`;
            document.getElementById("train-arrival").textContent = `ჩასვლა: ${train.arrive}`;
            document.getElementById("train-date").textContent = `📅 ${train.date}`;

            // ინფორმაციას ვიგებ
            fetch(`https://railway.stepprojects.ge/api/vagons?trainId=${trainId}`)
                .then(resp => resp.json())
                .then(vagons => {
                    // მარტო სამი ვარიანტი
                    let limitedVagons = vagons.slice(0, 3);
                    fillVagonOptions(limitedVagons);
                });
        });

    function fillVagonOptions(vagons) {
        let select = document.getElementById("vagon-select");
        let infoDiv = document.getElementById("vagon-info");

        vagons.forEach(vagon => {
            let option = document.createElement("option");
            option.value = vagon.id; // ვაგონის id რომ გამოიყენოს 
            option.textContent = vagon.name; // saxeli ro gamoitanos
            select.appendChild(option); // სელექტი რა
        });

        // event listener is damateba rom gamoitanos rac avirchie
        select.addEventListener("change", (event) => {
            let selectedVagon = vagons.find(v => v.id == event.target.value);
            if (selectedVagon) {
                displaySeatInfo(selectedVagon);
            }
        });
    }

    function displaySeatInfo(vagon) {
        let infoDiv = document.getElementById("vagon-info");
        infoDiv.innerHTML = `<h2>${vagon.name} - სექციები</h2>`;
        
        // sheqmna
        let seatSelect = document.createElement("select");
        seatSelect.id = "seat-select";
        infoDiv.appendChild(seatSelect);

        vagon.seats.forEach(seat => {
            let option = document.createElement("option");
            option.value = seat.number; // fasi
            option.textContent = `ნომერი: ${seat.number}, ფასი: ${seat.price}₾`; // fasi rom gamoitanos
            seatSelect.appendChild(option); // skamis 
        });

        // event listener rom gamoitanos fasi da skami
        seatSelect.addEventListener("change", (event) => {
            let selectedSeat = vagon.seats.find(s => s.number == event.target.value);
            if (selectedSeat) {
                updateSelectedInfo(vagon.name, selectedSeat.number, selectedSeat.price);
            }
        });
    }

    function updateSelectedInfo(vagonName, seatNumber, seatPrice) {
        let trainFrom = document.getElementById("train-from");
        trainFrom.innerHTML = `დან: ${trainFrom.textContent.split(': ')[1]} <span>ვაგონი: ${vagonName}, სკამი: ${seatNumber}, ფასი: ${seatPrice}₾</span>`;
    }
});