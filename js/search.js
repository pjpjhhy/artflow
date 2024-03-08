document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const closeButton = document.getElementById('closeButton');
    const menuContainer = document.querySelector('.tog-menu');
    const body = document.body;

    let scrollDisabled = false;

    function toggleMenu() {
        menuContainer.style.display = menuContainer.style.display === 'none' ? 'flex' : 'none';
        body.classList.toggle('menu-opened');

        // 스크롤을 막거나 허용합니다.
        document.documentElement.style.overflow = scrollDisabled ? 'hidden' : 'auto';
        scrollDisabled = !scrollDisabled;
    }

    toggleButton.addEventListener('click', toggleMenu);

    closeButton.addEventListener('click', function () {
        menuContainer.style.display = 'none';
        body.classList.toggle('menu-opened');
        scrollDisabled = true;
        document.documentElement.style.overflow = 'auto';
    });

    // 페이지가 로드된 후에 한 번만 클릭하여 초기화
    toggleButton.click();

    // 새로고침 시 초기 스크롤 상태를 설정
    window.addEventListener('beforeunload', function () {
        scrollDisabled = true;
    });
});



// 검색어 삭제
document.querySelectorAll('.search-area input').forEach(function(input) {
    var btn = input.parentNode.querySelector('.btnClear');
    btn.style.display = 'none';

    input.addEventListener('input', function() {
        btn.style.display = input.value.trim() !== "" ? 'block' : 'none';
    });

    btn.addEventListener('click', function(e) {
        input.value = "";
        btn.style.display = 'none';
        e.preventDefault();
    });
});

