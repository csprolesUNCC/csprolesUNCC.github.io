const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

window.toggleTheme = function() {
    const current = document.documentElement.getAttribute('data-theme');
    let targetTheme = "light";

    if (current === "dark") {
        targetTheme = "light";
    } else {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
};

class BlogNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="container nav-container">
            <a href="/blog/index.html" class="brand-logo">Carson Sproles</a>
            <ul class="nav-links">
                <li><a href="/blog/index.html">Home</a></li>
                <li><a href="/blog/pages/about.html">About</a></li>
                <li><a href="/blog/pages/archive.html">Archive</a></li>
                <li>
                    <button onclick="window.toggleTheme()" style="background:none; border:none; cursor:pointer; font-size:1.2rem; padding:0; margin-left:10px;" title="Toggle Dark Mode">
                        🌓
                    </button>
                </li>
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
            <h3>Current Thoughts</h3>
            <p>Nothing for now.</p>
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