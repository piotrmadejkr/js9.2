var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'],
     maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'],
     allNames = femaleNames.concat(maleNames),
     newName = 'Marian';
console.log(allNames);
if (allNames.indexOf(newName) === -1) {
    newName = allNames.push(newName);
};
console.log(allNames);
