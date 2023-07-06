# Test-Data-Management-Tools

## 事前準備

- pythonのインストール(必要な場合のみ)
- pythonモジュールのインストール(必要な場合のみ)
  - `pip install pdf2image`
  - `pip install opencv`
  - `pip install pdfminer`
- `python.exe`のパスを`config.txt`に設定(必要な場合のみ)
  - 初期状態の`config.txt`には全く設定が含まれていません
- `master_PDF_SRC_*.pdf`を`Test-DataManagement-Tools`フォルダに格納(必要な場合のみ)

## 実行

1. Visual Studioを起動して、`WebDan_Azure`をデバッグなしで開始
   - デバッグありでも構いませんが、その場合は同じVisual Studio上では`section.py`を開始できないかもしれません
2. `testcase_id_list.py`を編集して、実行するテストケースを選択(必要な場合のみ)
3. `CLIDocGenerator`を再ビルド
   - 下記の理由により`CLIDocGenerator`を自動的に再ビルドさせることができないため、手動で再ビルドする必要があります
     - python用のプロジェクト(`Test-Data-Management-Tools`)は、他のプロジェクト(`CLIDocGenerator`)との間に依存関係を設定できないようです
     - `CLIDocGenerator`は.NET 3.5プロジェクトとの依存関係を含むため、`dotnet`コマンドで処理することができないようです
4. `Test-Data-Management-Tools`の`section.py`を開始

## 実行結果

- `SESSION_*`フォルダに格納されます

## 備考

- popplerは、`session.py`実行時に自動的にダウンロードされ、`Test-Data-Management-Tools`フォルダに解凍されます(一度だけ)
- 実行時に正解PDF(`master_PDF_SRC_*.pdf`)が存在していなかった場合は、`CLIDocGenerator`が生成したPDFファイルを正解PDFとして保存します(この場合、比較処理は行われません)
