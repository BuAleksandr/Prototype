import Undead from '../undead';

test('Undead', () => {
  const values = {
    name: 'Pavel',
    type: 'Undead',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };

  const result = new Undead('Pavel');

  expect(result).toEqual(values);
});