const button = document.querySelector("button")
button.addEventListener("click", getFetch)

function getFetch(){
    const spellRequest = document.querySelector("input").value

    const url = `https://www.dnd5eapi.co/api/spells/${spellRequest}`

    fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}