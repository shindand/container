import {Team} from '../basic';

test('team', () => {
  let user = new Team('vasy');
  user.add('vasy');
  user.add('petr');
  user.add('petr5555');
  const result = user.toArray();

  expect(result).toEqual(["vasy", "petr", "petr5555"]);
});

test('team2', () => {
  let user = new Team('vasy');
  const result = user.addAll('koliy', 'masha', 'fekla', 'fekla');
  

  expect(result).toEqual(['koliy', 'masha', 'fekla']);
});