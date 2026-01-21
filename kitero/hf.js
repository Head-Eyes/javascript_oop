function Tool(name) {
    this.name = name
    this.usedTimes = 0
}

Tool.prototype.use = function () {
    this.usedTimes++
}

function Knife(name) {
    Tool.call(this, name)
    this.sharp = true
}

Object.setPrototypeOf(Knife.prototype, Tool.prototype)

Knife.prototype.cut = function () {
    this.usedTimes++
}

const tool1 = new Tool('Eszköz')
const knife1 = new Knife('Kés')

knife1.use()
knife1.cut()

console.log(tool1)
console.log(knife1)


class Plate {
    constructor(color) {
        this.color = color
    }
}

class SmallPlate extends Plate {
    constructor(color) {
        super(color)
        this.size = 'small'
    }
}

const plate1 = new Plate('fehér')
const plate2 = new SmallPlate('kék')

console.log(plate1)
console.log(plate2)
