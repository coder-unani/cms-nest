# CMS Nest

## Description

A content management system built with NestJS, Handlebars, and Tailwind CSS.

# 프로젝트 경로 생성
cd cms-nest

# NestJS 프로젝트 생성
nest new .

# admin 모듈, 컨트롤러, 서비스 생성
nest g module app/admin
nest g controller app/admin
nest g service app/admin

## 템플릿 엔진 핸들바 추가
npm install express-handlebars

## 코드 추가
app.useStaticAssets(join(process.cwd(), 'public'));
app.setBaseViewsDir(join(process.cwd(), 'views'));
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: join(process.cwd(), 'views', 'layouts'),
    partialsDir: join(process.cwd(), 'views', 'layouts', 'partials'),
  }),
);
app.setViewEngine('hbs');

## 의존성 설치
npm install -D concurrently

## 태일윈드 설치
npm install -D tailwindcss postcss autoprefixer

## 스크립트 추가
"build": "npm run build:css && nest build",
"build:css": "postcss src/styles/tailwind.css -o public/styles.css",
"watch:css": "postcss src/styles/tailwind.css -o public/styles.css --watch",
"dev": "concurrently -k \"npm:watch:css\" \"nest start --watch\"",

## 데이터베이스 설치
npm install @nest/typeorm typeorm mysql2
