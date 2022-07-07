import Zombie from '../zombie';

test('Zombie', () => {
  const values = {
    name: 'Albert',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };

  const result = new Zombie('Albert');

  expect(result).toEqual(values);
});