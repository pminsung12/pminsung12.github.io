const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
  item.addEventListener('click', function () {
    navItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

const profileLink = document.querySelector('.profile-link');
const homeLink = document.querySelector('.home-link');
const activitiesSection = document.querySelector('.left-content');
const personalInfoSection = document.querySelector('.right-content');

profileLink.addEventListener('click', function (e) {
  e.preventDefault();
  activitiesSection.style.display = 'none';
  personalInfoSection.style.display = 'block';
  guestbookSection.style.display = 'none';
});

homeLink.addEventListener('click', function (e) {
  e.preventDefault();
  activitiesSection.style.display = 'block';
  personalInfoSection.style.display = 'block';
  guestbookSection.style.display = 'none';
});

const guestbookLink = document.querySelector('.guestbook-link');
const guestbookSection = document.createElement('section');
guestbookSection.classList.add('guestbook');

const guestbookForm = document.createElement('form');
guestbookForm.innerHTML = `
  <h2>방명록 작성</h2>
  <input type="text" name="nickname" placeholder="닉네임" required>
  <textarea name="content" placeholder="내용" required></textarea>
  <button type="submit">등록</button>
`;

const guestbookList = document.createElement('ul');
guestbookList.classList.add('guestbook-list');

guestbookSection.appendChild(guestbookForm);
guestbookSection.appendChild(guestbookList);

guestbookLink.addEventListener('click', function (e) {
  e.preventDefault();
  activitiesSection.style.display = 'none';
  personalInfoSection.style.display = 'none';
  guestbookSection.style.display = 'block';
  document.querySelector('main').appendChild(guestbookSection);
});

guestbookForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const nickname = e.target.elements.nickname.value;
  const content = e.target.elements.content.value;

  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <strong>${nickname}</strong>
    <p>${content}</p>
  `;

  guestbookList.appendChild(listItem);
  e.target.reset();
});