<!--
 * @Description:
 * @Date: 2022-01-17 14:50:59
-->

# typescript 排序与搜索

<p align="center">
  <a href="https://github.com/chengdonglin/dm-ts-algo" target="blank"><img src="https://app.travis-ci.com/chengdonglin/dm-ts-algo.svg?branch=master" width="100" alt="Nest Logo" /></a>
</p>

## install

```
npm install dm-ts-algo
```

## example

```
import { BubbleSort, defaultCompare } from 'dm-ts-algo';
const d = [5, 3, 4, 2, 9, 0];
const s = new BubbleSort(d, defaultCompare);
s.sort();
```

### 当前支持的排序

-   冒泡排序
-   选择排序
-   归并排序
-   插入排序
