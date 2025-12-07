class BlogNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="container nav-container">
            <a href="/portfolio/index.html" class="brand-logo">Carson Sproles</a>
            <ul class="nav-links">
                <li><a href="/portfolio/index.html">Home</a></li>
                <li><a href="/portfolio/pages/about.html">About</a></li>
                <li><a href="/portfolio/pages/archive.html">Archive</a></li>
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
            <p>Hi, I'm Carson. I am a Comp Sci graduate from UNCC, and this site allows me to practice my skills and share my thoughts with the world.</p>
        </div>

        <div class="widget">
            <h3>Additional Links</h3>
            <ul class="category-list">
                <li><a href="https://www.linkedin.com/in/carsonsproles/">LinkedIn</a></li>
                <li><a href="https://github.com/csprolesUNCC">GitHub</a></li>
                <li><a href="https://github.com/csprolesUNCC">Instagram</a></li>
                <li><a href="/index.html">Root Site</a></li>
            </ul>
        </div>
      </aside>
    `;
  }
}

customElements.define('blog-navbar', BlogNavbar);
customElements.define('blog-sidebar', BlogSidebar);