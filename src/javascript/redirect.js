document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#order-button").addEventListener('click', redirectorderPage)

    function redirectorderPage(){
        location.href = "pages/orderPage.html"
    }
})