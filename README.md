# yubenjamin2022.github.io

Source for Ben Yu's personal website, [yubenjamin2022.github.io](https://yubenjamin2022.github.io). It's a [Jekyll](https://jekyllrb.com/) site that GitHub Pages rebuilds automatically on every push to `main`. Thanks to [Jon Barron](https://github.com/jonbarron/jonbarron_website) for the original template.

## Where things live

| Path | What it is |
| --- | --- |
| `index.html` | Home page: bio, publications, miscellanea, visitor map |
| `writing/index.html` | Writing page (lists all posts) |
| `_posts/` | Published posts, written in Markdown |
| `_drafts/` | Unpublished drafts, including `post-template.md` (never published) |
| `_layouts/`, `_includes/` | Templates: page shell, header, footer, post layout |
| `assets/css/main.css` | All styles; colors and fonts are variables at the top |
| `assets/js/main.js` | Dark-mode toggle, heading links, copy buttons on code |

## Writing a post

1. Copy `_drafts/post-template.md` to `_posts/YYYY-MM-DD-short-title.md`, e.g. `_posts/2026-10-20-thinking-without-words.md`.
2. Set `title` and `description` (and optionally `tags`) at the top, then write the post in Markdown.
3. Commit and push. Within a minute or two the post appears at `/writing/short-title/`, on the Writing page, in "Recent posts" on the home page, and in the RSS feed (`/feed.xml`).

The template demonstrates everything that's supported: headings, quotes, lists, code, images with captions, footnotes, tables, and math. For math, use `$$...$$` both inline and for display equations; it's rendered with KaTeX.

## Previewing locally (optional)

Follow GitHub's guide to [testing a Pages site locally with Jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll), then run `bundle exec jekyll serve --drafts` and open <http://localhost:4000>. The `--drafts` flag also shows posts that are still in `_drafts/`.
