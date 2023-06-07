# _dataManager クラス

インプットデータを受け取り core (C++) が解釈できる形に整形する

Get Started はじめに FEMPython をインポートします。
```python
from main import FEMPython as calc
```


### \_nodes：節点の設定

節点は以下のように設定する
```python
# 節点名
ID = '1'
# 座標
x=0.000
y=0.000
z=0.000

calc.addNode(ID, x, y, z)
```


### \_elements：Bar部材の設定
```python

ID = '1'

ni = '1'
nj = '1' 
e  = '1'

cg = 0.000
# i端の結合条件
xi = 1
yi = 1
zi = 1
# j端の結合条件
xj = 1
yj = 1
zj = 1

calc.addElement("sebarelement", ID, ni,  nj, e, cg, xi, yi, zi, xj, yj, zj)
```


### \_materials

### \_shellParams

### \_barParams

### \_coordinates


### \_restraints

### \_loads

### \_pressures

### \_temperature

### \_htcs