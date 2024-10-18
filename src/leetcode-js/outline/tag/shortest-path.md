# 最短路

::: details 全部标签

**数据结构**

[`数组`](/leetcode-js/outline/tag/array.md) [`矩阵`](/leetcode-js/outline/tag/matrix.md) [`链表`](/leetcode-js/outline/tag/linked-list.md) [`双向链表`](/leetcode-js/outline/tag/doubly-linked-list.md) [`栈`](/leetcode-js/outline/tag/stack.md) [`单调栈`](/leetcode-js/outline/tag/monotonic-stack.md) [`队列`](/leetcode-js/outline/tag/queue.md) [`单调队列`](/leetcode-js/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode-js/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`树`](/leetcode-js/outline/tag/tree.md) [`二叉树`](/leetcode-js/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode-js/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode-js/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode-js/outline/tag/graph.md) [`有序集合`](/leetcode-js/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode-js/outline/tag/topological-sort.md) <span class="blue">最短路</span> [`强连通分量`](/leetcode-js/outline/tag/strongly-connected-component.md) [`欧拉回路`](/leetcode-js/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode-js/outline/tag/biconnected-component.md) [`并查集`](/leetcode-js/outline/tag/union-find.md) [`字典树`](/leetcode-js/outline/tag/trie.md) [`线段树`](/leetcode-js/outline/tag/segment-tree.md) [`树状数组`](/leetcode-js/outline/tag/binary-indexed-tree.md) [`后缀数组`](/leetcode-js/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode-js/outline/tag/enumeration.md) [`递归`](/leetcode-js/outline/tag/recursion.md) [`分治`](/leetcode-js/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode-js/outline/tag/backtracking.md) [`贪心`](/leetcode-js/outline/tag/greedy.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) [`排序`](/leetcode-js/outline/tag/sorting.md) [`桶排序`](/leetcode-js/outline/tag/bucket-sort.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) [`基数排序`](/leetcode-js/outline/tag/radix-sort.md) [`归并排序`](/leetcode-js/outline/tag/merge-sort.md) [`快速选择`](/leetcode-js/outline/tag/quickselect.md) [`二分查找`](/leetcode-js/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode-js/outline/tag/memoization.md) [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`双指针`](/leetcode-js/outline/tag/two-pointers.md) [`位运算`](/leetcode-js/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode-js/outline/tag/prefix-sum.md) [`计数`](/leetcode-js/outline/tag/counting.md) [`滑动窗口`](/leetcode-js/outline/tag/sliding-window.md) [`状态压缩`](/leetcode-js/outline/tag/bitmask.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) [`滚动哈希`](/leetcode-js/outline/tag/rolling-hash.md) [`扫描线`](/leetcode-js/outline/tag/line-sweep.md)

**其他**

