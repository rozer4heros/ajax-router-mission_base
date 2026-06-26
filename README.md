# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 미션 목표

- React Router를 활용하여 **페이지 이동(목록/상세/작성/수정/삭제)**을 구현한다.
- URL 파라미터(:id)와 중첩 라우트(Layout + Outlet) 구조를 이해한다.
- public/data/blog.json을 활용한 Ajax(fetch) 기반 데이터 로딩을 경험한다.
- 서버 없이 useState로 클라이언트 CRUD 흐름을 완성한다.

## 사용 기술 스택

- React + Vite
- react-router-dom
- fetch API (Ajax)
- React Hooks (useState, useEffect, useParams, useNavigate, useMemo)
