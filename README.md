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
例えばスマホ。

## Prerequisites

- [Node.js](https://nodejs.org/en/): v18.12.1

## Main Dependencies

- Typescript
- Aedes: MQTT Broker
- Aedes Server Facetory: MQTT Broker over WebSocket
- Express: HTTP Server
- Mqtt.js: MQTT Client
- ROME: Linter and Formatter

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```