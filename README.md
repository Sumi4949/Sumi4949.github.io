# 住吉 隼 — プロフィールサイト（Colabだけで編集）

このフォルダは **Google Colab だけ** で編集・プレビュー・エクスポートできる静的サイトです。
外部サービス不要。`index.html` と `styles.css` を書き換えればOKです。

## Colabでの使い方

1. 左の「ファイル」ペインで `index.html` をダブルクリックするとエディタで開けます。
2. プレビューしたい場合は、下の Python スニペットを Colab で実行してください（簡易サーバ）。
3. できあがったら `sumiyoshi-profile-site.zip` をダウンロードして保管できます。

```python
# Colab での簡易プレビュー（ローカルだけ・外部公開なし）
import portpicker, threading, socket, contextlib, os
from http.server import SimpleHTTPRequestHandler, HTTPServer
from google.colab import output

os.chdir("/mnt/data/sumiyoshi_profile_site")
port = portpicker.pick_unused_port()

def run():
  HTTPServer(("127.0.0.1", port), SimpleHTTPRequestHandler).serve_forever()

threading.Thread(target=run, daemon=True).start()
output.serve_kernel_port_as_iframe(port, path="/index.html", width="100%", height=720)
print("Serving on port", port)
```

## 編集ポイント
- `index.html`: テキスト、セクションの順序、リンクなど。
- `styles.css`: 色・レイアウト・フォント。
- `assets/resume.pdf`: 履歴書PDFを置くと「履歴書（PDF）」リンクが機能します。

## ライセンス
MIT とします。自由に改変してください。
（© 2025 住吉 隼）