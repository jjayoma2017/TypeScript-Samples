const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 30];
const coke: Drink = ['brown', true, 40];
const tea: Drink = ['green', false, 0];
