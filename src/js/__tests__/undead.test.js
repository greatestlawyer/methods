import Undead from '../undead';

test('test class Undead with valid value of name', () => {
  const undead = new Undead('undead');
  const expected = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(undead).toEqual(expected);
});

test('test class Undead with invalid value of name', () => {
  expect(() => new Undead('volandemort')).toThrow();
});

test('test class Undead with invalid value of type', () => {
  expect(() => new Undead('undead', 'Pacman')).toThrow();
});
