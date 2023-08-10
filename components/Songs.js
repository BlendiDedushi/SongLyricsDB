export default function Songs(songs){
    let songs_html= `<div class="row">`
    
    songs.forEach(song =>{
        songs_html += `
        <div class="card mb-2 container-fluid border border-danger">
                <div class="row">
                    <div class="col-md-2">
                        <img src="${song.item.header_image_thumbnail_url}" class="img-thumbnail mt-1" style="max-width: 150px;" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${song.item.full_title}</h5>
                            <p class="card-text">${song.item.artist_names}</p>
                            <p class="card-text mt-5"><small class="text-body-secondary">${song.item.release_date_for_display}</small></p>
                        </div>
                    </div>
                    <div class="col-md-2 my-auto">
                        <a href="#" class="ms-4 btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        </div>
        `
    })

    songs_html += `</div>`

    return songs_html
}