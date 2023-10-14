var array = ["name", "John", "lastname", "Black", "age", "23"]
var objectSz = {}

for (var i = 0; i < array.length; i += 2) {
    var keys = array[i]
    var values = array[i + 1]
    objectSz[keys] = values
}

console.log(objectSz)


function middle(...numbers) {
    if (numbers.length === 0) {
        return 0
    }

    var sum = numbers.reduce((a, b) => a + b, 0)
    var middle_arif = sum / numbers.length

    return middle_arif
}

var middle_arif = middle(100, 350, 3000, 40, 50)
console.log(middle_arif)

function getType(value) {
    console.log(typeof value)
}


getType(false)
getType("NOBODY BELIEVES IN YOU! YOU HAVE LOST AGAIN & AGAIN & AGAIN, BUT YOU STILL LOOKING AT YOUR DREAM REVIEWING EVERYDAY AND SAYING YOURSELF IT IS NOT OVER UNTIL I WIN!!!")
getType(998)


