# 计数排序

::: details 全部标签

**数据结构**

[`数组`](/leetcode-js/outline/tag/array.md) [`矩阵`](/leetcode-js/outline/tag/matrix.md) [`链表`](/leetcode-js/outline/tag/linked-list.md) [`双向链表`](/leetcode-js/outline/tag/doubly-linked-list.md) [`栈`](/leetcode-js/outline/tag/stack.md) [`单调栈`](/leetcode-js/outline/tag/monotonic-stack.md) [`队列`](/leetcode-js/outline/tag/queue.md) [`单调队列`](/leetcode-js/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode-js/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`树`](/leetcode-js/outline/tag/tree.md) [`二叉树`](/leetcode-js/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode-js/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode-js/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode-js/outline/tag/graph.md) [`有序集合`](/leetcode-js/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode-js/outline/tag/topological-sort.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) [`强连通分量`](/leetcode-js/outline/tag/strongly-connected-component.md) [`欧拉回路`](/leetcode-js/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode-js/outline/tag/biconnected-component.md) [`并查集`](/leetcode-js/outline/tag/union-find.md) [`字典树`](/leetcode-js/outline/tag/trie.md) [`线段树`](/leetcode-js/outline/tag/segment-tree.md) [`树状数组`](/leetcode-js/outline/tag/binary-indexed-tree.md) [`后缀数组`](/leetcode-js/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode-js/outline/tag/enumeration.md) [`递归`](/leetcode-js/outline/tag/recursion.md) [`分治`](/leetcode-js/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode-js/outline/tag/backtracking.md) [`贪心`](/leetcode-js/outline/tag/greedy.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) [`排序`](/leetcode-js/outline/tag/sorting.md) [`桶排序`](/leetcode-js/outline/tag/bucket-sort.md) <span class="blue">计数排序</span> [`基数排序`](/leetcode-js/outline/tag/radix-sort.md) [`归并排序`](/leetcode-js/outline/tag/merge-sort.md) [`快速选择`](/leetcode-js/outline/tag/quickselect.md) [`二分查找`](/leetcode-js/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode-js/outline/tag/memoization.md) [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`双指针`](/leetcode-js/outline/tag/two-pointers.md) [`位运算`](/leetcode-js/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode-js/outline/tag/prefix-sum.md) [`计数`](/leetcode-js/outline/tag/counting.md) [`滑动窗口`](/leetcode-js/outline/tag/sliding-window.md) [`状态压缩`](/leetcode-js/outline/tag/bitmask.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) [`滚动哈希`](/leetcode-js/outline/tag/rolling-hash.md) [`扫描线`](/leetcode-js/outline/tag/line-sweep.md)

**其他**

[`数学`](/leetcode-js/outline/tag/math.md) [`数论`](/leetcode-js/outline/tag/number-theory.md) [`几何`](/leetcode-js/outline/tag/geometry.md) [`博弈`](/leetcode-js/outline/tag/game-theory.md) [`模拟`](/leetcode-js/outline/tag/simulation.md) [`组合数学`](/leetcode-js/outline/tag/combinatorics.md) [`随机化`](/leetcode-js/outline/tag/randomized.md) [`概率与统计`](/leetcode-js/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode-js/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode-js/outline/tag/rejection-sampling.md) [`数据库`](/leetcode-js/outline/tag/database.md) [`设计`](/leetcode-js/outline/tag/design.md) [`数据流`](/leetcode-js/outline/tag/data-stream.md) [`脑筋急转弯`](/leetcode-js/outline/tag/brainteaser.md) [`交互`](/leetcode-js/outline/tag/interactive.md) [`迭代器`](/leetcode-js/outline/tag/iterator.md) [`多线程`](/leetcode-js/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 274 | [H 指数](https://leetcode.com/problems/h-index) | [[✓]](/leetcode-js/problem/0274.md) |  [`数组`](/leetcode-js/outline/tag/array.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) [`排序`](/leetcode-js/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 561 | [数组拆分](https://leetcode.com/problems/array-partition) |  |  [`贪心`](/leetcode-js/outline/tag/greedy.md) [`数组`](/leetcode-js/outline/tag/array.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) `1+` | <font color=#15bd66>Easy</font> |
| 912 | [排序数组](https://leetcode.com/problems/sort-an-array) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`分治`](/leetcode-js/outline/tag/divide-and-conquer.md) [`桶排序`](/leetcode-js/outline/tag/bucket-sort.md) `5+` | <font color=#ffb800>Medium</font> |
| 1051 | [高度检查器](https://leetcode.com/problems/height-checker) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) [`排序`](/leetcode-js/outline/tag/sorting.md) | <font color=#15bd66>Easy</font> |
| 1122 | [数组的相对排序](https://leetcode.com/problems/relative-sort-array) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) `1+` | <font color=#15bd66>Easy</font> |
| 1833 | [雪糕的最大数量](https://leetcode.com/problems/maximum-ice-cream-bars) |  |  [`贪心`](/leetcode-js/outline/tag/greedy.md) [`数组`](/leetcode-js/outline/tag/array.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) `1+` | <font color=#ffb800>Medium</font> |
| 2037 | [使每位学生都有座位的最少移动次数](https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone) |  |  [`贪心`](/leetcode-js/outline/tag/greedy.md) [`数组`](/leetcode-js/outline/tag/array.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) `1+` | <font color=#15bd66>Easy</font> |
| 3088 | [使字符串反回文](https://leetcode.com/problems/make-string-anti-palindrome) |  |  [`贪心`](/leetcode-js/outline/tag/greedy.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) `1+` | <font color=#ff334b>Hard</font> |
| 3189 | [得到一个和平棋盘的最少步骤](https://leetcode.com/problems/minimum-moves-to-get-a-peaceful-board) |  |  [`贪心`](/leetcode-js/outline/tag/greedy.md) [`数组`](/leetcode-js/outline/tag/array.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 75 | [数组相对排序](https://leetcode.cn/problems/0H97ZC) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) `1+` | <font color=#15bd66>Easy</font> |

<style>
.blue {
    background-color: #096dd9;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-size: 0.85em;
    border-radius: 3px;
    color: white;
    font-weight: 500;
}
table th:first-of-type { width: 10%; }
table th:nth-of-type(2) { width: 35%; }
table th:nth-of-type(3) { width: 10%; }
table th:nth-of-type(4) { width: 35%; }
table th:nth-of-type(5) { width: 10%; }
</style>
