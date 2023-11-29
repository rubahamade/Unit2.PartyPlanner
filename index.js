let events = []
const list = document.querySelector(".list")

function render() {
    const html = events.map((event) => {
        return `
            <h2>${event.name}</h2>
            <h3>${event.date}</h3>
            <h3>${event.location}</h3>
            <p>${event.description}</p>
            
        `
    })
    list.innerHTML = html.join("")


}

async function fetchEvents () {
    const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/events")
    const data = await response.json()
    events = data.data
    console.log(events)
    render()
}
fetchEvents()