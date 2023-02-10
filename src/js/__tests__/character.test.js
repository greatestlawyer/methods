import Character from '../character';

test('test class Character with valid values of property', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('test class Character with invalid value of name', () => {
  expect(() => new Character('volandemort', 'Daemon', 40, 20)).toThrow();
});

test('test class Character with invalid value of type', () => {
  expect(() => new Character('voland', 'Pacman', 40, 20)).toThrow();
});

test('test method levelUp with valid value of health', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  character.levelUp();
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 100,
    level: 2,
    attack: 48,
    defence: 24,
  };

  expect(character).toEqual(expected);
});

test('test method levelUp with invalid value of health', () => {
  expect(() => {
    const character = new Character('hero', 'Bowerman', 40, 20);
    character.health = 0;
    character.levelUp();
    return character;
  }).toThrow();
});

test('test method damage with value of health > 0', () => { // не знаю почему, но этот тест как будто не учитывается в покрытии, т.к. мне пишет, что 31 строка в файле character.js не покрыта
  const character = new Character('hero', 'Bowerman', 40, 20);
  character.damage(10);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 92,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});

test('test method damage with such value of health, when result health < 0', () => {
  const character = new Character('hero', 'Bowerman', 40, 20);
  character.health = 3;
  character.damage(10);
  const expected = {
    name: 'hero',
    type: 'Bowerman',
    health: 0,
    level: 1,
    attack: 40,
    defence: 20,
  };

  expect(character).toEqual(expected);
});
