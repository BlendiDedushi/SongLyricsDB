export default function Album(album){
    return `
    <div class = "container d-flex flex-column">
      <h1 class="text-center text-dark font-monospace fw-bold">${album.full_title}</h1>
      <h2>Description</h2>
      <p>${album.description_preview}</p>
      <div class="d-flex justify-content-between">
          <p class="fw-bold"><i class="bi bi-calendar-week"></i> ${album.release_date}</p>
      </div>
      <img src=${album.header_image_url}>
   
    </div>
    `
}