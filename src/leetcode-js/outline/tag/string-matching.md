# 字符串匹配

::: details 全部标签

**数据结构**

[`数组`](/leetcode-js/outline/tag/array.md) [`矩阵`](/leetcode-js/outline/tag/matrix.md) [`链表`](/leetcode-js/outline/tag/linked-list.md) [`双向链表`](/leetcode-js/outline/tag/doubly-linked-list.md) [`栈`](/leetcode-js/outline/tag/stack.md) [`单调栈`](/leetcode-js/outline/tag/monotonic-stack.md) [`队列`](/leetcode-js/outline/tag/queue.md) [`单调队列`](/leetcode-js/outline/tag/monotonic-queue.md) [`堆（优先队列）`](/leetcode-js/outline/tag/heap-priority-queue.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) [`字符串`](/leetcode-js/outline/tag/string.md) <span class="blue">字符串匹配</span> [`树`](/leetcode-js/outline/tag/tree.md) [`二叉树`](/leetcode-js/outline/tag/binary-tree.md) [`二叉搜索树`](/leetcode-js/outline/tag/binary-search-tree.md) [`最小生成树`](/leetcode-js/outline/tag/minimum-spanning-tree.md) [`图`](/leetcode-js/outline/tag/graph.md) [`有序集合`](/leetcode-js/outline/tag/ordered-set.md) [`拓扑排序`](/leetcode-js/outline/tag/topological-sort.md) [`最短路`](/leetcode-js/outline/tag/shortest-path.md) [`强连通分量`](/leetcode-js/outline/tag/strongly-connected-component.md) [`欧拉回路`](/leetcode-js/outline/tag/eulerian-circuit.md) [`双连通分量`](/leetcode-js/outline/tag/biconnected-component.md) [`并查集`](/leetcode-js/outline/tag/union-find.md) [`字典树`](/leetcode-js/outline/tag/trie.md) [`线段树`](/leetcode-js/outline/tag/segment-tree.md) [`树状数组`](/leetcode-js/outline/tag/binary-indexed-tree.md) [`后缀数组`](/leetcode-js/outline/tag/suffix-array.md)

**算法**

[`枚举`](/leetcode-js/outline/tag/enumeration.md) [`递归`](/leetcode-js/outline/tag/recursion.md) [`分治`](/leetcode-js/outline/tag/divide-and-conquer.md) [`回溯`](/leetcode-js/outline/tag/backtracking.md) [`贪心`](/leetcode-js/outline/tag/greedy.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) [`排序`](/leetcode-js/outline/tag/sorting.md) [`桶排序`](/leetcode-js/outline/tag/bucket-sort.md) [`计数排序`](/leetcode-js/outline/tag/counting-sort.md) [`基数排序`](/leetcode-js/outline/tag/radix-sort.md) [`归并排序`](/leetcode-js/outline/tag/merge-sort.md) [`快速选择`](/leetcode-js/outline/tag/quickselect.md) [`二分查找`](/leetcode-js/outline/tag/binary-search.md) [`记忆化搜索`](/leetcode-js/outline/tag/memoization.md) [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`广度优先搜索`](/leetcode-js/outline/tag/breadth-first-search.md) [`双指针`](/leetcode-js/outline/tag/two-pointers.md) [`位运算`](/leetcode-js/outline/tag/bit-manipulation.md) [`前缀和`](/leetcode-js/outline/tag/prefix-sum.md) [`计数`](/leetcode-js/outline/tag/counting.md) [`滑动窗口`](/leetcode-js/outline/tag/sliding-window.md) [`状态压缩`](/leetcode-js/outline/tag/bitmask.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) [`滚动哈希`](/leetcode-js/outline/tag/rolling-hash.md) [`扫描线`](/leetcode-js/outline/tag/line-sweep.md)

**其他**

