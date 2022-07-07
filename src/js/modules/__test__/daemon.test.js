import Daemon from '../daemon';

test('Daemon', () => {
  const values = {
    name: 'Oleg',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };

  const result = new Daemon('Oleg');

  expect(result).toEqual(values);
});