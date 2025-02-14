// document.addEventListener("DOMContentLoaded", () => {
//     let params = new URLSearchParams(window.location.search);
//     let trainId = params.get("id");

//     if (!trainId) {
//         document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//         return;
//     }

//     // infos migeba
//     fetch("https://railway.stepprojects.ge/api/trains")
//         .then(resp => resp.json())
//         .then(data => {
//             let train = data.find(t => t.id == trainId);
//             if (!train) {
//                 document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//                 return;
//             }

//             document.getElementById("train-name").textContent = train.name;
//             document.getElementById("train-from").textContent = `დან: ${train.from}`;
//             document.getElementById("train-to").textContent = `მდე: ${train.to}`;
//             document.getElementById("train-departure").textContent = `გასვლა: ${train.departure}`;
//             document.getElementById("train-arrival").textContent = `ჩასვლა: ${train.arrive}`;
//             document.getElementById("train-date").textContent = `📅 ${train.date}`;

//             // ინფორმაციას ვიგებ
//             fetch(`https://railway.stepprojects.ge/api/vagons?trainId=${trainId}`)
//                 .then(resp => resp.json())
//                 .then(vagons => {
//                     // მარტო სამი ვარიანტი
//                     let limitedVagons = vagons.slice(0, 3);
//                     fillVagonOptions(limitedVagons);
//                 });
//         });

//     function fillVagonOptions(vagons) {
//         let select = document.getElementById("vagon-select");
//         let infoDiv = document.getElementById("vagon-info");

//         vagons.forEach(vagon => {
//             let option = document.createElement("option");
//             option.value = vagon.id; // ვაგონის id რომ გამოიყენოს 
//             option.textContent = vagon.name; // saxeli ro gamoitanos
//             select.appendChild(option); // სელექტი რა
//         });

//         // event listener is damateba rom gamoitanos rac avirchie
//         select.addEventListener("change", (event) => {
//             let selectedVagon = vagons.find(v => v.id == event.target.value);
//             if (selectedVagon) {
//                 displaySeatInfo(selectedVagon);
//             }
//         });
//     }

//     function displaySeatInfo(vagon) {
//         let infoDiv = document.getElementById("vagon-info");
//         infoDiv.innerHTML = `<h2>${vagon.name} - სექციები</h2>`;
        
//         // sheqmna
//         let seatSelect = document.createElement("select");
//         seatSelect.id = "seat-select";
//         infoDiv.appendChild(seatSelect);

//         vagon.seats.forEach(seat => {
//             let option = document.createElement("option");
//             option.value = seat.number; // fasi
//             option.textContent = `ნომერი: ${seat.number}, ფასი: ${seat.price}₾`; // fasi rom gamoitanos
//             seatSelect.appendChild(option); // skamis 
//         });

//         // event listener rom gamoitanos fasi da skami
//         seatSelect.addEventListener("change", (event) => {
//             let selectedSeat = vagon.seats.find(s => s.number == event.target.value);
//             if (selectedSeat) {
//                 updateSelectedInfo(vagon.name, selectedSeat.number, selectedSeat.price);
//             }
//         });
//     }

//     function updateSelectedInfo(vagonName, seatNumber, seatPrice) {
//         let trainFrom = document.getElementById("train-from");
//         trainFrom.innerHTML = `დან: ${trainFrom.textContent.split(': ')[1]} <span>ვაგონი: ${vagonName}, სკამი: ${seatNumber}, ფასი: ${seatPrice}₾</span>`;
//     }
// });












// document.addEventListener("DOMContentLoaded", () => {
//     let params = new URLSearchParams(window.location.search);
//     let trainId = params.get("id");

//     if (!trainId) {
//         document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//         return;
//     }

//     // infos migeba
//     fetch("https://railway.stepprojects.ge/api/trains")
//         .then(resp => resp.json())
//         .then(data => {
//             let train = data.find(t => t.id == trainId);
//             if (!train) {
//                 document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//                 return;
//             }

//             document.getElementById("train-name").textContent = train.name;
//             document.getElementById("train-from").textContent = `დან: ${train.from}`;
//             document.getElementById("train-to").textContent = `მდე: ${train.to}`;
//             document.getElementById("train-departure").textContent = `გასვლა: ${train.departure}`;
//             document.getElementById("train-arrival").textContent = `ჩასვლა: ${train.arrive}`;
//             document.getElementById("train-date").textContent = `📅 ${train.date}`;

