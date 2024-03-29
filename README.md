# [Gatsby (Demo)](https://hyerim-dev-stickers.netlify.app/)

:point_up_2: 제목을 클릭하면 배포된 사이트를 확인하실 수 있습니다.

<br />

## :pencil2: 학습 목적

- Gatsby & GraphQL를 활용하여 실습하기.

<br />

## 🛠️ 사용한 프레임워크

<img src="https://img.shields.io/badge/Gatsby-663399?style=flat-round&logo=gatsby&logoColor=white"/>

<br />

## :book: 학습 내용

### 🔆 Gatsby란?

- 리액트에 새로운 규칙을 추가하는 리액트 기반의 프레임워크. (라이브러리X)
- 빠른 로드로 최적화된 정적 웹사이트(ex. 블로그, 전자상거래)를 만들어주는 하나의 오픈소스 프레임워크.

### 🔆 Gatsby 장점

- `import`로 불러오는 라이브러리들을 설치하지 않아도 구현이 가능합니다.
- react router를 설치하지 않아도 페이지 전환이 가능합니다.
  - 컴포넌트명으로 URL의 params가 설정됩니다.
    > ❗`export default`를 사용해야 합니다. (`export` (X))

### 🔆 프로젝트 생성

#### 1. gatsby 전역 설치

> ❗node.js가 비교적 최신으로 설치되어 있어야 합니다.

```
npm i -g gatsby-cli
```

#### 2. 프로젝트를 생성할 폴더로 이동 후, gatsby 실행

> ❗해당 프로젝트를 포함한 상위 폴더명은 전부 영문이어야 합니다.

```
gatsby new
```

#### 3. 프로젝트 폴더로 이동 후, 프로젝트 실행

```
cd <프로젝트 폴더명>
npm run develop
```

### 🔆 Data Fetching

- html 사전 생성으로 로딩 시간이 짧아 유저는 접속 즉시 html을 볼 수 있습니다.
  | | Gatsby | ReactJS |
  | :----: | :-------------: | :-----------------------: |
  | 데이터 | html 생성 도중 | html 생성 후 |
  | 로딩 | 짧음 | 비교적 긺 |
  | ex | Gatsby(GraphQL) | fetch, axios, 리액트 쿼리 |

### 🔆 GraphQL

- 쿼리 언어(Query Language)중 하나 (무언가를 요청하는 것)
- DB에서 무엇인가를 꺼내오는 언어
- 프로젝트 실행 후, [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)에서 사용할 수 있습니다.

```
  // ex 01) ./src/components/Seo.tsx

  const data = useStaticQuery<Queries.SeoDataQuery>(graphql`
    query SeoData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  // ex 02) ./src/pages/blog.tsx

  export const query = graphql`
  query BlogPosts {
    allMdx {
      nodes {
        frontmatter {
          author
          category
          title
          date(formatString: "YYYY.MM.DD")
        }
        excerpt(pruneLength: 50)
      }
    }
  }
`
```

### 🔆 [Gatsby 플러그인](https://www.gatsbyjs.com/plugins)

<details>
  <summary>🔌 source-filesystem</summary>
  
- GraphQL에서 더 많은 데이터를 불러올 수 있습니다.

```
npm install gatsby-source-filesystem
```

```
// gatsby-config.ts 'plugins'에 아래 내용을 추가합니다.

plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      // The unique name for each instance
      name: `pages`,
      // Path to the directory
      path: `${__dirname}/blog-posts`,
    },
  }
],

```

</details>
<details>
  <summary>🔌 MDX</summary>

- 마크다운 + ReactJS
- ".mdx" 마크다운 파일에 데이터를 생성할 수 있습니다.

```
npm install gatsby-plugin-mdx gatsby-source-filesystem @mdx-js/react
```

```
// gatsby-config.ts 'plugins'에 아래 내용을 추가합니다.

plugins: [
  `gatsby-plugin-mdx`
  {
    ...
  }
],

```

```
// ./blog-posts/Hello.mdx

---
title: Hello everyone
category: personal
date: '2022-10-29'
author: hyerim
slug: hello-everyone
---

# Hello everyone!

Welcome to my blog post. I'm very happy to have you all here with me on this special ocasion.

I want to write something a little bit longer.


```

- "{변수명}.tsx"로 템플릿으로 사용할 수 있습니다.

```
// ex) {mdx.frontmatter__slug}.tsx

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      body
      frontmatter {
        author
        category
        date
        slug
        title
      }
    }
  }
`
// 'frontmatter__slug'는 react-router의 '/:slug'나 'useParams()'와 비슷한 역할을 합니다.
```

</details>
<details>
  <summary>🔌 gatsby-plugin-image</summary>

- 정적 이미지와 동적 이미지를 사용할 수 있습니다.

```
npm install gatsby-plugin-image gatsby-plugin-sharp gatsby-source-filesystem gatsby-transformer-sharp
```

```
// gatsby-config.ts 'plugins'에 아래 내용을 추가합니다.

plugins: [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    ...
  }
],

```

```
// 정적인 이미지 사용 ./src/pages/index.tsx

return <StaticImage src='이미지주소' alt='' />


// 동적인 이미지 사용 ./src/pages/blog/{mdx.frontmatter__slug}.tsx

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const image = getImage(
  data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
)

return <GatsbyImage image={image} alt={} />
```

</details>
<details>
  <summary>🔌 gatsby-source-contentful</summary>

- [contentful](https://www.contentful.com/)은 사이트의 여러 컨텐츠들을 관리할 수 있는 플랫폼입니다.
- [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql)에서 contentful로 관리하는 컨텐츠들의 데이터를 확인할 수 있습니다.

```
npm install gatsby-source-contentful gatsby-plugin-image
```

- contentful의 `spaceId`와 `accessToken`은 [contentful](https://www.contentful.com/)의 settings -> API keys에서 확인하실 수 있습니다. (로그인 필요)

```
// gatsby-config.ts 'plugins'에 아래 내용을 추가합니다.

plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `your_space_id`,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  },
],

```

</details>

### 🔆 [pico CSS](https://picocss.com/)

- CSS 라이브러리 (부트스트랩, tailwind CSS와 비슷)

1. `src`폴더에 `styles.css` 파일을 생성한 후, pico CSS의 CDN을 불려옵니다.

```
@import url('https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css')
```

2. root 경로에 `gatsby-browser.ts` 파일을 생성한 후, `styles.css`의 파일을 불러옵니다.

```
import "./src/styles.css"
```

### 🔆 Deploy ([Netlify](https://app.netlify.com/))

- [contentful](https://www.contentful.com/)에서 상품을 생성, 수정, 삭제하면 넷리파이에서 자동으로 빌드되어 사이트에 반영됩니다.

1. "Site settings" -> "Build & deploy" -> "Build hooks"에 사용할 "Contentful"을 저장합니다.
2. 나타난 url을 복사한 뒤, [contentful](https://www.contentful.com/)에 접속하여 "Settings" -> "Webhooks" -> "WEBHOOK TEMPLATES" -> "Netlify" -> "Add" -> "Netlify build hook URL" 에 복사한 url을 붙여넣기하고 "Create webhook"을 클릭합니다.
