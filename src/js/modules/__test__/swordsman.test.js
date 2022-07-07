import Swordsman from '../swordsman';

test('Swordsman', () => {
  const values = {
    name: 'Sergey',
    type: 'Swordsman',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  const result = new Swordsman('Sergey');

  expect(result).toEqual(values);
});