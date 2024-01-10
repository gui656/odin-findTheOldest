const findTheOldest = function() {
    const people = [
        {
            firstName: 'Albert',
            birthYear: 1942,
            deathYear: 2018
        },

        {
            firstName: 'Ellen',
            birthYear: 1962,
            deathYear: 2026
        },

        {
            firstName: 'Wilfred',
            birthYear: 1903,
            deathYear: 1957
        },

        {
            firstName: 'Johnny',
            birthYear: 1984,
            deathYear: 2053
        },

        {
            firstName: 'King Henry the Second',
            birthYear: 1354,
            deathYear: 1403
        },

        {
            firstName: 'Sheik Al-Habbar',
            birthYear: 1442,
            deathYear: 1516
        }
    ]

    const birthYears = people.map(birthDate => birthDate.birthYear);

    const deathDate = people.map(deathTime => deathTime.deathYear);

    let peopleAge = [];

    for(let i = 0; i < birthYears.length; i++){
        peopleAge[i] = deathDate[i] - birthYears[i]
    }

    const maxAge = Math.max(...peopleAge)

    return maxAge
};

console.log(findTheOldest())

// Do not edit below this line
module.exports = findTheOldest;