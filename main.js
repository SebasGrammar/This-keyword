function log() {
    console.log(this)
}

function thisLog(argument) {
    console.log(argument)
}

let test = {
    name: "test",
    log   
}

const scriptArrow = () => console.log(this)

// https://stackblitz.com/edit/react-uln4zw