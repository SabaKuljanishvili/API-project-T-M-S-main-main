document.addEventListener("DOMContentLoaded", () => {
    // გლობალური მასივი არჩეული სკამებისთვის
    const selectedSeatsGlobal = [];
  
    let params = new URLSearchParams(window.location.search);
    let trainId = params.get("id");
  
    if (!trainId) {
      document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
      return;
    }
  
    // მატარებლის ინფორმაციის მიღება
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
  
        // ვაგონების ინფორმაციის მიღება
        fetch(`https://railway.stepprojects.ge/api/vagons?trainId=${trainId}`)
          .then(resp => resp.json())
          .then(vagons => {
            // გამოვიყენოთ მხოლოდ 3 ვაგონი
            let limitedVagons = vagons.slice(0, 3);
            fillVagonOptions(limitedVagons);
          });
      });
  
    // ვაგონების სექციის შექმნა select-ში
    function fillVagonOptions(vagons) {
      let select = document.getElementById("vagon-select");
      select.innerHTML = '<option value="">-- აირჩიეთ --</option>';
      vagons.forEach(vagon => {
        let option = document.createElement("option");
        option.value = vagon.id;
        option.textContent = vagon.name;
        option.className = "vagon-option";
        select.appendChild(option);
      });
  
      select.addEventListener("change", (event) => {
        let selectedVagon = vagons.find(v => v.id == event.target.value);
        if (selectedVagon) {
          displaySeatInfo(selectedVagon);
        }
      });
    }
  
    // ვაგონის სკამების ჩვენება
    function displaySeatInfo(vagon) {
      let infoDiv = document.getElementById("vagon-info");
      infoDiv.innerHTML = `<h2>${vagon.name} - სექციები</h2>`;
  
      let seatContainer = document.createElement("div");
      seatContainer.id = "seat-container";
      infoDiv.appendChild(seatContainer);
  
      vagon.seats.forEach(seat => {
        let seatButton = document.createElement("button");
        seatButton.textContent = `N: ${seat.number} | ${seat.price}₾`;
        seatButton.className = "seat-button";
        seatButton.dataset.vagonName = vagon.name;
        seatButton.dataset.seatNumber = seat.number;
  
        // ტოგგლ ფუნქცია: თუ სკამი არ არის არჩეული, დაემატება, თუ კი, ამოღება
        seatButton.addEventListener("click", () => {
          const vagonName = vagon.name;
          const seatNumber = seat.number;
          const index = selectedSeatsGlobal.findIndex(
            item => item.vagonName === vagonName && item.seatNumber == seatNumber
          );
  
          if (index > -1) {
            // უკვე არჩეულია - გაუქმება
            selectedSeatsGlobal.splice(index, 1);
            seatButton.classList.remove("selected");
          } else {
            // არ არის არჩეული - არჩევა
            selectedSeatsGlobal.push({ vagonName, seatNumber });
            seatButton.classList.add("selected");
          }
          updateSelectedInfo();
        });
  
        seatContainer.appendChild(seatButton);
      });
    }
  
    // არჩეული სკამების ინფორმაციის განახლება
    function updateSelectedInfo() {
      let selectedInfo = document.getElementById("selected-seats-info");
      if (selectedSeatsGlobal.length === 0) {
        selectedInfo.innerHTML = `<h3>🪑 არჩეული სკამ(ებ)ი:</h3>
        <p>სკამი არ არის არჩეული.</p>`;
        return;
      }
      let html = `<h3>🪑 არჩეული სკამ(ებ)ი:</h3>`;
      selectedSeatsGlobal.forEach(item => {
        html += `<p>ვაგონი: ${item.vagonName}, სკამი: ${item.seatNumber}</p>`;
      });
      // "ყიდვის" ღილაკის დამატება
      html += `<button id="buy-btn">ყიდვა</button>`;
      selectedInfo.innerHTML = html;
  
      // ღილაკზე დაჭერისას SweetAlert გამოიძახება
      document.getElementById("buy-btn").addEventListener("click", () => {
        Swal.fire({
          title: 'ყიდვის დადასტურება',
          text: 'ნამდვილად გსურთ ბილეთის ყიდვა?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'კი',
          cancelButtonText: 'არა'
        }).then((result) => {
          if (result.isConfirmed) {
            // Redirect მთავარ გვერდზე
            window.location.href = "index.html";
          }
        });
      });
    }
  });
  