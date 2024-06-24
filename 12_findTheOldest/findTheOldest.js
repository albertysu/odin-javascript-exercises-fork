const findTheOldest = function(people) {
    return people.reduce(compare);
};

function compare(oldest, currentPerson) {
    if (age(oldest) > age(currentPerson)) return oldest;
    return currentPerson;
}

function age(person) {
    if ("yearOfDeath" in person) return person.yearOfDeath - person.yearOfBirth;
    return new Date().getFullYear() - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
