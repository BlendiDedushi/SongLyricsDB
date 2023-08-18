export default function Songs(songs){
    const current_page = window.location.pathname
    let songs_html= `<div class="row">`
    
    songs.forEach((song, index) =>{
        songs_html += `
        <div class="card border-dark-subtle mb-4 container-fluid chover bg-body-tertiary">
                <div class="row">
                    <div class="col-md-2">
                        <img src="${song.item.header_image_thumbnail_url}" class="img-thumbnail mt-1" style="max-width: 150px;" alt="...">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title"><i class="bi bi-music-note"></i> ${song.item.full_title}</h5>
                            <p class="card-text text-decoration-underline">${song.item.artist_names}</p>
                            <p class="card-text mt-5"><small class="text-body-secondary"><i class="bi bi-calendar3"></i> ${song.item.release_date_for_display} </small></p>
                        </div>
                    </div>
                    <div class="col-md-1 my-auto">
                    ${
                        (current_page === '/playlist.html') ? `<i data-song-index="${index}" id="removeFromPlaylist" class="bi bi-trash ms-3 mb-3 btn btn-outline-danger"></i>`:
                        
                        `<i data-song-index="${index}" id="addToPlaylist" class="bi bi-suit-heart ms-3 mb-3 btn btn-outline-danger"></i>`
                    }
                        
                        <a href="song.html?id=${song.item.id}" class="ms-3 btn btn-outline-dark"><i class="bi bi-caret-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `
    })

    songs_html += `</div>`

    return songs_html
}
