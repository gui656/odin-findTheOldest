const findTheOldest = require('./oldestPerson');

test('It should be the oldest person on the list. Currently 76.', () => {
    // Call the function
    const result = findTheOldest();
  
    // Make assertions
    expect(result).toBe('Jannett');
  });