//             // ინფორმაციას ვიგებ
//             fetch(`https://railway.stepprojects.ge/api/vagons?trainId=${trainId}`)
//                 .then(resp => resp.json())
//                 .then(vagons => {
//                     // მარტო სამი ვარიანტი
//                     let limitedVagons = vagons.slice(0, 3);
//                     fillVagonOptions(limitedVagons);
//                 });
//         });

//     function fillVagonOptions(vagons) {
//         let select = document.getElementById("vagon-select");
//         let infoDiv = document.getElementById("vagon-info");

//         vagons.forEach(vagon => {
//             let option = document.createElement("option");
//             option.value = vagon.id; // ვაგონის id რომ გამოიყენოს 
//             option.textContent = vagon.name; // saxeli ro gamoitanos
//             select.appendChild(option); // სელექტი რა
//         });

//         // event listener is damateba rom gamoitanos rac avirchie
//         select.addEventListener("change", (event) => {
//             let selectedVagon = vagons.find(v => v.id == event.target.value);
//             if (selectedVagon) {
//                 displaySeatInfo(selectedVagon);
//             }
//         });
//     }

//     function displaySeatInfo(vagon) {
//         let infoDiv = document.getElementById("vagon-info");
//         infoDiv.innerHTML = `<h2>${vagon.name} - სექციები</h2>`;
        
//         // sheqmna
//         vagon.seats.forEach(seat => {
//             let label = document.createElement("label");
//             label.textContent = `ნომერი: ${seat.number}, ფასი: ${seat.price}₾`;
//             let checkbox = document.createElement("input");
//             checkbox.type = "checkbox";
//             checkbox.value = seat.number; // fasi
//             checkbox.addEventListener("change", (event) => {
//                 if (event.target.checked) {
//                     updateSelectedInfo(vagon.name, seat.number, seat.price);
//                 } else {
//                     removeSelectedInfo(seat.number);
//                 }
//             });
//             label.prepend(checkbox);
//             infoDiv.appendChild(label);
//         });
//     }

//     function updateSelectedInfo(vagonName, seatNumber, seatPrice) {
//         let trainFrom = document.getElementById("train-from");
//         trainFrom.innerHTML += `<span>ვაგონი: ${vagonName}, სკამი: ${seatNumber}, ფასი: ${seatPrice}₾</span><br>`;
//     }

//     function removeSelectedInfo(seatNumber) {
//         let trainFrom = document.getElementById("train-from");
//         trainFrom.innerHTML = trainFrom.innerHTML.replace(new RegExp(`ვაგონი: .*?, სკამი: ${seatNumber}, ფასი: .*?₾<br>`, 'g'), '');
//     }
// });










// document.addEventListener("DOMContentLoaded", () => {
//     let params = new URLSearchParams(window.location.search);
//     let trainId = params.get("id");

//     if (!trainId) {
//         document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//         return;
//     }

//     // infos migeba
//     fetch("https://railway.stepprojects.ge/api/trains")
//         .then(resp => resp.json())
//         .then(data => {
//             let train = data.find(t => t.id == trainId);
//             if (!train) {
//                 document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//                 return;
//             }

//             document.getElementById("train-name").textContent = train.name;
//             document.getElementById("train-from").textContent = `დან: ${train.from}`;
//             document.getElementById("train-to").textContent = `მდე: ${train.to}`;
//             document.getElementById("train-departure").textContent = `გასვლა: ${train.departure}`;
//             document.getElementById("train-arrival").textContent = `ჩასვლა: ${train.arrive}`;
//             document.getElementById("train-date").textContent = `📅 ${train.date}`;

//             // ინფორმაციას ვიგებ
//             fetch(`https://railway.stepprojects.ge/api/vagons?trainId=${trainId}`)
//                 .then(resp => resp.json())
//                 .then(vagons => {
//                     // მარტო სამი ვარიანტი
//                     let limitedVagons = vagons.slice(0, 3);
//                     fillVagonOptions(limitedVagons);
//                 });
//         });

//     function fillVagonOptions(vagons) {
//         let select = document.getElementById("vagon-select");
//         let infoDiv = document.getElementById("vagon-info");

