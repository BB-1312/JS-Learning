// arrayTransformer.js

/**
 * Transforms an array of user objects by filtering, mapping, and reducing
 * to calculate the average age of active female users.
 * This demonstrates a declarative, functional approach to data processing.
 *
 * @param {Array<Object>} users - An array of user objects, each having {id, name, age, isActive, gender}.
 * @returns {number} - The average age of 'active' and 'female' users, or 0 if none are found.
 */
function calculateAverageAgeOfActiveFemales(users) {
    // 1. High-level Filter: Select only 'active' and 'female' users
    const activeFemales = users.filter(user => user.isActive && user.gender === 'female');

    if (activeFemales.length === 0) {
        return 0;
    }

    // 2. High-level Map & Reduce: Calculate the sum of their ages
    const totalAge = activeFemales.reduce((sum, user) => sum + user.age, 0);

    // 3. Calculate the average
    const averageAge = totalAge / activeFemales.length;

    return parseFloat(averageAge.toFixed(2)); // Round to 2 decimal places
}

// Example usage
/*
const userData = [
    { id: 1, name: 'Alice', age: 30, isActive: true, gender: 'female' },
    { id: 2, name: 'Bob', age: 25, isActive: false, gender: 'male' },
    { id: 3, name: 'Clara', age: 40, isActive: true, gender: 'female' },
    { id: 4, name: 'David', age: 35, isActive: true, gender: 'male' },
    { id: 5, name: 'Eve', age: 22, isActive: true, gender: 'female' },
];

const avgAge = calculateAverageAgeOfActiveFemales(userData);
console.log(`Average age of active female users: ${avgAge}`); // Expected: (30 + 40 + 22) / 3 = 30.67
*/

export { calculateAverageAgeOfActiveFemales };
