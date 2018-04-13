const Team = require('./Team')
const CONSTANTS = require('../const')

class Pug {
  constructor (game) {
    this.id = Date.now()
    this.game = game
    this.players = []
    this.teams = []

    for (let i = 0; i < this.game.teamCount; i++) {
      this.teams.push(new Team(`Team ${CONSTANTS.numbers[i]}`))
    }

    return this.id
  }

  addPlayer (player) {
    if (this.players.length === this.game.teamCount * this.game.teamSize) return false
    if (this.players.indexOf(player) === -1) {
      this.players.push(player)
      return this.players
    } else return false
  }

  removePlayer (player) {
    let playerIndex = this.players.indexOf(player)
    if (playerIndex > -1) {
      this.players.splice(playerIndex, 1)
      return this.players
    } else return false
  }

  chooseCaptains () {
    if (this.players.length < this.game.teamCount * this.game.teamSize) return false
    else {
      let captains = this.teams.map(team => team.captain)
      let captainIndex
      for (let i = 0; i < this.game.teamCount; i++) {
        do {
          captainIndex = Math.floor(Math.random() * (this.players.length - 1))
        } while (captains.indexOf(this.players[captainIndex]) === -1)
        this.teams[i].addPlayer(this.players[captainIndex])
        this.teams[i].setCaptain(this.players[captainIndex])
      }
    }
    return this.teams.map(team => team.captain)
  }
}
module.exports = Pug
