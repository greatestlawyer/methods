import Daemon from '../daemon';

test('test class Daemon with valid value of name', () => {
  const daemon = new Daemon('daemon');
  const expected = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(daemon).toEqual(expected);
});

test('test class Daemon with invalid value of name', () => {
  expect(() => new Daemon('volandemort')).toThrow();
});

test('test class Daemon with invalid value of type', () => {
  expect(() => new Daemon('daemon', 'Pacman')).toThrow();
});
