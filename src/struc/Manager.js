const Pug = require('./Pug')

class Manager {
  constructor () {
    this.pugs = {}
    this.bans = []
  }

  addPug (pug) {
    if (!(pug instanceof Pug)) return false
    this.pugs[pug.id] = pug
  }

  removePug (pug) {
    if (pug.id) pug = pug.id
    if (Object.keys(this.pugs).indexOf(pug) === -1) return false
    delete this.pugs[pug]
  }

  banPlayer (player) {
    if (this.bans.indexOf(player) > -1) return player
    this.bans.push(player)
    let playerIndex
    Object.values(this.pugs).forEach(pug => {
      playerIndex = pug.players.indexOf(player)
      if (playerIndex > -1) pug.players.splice(playerIndex, 1)

      pug.teams.forEach(team => {
        playerIndex = team.players.indexOf(player)
        if (playerIndex > -1) team.players.splice(playerIndex, 1)
        if (team.captain === player) team.captain = ''
      })
    })
    return this.bans
  }

  unbanPlayer (player) {
    let playerIndex = this.bans.indexOf(player)
    if (playerIndex > -1) this.bans.splice(playerIndex, 1)
    return this.bans
  }
}
module.exports = Manager