//         vagons.forEach(vagon => {
//             let option = document.createElement("option");
//             option.value = vagon.id; // ვაგონის id რომ გამოიყენოს 
//             option.textContent = vagon.name; // saxeli ro gamoitanos
//             option.className = "vagon-option"; // ახალი კლასი
//             select.appendChild(option); // სელექტი რა
//         });

//         // event listener is damateba rom gamoitanos rac avirchie
//         select.addEventListener("change", (event) => {
//             let selectedVagon = vagons.find(v => v.id == event.target.value);
//             if (selectedVagon) {
//                 displaySeatInfo(selectedVagon);
//             }
//         });
//     }

//     function displaySeatInfo(vagon) {
//         let infoDiv = document.getElementById("vagon-info");
//         infoDiv.innerHTML = `<h2>${vagon.name} - სექციები</h2>`;
        
//         // sheqmna
//         let seatSelect = document.createElement("select");
//         seatSelect.id = "seat-select";
//         seatSelect.multiple = true; // multiple ატრიბუტი
//         infoDiv.appendChild(seatSelect);

//         vagon.seats.forEach(seat => {
//             let option = document.createElement("option");
//             option.value = seat.number; // fasi
//             option.textContent = `N: ${seat.number}, ფასი: ${seat.price}₾`; // fasi rom gamoitanos
//             option.className = "seat-option"; // ახალი კლასი
//             seatSelect.appendChild(option); // skamis 
//         });

//         // event listener rom gamoitanos fasi da skami
//         seatSelect.addEventListener("change", (event) => {
//             let selectedSeats = Array.from(event.target.selectedOptions).map(option => option.value);
//             updateSelectedInfo(vagon.name, selectedSeats);
//         });
//     }

//     function updateSelectedInfo(vagonName, selectedSeats) {
//         let trainFrom = document.getElementById("train-from");
//         trainFrom.innerHTML = `დან: ${trainFrom.textContent.split(': ')[1]} <span>ვაგონი: ${vagonName}, სკამები: ${selectedSeats.join(', ')}</span>`;
//     }
// });







// document.addEventListener("DOMContentLoaded", () => {
//     let params = new URLSearchParams(window.location.search);
//     let trainId = params.get("id");

//     if (!trainId) {
//         document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//         return;
//     }

//     // მატარებლის ინფორმაციის მიღება
//     fetch("https://railway.stepprojects.ge/api/trains")
//         .then(resp => resp.json())
//         .then(data => {
//             let train = data.find(t => t.id == trainId);
//             if (!train) {
//                 document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//                 return;
//             }

//             document.getElementById("train-name").textContent = train.name;
//             document.getElementById("train-from").textContent = `დან: ${train.from}`;
//             document.getElementById("train-to").textContent = `მდე: ${train.to}`;
//             document.getElementById("train-departure").textContent = `გასვლა: ${train.departure}`;
//             document.getElementById("train-arrival").textContent = `ჩასვლა: ${train.arrive}`;
//             document.getElementById("train-date").textContent = `📅 ${train.date}`;

//             // ვაგონების ინფორმაციის მიღება
//             fetch(`https://railway.stepprojects.ge/api/vagons?trainId=${trainId}`)
//                 .then(resp => resp.json())
//                 .then(vagons => {
//                     let limitedVagons = vagons.slice(0, 3);
//                     fillVagonOptions(limitedVagons);
//                 });
//         });

//     function fillVagonOptions(vagons) {
//         let select = document.getElementById("vagon-select");
//         select.innerHTML = '<option value="">-- აირჩიეთ --</option>'; // სელექტის გასუფთავება
//         vagons.forEach(vagon => {
//             let option = document.createElement("option");
//             option.value = vagon.id;
//             option.textContent = vagon.name;
//             option.className = "vagon-option";
//             select.appendChild(option);
//         });

//         select.addEventListener("change", (event) => {
//             let selectedVagon = vagons.find(v => v.id == event.target.value);
//             if (selectedVagon) {
//                 displaySeatInfo(selectedVagon);
//             }
//         });
//     }

//     function displaySeatInfo(vagon) {
//         let infoDiv = document.getElementById("vagon-info");
//         infoDiv.innerHTML = `<h2>${vagon.name} - სექციები</h2>`;

