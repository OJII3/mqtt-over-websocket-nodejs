# mqtt-over-websocket-node

MQTT over WebSocket using Node.js

## Overview

多分こんな感じ

1. `aedes`と`aedes-server-facetory`で `mqtt-over-webscoket` 対応の MQTT Broker 用のサーバーを立てる（port: 1883)
2. `express`で http server を立てる（port: 3000)
3. この http server にて html を返す。これが MQTT Client その 1
4. `mqtt.js`で MQTT Client その 2 作成する。
5. 二つのクライアントが localhost:1883 の MQTT Broker を介して通信する。

これが動くようになれば、ファイアウォールの設定を変えることで、外部からもアクセスできるようになる。
例えばスマホ。DrogonでMQTT Brokerを立てるのは難しそう。Httpサーバー部分だけなら余裕だけど、そんなに意味ないかと。

## Progress

- [x] Http Server の立ち上げ
- [x] MQTT Broker の立ち上げ
- [x] MQTT による通信の確認(ローカルから mosuquitto で publish, subscribe できた)
- [x] MQTT over WebSocket による Mosuquitto Test Server への接続の確認
- [x] Client その 2 から MQTT over Websocket での通信の確認
- [x] ブラウザから mqtt-over-websocket で ローカルの MQTT Broker への接続の確認
- [ ] localhost 以外からの接続の確認

## Prerequisites

- [Node.js](https://nodejs.org/en/): v18.12.1

## Main Dependencies

- Typescript
- Aedes: MQTT Broker
- Aedes Server Facetory: MQTT Broker over WebSocket
- Express: HTTP Server
- Mqtt.js: MQTT Client
- ROME: Linter and Formatter

## 依存パッケージのインストール

```bash
npm install
```

or

```bash
npm i
```

## 使いかた

### 起動

```bash
npm start
```

### デバッグ

```bash
npm run dev
```

### コードチェック

```bash
npm run lint
```

### フォーマット

```bash
npm run format
```
