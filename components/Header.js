export default function Header() {
  return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="index.html">SongLyricsDB</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item me-3">
            <a class="nav-link" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link" href="about.html">About</a>
          </li>
          <li class="nav-item me-3">
            <a class="nav-link" href="playlist.html">PlayList</a>
          </li>
        </ul>
        <div id="searchbtn" class="d-none">
            <form class="container-fluid" role="search" >
                <input class="form-control" type="search" placeholder="Search the song..." aria-label="Search">
            </form>
        </div>
        <button class="btn btn-outline-success  mt-1 mb-1" id="search-btn"><i class="bi bi-search"></i></button>
      </div>
    </div>
  </nav>
    `;
}
