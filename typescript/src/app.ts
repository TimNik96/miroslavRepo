// let prom = 'str'
// console.log(prom)

function maxValue(...niz: number[]):number {
    return niz.sort((a, b) => a - b)[0]
}

let niz = [1,2,3]
// 2 3 4 5 6 3

// const niz:number[] = [] 

niz.push()

niz.splice(0, 2, 2, 3, 4, 5, 6)

maxValue(1, 2, 3, 20, 300, 400)

let obj = {
    name: 'Uros',
    age: 30,
    hobby: ['basket', 'fudbal']
}


let obj1 = {
    ...obj,
    hobby: [...obj.hobby, ],
    money: 'none'
}


// type: 'djak'



// nesto in interface
// if('hobby' in obj)
