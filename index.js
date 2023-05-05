
const body = document.querySelector("body");

const colorGenerator = () => {       
    let a = (Math.random() * 255).toFixed(0)
    let b = (Math.random() * 255).toFixed(0)
    let c = (Math.random() * 255).toFixed(0)

    body.style.background = "rgb("+a+","+b+","+c+")"
    body.style.transition =  "0.5s"
}

setInterval(() => {
    colorGenerator()
    }, 2000);