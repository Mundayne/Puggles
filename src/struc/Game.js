class Game {
  constructor (args = {}) {
    if (!args.teamSize) throw new Error('Must specify team size!')
    this.teamCount = args.teamCount || 2
    this.teamSize = args.teamSize
  }
}
module.exports = Game
