var nameVar = 'Andrea';
nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';

console.log('nameConst', nameConst);

function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();


//Block scoping
const fullName = 'Andrea S';
let firstName = 'blah';

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);