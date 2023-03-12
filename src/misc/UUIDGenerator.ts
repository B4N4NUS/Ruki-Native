var math = require('random-seed').create("12");

export default function getRandomID() {
    return Math.floor(math.random() * 10000000)
}