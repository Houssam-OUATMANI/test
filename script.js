const nom = 'Doe'
const prenom = "Jean Neymar"
const nomEtPrenom = `Nom: ${nom} Prenom: ${prenom}`
console.log(nom.length)
console.log(nom.toUpperCase())
console.log(nom.toLowerCase())
console.log( nom.replace("D","aze "))

console.log(prenom[prenom.length - 1])
//"salut" === "Salut"

function formatWord() {
    const mot = prompt("Entrez un mot")
    alert(mot.replace(mot[0], mot[0].toUpperCase()))
}
// salut === tulas
const salut = "salut"
// ** Decouper en char
const salutReversed = salut.split("").reverse().join("")
console.table(salutReversed) // ** [t,u,l,a,s]


