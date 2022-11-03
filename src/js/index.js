// sub-nav 열기
const hoverNavLi = document.querySelectorAll('.nav-title');
const hoverNavLiA = document.querySelectorAll('.nav-title > a');
const subNavWrap = document.querySelector('.sub-nav-wrap');
const subNav = document.querySelectorAll('.sub-nav');

addClassSubNav();
removeClassSubNav();

function addClassSubNav() {
  for (let i = 0; i < hoverNavLi.length; i++) {
    hoverNavLi[i].addEventListener('mouseover', function(event) {
      subNav[i].classList.add('on');
      subNavWrap.classList.add('on');
      hoverNavLi[i].classList.add('on');
      hoverNavLiA[i].classList.add('on');  
      if (event.target.classList.contains('on')) {
        subNav[i].classList.add('on');
        subNavWrap.classList.add('on');
        hoverNavLiA[i].classList.add('on');
      }
    });
  }
}

function removeClassSubNav() {
  for (let i = 0; i < hoverNavLi.length; i++) {
    hoverNavLi[i].addEventListener('mouseout', function() {
      subNav[i].classList.remove('on');
      subNavWrap.classList.remove('on');
      hoverNavLi[i].classList.remove('on');
      hoverNavLiA[i].classList.remove('on');
    });
  }
}
// 모달창 열기
const hambuger = document.querySelector('.gnb-bars');
const sitemap = document.querySelector('.sitemap');
const sitemapBg = document.querySelector('.sitemap-bg')


hambuger.addEventListener('click', openModal);


function openModal() {
  sitemap.classList.add('active');
  sitemapBg.classList.add('active');
}


// 모달창 닫기
const sitemapClose = document.querySelector('.sitemap .close');


sitemapClose.addEventListener('click', closeModal);
sitemapBg.addEventListener('click', closeModal);

function closeModal() {
  sitemap.classList.remove('active');
  sitemapBg.classList.remove('active');
}


// 호텔 예약 열기
const searchItem = document.querySelectorAll(".search-item");
const searchWrap = document.querySelector(".search-wrap");


for (let i = 0; i < searchItem.length; i++) {
  searchItem[i].addEventListener('click', function () {
    searchWrap.classList.toggle('search-active');
  });
}


// 객실 추가
const addRoom = document.querySelector(".add-room");


addRoom.addEventListener('click', makeTemplate);


let clickAddRoom = 1;
function makeTemplate() {
  const personList = document.querySelector(".person-list");
  const roomNotice = document.querySelector(".room-notice");
  clickAddRoom++;
  if (clickAddRoom <= 3) {
    let template = `
      <div class="person-subtitle">객실 ${clickAddRoom}</div>
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
    roomNotice.style.display = 'none';
  }
  if (clickAddRoom == 3) {
    clickAddRoom = 3;
    addRoom.style.display = 'none';
    roomNotice.style.display = 'block';
  }
}


// 비디오 스크롤 애니메이션
window.addEventListener('scroll', scrollVideo);


function scrollVideo() {
  const video = document.querySelector('.video');
  const CHANGE_PERCENT = 0.134;
  const videoTop = parseInt(video.offsetTop - video.clientHeight);
  const videoBottom = parseInt(videoTop + video.clientHeight);
  const leftDoor = document.querySelector('.is-left');
  const rightDoor = document.querySelector('.is-right');
  const scrolled = parseInt(window.scrollY);
  const scrollCount = scrolled - videoTop;



  if (scrolled > videoTop) {
    leftDoor.style.transform = `translate3d(${scrollCount * -CHANGE_PERCENT}%, 0px, 0px)`;
    rightDoor.style.transform = `translate3d(${scrollCount * CHANGE_PERCENT}%, 0px, 0px)`;
    if (scrolled > videoBottom) {
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
window.addEventListener('scroll', scrollRooms);


function scrollRooms() {
  const roomsItem = document.querySelectorAll('.rooms-item');
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
