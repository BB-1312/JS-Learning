// dataValidator.js

/**
 * High-level function to validate an object against a list of required keys.
 * This is useful for checking the integrity of incoming data (e.g., from an API or form).
 *
 * @param {Object} data - The object to validate.
 * @param {Array<string>} requiredKeys - An array of strings representing the keys that must exist in the object.
 * @returns {{isValid: boolean, missingKeys: Array<string>}} - An object containing the validation result.
 */
function validateRequiredFields(data, requiredKeys) {
    const missingKeys = [];

    // Check if data is a non-null object
    if (typeof data !== 'object' || data === null) {
        return { 
            isValid: false, 
            missingKeys: requiredKeys.concat(['Data is not an object or is null']) 
        };
    }

    // Use a high-level array method to check for missing keys
    requiredKeys.forEach(key => {
        // Check for existence of the key and that its value is not undefined/null
        if (!(key in data) || data[key] === null || data[key] === undefined) {
            missingKeys.push(key);
        }
    });

    const isValid = missingKeys.length === 0;

    if (!isValid) {
        console.warn('Validation failed. Missing or invalid keys:', missingKeys);
    } else {
        console.info('Validation successful.');
    }

    return { isValid, missingKeys };
}

// Example usage
/*
const productSchema = ['id', 'name', 'price', 'inStock'];
const validProduct = { id: 101, name: 'Laptop', price: 1200.00, inStock: true };
const invalidProduct = { id: 102, price: 50.00, inStock: 5 }; // Missing 'name'

const result1 = validateRequiredFields(validProduct, productSchema);
console.log('Valid Product Check:', result1.isValid); // true

const result2 = validateRequiredFields(invalidProduct, productSchema);
console.log('Invalid Product Check:', result2.isValid, 'Missing:', result2.missingKeys); // false, Missing: ['name']
*/

export { validateRequiredFields };
