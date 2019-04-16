const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/individualCandies/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/individualCandies`).then(e => e.json())
  }
}