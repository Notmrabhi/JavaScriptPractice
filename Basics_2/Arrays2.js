const Marvel_Heros = ["ironman", "thor", "spiderman"]
const Dc_Heros = ["batman", "flash", "Superman"]

// Marvel_Heros.push(...Dc_Heros) //here we have spread dc_heros in marvelheros array

// console.log(Marvel_Heros)

const all_heros = [...Dc_Heros, ...Marvel_Heros]
console.log(all_heros)