import os
import glob
files = glob.glob("./**/*.md")


dic={}

for path in files:
	f = open(path, 'r', encoding="utf-8")
	data = f.readlines()
	f.close()

	filename = os.path.basename(path)
	path = path.replace('\\', '/')
	list_path = path.split('/')
	currentDirectory = list_path[-2]

	if not currentDirectory in dic:
		dic[currentDirectory]=[]
		dic[currentDirectory].append(f"- {currentDirectory}\n\n")

	# md を読んでタイトルを抜き出す
	title = os.path.splitext(filename)[0]
	for line in data:
		line_trim = line.strip()
		if len(line_trim) == 0:
			continue
		if line_trim[0] == '#':
			title = line_trim.replace('#', '').strip()
			break

	file = path[2:] # 先頭の ./ を削除する
	file = file.replace(" ", "%20") # スペースを変換
	dic[currentDirectory].append(f"  - [{title}]({file})\n")

# 書き込み
sidebar_file = open('_sidebar.md', 'w', encoding="utf-8")

for key in dic:
	for line in dic[key]:
		sidebar_file.write(line)
	sidebar_file.write(f"\n")

sidebar_file.close()