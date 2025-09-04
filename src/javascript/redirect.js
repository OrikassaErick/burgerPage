document.addEventListener("DOMContentLoaded", () => {

    const redirect = [
        {id: "bacon", url: "../pages/bacon.html"},
        {id: "batataFrita", url: "../pages/batataFrita.html"},
        {id: "batatasRusticas", url: "../pages/batatasRusticas.html"},
        {id: "boloDeCenoura", url: "../pages/boloDeCenoura.html"},
        {id: "boloDeChocolate", url: "../pages/boloDeChocolate.html"},
        {id: "boloMousse", url: "../pages/boloMousse.html"},
        {id: "brocolis", url: "../pages/brocolis.html"},
        {id: "cafeGelado", url: "../pages/cafeGelado.html"},
        {id: "cafeLatteQuente", url: "../pages/cafeLatteQuente.html"},
        {id: "capuccinoTradicional", url: "../pages/capuccinoTradicional.html"},
        {id: "casquinha", url: "../pages/casquinha.html"},
        {id: "cheddar", url: "../pages/cheddar.html"},
        {id: "classicBacon", url: "../pages/classicBacon.html"},
        {id: "cogumelosFritos", url: "../pages/cogumelosFritos.html"},
        {id: "donutClassico", url: "../pages/donutClassico.html"},
        {id: "frangoFrito", url: "../pages/frangoFrito.html"},
        {id: "guacamole", url: "../pages/guacamole.html"},
        {id: "jalapeno", url: "../pages/jalapeno.html"},
        {id: "latteGelado", url: "../pages/latteGelado.html"},
        {id: "miniHamburgueres", url: "../pages/miniHamburgueres.html"},
        {id: "miniSalgados", url: "../pages/miniSalgados.html"},
        {id: "miniTorradas", url: "../pages/miniTorradas.html"},
        {id: "mojitoClassico", url: "../pages/mojitoClássico.html"},
        {id: "molhoBarbecue", url: "../pages/molhoBarbecue.html"},
        {id: "molhoCheddar", url: "../pages/molhoCheddar.html"},
        {id: "mushroom", url: "../pages/mushroom.html"},
        {id: "onion", url: "../pages/onion.html"},
        {id: "onionRings", url: "../pages/onionRings.html"},
        {id: "palitosDeQueijo", url: "../pages/palitosDeQueijo.html"},
        {id: "pasteizinhosAssados", url: "../pages/pasteizinhosAssados.html"},
        {id: "pinaColada", url: "../pages/pinaColada.html"},
        {id: "queijosVariados", url: "../pages/queijosVariados.html"},
        {id: "saladaColeslaw", url: "../pages/saladaColeslaw.html"},
        {id: "sangriaDeFrutas", url: "../pages/sangriaDeFrutas.html"},
        {id: "smoky", url: "../pages/smoky.html"},
        {id: "sucoDeLaranja", url: "../pages/sucoDeLaranja.html"},
        {id: "tartelete", url: "../pages/tartelete.html"},
        {id: "tortaDeNoz", url: "../pages/tortaDeNoz.html"},
        {id: "tortaDeMacaClassica", url: "../pages/tortaDeMacaClassica.html"},
        {id: "vinagreteDeAbacaxi", url: "../pages/vinagreteDeAbacaxi.html"},
    ] // Vou usar um array de objetos, pois caso seja necessário adicionar mais alguma informação no futuro, seja possível

    const secondTry = [
        {id: "bacon", url: "../src/pages/bacon.html"},
        {id: "cheddar", url: "../src/pages/cheddar.html"},
        {id: "classicBacon", url: "../src/pages/classicBacon.html"},
        {id: "guacamole", url: "../src/pages/guacamole.html"},
        {id: "jalapeno", url: "../src/pages/jalapeno.html"},
        {id: "mushroom", url: "../src/pages/mushroom.html"}
    ]

    for(let i = 0; i < redirect.length; i++){

        const search = document.querySelector(`#${redirect[i].id}`)
        if(search){
            search.addEventListener("click", () => {
                location.href = redirect[i].url
            })
        } else {

            for(let j = 0; j < secondTry.length; j++) {

                const research = document.querySelector(`#${secondTry[j].id}`)
                if(research){
                    research.addEventListener("click", () => {
                        location.href = secondTry[j].url
                    })
                }
            }
        }
    }
});
