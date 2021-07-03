# Restaurant List

這是一個透過靜態資料所建立的餐廳清單網頁。

## Getting Started

本專案已經設定 npm script, 因此可以直接透過 npm install 與 npm run 的方式來執行。

### Development environment

| Package            | Version  |
| ------------------ | -------- |
| mac Big Sur        | 11.4     |
| VS code            | 1.57.1   |
| Node.js            | v14.17.1 |
| Npm                | 7.19.0   |
| Nvm                | 0.34.0   |
| Nodemon            | 2.0.7    |
| Express            | 4.17.1   |
| Express-handlebars | 5.3.2    |
| alert              | 5.0.10   |

### Description

- 在首頁列出所有透過靜態資料取得的 8 間不同餐廳的資訊

  - 餐廳照片
  - 餐廳名稱
  - 餐廳分類
  - 餐廳評分

![](https://i.imgur.com/uGTtZV2.png)

- 針對每間餐廳，使用者都可以點進去看詳細描述

  - 類別
  - 地址
  - 電話
  - 描述
  - 圖片

![](https://i.imgur.com/LW4hSK3.png)

- 使用者可以透過搜尋餐廳名稱來找到特定的餐廳資料

![](https://i.imgur.com/8UpDvXH.png)

- 使用者可以透過搜尋餐廳類別來找到特定的餐廳資料

  - 中東料理
  - 義式餐廳
  - 美式
  - 日本料理
  - 咖啡
  - 酒吧

![](https://i.imgur.com/su1rEYw.jpg)

- 當無法透過搜尋到餐廳資料會進行提示

![](https://i.imgur.com/LfObp5s.png)

- 當輸入只有空格時會進行提示

![](https://i.imgur.com/ERtiWmt.png)

### Installing

1. 透過 https 取得此專案

```bash
$ git clone https://github.com/Kcih4518/AC-S2-3-W1-My-Restaurant-List-Express.git
```

2. 安裝 node module

```bash
$ cd AC-S2-3-W1-My-Restaurant-List-Express
$ npm install
```

3. 透過 npm 在 local 啟動 web server

```bash
$ npm run dev
Express is running on http://localhost:3000
```

4. 透過 Browser 打開[http://localhost:3000](http://localhost:3000)

![](https://i.imgur.com/uGTtZV2.png)
