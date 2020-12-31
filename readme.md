<p align="center">
  <img src="https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img src="https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://badgen.net/badge/Open%20Source%20%3F/Yes%21/blue?icon=github" height="18.5"/>
  <img src="https://visitor-badge.laobi.icu/badge?page_id=crocodication.fruits_app" width="82" height="20"/>
</p>

# Fruits App

Snack Expo: https://snack.expo.io/4ZbqBY4a-

> Projek Contoh Untuk Passing Parameter Pada Navigasi di React-Native Menggunakan TypeScript

<p align="center">
  <img src="./screenshots/0.png" alt="App Preview | Home" width="300"/>
  <img src="./screenshots/1.png" alt="App Preview | Detail" width="300"/>
</p>

# Catatan

Projek ini di init menggunakan perintah ```npx react-native init fruits_app --template react-native-template-typescript``` menggunakan **Node.js 15.5.0**

# Running Project

- ```git clone https://github.com/crocodication/fruits_app.git```
- ```cd fruits_app```
- ```npm install```

Jika menggunakan MacOS, lakukan juga

- ```cd ios; pod install; cd ..```

Kemudian

- ```npx react-native run-android``` / ```npx react-native run-ios```

# Tujuan 

Semoga dengan sample project ini bisa mengambil poin - poin sebagai berikut

- Pemetaan Type untuk parameter saat navigasi, berguna untuk memunculkan suggest auto-complete parameter pada pemanggilan fungsi navigasi

![Type untuk props komponen](./screenshots/2.png)

beserta suggest auto-complete pilihan parameter dari layar itu sendiri yang mana yang bisa diambil setelah di passing

![Type untuk respon API](./screenshots/3.png)