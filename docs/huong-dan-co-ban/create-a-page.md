---
sidebar_position: 2
---

# Tạo page mới

Thêm **Markdown or React** files ở `src/pages` to tạo a **standalone page**:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## Tạo bằng React

Tạo file mới `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

Page mới ở [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page).

## Tạo bằng Markdown

Tạo file mới `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

Page mới ở  [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page).