[`数学`](/leetcode-js/outline/tag/math.md) [`数论`](/leetcode-js/outline/tag/number-theory.md) [`几何`](/leetcode-js/outline/tag/geometry.md) [`博弈`](/leetcode-js/outline/tag/game-theory.md) [`模拟`](/leetcode-js/outline/tag/simulation.md) [`组合数学`](/leetcode-js/outline/tag/combinatorics.md) [`随机化`](/leetcode-js/outline/tag/randomized.md) [`概率与统计`](/leetcode-js/outline/tag/probability-and-statistics.md) [`水塘抽样`](/leetcode-js/outline/tag/reservoir-sampling.md) [`拒绝采样`](/leetcode-js/outline/tag/rejection-sampling.md) [`数据库`](/leetcode-js/outline/tag/database.md) [`设计`](/leetcode-js/outline/tag/design.md) [`数据流`](/leetcode-js/outline/tag/data-stream.md) [`脑筋急转弯`](/leetcode-js/outline/tag/brainteaser.md) [`交互`](/leetcode-js/outline/tag/interactive.md) [`迭代器`](/leetcode-js/outline/tag/iterator.md) [`多线程`](/leetcode-js/outline/tag/concurrency.md)
:::

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 28 | [找出字符串中第一个匹配项的下标](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string) | [[✓]](/leetcode-js/problem/0028.md) |  [`双指针`](/leetcode-js/outline/tag/two-pointers.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#15bd66>Easy</font> |
| 214 | [最短回文串](https://leetcode.com/problems/shortest-palindrome) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 459 | [重复的子字符串](https://leetcode.com/problems/repeated-substring-pattern) | [[✓]](/leetcode-js/problem/0459.md) |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#15bd66>Easy</font> |
| 572 | [另一棵树的子树](https://leetcode.com/problems/subtree-of-another-tree) | [[✓]](/leetcode-js/problem/0572.md) |  [`树`](/leetcode-js/outline/tag/tree.md) [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`二叉树`](/leetcode-js/outline/tag/binary-tree.md) `2+` | <font color=#15bd66>Easy</font> |
| 616 | [给字符串添加加粗标签](https://leetcode.com/problems/add-bold-tag-in-string) |  |  [`字典树`](/leetcode-js/outline/tag/trie.md) [`数组`](/leetcode-js/outline/tag/array.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 686 | [重复叠加字符串匹配](https://leetcode.com/problems/repeated-string-match) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#ffb800>Medium</font> |
| 758 | [字符串中的加粗单词](https://leetcode.com/problems/bold-words-in-string) |  |  [`字典树`](/leetcode-js/outline/tag/trie.md) [`数组`](/leetcode-js/outline/tag/array.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 796 | [旋转字符串](https://leetcode.com/problems/rotate-string) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#15bd66>Easy</font> |
| 1023 | [驼峰式匹配](https://leetcode.com/problems/camelcase-matching) |  |  [`字典树`](/leetcode-js/outline/tag/trie.md) [`数组`](/leetcode-js/outline/tag/array.md) [`双指针`](/leetcode-js/outline/tag/two-pointers.md) `2+` | <font color=#ffb800>Medium</font> |
| 1392 | [最长快乐前缀](https://leetcode.com/problems/longest-happy-prefix) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 1397 | [找到所有好字符串](https://leetcode.com/problems/find-all-good-strings) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#ff334b>Hard</font> |
| 1408 | [数组中的字符串匹配](https://leetcode.com/problems/string-matching-in-an-array) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#15bd66>Easy</font> |
| 1455 | [检查单词是否为句中其他单词的前缀](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence) |  |  [`双指针`](/leetcode-js/outline/tag/two-pointers.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#15bd66>Easy</font> |
| 1668 | [最大重复子字符串](https://leetcode.com/problems/maximum-repeating-substring) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#15bd66>Easy</font> |
| 1764 | [通过连接另一个数组的子数组得到一个数组](https://leetcode.com/problems/form-array-by-concatenating-subarrays-of-another-array) |  |  [`贪心`](/leetcode-js/outline/tag/greedy.md) [`数组`](/leetcode-js/outline/tag/array.md) [`双指针`](/leetcode-js/outline/tag/two-pointers.md) `1+` | <font color=#ffb800>Medium</font> |
| 2185 | [统计包含给定前缀的字符串](https://leetcode.com/problems/counting-words-with-a-given-prefix) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#15bd66>Easy</font> |
| 2223 | [构造字符串的总得分和](https://leetcode.com/problems/sum-of-scores-of-built-strings) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`二分查找`](/leetcode-js/outline/tag/binary-search.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) `3+` | <font color=#ff334b>Hard</font> |
| 2301 | [替换字符后匹配](https://leetcode.com/problems/match-substring-after-replacement) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) [`字符串`](/leetcode-js/outline/tag/string.md) `1+` | <font color=#ff334b>Hard</font> |
| 2430 | [对字母串可执行的最大删除数](https://leetcode.com/problems/maximum-deletions-on-a-string) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) `2+` | <font color=#ff334b>Hard</font> |
| 2851 | [字符串转换](https://leetcode.com/problems/string-transformation) |  |  [`数学`](/leetcode-js/outline/tag/math.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`动态规划`](/leetcode-js/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 3006 | [找出数组中的美丽下标 I](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i) |  |  [`双指针`](/leetcode-js/outline/tag/two-pointers.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`二分查找`](/leetcode-js/outline/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 3008 | [找出数组中的美丽下标 II](https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii) |  |  [`双指针`](/leetcode-js/outline/tag/two-pointers.md) [`字符串`](/leetcode-js/outline/tag/string.md) [`二分查找`](/leetcode-js/outline/tag/binary-search.md) `3+` | <font color=#ff334b>Hard</font> |
| 3023 | [在无限流中寻找模式 I](https://leetcode.com/problems/find-pattern-in-infinite-stream-i) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`滑动窗口`](/leetcode-js/outline/tag/sliding-window.md) `2+` | <font color=#ffb800>Medium</font> |
| 3029 | [将单词恢复初始状态所需的最短时间 I](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-i) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) `1+` | <font color=#ffb800>Medium</font> |
| 3031 | [将单词恢复初始状态所需的最短时间 II](https://leetcode.com/problems/minimum-time-to-revert-word-to-initial-state-ii) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 3034 | [匹配模式数组的子数组数目 I](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-i) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) `1+` | <font color=#ffb800>Medium</font> |
| 3036 | [匹配模式数组的子数组数目 II](https://leetcode.com/problems/number-of-subarrays-that-match-a-pattern-ii) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`哈希函数`](/leetcode-js/outline/tag/hash-function.md) `1+` | <font color=#ff334b>Hard</font> |
| 3037 | [在无限流中寻找模式 II](https://leetcode.com/problems/find-pattern-in-infinite-stream-ii) |  |  [`数组`](/leetcode-js/outline/tag/array.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) [`滑动窗口`](/leetcode-js/outline/tag/sliding-window.md) `2+` | <font color=#ff334b>Hard</font> |
| 3042 | [统计前后缀下标对 I](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i) |  |  [`字典树`](/leetcode-js/outline/tag/trie.md) [`数组`](/leetcode-js/outline/tag/array.md) [`字符串`](/leetcode-js/outline/tag/string.md) `3+` | <font color=#15bd66>Easy</font> |
| 3045 | [统计前后缀下标对 II](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii) |  |  [`字典树`](/leetcode-js/outline/tag/trie.md) [`数组`](/leetcode-js/outline/tag/array.md) [`字符串`](/leetcode-js/outline/tag/string.md) `3+` | <font color=#ff334b>Hard</font> |
| 3291 | [形成目标字符串需要的最少字符串数 I](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i) |  |  [`字典树`](/leetcode-js/outline/tag/trie.md) [`线段树`](/leetcode-js/outline/tag/segment-tree.md) [`数组`](/leetcode-js/outline/tag/array.md) `6+` | <font color=#ffb800>Medium</font> |
| 3292 | [形成目标字符串需要的最少字符串数 II](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii) |  |  [`线段树`](/leetcode-js/outline/tag/segment-tree.md) [`数组`](/leetcode-js/outline/tag/array.md) [`字符串`](/leetcode-js/outline/tag/string.md) `5+` | <font color=#ff334b>Hard</font> |
| 3303 | [第一个几乎相等子字符串的下标](https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#ff334b>Hard</font> |
| 面试题 01.09 | [字符串轮转](https://leetcode.cn/problems/string-rotation-lcci) |  |  [`字符串`](/leetcode-js/outline/tag/string.md) [`字符串匹配`](/leetcode-js/outline/tag/string-matching.md) | <font color=#15bd66>Easy</font> |
| 面试题 04.10 | [检查子树](https://leetcode.cn/problems/check-subtree-lcci) |  |  [`树`](/leetcode-js/outline/tag/tree.md) [`深度优先搜索`](/leetcode-js/outline/tag/depth-first-search.md) [`二叉树`](/leetcode-js/outline/tag/binary-tree.md) `2+` | <font color=#ffb800>Medium</font> |
| 面试题 17.17 | [多次搜索](https://leetcode.cn/problems/multi-search-lcci) |  |  [`字典树`](/leetcode-js/outline/tag/trie.md) [`数组`](/leetcode-js/outline/tag/array.md) [`哈希表`](/leetcode-js/outline/tag/hash-table.md) `3+` | <font color=#ffb800>Medium</font> |

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
