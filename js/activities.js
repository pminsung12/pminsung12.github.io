document.addEventListener('DOMContentLoaded', function () {
  const activityLinks = document.querySelectorAll('.activity-link');
  const sections = document.querySelectorAll('section');
  const homeLink = document.querySelector('.home-link');

  activityLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');

      if (sectionId === 'home') {
        // 홈 버튼 클릭 시 홈으로 이동
        window.location.href = '/';
      } else {
        // 다른 메뉴 항목 클릭 시 해당 섹션 활성화
        sections.forEach(function (section) {
          section.classList.remove('active');
        });

        document.getElementById(sectionId).classList.add('active');
      }
    });
  });

  // 홈 버튼 클릭 시 홈으로 이동
  homeLink.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = '/';
  });
});