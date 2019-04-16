const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/candyTypes/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/candyTypes`).then(e => e.json())
  }
}