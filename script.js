const key = "nUDCTAvGRLQb8JcPXqO4JbD3KM4t7iKP0Pjd5GCiFNgFlS49qj0sx27T"
const urlGenerico = "https://api.pexels.com/v1/search?query="
const img = document.querySelectorAll(".card img")
const tastoEdit = document.querySelectorAll(".btn-group button:nth-child(2)")
const mins = document.querySelectorAll("small")
const searchInput = document.querySelector(".form-control")

const getHamster = () => {
  fetch(urlGenerico + "hamsters", {
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
        mins[i].innerText = data.photos[i].id

        img[i].addEventListener("click", () => {
          window.open(
            `./immagine-singola.html?id=${data.photos[i].id}`,
            "_blank",
          )
        })
      }
    })
    .catch((error) => {
      console.log("ERRORE NELLA FETCH", error)
    })
}
const getTigers = () => {
  fetch(urlGenerico + "tigers", {
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
        mins[i].innerText = data.photos[i].id

        img[i].addEventListener("click", () => {
          window.open(
            `./immagine-singola.html?id=${data.photos[i].id}`,
            "_blank",
          )
        })
      }
    })
    .catch((error) => {
      console.log("ERRORE NELLA FETCH", error)
    })
}

const cambiaTastoEdit = () => {
  for (let i = 0; i < tastoEdit.length; i++) {
    tastoEdit[i].innerHTML = "Hide"
    tastoEdit[i].addEventListener("click", function () {
      this.closest(".card").remove()
    })
  }
}
cambiaTastoEdit()

const imgPersonalizzate = () => {
  fetch(urlGenerico + searchInput.value, {
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
        mins[i].innerText = data.photos[i].id

        img[i].addEventListener("click", () => {
          window.open(
            `./immagine-singola.html?id=${data.photos[i].id}`,
            "_blank",
          )
        })
      }
    })
    .catch((error) => {
      console.log("ERRORE NELLA FETCH", error)
    })
}
