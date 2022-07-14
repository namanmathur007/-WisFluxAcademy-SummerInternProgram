const animation = {
    transform: "rotate(360deg)"
}

const animationsConfig = {
    duration: 1000,
    iterations: 2,
    fill: 'forwards'
}

const img1 = document.querySelector("#scan")
const img2 = document.querySelector("#scan2")
const img3 = document.querySelector("#scan3")


const start = async ()=> {

    let anim1 = img1.animate(animation, animationsConfig)
    let stop1= await anim1.finished
    let anim2 = await img2.animate(animation, animationsConfig)
    let stop2= await anim2.finished
    let anim3 = img3.animate(animation, animationsConfig)
    
}
start();