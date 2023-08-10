export default function Header() {
  return `
    <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container">
      <a class="navbar-brand text-light" href="index.html">SongLyricsDB</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <a class="nav-link text-light" aria-current="page" href="index.html">Songs</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link text-light" href="artist.html">Artists</a>
            </li>
            <li class="nav-item me-3">
              <a class="nav-link text-light" href="album.html">Albums</a>
            </li>
          <li class="nav-item me-3">
            <a class="nav-link text-light" href="playlist.html">Playlist</a>
          </li>
        </ul>
        <div id="searchbtn" class="d-none">
            <form class="container-fluid" role="search" >
                <input class="form-control" type="search" placeholder="Search the song..." aria-label="Search">
            </form>
        </div>
        <button class="btn btn-outline-light  mt-1 mb-1" id="search-btn"><i class="bi bi-search"></i></button>
      </div>
    </div>
  </nav>
    `;
}
