---
sidebar_position: 2
---

# Tạo document tutorial mới

Các trang document tutorial là **nhóm các trang** được kết nối qua:

- **sidebar**
- **previous/next navigation**
- **versioning**

## Tạo document tutorial đầu tiên

Tạo Markdown file ở `docs/hello.md`:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

Và kiểm tra kết quả bài document tutorial vừa tạo ở [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello).

## Configure the Sidebar

**Sidebar** được tạo tự động từ folder `docs`.

Thêm metadata để customize sidebar label và position:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

Cũng có thể tạo sidebar thủ công trong `sidebars.js`:

```js title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
