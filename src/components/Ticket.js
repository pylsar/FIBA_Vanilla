// const form = document.querySelecguestr(".form");
const formHome = document.querySelector(".form__input--home");
const formGuest = document.querySelector(".form__input--guest");
const formDate = document.querySelector(".form__date");
const dropDownHome = document.querySelector(".form__dropdown--home");
const dropDownGuest = document.querySelector(".form__dropdown--guest");
const btn = document.querySelector(".form__btn");
const ticket = document.querySelector(".ticket");
const ticketDate = document.querySelector(".ticket__date");
const ticketTitle = document.querySelector(".ticket__title");

const comands = [
  "CSKA",
  "Himki",
  "Barcelona",
  "Real",
  "Milan",
  "Zhalgiris",
  "Panatinaicos",
  "Bavaria",
  "Juventus",
  "Valenciya"
];

// поле откуда
formHome.addEventListener("input", () => {
  dropDownHome.textContent = "";

  if (formHome.value !== "") {
    const filtered = comands.filter((comand) => {
      return comand.toLowerCase().includes(formHome.value.toLowerCase());
    });
    filtered.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list");
      li.textContent = item;
      dropDownHome.append(li);
    });
  }
});
// обрабатываем клик на списк дропдаун из поля откуда
dropDownHome.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "li") {
    formHome.value = event.target.textContent;
    dropDownHome.textContent = "";
  }
  compareComands();
});

// поле куда
formGuest.addEventListener("input", () => {
  dropDownGuest.textContent = "";

  if (formGuest.value !== "") {
    const filtered = comands.filter((comand) => {
      return comand.toLowerCase().includes(formGuest.value.toLowerCase());
    });
    filtered.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("dropdown__list");
      li.textContent = item;
      dropDownGuest.append(li);
    });
  }
});

// обрабатываем клик на списк дропдаун из поля откуда
dropDownGuest.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "li") {
    formGuest.value = event.target.textContent;
    dropDownGuest.textContent = "";
  }
  compareComands();
});

//домашняя команда != гостевой команде
const compareComands = () => {
  if (formGuest.value === formHome.value) {
    btn.classList.add("badTicket");
  } else {
    btn.classList.remove("badTicket");
  }
};

// разметка билета
btn.addEventListener("click", (event) => {
  event.preventDefault();
  ticket.classList.add("showTicket");
  ticketTitle.textContent = "";
  ticketDate.textContent = "";
  ticketTitle.append(`${formHome.value} vs ${formGuest.value}`);
  ticketDate.append(`дата матча: ${formDate.value}`);
});
