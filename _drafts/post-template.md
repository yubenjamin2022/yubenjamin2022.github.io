---
title: "Post title goes here"
description: "One sentence shown under the title, in the post list, and in link previews."
tags: [research]
# last_modified_at: 2026-11-01   # optional: shows "Updated <date>" on the post
---

<!--
  HOW TO PUBLISH
  1. Copy this file into _posts/ and name it YYYY-MM-DD-short-title.md
     (e.g. _posts/2026-10-20-thinking-without-words.md).
  2. Fill in the front matter above and replace the content below.
  3. Commit and push. The post shows up at /writing/short-title/ a minute or two later.
  Anything left in _drafts/ is never published.

  Optional table of contents: put these two lines where you want it to appear.
    * TOC
    {:toc}
-->

If you leave out `description`, the first paragraph is used as the summary in the post list, so it's worth making it a good hook.

## Headings

Use `##` for sections and `###` for subsections. Every heading gets a link anchor automatically.

Regular text supports **bold**, *italics*, [links](https://example.com), and `inline code`.

> Blockquotes are nice for pulling in a quote from a paper or a person.

- Bulleted lists
- work as you'd expect
  1. and can be nested

## Math

Use double dollar signs for math, both inline like $$p_\theta(x \mid z)$$ and on their own lines for a displayed equation:

$$
\mathcal{L}(\theta) = \mathbb{E}_{x \sim \mathcal{D}}\left[-\log p_\theta(x)\right]
$$

## Code

```python
import torch

def kl_divergence(p: torch.Tensor, q: torch.Tensor) -> torch.Tensor:
    """KL(p || q) for two categorical distributions."""
    return (p * (p.log() - q.log())).sum(-1)
```

## Images

Put image files in `images/writing/` and use an absolute path. An italic line directly under an image becomes its caption:

```markdown
![What the image shows, for screen readers](/images/writing/my-figure.png)
*Figure 1. The caption.*
```

## Footnotes and tables

Footnotes are collected at the bottom of the post.[^1]

| Model | Params | Score |
| ----- | -----: | ----: |
| Small |   125M |  61.2 |
| Large |   1.3B |  74.8 |

---

A horizontal rule (`---` on its own line) becomes a small section break, like the one above.

[^1]: Like this one.
