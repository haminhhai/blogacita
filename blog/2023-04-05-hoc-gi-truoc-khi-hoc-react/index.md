---
slug: reactjs-vs-vuejs
title: 'Học gì trước khi học React'
authors: haihm
tags: [React, Vue, Frontend]
---

Trong bài viết này chúng ta khám phá những top khái niện Javascript cơ bản để chuẩn bị hành trang học React nhanh và hiệu quả nhé!

## Mục lục
 - map() & filter()
 - slice() & splice()
 - concat()
 - find() & findIndex()
 - destructuring
 - rest & spread operator
 - promises

## map() & filter()
Cả 2 đều là method mảng và đều trả về 1 mảng mới
``` js
const data =[
    {id: '1',label: "u"},
    {id: '2',label: "oa"},
    {id: '3',label: "minh"},
    {id: '4',label: "chi"},
    {id: '5',label: "la"},
    {id: '5',label: "nguoi"},
    {id: '5',label: "den"},
    {id: '5',label: "sau"},
]

const lowerData = data.map(element => element.titlabelle.toLowerCase());
console.log(lowerData)
```
```
Output:
['U', 'OA', 'MINH', 'CHI', 'LA', 'NGUOI', 'DEN', 'SAU']
```
