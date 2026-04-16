const allTheParameters = new URLSearchParams(location.search)
const idImmagine = allTheParameters.get("id")

const prendiDettagliFoto = () => {
  const key = "nUDCTAvGRLQb8JcPXqO4JbD3KM4t7iKP0Pjd5GCiFNgFlS49qj0sx27T"
  const urlGenerico = "https://api.pexels.com/v1/search?query="
  ;(fetch(urlGenerico + idImmagine),
  {
    headers: {
      Authorization: key,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Errore nel recupero dettaglio immagine")
      }
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log("errore nella fatch", error)
    })
}
