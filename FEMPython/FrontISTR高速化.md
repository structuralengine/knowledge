FrontISTR そのまま使う案
python から FrontISTR  の実行

### python で他のアプリを実行する方法
https://srbrnote.work/archives/4110#toc1
```python
from subprocess import run, PIPE

run("/workspaces/FEMPython/FrontISTR/bin/fistr1",
shell=True,
cwd=r"/workspaces/FEMPython/tests/01_elastic_hinge/")
```
これでうまくいった...

### FrontISTR 入りのDockerイメージ

registry.gitlab.com/frontistr-commons/frontistr/fistr1:master

この linux に python をインストールしてFrontISTRを使う
