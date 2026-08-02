# Battle Simulator | 月刊試作録⑤ 3Dコマンドバトル試作

C++ / DxLibで制作している3Dコマンドバトル試作「Battle Simulator（仮タイトル）」を紹介する、静的HTML/CSS/JavaScriptのポートフォリオ・制作記録サイトです。

完成品の販売ページではなく、「どんなゲームなのか」「何を試作しているのか」「どの画面があるのか」を伝えるための紹介ページとして作成しています。

## サイトの概要

- ヒーローセクション（タイトル・キャッチコピー・メインスクリーンショット・タグ表示）
- 概要セクション
- ゲームの特徴セクション（カード形式）
- スクリーンショットセクション（グリッド表示・クリックで拡大表示）
- 戦闘システム紹介セクション
- 制作で学んだことセクション
- 今後の改善予定セクション
- フッター（制作者情報・作品一覧ページへのリンク）

## スクリーンショット画像の置き場所

すべてのスクリーンショット画像は以下のフォルダに配置してください。

```
assets/images/
```

## 画像ファイル名一覧

| ファイル名 | 説明 |
| --- | --- |
| `assets/images/screenshot_title.png` | タイトル画面 |
| `assets/images/screenshot_quest.png` | クエスト選択画面 |
| `assets/images/screenshot_battle_01.png` | 戦闘画面 / コマンド選択 |
| `assets/images/screenshot_battle_02.png` | ターゲット選択と攻撃 |
| `assets/images/screenshot_result.png` | 戦闘結果画面 |
| `assets/images/screenshot_status.png` | メニュー・ステータス画面 |

上記のファイルが `assets/images/` に存在しない間は、各スクリーンショット枠に背景色と説明文（ファイル名）が表示され、レイアウトが崩れないようになっています。画像を配置すると自動的にその画像が表示されます。

## ローカルで確認する方法

このサイトはビルド不要の静的サイトです。`index.html` をブラウザで直接開くだけで確認できます。

```
battle-simulator/index.html をダブルクリックして開く
```

ローカルサーバーを使う場合（任意）：

```bash
# battle-simulator フォルダ内で実行
python -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開いて確認してください。

## GitHub Pagesで公開する場合

1. このフォルダ（`battle-simulator/`）を含むリポジトリをGitHubにpushします。
2. リポジトリの `Settings` → `Pages` を開きます。
3. `Source` でPagesを公開するブランチとフォルダ（例：`main` ブランチ / `root`）を選択します。
4. リポジトリのルートに他の作品ページと並べて配置している場合、公開後のURLは以下のような形になります。

```
https://<ユーザー名>.github.io/<リポジトリ名>/battle-simulator/
```

公開後、フッターの「作品一覧ページへ」のリンク（`../works.html`）が正しく機能するよう、サイト全体を同じリポジトリ内に配置してください。
