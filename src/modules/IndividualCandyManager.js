const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/individualCandies/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/individualCandies`).then(e => e.json())
  },
  postItem(object) {
    return fetch(`${remoteURL}/individualCandies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(object)
    }).then(data => data.json())
  }
}