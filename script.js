const key = "nUDCTAvGRLQb8JcPXqO4JbD3KM4t7iKP0Pjd5GCiFNgFlS49qj0sx27T"
const hamsterUrl = "https://api.pexels.com/v1/search?query=hamsters"
const tigerUrl = "https://api.pexels.com/v1/search?query=tigers"
const img = document.querySelectorAll(".card img")
const tastoEdit = document.querySelectorAll(".card button")

const getHamster = () => {
  fetch(hamsterUrl, {
    headers: {
      Authorization: key,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Response NON ok")
      }
    })
    .then((data) => {
      console.log(data)
      for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("src", data.photos[i].src.medium)
      }
    })
    .catch((error) => {
      console.log("ERRORE NELLA FETCH", error)
    })
}

const getTigers = () => {
  fetch(tigerUrl, {
    headers: {
      Authorization: key,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Response NON ok")
      }
    })
    .then((data) => {
      console.log(data)
      for (let i = 0; i < img.length; i++) {
        img[i].setAttribute("src", data.photos[i].src.medium)
      }
    })
    .catch((error) => {
      console.log("ERRORE NELLA FETCH", error)
    })
}
