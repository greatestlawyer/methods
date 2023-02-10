import Bowerman from '../bowerman';

test('test class Bowerman with valid value of name', () => {
  const bowerman = new Bowerman('bowerman');
  const expected = {
    name: 'bowerman',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(bowerman).toEqual(expected);
});

test('test class Bowerman with invalid value of name', () => {
  expect(() => new Bowerman('volandemort')).toThrow();
});

test('test class Bowerman with invalid value of type', () => {
  expect(() => new Bowerman('bowerman', 'Pacman')).toThrow();
});