//         let seatSelect = document.createElement("select");
//         seatSelect.id = "seat-select";
//         seatSelect.multiple = true;
//         infoDiv.appendChild(seatSelect);

//         vagon.seats.forEach(seat => {
//             let option = document.createElement("option");
//             option.value = seat.number;
//             option.textContent = `N: ${seat.number}, ფასი: ${seat.price}₾`;
//             option.className = "seat-option";
//             seatSelect.appendChild(option);
//         });

//         // თუ უკვე არსებობს არჩეული სკამების სია, გავასუფთავოთ
//         let existingInfo = document.getElementById("selected-seats-info");
//         if (existingInfo) {
//             existingInfo.remove();
//         }

//         // ახალი ინფოს ბლოკი
//         let selectedInfoDiv = document.createElement("div");
//         selectedInfoDiv.id = "selected-seats-info";
//         infoDiv.appendChild(selectedInfoDiv);

//         seatSelect.addEventListener("change", (event) => {
//             let selectedSeats = Array.from(event.target.selectedOptions).map(option => option.value);
//             updateSelectedInfo(vagon.name, selectedSeats);
//         });
//     }

//     function updateSelectedInfo(vagonName, selectedSeats) {
//         let selectedInfo = document.getElementById("selected-seats-info");

//         selectedInfo.innerHTML = `<h3>🪑 არჩეული სკამ(ებ)ი:</h3>`;
//         selectedSeats.forEach(seat => {
//             let seatInfo = document.createElement("p");
//             seatInfo.textContent = `ვაგონი: ${vagonName}, სკამი: ${seat}`;
//             selectedInfo.appendChild(seatInfo);
//         });
//     }
// });







// document.addEventListener("DOMContentLoaded", () => {
//     let params = new URLSearchParams(window.location.search);
//     let trainId = params.get("id");

//     if (!trainId) {
//         document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//         return;
//     }

//     // მატარებლის ინფორმაციის მიღება
//     fetch("https://railway.stepprojects.ge/api/trains")
//         .then(resp => resp.json())
//         .then(data => {
//             let train = data.find(t => t.id == trainId);
//             if (!train) {
//                 document.body.innerHTML = "<h1>🚫 მატარებელი ვერ მოიძებნა</h1>";
//                 return;
//             }

//             document.getElementById("train-name").textContent = train.name;
//             document.getElementById("train-from").textContent = `დან: ${train.from}`;
//             document.getElementById("train-to").textContent = `მდე: ${train.to}`;
//             document.getElementById("train-departure").textContent = `გასვლა: ${train.departure}`;
//             document.getElementById("train-arrival").textContent = `ჩასვლა: ${train.arrive}`;
//             document.getElementById("train-date").textContent = `📅 ${train.date}`;

//             // ვაგონების ინფორმაციის მიღება
//             fetch(`https://railway.stepprojects.ge/api/vagons?trainId=${trainId}`)
//                 .then(resp => resp.json())
//                 .then(vagons => {
//                     let limitedVagons = vagons.slice(0, 3);
//                     fillVagonOptions(limitedVagons);
//                 });
//         });

//     function fillVagonOptions(vagons) {
//         let select = document.getElementById("vagon-select");
//         select.innerHTML = '<option value="">-- აირჩიეთ --</option>'; // სელექტის გასუფთავება
//         vagons.forEach(vagon => {
//             let option = document.createElement("option");
//             option.value = vagon.id;
//             option.textContent = vagon.name;
//             option.className = "vagon-option";
//             select.appendChild(option);
//         });

//         select.addEventListener("change", (event) => {
//             let selectedVagon = vagons.find(v => v.id == event.target.value);
//             if (selectedVagon) {
//                 displaySeatInfo(selectedVagon);
//             }
//         });
//     }

//     function displaySeatInfo(vagon) {
//         let infoDiv = document.getElementById("vagon-info");
//         infoDiv.innerHTML = `<h2>${vagon.name} - სექციები</h2>`;

//         let seatSelect = document.createElement("select");
//         seatSelect.id = "seat-select";
//         seatSelect.multiple = true; // შესაძლებელი იქნება რამდენიმე სკამის არჩევა
//         seatSelect.size = 5; // მაქსიმუმ 5 სკამის ერთდროულად ჩვენება
//         infoDiv.appendChild(seatSelect);

