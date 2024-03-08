class Dragon{
  constructor(name, color){
    this.name = name
    this.color = color
  }

  breathesFire(){
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons){
    let dragonNames = []
    for (let i = 0; i < dragons.length; i++ ){
        let dragon = dragons[i]
        dragonNames.push(dragon.name)
    }
    return dragonNames
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
