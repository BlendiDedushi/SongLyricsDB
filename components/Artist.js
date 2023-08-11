export default function Artist(artist){
    return `
    <div class = "container d-flex flex-column">
        <img src=${artist.header_image_url}>
        <h1 class="text-center text-dark font-monospace fw-bold">${artist.name}</h1>
        <h2>Description</h2>
        <p>${artist.description_preview}</p>
        <div class="d-flex justify-content-between">
            <p class="fw-bold"><i class="bi bi-facebook"></i> ${artist.facebook_name}</p>
            <p class="fw-bold"><i class="bi bi-instagram"></i> ${artist.instagram_name}</p>
        </div>
    </div>
    `
}