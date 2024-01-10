const findTheOldest = require('./oldestPerson');

test('It should be the oldest person on the list.', () => {
    // Call the function
    const result = findTheOldest();
  
    // Make assertions
    expect(result).toBe('Jannett');
  });