//         vagon.seats.forEach(seat => {
//             let option = document.createElement("option");
//             option.value = seat.number;
//             option.textContent = `N: ${seat.number}, ფასი: ${seat.price}₾`;
//             option.className = "seat-option";
//             seatSelect.appendChild(option);
//         });

//         // თუ უკვე არსებობს არჩეული სკამების სია, გავასუფთავოთ
//         let existingInfo = document.getElementById("selected-seats-info");
//         if (!existingInfo) {
//             existingInfo = document.createElement("div");
//             existingInfo.id = "selected-seats-info";
//             infoDiv.appendChild(existingInfo);
//         }

//         // სკამების არჩევისას ვანახლებთ ინფოს
//         seatSelect.addEventListener("change", (event) => {
//             let selectedSeats = Array.from(event.target.selectedOptions).map(option => option.value);
//             updateSelectedInfo(vagon.name, selectedSeats);
//         });
//     }

//     function updateSelectedInfo(vagonName, selectedSeats) {
//         let selectedInfo = document.getElementById("selected-seats-info");

//         // გასუფთავება, რომ ძველი მონაცემები არ დაგროვდეს
//         selectedInfo.innerHTML = `<h3>🪑 არჩეული სკამ(ებ)ი:</h3>`;
//         selectedSeats.forEach(seat => {
//             let seatInfo = document.createElement("p");
//             seatInfo.textContent = `ვაგონი: ${vagonName}, სკამი: ${seat}`;
//             selectedInfo.appendChild(seatInfo);
//         });
//     }
// });









document.addEventListener("DOMContentLoaded", () => {
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
                    let limitedVagons = vagons.slice(0, 3);
                    fillVagonOptions(limitedVagons);
                });
        });

    function fillVagonOptions(vagons) {
        let select = document.getElementById("vagon-select");
        select.innerHTML = '<option value="">-- აირჩიეთ --</option>'; // სელექტის გასუფთავება
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

    function displaySeatInfo(vagon) {
        let infoDiv = document.getElementById("vagon-info");
        infoDiv.innerHTML = `<h2>${vagon.name} - სექციები</h2>`;

        let seatContainer = document.createElement("div");
        seatContainer.id = "seat-container";
        infoDiv.appendChild(seatContainer);

        let selectedSeats = new Set(); // შენახული არჩეული სკამები

        vagon.seats.forEach(seat => {
            let seatButton = document.createElement("button");
            seatButton.textContent = `N: ${seat.number} | ${seat.price}₾`;
            seatButton.className = "seat-button";
            seatButton.dataset.seatNumber = seat.number; // სკამის ნომრის შენახვა
            seatContainer.appendChild(seatButton);

            // სკამზე დაჭერისას
            seatButton.addEventListener("click", () => {
                let seatNumber = seatButton.dataset.seatNumber;
                if (selectedSeats.has(seatNumber)) {
                    selectedSeats.delete(seatNumber); // წაშლა თუ არჩეულია
                    seatButton.classList.remove("selected");
                } else {
                    selectedSeats.add(seatNumber); // დამატება თუ არჩეული არაა
                    seatButton.classList.add("selected");
                }
                updateSelectedInfo(vagon.name, selectedSeats);
            });
        });

        let existingInfo = document.getElementById("selected-seats-info");
        if (!existingInfo) {
            existingInfo = document.createElement("div");
            existingInfo.id = "selected-seats-info";
            infoDiv.appendChild(existingInfo);
        }
    }

    function updateSelectedInfo(vagonName, selectedSeats) {
        let selectedInfo = document.getElementById("selected-seats-info");

        selectedInfo.innerHTML = `<h3>🪑 არჩეული სკამ(ებ)ი:</h3>`;
        if (selectedSeats.size === 0) {
            selectedInfo.innerHTML += "<p>სკამი არ არის არჩეული.</p>";
            return;
        }

        selectedSeats.forEach(seat => {
            let seatInfo = document.createElement("p");
            seatInfo.textContent = `ვაგონი: ${vagonName}, სკამი: ${seat}`;
            selectedInfo.appendChild(seatInfo);
        });
    }
});
