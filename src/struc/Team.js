class Team {
  constructor (name) {
    this.players = []
    this.name = name
    this.captain = ''
  }

  addPlayer (player) {
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

  setName (name) {
    this.name = name
  }

  setCaptain (player) {
    if (this.players.indexOf(player) > -1) {
      this.captain = player
      return this.captain
    } else return false
  }
}
module.exports = Team