[`数学`](/leetcode-js/outline/tag/math.md) [`数论`](/leetcode-js/outline/tag/number-theory.md) [`几何`](/leetcode-js/outline/tag/geometry.md) [`博弈`](/leetcode-js/outline/tag/game-theory.md) [`模拟`](/leetcode-js/outline/tag/simulation.md) [`组合数学`](/leetcode-js/outline/tag/combinatorics.md) [`随机化`](/leetcode-js/outline/tag/randomized.md) [`概率与统计`](/leetcode-js/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode-js/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode-js/outline/tag/rejection-sampling.md) [`数据库`](/leetcode-js/outline/tag/database.md) [`设计`](/leetcode-js/outline/tag/design.md) [`数据流`](/leetcode-js/outline/tag/data-stream.md) [`脑筋急转弯`](/leetcode-js/outline/tag/brainteaser.md) [`交互`](/leetcode-js/outline/tag/interactive.md) [`迭代器`](/leetcode-js/outline/tag/iterator.md) [`多线程`](/leetcode-js/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 399 | [除法求值](https://leetcode.com/problems/evaluate-division) | [[✓]](/leetcode-js/problem/0399.md) |  [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`并查集`](/leetcode-js/outline/tag/union-find.md) `4+` | <font color=#ffb800>Medium</font> |
| 499 | [迷宫 III](https://leetcode.com/problems/the-maze-iii) |  |  [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 505 | [迷宫 II](https://leetcode.com/problems/the-maze-ii) |  |  [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) `4+` | <font color=#ffb800>Medium</font> |
| 743 | [网络延迟时间](https://leetcode.com/problems/network-delay-time) |  |  [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) `2+` | <font color=#ffb800>Medium</font> |
| 787 | [K 站中转内最便宜的航班](https://leetcode.com/problems/cheapest-flights-within-k-stops) |  |  [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) `3+` | <font color=#ffb800>Medium</font> |
| 882 | [细分图中的可到达节点](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) [`堆（优先队列）`](/leetcode-js/outline/tag/heap-priority-queue.md) | <font color=#ff334b>Hard</font> |
| 1334 | [阈值距离内邻居最少的城市](https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) | <font color=#ffb800>Medium</font> |
| 1368 | [使网格图至少有一条有效路径的最小代价](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid) |  |  [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 1514 | [概率最大的路径](https://leetcode.com/problems/path-with-maximum-probability) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 1786 | [从第一个节点出发到最后一个节点的受限路径数](https://leetcode.com/problems/number-of-restricted-paths-from-first-to-last-node) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`拓扑排序`](/leetcode-js/outline/tag/topological-sort.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1976 | [到达目的地的方案数](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`拓扑排序`](/leetcode-js/outline/tag/topological-sort.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 2045 | [到达目的地的第二短时间](https://leetcode.com/problems/second-minimum-time-to-reach-destination) |  |  [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) | <font color=#ff334b>Hard</font> |
| 2093 | [前往目标城市的最小费用](https://leetcode.com/problems/minimum-cost-to-reach-city-with-discounts) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) [`堆（优先队列）`](/leetcode-js/outline/tag/heap-priority-queue.md) | <font color=#ffb800>Medium</font> |
| 2203 | [得到要求路径的最小带权子图](https://leetcode.com/problems/minimum-weighted-subgraph-with-the-required-paths) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) | <font color=#ff334b>Hard</font> |
| 2290 | [到达角落需要移除障碍物的最小数目](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner) |  |  [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2297 | [跳跃游戏 VIII](https://leetcode.com/problems/jump-game-viii) |  |  [`栈`](/leetcode-js/outline/tag/stack.md) [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 2473 | [购买苹果的最低成本](https://leetcode.com/problems/minimum-cost-to-buy-apples) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 2577 | [在网格图中访问一个格子的最少时间](https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid) |  |  [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2642 | [设计可以求最短路径的图类](https://leetcode.com/problems/design-graph-with-shortest-path-calculator) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`设计`](/leetcode-js/outline/tag/design.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) `1+` | <font color=#ff334b>Hard</font> |
| 2662 | [前往目标的最小代价](https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 2699 | [修改图中的边权](https://leetcode.com/problems/modify-graph-edge-weights) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) [`堆（优先队列）`](/leetcode-js/outline/tag/heap-priority-queue.md) | <font color=#ff334b>Hard</font> |
| 2714 | [找到 K 次跨越的最短路径](https://leetcode.com/problems/find-shortest-path-with-k-hops) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) [`堆（优先队列）`](/leetcode-js/outline/tag/heap-priority-queue.md) | <font color=#ff334b>Hard</font> |
| 2737 | [找到最近的标记节点](https://leetcode.com/problems/find-the-closest-marked-node) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 2959 | [关闭分部的可行集合数目](https://leetcode.com/problems/number-of-possible-sets-of-closing-branches) |  |  [`位运算`](/leetcode-js/outline/tag/bit-manipulation.md) [`图`](/leetcode-js/outline/tag/graph.md) [`枚举`](/leetcode-js/outline/tag/enumeration.md) `2+` | <font color=#ff334b>Hard</font> |
| 2976 | [转换字符串的最小成本 I](https://leetcode.com/problems/minimum-cost-to-convert-string-i) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) [`字符串`](/leetcode-js/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 2977 | [转换字符串的最小成本 II](https://leetcode.com/problems/minimum-cost-to-convert-string-ii) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`字典树`](/leetcode-js/outline/tag/trie.md) [`数组`](/leetcode-js/outline/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 3112 | [访问消失节点的最少时间](https://leetcode.com/problems/minimum-time-to-visit-disappearing-nodes) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) `1+` | <font color=#ffb800>Medium</font> |
| 3123 | [最短路径中的边](https://leetcode.com/problems/find-edges-in-shortest-paths) |  |  [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) `2+` | <font color=#ff334b>Hard</font> |
| 3286 | [穿越网格图的安全路径](https://leetcode.com/problems/find-a-safe-walk-through-a-grid) |  |  [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| LCP 35 | [电动车游城市](https://leetcode.cn/problems/DFPeFJ) |  |  [`图`](/leetcode-js/outline/tag/graph.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) [`堆（优先队列）`](/leetcode-js/outline/tag/heap-priority-queue.md) | <font color=#ff334b>Hard</font> |
| LCP 56 | [信物传送](https://leetcode.cn/problems/6UEx57) |  |  [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`图`](/leetcode-js/outline/tag/graph.md) [`数组`](/leetcode-js/outline/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 111 | [计算除法](https://leetcode.cn/problems/vlzXQL) |  |  [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`并查集`](/leetcode-js/outline/tag/union-find.md) `3+` | <font color=#ffb800>Medium</font> |

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
