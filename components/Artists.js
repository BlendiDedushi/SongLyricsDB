export default function Artists(artists) {
  let artists_html = `<div class="row gap-4">`;

  artists.slice(2).forEach((artist) => {
    artists_html += `
    <div class="card p-2" style="width: 18rem;">
    <a href="artistt.html?id=${artist.item.id}"><img src="${artist.item.image_url}" class="card-img-top" alt="..."/></a>
<div class="card-body text-center">
            <h5 class="card-title">${artist.item.name}</h5>
            <a href="${artist.item.url}" target="_blank" class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Data on the artist</a>
        </div>
    </div>
    `;
  });

  artists_html += `</div>`;

  return artists_html;
}
