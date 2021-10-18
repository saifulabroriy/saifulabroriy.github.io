window.addEventListener("scroll", function(){
    let wscroll = this.scrollY

    let hero = document.querySelector("#hero")
    let about = document.querySelector("#about")
    let skills = document.querySelector("#skills")
    let contact = document.querySelector("#contact")
    
    if (wscroll > hero.offsetTop - 100){
        let sosmed = document.querySelectorAll("#hero .sosmed")
        let foto = document.querySelector("#hero .foto")
        let wrapper = document.querySelector("#hero .wrapper")
        foto.classList.add("muncul")
        wrapper.classList.add("muncul")
        sosmed.forEach((item, i) => {
            setTimeout(function(){
                item.classList.add("muncul")
            }, 300 * (i + 1))
        })
    }

    if (wscroll > about.offsetTop - 150){
        let h1 = document.querySelector("#about h1")
        let p = document.querySelectorAll("#about p")
        h1.classList.add("muncul")
        p.forEach((item, i) => {
            setTimeout(function(){
                item.classList.add("muncul")
            }, 600 * (i + 1))
        })
    }

    if (wscroll > skills.offsetTop - 150){
        let h1 = document.querySelector("#skills h1")
        let cards = document.querySelectorAll("#skills .card")
        h1.classList.add("muncul")
        cards.forEach((card, i) => {
            setTimeout(function(){
                card.classList.add("muncul")
            }, 500 * (i + 1))
        })
    }

    if (wscroll > contact.offsetTop - 150){
        let h1 = document.querySelector("#contact h1")
        let image = document.querySelector("#contact img")
        let form = document.querySelector("#contact form")
        h1.classList.add("muncul")
        image.classList.add("muncul")
        form.classList.add("muncul")
    }

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        let h1 = document.querySelector("#contact h1")
        let image = document.querySelector("#contact img")
        let form = document.querySelector("#contact form")
        console.log(form)
        h1.classList.add("muncul")
        image.classList.add("muncul")
        form.classList.add("muncul")
    }  
})