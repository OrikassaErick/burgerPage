document.addEventListener("DOMContentLoaded", () => {
    const mobileBtn = document.getElementById('mobile-btn');
    const mobileNavList = document.getElementById('mobile-nav-list');

    mobileBtn.addEventListener('click', clicar);
    function clicar(){
        mobileNavList.classList.toggle('show');
    }
});