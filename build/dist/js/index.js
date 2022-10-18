const hambuger = document.querySelector(".gnb-bars");
const sitemap = document.querySelector(".sitemap");
const sitemapClose = document.querySelector(".sitemap .close");
const searchItem = document.querySelectorAll(".search-item");
const searchWrap = document.querySelector(".search-wrap");
const body = document.querySelector("body");
const addRoom = document.querySelector(".add-room");
const personItem = document.querySelector(".person-item");
const personList = document.querySelector(".person-list");
const deleteRoom = document.querySelectorAll(".delete-room");
const roomNoite = document.querySelector(".room-notice");

// 모달창 열기
hambuger.addEventListener('click', modalOpen);

// 모달창 닫기
sitemapClose.addEventListener('click', modalClose);

// 호텔 예약 열기
for (let i = 0; i < searchItem.length; i++) {
  searchItem[i].addEventListener('click', function (e) {
    searchWrap.classList.toggle('search-active');
  });
}

// 호텔 예약 닫기

let j = 1;
addRoom.addEventListener('click', function () {
  j++;
  if (j <= 3) {
    let template = `
      <div class="person-subtitle">객실 ${j}</div>
      <div class="person-count">
        <div class="adult">
          <button class="decrease"><span>제외</span><i class="fa-solid fa-minus"></i></button>
          <span class="count-view">성인 1</span>
          <button class="increase"><span>추가</span><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="child">
          <button class="decrease"><span>제외</span><i class="fa-solid fa-minus"></i></button>
          <span class="count-view">어린이 0</span>
          <button class="increase"><span>추가</span><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="delete-room"></button>
    `
    const newLi = document.createElement('li');
    newLi.innerHTML = template;
    personList.append(newLi);
    newLi.classList.add('person-item');
    addRoom.style.display = 'block';
    roomNoite.style.display = 'none';
  }
  if (j == 3) {
    j = 3;
    addRoom.style.display = 'none';
    roomNoite.style.display = 'block';
  }
});

for (let i = 0; i < deleteRoom.length; i++) {
  deleteRoom[i].addEventListener('click', function () {
    console.log('#');
  });
}

// 달력창
class DatePicker {
  monthData = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  #calenderDate = {
    data: '',
    date: 0,
    month: 0,
    year: 0,
  };

  selectedDate = {
    data: '',
    date: 0,
    month: 0,
    year: 0,
  };

  dataPickerEl;
  calanderEl;
  calanderMonthPrevEl
  calanderMonthNextEl
  monthContentPrevEl;
  monthContentNextEl
  prevBtnEl;
  nextBtnEl;
  calanderDatesEl;

  constructor() {
    this.initCalendarDate();
    this.assignElement();
  }

  initCalendarDate() {
    const data = new Date();
    const date = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();
    this.#calenderDate = {
      data,
      date,
      month,
      year,
    }
  }

  assignElement() {
    this.dataPickerEl = document.getElementById('datePicker');
    this.calanderEl = this.dataPickerEl.querySelector('#calander');
    this.calanderMonthPrevEl = this.calanderEl.querySelector('#monthPrev');
    this.calanderMonthNextEl = this.calanderEl.querySelector('#monthNext');
    this.monthContentPrevEl = this.calanderMonthPrevEl.querySelector('#contentPrev');
    this.monthContentNextEl = this.calanderMonthNextEl.querySelector('#contentNext');
    this.prevBtnEl = this.calanderMonthPrevEl.querySelector('#prevMonth');
    this.nextBtnEl = this.calanderMonthNextEl.querySelector('#nextMonth');
    this.calanderDatesEl = this.calanderEl.querySelector('#dates');
  }

  updateMonth() {
    this.monthContentPrevEl.textContent = `12121`
  }
}

new DatePicker();

function modalOpen() {
  sitemap.classList.add('modal-active');
}

function modalClose() {
  sitemap.classList.remove('modal-active');
}