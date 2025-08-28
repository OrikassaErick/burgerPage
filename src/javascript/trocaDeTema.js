
document.addEventListener('DOMContentLoaded', () => {
    let body = document.querySelector('body')
    let trilho = document.querySelector('.trilho')
     
    trilho.addEventListener('click', clicar)
    function clicar(){
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
    } 
})



