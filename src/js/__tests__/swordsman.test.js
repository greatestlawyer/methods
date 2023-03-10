import Swordsman from '../swordsman';

test('test class Swordsman with valid value of name', () => {
  const swordsman = new Swordsman('swordsman');
  const expected = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(swordsman).toEqual(expected);
});

test('test class Swordsman with invalid value of name', () => {
  expect(() => new Swordsman('volandemort')).toThrow();
});

test('test class Swordsman with invalid value of type', () => {
  expect(() => new Swordsman('swordsman', 'Pacman')).toThrow();
});
