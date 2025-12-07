class BlogNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="container nav-container">
            <a href="#" class="brand-logo">Carson Sproles</a>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="pages/about.html">About</a></li>
                <li><a href="pages/archive.html">Archive</a></li>
                <li><a href="#" class="btn-subscribe">Subscribe (Not yet implemented)</a></li>
            </ul>
        </div>
      </nav>
    `;
  }
}

class BlogSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <aside class="sidebar">
        <div class="widget">
            <h3>About Me</h3>
            <p>Hi, I'm Carson. I'm a developer passionate about clean code and user interfaces. Currently working on full-stack projects.</p>
        </div>

        <div class="widget">
            <h3>Categories</h3>
            <ul class="category-list">
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Snippets</a></li>
                <li><a href="#">Lifestyle</a></li>
            </ul>
        </div>
      </aside>
    `;
  }
}

customElements.define('blog-navbar', BlogNavbar);
customElements.define('blog-sidebar', BlogSidebar);