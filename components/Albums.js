export default function Albums(albums) {
    let albums_html = `<div class="row gap-4">`;
  
    albums.forEach((album) => {
      albums_html += `
        <div class="card p-2 text-center " style="width: 18rem;">
        <a href="albums.html?id=${album.item.id}"><img src="${album.item.cover_art_thumbnail_url}" class="card-img-top" alt="..."/></a>
            <div class="card-body text-center">
                <h5 class="card-title">${album.item.full_title}</h5>
                <a href="${album.item.url}" target="_blank" class=" link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Info</a>
            </div>
        </div>
      `;
    });
  
    albums_html += `</div>`;
  
    return albums_html;
  }
  