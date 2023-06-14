export class Team {
  constructor(name){
    this.name = name;
    this.members = new Set();
  }

  add(name) {
    if(this.members.has('name')) {
      throw new Error('Parameter is not a number!');
    }
    else {
      this.members.add(name);
    }
  }

  toArray(members) {
    let arr = Array.from(this.members);
    return arr;
  }
  
 addAll(...names){
    let users = names.reduce((target, item) => {
      this.members.add(item);
      return this.members;
  }, new Set);
  return Array.from(users);
  }
}
  
  let user = new Team('vasy');
  user.add('vasy');
  user.add('petr');
  user.add('petr');
  user.add('petr5555');
  user.add('petr');
  user.toArray();
  user.addAll('koliy', 'masha', 'fekla', 'fekla');