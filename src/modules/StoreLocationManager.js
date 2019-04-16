const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/storeLocations/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/storeLocations`).then(e => e.json())
  }
}