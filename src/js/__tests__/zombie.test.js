import Zombie from '../zombie';

test('test class Zombie with valid value of name', () => {
  const zombie = new Zombie('zombie');
  const expected = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(zombie).toEqual(expected);
});

test('test class Zombie with invalid value of name', () => {
  expect(() => new Zombie('volandemort')).toThrow();
});

test('test class Zombie with invalid value of type', () => {
  expect(() => new Zombie('zombie', 'Pacman')).toThrow();
});
