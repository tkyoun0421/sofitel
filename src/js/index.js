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

// 객실 추가

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


// 비디오 스크롤 애니메이션
const videoTop = window.pageYOffset - document.querySelector('.video').getBoundingClientRect().top;
const leftDoor = document.querySelector('.is-left');
const rightDoor = document.querySelector('.is-right');


window.addEventListener('scroll', videoScroll);


function videoScroll() {
  const scrolled = window.scrollY;
  if (scrolled > videoTop) {
    leftDoor.style.transform = `translate3d(${scrolled * -0.05}%, 0px, 0px)`;
    rightDoor.style.transform = `translate3d(${scrolled * 0.05}%, 0px, 0px)`;
    if (scrolled * 0.05 > 101) {
      leftDoor.classList.add('complete');
      rightDoor.classList.add('complete');
      leftDoor.style.transform = `translate3d(-101%, 0px, 0px)`;
      rightDoor.style.transform = `translate3d(101%, 0px, 0px)`;
    } else {
      leftDoor.classList.remove('complete');
      rightDoor.classList.remove('complete');
    }
  }
}

// 룸 소개 스크롤 애니메이션
const roomsItem = document.querySelectorAll('.rooms-item');


window.addEventListener('scroll', roomsScroll);


function roomsScroll() {
  const triggerBottom = window.innerHeight;

  roomsItem.forEach(function (box) {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}


function modalOpen() {
  sitemap.classList.add('modal-active');
}

function modalClose() {
  sitemap.classList.remove('modal-active');
}