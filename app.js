/* ════════════════════════════════════════════════════════════
   PROBLEM DATA — 150 problems with descriptions & examples
════════════════════════════════════════════════════════════ */
const TOPICS = [
{id:"arrays-hashing",name:"Arrays & Hashing",problems:[
{n:"Contains Duplicate",d:"easy",
 desc:"Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
 ex:[{input:"nums = [1,2,3,1]",output:"true"},{input:"nums = [1,2,3,4]",output:"false"}],
 con:"1 ≤ nums.length ≤ 10⁵ · −10⁹ ≤ nums[i] ≤ 10⁹"},
{n:"Valid Anagram",d:"easy",
 desc:"Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram is a word formed by rearranging the letters of another.",
 ex:[{input:'s = "anagram", t = "nagaram"',output:"true"},{input:'s = "rat", t = "car"',output:"false"}],
 con:"1 ≤ s.length, t.length ≤ 5×10⁴ · s and t consist of lowercase English letters"},
{n:"Two Sum",d:"easy",
 desc:"Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. Each input has exactly one solution.",
 ex:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]"},{input:"nums = [3,2,4], target = 6",output:"[1,2]"}],
 con:"2 ≤ nums.length ≤ 10⁴ · Only one valid answer exists"},
{n:"Group Anagrams",d:"medium",
 desc:"Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
 ex:[{input:'strs = ["eat","tea","tan","ate","nat","bat"]',output:'[["bat"],["nat","tan"],["ate","eat","tea"]]'}],
 con:"1 ≤ strs.length ≤ 10⁴ · strs[i] consists of lowercase English letters"},
{n:"Top K Frequent Elements",d:"medium",
 desc:"Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.",
 ex:[{input:"nums = [1,1,1,2,2,3], k = 2",output:"[1,2]"},{input:"nums = [1], k = 1",output:"[1]"}],
 con:"1 ≤ k ≤ nums.length ≤ 10⁵ · Answer is unique"},
{n:"Encode and Decode Strings",d:"medium",
 desc:"Design an algorithm to encode a list of strings to a single string. The encoded string is then transmitted over the network and decoded back to the original list of strings.",
 ex:[{input:'["neet","code","love","you"]',output:'["neet","code","love","you"]'}],
 con:"0 ≤ strs.length ≤ 200 · Strings may contain any 256 valid ASCII characters"},
{n:"Product of Array Except Self",d:"medium",
 desc:"Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Solve in O(n) without using division.",
 ex:[{input:"nums = [1,2,3,4]",output:"[24,12,8,6]"},{input:"nums = [-1,1,0,-3,3]",output:"[0,0,9,0,0]"}],
 con:"2 ≤ nums.length ≤ 10⁵ · O(n) time, O(1) extra space"},
{n:"Valid Sudoku",d:"medium",
 desc:"Determine if a 9×9 Sudoku board is valid. Validate: each row, each column, and each of the nine 3×3 sub-boxes must contain the digits 1-9 without repetition.",
 ex:[{input:"board = (9x9 grid with partial fills)",output:"true"}],
 con:"board[i][j] is a digit 1-9 or '.' · Only filled cells need to be validated"},
{n:"Longest Consecutive Sequence",d:"medium",
 desc:"Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Must run in O(n) time.",
 ex:[{input:"nums = [100,4,200,1,3,2]",output:"4 (sequence: 1,2,3,4)"},{input:"nums = [0,3,7,2,5,8,4,6,0,1]",output:"9"}],
 con:"0 ≤ nums.length ≤ 10⁵ · O(n) required"},
]},

{id:"two-pointers",name:"Two Pointers",problems:[
{n:"Valid Palindrome",d:"easy",
 desc:"A phrase is a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.",
 ex:[{input:'s = "A man, a plan, a canal: Panama"',output:"true"},{input:'s = "race a car"',output:"false"}],
 con:"1 ≤ s.length ≤ 2×10⁵ · s consists of printable ASCII"},
{n:"Two Sum II Input Array Is Sorted",d:"medium",
 desc:"Given a 1-indexed sorted array, find two numbers that add up to target. Return their 1-indexed positions. Use only constant extra space.",
 ex:[{input:"numbers = [2,7,11,15], target = 9",output:"[1,2]"}],
 con:"2 ≤ numbers.length ≤ 3×10⁴ · Exactly one solution exists · O(1) space"},
{n:"3Sum",d:"medium",
 desc:"Given an integer array nums, return all triplets [nums[i], nums[j], nums[k]] such that i≠j≠k and nums[i]+nums[j]+nums[k] = 0. The solution set must not contain duplicate triplets.",
 ex:[{input:"nums = [-1,0,1,2,-1,-4]",output:"[[-1,-1,2],[-1,0,1]]"}],
 con:"-10⁵ ≤ nums[i] ≤ 10⁵ · No duplicate triplets in output"},
{n:"Container With Most Water",d:"medium",
 desc:"Given n vertical lines where heights[i] is the height of line i. Find two lines that, together with the x-axis, form a container with the most water.",
 ex:[{input:"height = [1,8,6,2,5,4,8,3,7]",output:"49"}],
 con:"n ≥ 2 · 0 ≤ height[i] ≤ 10⁴"},
{n:"Trapping Rain Water",d:"hard",
 desc:"Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
 ex:[{input:"height = [0,1,0,2,1,0,1,3,2,1,2,1]",output:"6"},{input:"height = [4,2,0,3,2,5]",output:"9"}],
 con:"n ≥ 1 · 0 ≤ height[i] ≤ 10⁵"},
]},

{id:"sliding-window",name:"Sliding Window",problems:[
{n:"Best Time to Buy And Sell Stock",d:"easy",
 desc:"You are given an array prices where prices[i] is the price of a given stock on the iᵗʰ day. Maximize your profit by choosing a single day to buy and a later day to sell.",
 ex:[{input:"prices = [7,1,5,3,6,4]",output:"5 (buy day 2 @ 1, sell day 5 @ 6)"},{input:"prices = [7,6,4,3,1]",output:"0"}],
 con:"1 ≤ prices.length ≤ 10⁵"},
{n:"Longest Substring Without Repeating Characters",d:"medium",
 desc:"Given a string s, find the length of the longest substring without repeating characters.",
 ex:[{input:'s = "abcabcbb"',output:"3 (abc)"},{input:'s = "bbbbb"',output:"1"},{input:'s = "pwwkew"',output:"3 (wke)"}],
 con:"0 ≤ s.length ≤ 5×10⁴ · s consists of English letters, digits, symbols, spaces"},
{n:"Longest Repeating Character Replacement",d:"medium",
 desc:"Given a string s and integer k, you can replace at most k characters. Return the length of the longest substring containing the same letter you can get.",
 ex:[{input:'s = "ABAB", k = 2',output:"4"},{input:'s = "AABABBA", k = 1',output:"4"}],
 con:"1 ≤ s.length ≤ 10⁵ · s consists of uppercase English letters"},
{n:"Permutation In String",d:"medium",
 desc:"Given two strings s1 and s2, return true if s2 contains a permutation of s1. In other words, return true if one of s1's permutations is a substring of s2.",
 ex:[{input:'s1 = "ab", s2 = "eidbaooo"',output:"true"},{input:'s1 = "ab", s2 = "eidboaoo"',output:"false"}],
 con:"1 ≤ s1.length, s2.length ≤ 10⁴"},
{n:"Minimum Window Substring",d:"hard",
 desc:"Given strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. Return empty string if no such window exists.",
 ex:[{input:'s = "ADOBECODEBANC", t = "ABC"',output:'"BANC"'}],
 con:"m, n ≥ 1 · O(m+n) expected"},
{n:"Sliding Window Maximum",d:"hard",
 desc:"Given an array nums and a sliding window of size k moving from left to right, return the max sliding window — the max value of each window.",
 ex:[{input:"nums = [1,3,-1,-3,5,3,6,7], k = 3",output:"[3,3,5,5,6,7]"}],
 con:"1 ≤ k ≤ nums.length ≤ 10⁵"},
]},

{id:"stack",name:"Stack",problems:[
{n:"Valid Parentheses",d:"easy",
 desc:"Given a string s containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type in the correct order.",
 ex:[{input:'s = "()"',output:"true"},{input:'s = "()[]{}"',output:"true"},{input:'s = "(]"',output:"false"}],
 con:"1 ≤ s.length ≤ 10⁴ · s consists of bracket characters only"},
{n:"Min Stack",d:"medium",
 desc:"Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement MinStack with all operations in O(1).",
 ex:[{input:"push(-2), push(0), push(-3), getMin(), pop(), top(), getMin()",output:"-3, 0, -2"}],
 con:"All operations run in O(1) time"},
{n:"Evaluate Reverse Polish Notation",d:"medium",
 desc:"Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, /. Each operand may be an integer or another expression.",
 ex:[{input:'tokens = ["2","1","+","3","*"]',output:"9 → ((2+1)*3)"},{input:'tokens = ["4","13","5","/","+"]',output:"6"}],
 con:"Division truncates toward zero"},
{n:"Generate Parentheses",d:"medium",
 desc:"Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
 ex:[{input:"n = 3",output:'["((()))","(()())","(())()","()(())","()()()"]'},{input:"n = 1",output:'["()"]'}],
 con:"1 ≤ n ≤ 8"},
{n:"Daily Temperatures",d:"medium",
 desc:"Given an array of integers temperatures representing daily temperatures, return an array answer where answer[i] is the number of days you have to wait for a warmer temperature.",
 ex:[{input:"temperatures = [73,74,75,71,69,72,76,73]",output:"[1,1,4,2,1,1,0,0]"}],
 con:"1 ≤ temperatures.length ≤ 10⁵"},
{n:"Car Fleet",d:"medium",
 desc:"N cars are going to the same destination. Given position and speed arrays, return the number of car fleets that will arrive at destination. Cars that catch up merge into a fleet.",
 ex:[{input:"target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]",output:"3"}],
 con:"n ≥ 1 · 0 < target ≤ 10⁶"},
{n:"Largest Rectangle In Histogram",d:"hard",
 desc:"Given an array of integers heights representing the histogram's bar heights where width of each bar is 1, return the area of the largest rectangle in the histogram.",
 ex:[{input:"heights = [2,1,5,6,2,3]",output:"10"},{input:"heights = [2,4]",output:"4"}],
 con:"1 ≤ heights.length ≤ 10⁵"},
]},

{id:"binary-search",name:"Binary Search",problems:[
{n:"Binary Search",d:"easy",
 desc:"Given an array of integers nums sorted in ascending order and a target integer, return the index of target or -1 if not present. Must run in O(log n).",
 ex:[{input:"nums = [-1,0,3,5,9,12], target = 9",output:"4"},{input:"nums = [-1,0,3,5,9,12], target = 2",output:"-1"}],
 con:"O(log n) required · nums has no duplicates"},
{n:"Search a 2D Matrix",d:"medium",
 desc:"Given an m×n matrix where rows are sorted and first integer of each row is greater than the last of the previous row, return true if target is in the matrix. O(log(m×n)) required.",
 ex:[{input:"matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",output:"true"}],
 con:"O(log(m·n)) time required"},
{n:"Koko Eating Bananas",d:"medium",
 desc:"Koko loves bananas. There are n piles of bananas. Koko can eat at most k bananas per hour. Return the minimum integer k such that she can eat all bananas within h hours.",
 ex:[{input:"piles = [3,6,7,11], h = 8",output:"4"},{input:"piles = [30,11,23,4,20], h = 5",output:"30"}],
 con:"1 ≤ piles.length ≤ h"},
{n:"Find Minimum In Rotated Sorted Array",d:"medium",
 desc:"Given the sorted rotated array nums of unique elements, return the minimum element. Must run in O(log n) time.",
 ex:[{input:"nums = [3,4,5,1,2]",output:"1"},{input:"nums = [4,5,6,7,0,1,2]",output:"0"}],
 con:"O(log n) required · All integers unique"},
{n:"Search In Rotated Sorted Array",d:"medium",
 desc:"Given the integer array nums sorted in ascending order (possibly rotated), return the index of target, or -1 if not in nums. Must be O(log n).",
 ex:[{input:"nums = [4,5,6,7,0,1,2], target = 0",output:"4"},{input:"nums = [4,5,6,7,0,1,2], target = 3",output:"-1"}],
 con:"O(log n) required · All values unique"},
{n:"Time Based Key Value Store",d:"medium",
 desc:"Design a time-based key-value data structure. Implement set(key,value,timestamp) and get(key,timestamp). get returns the value with largest timestamp ≤ given timestamp.",
 ex:[{input:'set("foo","bar",1), get("foo",1), get("foo",3), set("foo","bar2",4), get("foo",4)',output:'"bar","bar","bar2"'}],
 con:"All timestamps for set are strictly increasing"},
{n:"Median of Two Sorted Arrays",d:"hard",
 desc:"Given two sorted arrays nums1 and nums2 of size m and n, return the median of the two sorted arrays. Overall run time complexity must be O(log(m+n)).",
 ex:[{input:"nums1 = [1,3], nums2 = [2]",output:"2.00000"},{input:"nums1 = [1,2], nums2 = [3,4]",output:"2.50000"}],
 con:"O(log(m+n)) required"},
]},

{id:"linked-list",name:"Linked List",problems:[
{n:"Reverse Linked List",d:"easy",desc:"Given the head of a singly linked list, reverse the list, and return the reversed list.",ex:[{input:"head = [1,2,3,4,5]",output:"[5,4,3,2,1]"}],con:"0 ≤ n ≤ 5000"},
{n:"Merge Two Sorted Lists",d:"easy",desc:"Merge two sorted linked lists and return it as a new sorted list built by splicing together the nodes of the first two lists.",ex:[{input:"l1 = [1,2,4], l2 = [1,3,4]",output:"[1,1,2,3,4,4]"}],con:"Both lists are sorted in non-decreasing order"},
{n:"Linked List Cycle",d:"easy",desc:"Given head of a linked list, determine if the linked list has a cycle in it using O(1) memory.",ex:[{input:"head = [3,2,0,-4], pos = 1",output:"true"},{input:"head = [1,2], pos = -1",output:"false"}],con:"O(1) memory required"},
{n:"Reorder List",d:"medium",desc:"Given the head of a singly linked-list L0→L1→…→Ln, reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→… Do not modify values, only nodes.",ex:[{input:"head = [1,2,3,4]",output:"[1,4,2,3]"}],con:"Do not modify node values"},
{n:"Remove Nth Node From End of List",d:"medium",desc:"Given the head of a linked list, remove the nᵗʰ node from the end of the list and return its head. Try doing it in one pass.",ex:[{input:"head = [1,2,3,4,5], n = 2",output:"[1,2,3,5]"}],con:"One pass preferred"},
{n:"Copy List With Random Pointer",d:"medium",desc:"A linked list where each node also has a random pointer which could point to any node or null. Construct a deep copy in O(n) time and O(1) space (not counting output).",ex:[{input:"head = [[7,null],[13,0],[11,4],[10,2],[1,0]]",output:"Deep copy of the list"}],con:"O(n) time"},
{n:"Add Two Numbers",d:"medium",desc:"Two non-empty linked lists represent two non-negative integers in reverse order. Add the two numbers and return the sum as a linked list.",ex:[{input:"l1 = [2,4,3], l2 = [5,6,4]",output:"[7,0,8] (342+465=807)"}],con:"No leading zeros except number 0"},
{n:"Find The Duplicate Number",d:"medium",desc:"Given an array nums of n+1 integers where each is in [1,n], return the duplicate number. Use only constant extra space. Do not modify the array.",ex:[{input:"nums = [1,3,4,2,2]",output:"2"},{input:"nums = [3,1,3,4,2]",output:"3"}],con:"O(1) extra space · Do not modify array"},
{n:"LRU Cache",d:"medium",desc:"Design a data structure that follows the LRU (Least Recently Used) cache constraints. Implement get(key) and put(key,value) both in O(1) average time.",ex:[{input:"capacity=2, put(1,1), put(2,2), get(1), put(3,3), get(2), put(4,4), get(1), get(3), get(4)",output:"1,-1,-1,3,4"}],con:"O(1) time for both operations"},
{n:"Merge K Sorted Lists",d:"hard",desc:"Given an array of k linked-lists, each sorted in ascending order, merge all the linked-lists into one sorted linked-list and return it.",ex:[{input:"lists = [[1,4,5],[1,3,4],[2,6]]",output:"[1,1,2,3,4,4,5,6]"}],con:"O(N log k) expected"},
{n:"Reverse Nodes In K Group",d:"hard",desc:"Given the head of a linked list, reverse the nodes of the list k at a time. If the number of nodes is not a multiple of k then left-out nodes should remain as is.",ex:[{input:"head = [1,2,3,4,5], k = 2",output:"[2,1,4,3,5]"}],con:"Only actual node reversal allowed"},
]},

{id:"trees",name:"Trees",problems:[
{n:"Invert Binary Tree",d:"easy",desc:"Given the root of a binary tree, invert the tree, and return its root.",ex:[{input:"root = [4,2,7,1,3,6,9]",output:"[4,7,2,9,6,3,1]"}],con:"0 ≤ nodes ≤ 100"},
{n:"Maximum Depth of Binary Tree",d:"easy",desc:"Given the root of a binary tree, return its maximum depth — the number of nodes along the longest path from root to the farthest leaf node.",ex:[{input:"root = [3,9,20,null,null,15,7]",output:"3"}],con:"0 ≤ nodes ≤ 10⁴"},
{n:"Diameter of Binary Tree",d:"easy",desc:"Given the root of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes (may not pass through root).",ex:[{input:"root = [1,2,3,4,5]",output:"3 (path 4→2→1→3 or 5→2→1→3)"}],con:"Path need not pass through root"},
{n:"Balanced Binary Tree",d:"easy",desc:"Given a binary tree, determine if it is height-balanced — a tree where the depth of the two subtrees of every node never differs by more than one.",ex:[{input:"root = [3,9,20,null,null,15,7]",output:"true"},{input:"root = [1,2,2,3,3,null,null,4,4]",output:"false"}],con:"0 ≤ nodes ≤ 5000"},
{n:"Same Tree",d:"easy",desc:"Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if structurally identical with same node values.",ex:[{input:"p = [1,2,3], q = [1,2,3]",output:"true"},{input:"p = [1,2], q = [1,null,2]",output:"false"}],con:"0 ≤ nodes ≤ 100"},
{n:"Subtree of Another Tree",d:"easy",desc:"Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot.",ex:[{input:"root = [3,4,5,1,2], subRoot = [4,1,2]",output:"true"}],con:"root has up to 2000 nodes · subRoot up to 1000"},
{n:"Lowest Common Ancestor of a Binary Search Tree",d:"medium",desc:"Given a BST and two nodes p and q, find their lowest common ancestor. The LCA is the lowest node that has both p and q as descendants.",ex:[{input:"root = [6,2,8,0,4,7,9], p = 2, q = 8",output:"6"},{input:"p = 2, q = 4",output:"2"}],con:"BST property holds · p ≠ q"},
{n:"Binary Tree Level Order Traversal",d:"medium",desc:"Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",ex:[{input:"root = [3,9,20,null,null,15,7]",output:"[[3],[9,20],[15,7]]"}],con:"0 ≤ nodes ≤ 2000"},
{n:"Binary Tree Right Side View",d:"medium",desc:"Given the root of a binary tree, imagine yourself standing on the right side of it. Return the values of the nodes you can see ordered from top to bottom.",ex:[{input:"root = [1,2,3,null,5,null,4]",output:"[1,3,4]"}],con:"0 ≤ nodes ≤ 100"},
{n:"Count Good Nodes In Binary Tree",d:"medium",desc:"Given a binary tree, a node X is good if in the path from root to X there are no nodes with a value greater than X. Return the number of good nodes.",ex:[{input:"root = [3,1,4,3,null,1,5]",output:"4"}],con:"1 ≤ nodes ≤ 10⁵ · −10⁴ ≤ val ≤ 10⁴"},
{n:"Validate Binary Search Tree",d:"medium",desc:"Given the root of a binary tree, determine if it is a valid binary search tree. A valid BST: left subtree only contains nodes less than the node's key, right subtree only nodes greater.",ex:[{input:"root = [2,1,3]",output:"true"},{input:"root = [5,1,4,null,null,3,6]",output:"false"}],con:"Check full subtree validity, not just immediate children"},
{n:"Kth Smallest Element In a BST",d:"medium",desc:"Given the root of a BST and an integer k, return the kᵗʰ smallest value among all the values of the nodes in the tree.",ex:[{input:"root = [3,1,4,null,2], k = 1",output:"1"},{input:"root = [5,3,6,2,4,null,null,1], k = 3",output:"3"}],con:"1 ≤ k ≤ n ≤ 10⁴"},
{n:"Construct Binary Tree From Preorder And Inorder Traversal",d:"medium",desc:"Given two integer arrays preorder and inorder where preorder is the preorder traversal and inorder is the inorder traversal of the same tree, construct and return the binary tree.",ex:[{input:"preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",output:"root = [3,9,20,null,null,15,7]"}],con:"All values unique"},
{n:"Binary Tree Maximum Path Sum",d:"hard",desc:"A path in a binary tree is a sequence of nodes where each pair is connected, each node appears at most once. Given root, return the maximum path sum. Path need not pass through root.",ex:[{input:"root = [-10,9,20,null,null,15,7]",output:"42 (15→20→7)"}],con:"−1000 ≤ node.val ≤ 1000"},
{n:"Serialize And Deserialize Binary Tree",d:"hard",desc:"Design an algorithm to serialize and deserialize a binary tree. There is no restriction on your serialization/deserialization algorithm; you just need to ensure it works.",ex:[{input:"root = [1,2,3,null,null,4,5]",output:"Serialize then deserialize back to original tree"}],con:"No restriction on format"},
]},

{id:"heap",name:"Heap / Priority Queue",problems:[
{n:"Kth Largest Element In a Stream",d:"easy",desc:"Design a class to find the kᵗʰ largest element in a stream. Note that it is the kᵗʰ largest element in the sorted order, not the kᵗʰ distinct element.",ex:[{input:"k=3, nums=[4,5,8,2], add(3), add(5), add(10), add(9), add(4)",output:"4,5,5,8,8"}],con:"O(log k) per add"},
{n:"Last Stone Weight",d:"easy",desc:"Each turn, smash the two heaviest stones. If equal they both disappear; if unequal the smaller one is destroyed and the larger returns (weight difference). Return weight of last stone or 0.",ex:[{input:"stones = [2,7,4,1,8,1]",output:"1"}],con:"1 ≤ stones.length ≤ 30"},
{n:"K Closest Points to Origin",d:"medium",desc:"Given an array of points where points[i] = [xi, yi], and an integer k, return the k closest points to the origin (0, 0). Distance is Euclidean.",ex:[{input:"points = [[1,3],[-2,2]], k = 1",output:"[[-2,2]]"}],con:"Answer may be in any order"},
{n:"Kth Largest Element In An Array",d:"medium",desc:"Given an integer array nums and an integer k, return the kᵗʰ largest element in the array. Note it's the kᵗʰ largest in sorted order, not distinct.",ex:[{input:"nums = [3,2,1,5,6,4], k = 2",output:"5"},{input:"nums = [3,2,3,1,2,4,5,5,6], k = 4",output:"4"}],con:"Try to solve in O(n) average"},
{n:"Task Scheduler",d:"medium",desc:"Given a char array tasks and integer n, return minimum number of intervals to finish all tasks. Identical tasks must be separated by at least n intervals.",ex:[{input:"tasks = [A,A,A,B,B,B], n = 2",output:"8 → A→B→idle→A→B→idle→A→B"}],con:"26 possible task types"},
{n:"Design Twitter",d:"medium",desc:"Design a simplified version of Twitter: postTweet, getNewsFeed (10 most recent in user's feed), follow, unfollow. Each tweet has a unique ID.",ex:[{input:"postTweet(1,5), getNewsFeed(1), follow(1,2), postTweet(2,6), getNewsFeed(1), unfollow(1,2), getNewsFeed(1)",output:"[5],[6,5],[5]"}],con:"getNewsFeed returns 10 most recent"},
{n:"Find Median From Data Stream",d:"hard",desc:"Implement MedianFinder with addNum(num) and findMedian(). findMedian returns the median of all elements so far. Use two heaps for O(log n) add and O(1) find.",ex:[{input:"addNum(1), addNum(2), findMedian(), addNum(3), findMedian()",output:"1.5, 2.0"}],con:"O(log n) addNum, O(1) findMedian"},
]},

{id:"backtracking",name:"Backtracking",problems:[
{n:"Subsets",d:"medium",desc:"Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",ex:[{input:"nums = [1,2,3]",output:"[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]"}],con:"All elements unique · 2ⁿ subsets expected"},
{n:"Combination Sum",d:"medium",desc:"Given an array of distinct integers candidates and a target, return all unique combinations of candidates that sum to target. The same number may be chosen unlimited times.",ex:[{input:"candidates = [2,3,6,7], target = 7",output:"[[2,2,3],[7]]"}],con:"Candidates are distinct · May reuse elements"},
{n:"Combination Sum II",d:"medium",desc:"Given a collection candidates (may have duplicates) and target, return unique combinations that sum to target. Each number may only be used once.",ex:[{input:"candidates = [10,1,2,7,6,1,5], target = 8",output:"[[1,1,6],[1,2,5],[1,7],[2,6]]"}],con:"No duplicate combinations in output"},
{n:"Permutations",d:"medium",desc:"Given an array nums of distinct integers, return all the possible permutations in any order.",ex:[{input:"nums = [1,2,3]",output:"[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]"}],con:"All integers distinct · 1 ≤ nums.length ≤ 6"},
{n:"Subsets II",d:"medium",desc:"Given an integer array nums that may contain duplicates, return all possible subsets. The solution set must not contain duplicate subsets.",ex:[{input:"nums = [1,2,2]",output:"[[],[1],[1,2],[1,2,2],[2],[2,2]]"}],con:"Sort first to handle duplicates"},
{n:"Word Search",d:"medium",desc:"Given an m×n grid of characters and a string word, return true if word exists in the grid. Word must be constructed from sequentially adjacent horizontal/vertical cells.",ex:[{input:'board = [["A","B","C","E"],...], word = "ABCCED"',output:"true"}],con:"Each cell used at most once per path"},
{n:"Palindrome Partitioning",d:"medium",desc:"Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.",ex:[{input:'s = "aab"',output:'[["a","a","b"],["aa","b"]]'}],con:"1 ≤ s.length ≤ 16"},
{n:"Letter Combinations of a Phone Number",d:"medium",desc:"Given a string of digits (2-9), return all possible letter combinations the number could represent (phone keypad mapping). Return empty if input is empty.",ex:[{input:'digits = "23"',output:'["ad","ae","af","bd","be","bf","cd","ce","cf"]'}],con:"0 ≤ digits.length ≤ 4"},
{n:"N Queens",d:"hard",desc:"Given an integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration where 'Q' indicates a queen and '.' empty space.",ex:[{input:"n = 4",output:'[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]'}],con:"No two queens attack each other"},
]},

{id:"tries",name:"Tries",problems:[
{n:"Implement Trie Prefix Tree",d:"medium",desc:"A trie (prefix tree) is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. Implement Trie with insert, search, startsWith.",ex:[{input:"insert('apple'), search('apple'), search('app'), startsWith('app'), insert('app'), search('app')",output:"true, false, true, true"}],con:"O(m) time per operation where m is key length"},
{n:"Design Add And Search Words Data Structure",d:"medium",desc:"Design a data structure with addWord(word) and search(word) where search supports '.' as a wildcard matching any letter.",ex:[{input:"addWord('bad'), addWord('dad'), addWord('mad'), search('pad'), search('bad'), search('.ad'), search('b..')",output:"false, true, true, true"}],con:"'.' matches any single character"},
{n:"Word Search II",d:"hard",desc:"Given an m×n board and a list of words, return all words in the board. Words must be constructed from adjacent cells; same cell letter may not be used more than once.",ex:[{input:'board = [["o","a","a","n"],...], words = ["oath","pea","eat","rain"]',output:'["eat","oath"]'}],con:"Use a Trie for efficiency"},
]},

{id:"graphs",name:"Graphs",problems:[
{n:"Number of Islands",d:"medium",desc:"Given an m×n 2D binary grid where '1' is land and '0' is water, return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally/vertically.",ex:[{input:'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',output:"3"}],con:"Use DFS or BFS · Mark visited"},
{n:"Max Area of Island",d:"medium",desc:"Given a binary matrix grid, return the maximum area of an island. An island is a group of 1s connected 4-directionally. The area is the number of cells with value 1.",ex:[{input:"grid = [[0,0,1,0,0],[0,1,1,1,0],[0,1,0,0,0]]",output:"5"}],con:"Return 0 if no island"},
{n:"Clone Graph",d:"medium",desc:"Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node contains a val and list of neighbors.",ex:[{input:"adjList = [[2,4],[1,3],[2,4],[1,3]]",output:"Deep copy with same structure"}],con:"Use a hash map to track cloned nodes"},
{n:"Walls And Gates",d:"medium",desc:"Given an m×n grid filled with -1 (wall), 0 (gate), or INF (empty room), fill each empty room with the distance to its nearest gate. If impossible to reach, leave as INF.",ex:[{input:"rooms with INF and gates (0s)",output:"rooms filled with distances"}],con:"BFS from all gates simultaneously"},
{n:"Rotting Oranges",d:"medium",desc:"Given a grid where 0=empty, 1=fresh orange, 2=rotten orange. Every minute, fresh oranges 4-directionally adjacent to rotten become rotten. Return minutes until no fresh oranges, or -1.",ex:[{input:"grid = [[2,1,1],[1,1,0],[0,1,1]]",output:"4"}],con:"Multi-source BFS"},
{n:"Pacific Atlantic Water Flow",d:"medium",desc:"Given an m×n matrix heights, return coordinates of cells from which water can flow to both the Pacific ocean (top/left edges) and Atlantic ocean (bottom/right edges).",ex:[{input:"heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",output:"[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]"}],con:"Water flows to equal or lower adjacent cells"},
{n:"Surrounded Regions",d:"medium",desc:"Given an m×n matrix containing 'X' and 'O', capture all regions surrounded by 'X'. A region is captured by flipping all 'O's into 'X's in that surrounded region.",ex:[{input:"board = [['X','X','X','X'],['X','O','O','X'],['X','X','O','X'],['X','O','X','X']]",output:"[['X','X','X','X'],['X','X','X','X'],['X','X','X','X'],['X','O','X','X']]"}],con:"O's on border are never flipped"},
{n:"Course Schedule",d:"medium",desc:"There are numCourses courses labeled 0 to numCourses-1. Given prerequisites pairs [a,b] meaning b must be taken before a, return true if you can finish all courses.",ex:[{input:"numCourses=2, prerequisites=[[1,0]]",output:"true"},{input:"prerequisites=[[1,0],[0,1]]",output:"false"}],con:"Detect cycle in directed graph"},
{n:"Course Schedule II",d:"medium",desc:"Given numCourses and prerequisites, return the ordering of courses to finish all courses. If impossible (cycle), return empty array.",ex:[{input:"numCourses=4, prerequisites=[[1,0],[2,0],[3,1],[3,2]]",output:"[0,2,1,3]"}],con:"Topological sort"},
{n:"Graph Valid Tree",d:"medium",desc:"Given n nodes labeled 0 to n-1 and a list of undirected edges, determine if these edges form a valid tree. A valid tree has n-1 edges and no cycles.",ex:[{input:"n=5, edges=[[0,1],[0,2],[0,3],[1,4]]",output:"true"},{input:"edges=[[0,1],[1,2],[2,3],[1,3],[1,4]]",output:"false"}],con:"n-1 edges and no cycle"},
{n:"Number of Connected Components In An Undirected Graph",d:"medium",desc:"Given n nodes and edges in an undirected graph, return the number of connected components.",ex:[{input:"n=5, edges=[[0,1],[1,2],[3,4]]",output:"2"}],con:"Use Union-Find or DFS"},
{n:"Redundant Connection",d:"medium",desc:"Given a graph that started as a tree with n nodes and one additional edge added, find the redundant edge. Return the edge that can be removed so the result is a tree.",ex:[{input:"edges=[[1,2],[1,3],[2,3]]",output:"[2,3]"}],con:"If multiple answers, return last in input"},
{n:"Word Ladder",d:"hard",desc:"Given beginWord, endWord, and a wordList, return the number of words in the shortest transformation sequence from beginWord to endWord (changing one letter at a time, each intermediate must be in list).",ex:[{input:"beginWord='hit', endWord='cog', wordList=['hot','dot','dog','lot','log','cog']",output:"5 (hit→hot→dot→dog→cog)"}],con:"BFS for shortest path"},
]},

{id:"adv-graphs",name:"Advanced Graphs",problems:[
{n:"Network Delay Time",d:"medium",desc:"Given n network nodes, times list [u,v,w] (directed edge u→v, weight w), and source k, return the minimum time for all nodes to receive the signal, or -1 if impossible.",ex:[{input:"times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2",output:"2"}],con:"Dijkstra's algorithm"},
{n:"Reconstruct Itinerary",d:"hard",desc:"Given a list of airline tickets [from,to], reconstruct the itinerary in order starting from JFK. Use all tickets exactly once. Return smallest lexical order if multiple valid itineraries.",ex:[{input:'tickets=[["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]',output:'["JFK","MUC","LHR","SFO","SJC"]'}],con:"Hierholzer's algorithm / Eulerian path"},
{n:"Min Cost to Connect All Points",d:"medium",desc:"Given points[i] = [xi, yi], return the minimum cost to connect all points. The cost to connect two points is their Manhattan distance. All points must be connected.",ex:[{input:"points=[[0,0],[2,2],[3,10],[5,2],[7,0]]",output:"20"}],con:"Prim's or Kruskal's MST"},
{n:"Swim In Rising Water",d:"hard",desc:"Given an n×n grid where grid[i][j] is the elevation at that point, at time t you can swim to adjacent squares if their elevation ≤ t. Return minimum time to swim from top-left to bottom-right.",ex:[{input:"grid=[[0,2],[1,3]]",output:"3"}],con:"Dijkstra or binary search + BFS"},
{n:"Alien Dictionary",d:"hard",desc:"Given a list of words sorted lexicographically by the rules of a new alien language, derive the order of characters in this language. Return a string of unique characters in the correct order.",ex:[{input:'words=["wrt","wrf","er","ett","rftt"]',output:'"wertf"'}],con:"Topological sort · Return empty if invalid"},
{n:"Cheapest Flights Within K Stops",d:"medium",desc:"Given n cities, flights [from,to,price], source src, destination dst, and integer k, return the cheapest price from src to dst with at most k stops. Return -1 if no route.",ex:[{input:"n=4, flights=[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src=0, dst=3, k=1",output:"700"}],con:"Bellman-Ford with k iterations"},
]},

{id:"dp-1d",name:"1D Dynamic Programming",problems:[
{n:"Climbing Stairs",d:"easy",desc:"You are climbing a staircase with n steps. You can climb 1 or 2 steps at a time. In how many distinct ways can you climb to the top?",ex:[{input:"n = 2",output:"2 (1+1, 2)"},{input:"n = 3",output:"3 (1+1+1, 1+2, 2+1)"}],con:"1 ≤ n ≤ 45"},
{n:"Min Cost Climbing Stairs",d:"easy",desc:"Given cost array where cost[i] is the cost of the iᵗʰ step, you can start from index 0 or 1. Pay cost then climb 1 or 2 steps. Reach top (beyond last step). Return minimum cost.",ex:[{input:"cost = [10,15,20]",output:"15"},{input:"cost = [1,100,1,1,1,100,1,1,100,1]",output:"6"}],con:"2 ≤ cost.length ≤ 1000"},
{n:"House Robber",d:"medium",desc:"Given an array nums representing money at each house, return the max you can rob without robbing two adjacent houses.",ex:[{input:"nums = [1,2,3,1]",output:"4"},{input:"nums = [2,7,9,3,1]",output:"12"}],con:"Cannot rob adjacent houses"},
{n:"House Robber II",d:"medium",desc:"Same as House Robber but houses are arranged in a circle (first and last house are adjacent). Return max amount you can rob.",ex:[{input:"nums = [2,3,2]",output:"3"},{input:"nums = [1,2,3,1]",output:"4"}],con:"First and last house are adjacent"},
{n:"Longest Palindromic Substring",d:"medium",desc:"Given a string s, return the longest palindromic substring in s.",ex:[{input:'s = "babad"',output:'"bab" or "aba"'},{input:'s = "cbbd"',output:'"bb"'}],con:"1 ≤ s.length ≤ 1000"},
{n:"Palindromic Substrings",d:"medium",desc:"Given a string s, return the number of palindromic substrings in it. A string is a palindrome when it reads the same backward as forward.",ex:[{input:'s = "abc"',output:"3 (a, b, c)"},{input:'s = "aaa"',output:"6 (a,a,a,aa,aa,aaa)"}],con:"1 ≤ s.length ≤ 1000"},
{n:"Decode Ways",d:"medium",desc:"A message encoded as a digit string where 'A'→1 ... 'Z'→26. Given a string s, return the number of ways to decode it.",ex:[{input:'s = "12"',output:"2 (AB or L)"},{input:'s = "226"',output:"3 (BZ, VF, BBF)"}],con:"No leading zeros in valid codes"},
{n:"Coin Change",d:"medium",desc:"Given coins of different denominations and a total amount, return the fewest number of coins needed to make up that amount. Return -1 if not possible.",ex:[{input:"coins = [1,5,11], amount = 15",output:"3 (5+5+5)"},{input:"coins = [2], amount = 3",output:"-1"}],con:"Unlimited coins of each denomination"},
{n:"Maximum Product Subarray",d:"medium",desc:"Given an integer array nums, find a subarray that has the largest product, and return the product.",ex:[{input:"nums = [2,3,-2,4]",output:"6 ([2,3])"},{input:"nums = [-2,0,-1]",output:"0"}],con:"Track both min and max product"},
{n:"Word Break",d:"medium",desc:"Given a string s and a dictionary wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",ex:[{input:'s = "leetcode", wordDict = ["leet","code"]',output:"true"},{input:'s = "applepenapple", wordDict = ["apple","pen"]',output:"true"}],con:"Words in dictionary may be reused"},
{n:"Longest Increasing Subsequence",d:"medium",desc:"Given an integer array nums, return the length of the longest strictly increasing subsequence.",ex:[{input:"nums = [10,9,2,5,3,7,101,18]",output:"4 ([2,3,7,101])"},{input:"nums = [0,1,0,3,2,3]",output:"4"}],con:"O(n log n) solution exists with patience sort"},
{n:"Partition Equal Subset Sum",d:"medium",desc:"Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets is equal.",ex:[{input:"nums = [1,5,11,5]",output:"true ([1,5,5] and [11])"},{input:"nums = [1,2,3,5]",output:"false"}],con:"0/1 knapsack variant"},
]},

{id:"dp-2d",name:"2D Dynamic Programming",problems:[
{n:"Unique Paths",d:"medium",desc:"A robot is on an m×n grid. It can only move right or down. How many unique paths are there from the top-left corner to the bottom-right corner?",ex:[{input:"m = 3, n = 7",output:"28"},{input:"m = 3, n = 2",output:"3"}],con:"1 ≤ m, n ≤ 100"},
{n:"Longest Common Subsequence",d:"medium",desc:"Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence is a sequence derived by deleting some characters without changing order.",ex:[{input:'text1 = "abcde", text2 = "ace"',output:"3 (ace)"},{input:'text1 = "abc", text2 = "abc"',output:"3"}],con:"Classic 2D DP"},
{n:"Best Time to Buy And Sell Stock With Cooldown",d:"medium",desc:"Given prices array, find max profit. After selling, you must wait one day (cooldown) before buying. You may not engage in multiple transactions at the same time.",ex:[{input:"prices = [1,2,3,0,2]",output:"3 (buy@1, sell@2, rest, buy@0, sell@2)"}],con:"State machine DP recommended"},
{n:"Coin Change II",d:"medium",desc:"Given coins array and amount, return the number of combinations that make up that amount. If no combination possible, return 0.",ex:[{input:"amount = 5, coins = [1,2,5]",output:"4 (5, 2+2+1, 2+1+1+1, 1×5)"},{input:"amount = 3, coins = [2]",output:"0"}],con:"Unbounded knapsack"},
{n:"Target Sum",d:"medium",desc:"Given integer array nums and target, assign '+' or '-' to each integer and return number of ways to reach target.",ex:[{input:"nums = [1,1,1,1,1], target = 3",output:"5"}],con:"2D DP or subset sum transformation"},
{n:"Interleaving String",d:"hard",desc:"Given strings s1, s2, s3, return true if s3 is formed by an interleaving of s1 and s2 while maintaining the relative order of characters in each.",ex:[{input:'s1="aabcc", s2="dbbca", s3="aadbbcbcac"',output:"true"}],con:"2D DP table"},
{n:"Longest Increasing Path In a Matrix",d:"hard",desc:"Given an m×n integers matrix, return the length of the longest increasing path. From each cell, move in 4 directions. You may not move diagonally or outside the boundary.",ex:[{input:"matrix = [[9,9,4],[6,6,8],[2,1,1]]",output:"4 (1→2→6→9)"}],con:"DFS + memoization"},
{n:"Distinct Subsequences",d:"hard",desc:"Given strings s and t, return the number of distinct subsequences of s which equals t.",ex:[{input:'s = "rabbbit", t = "rabbit"',output:"3"}],con:"Classic 2D DP"},
{n:"Edit Distance",d:"hard",desc:"Given two strings word1 and word2, return the minimum number of operations (insert, delete, replace) to convert word1 to word2.",ex:[{input:'word1 = "horse", word2 = "ros"',output:"3"},{input:'word1 = "intention", word2 = "execution"',output:"5"}],con:"Classic Levenshtein distance"},
{n:"Burst Balloons",d:"hard",desc:"Given n balloons with nums array (with 1s added at boundaries), burst all balloons to maximize coins. Bursting balloon i gives nums[i-1]*nums[i]*nums[i+1] coins.",ex:[{input:"nums = [3,1,5,8]",output:"167 (3×1×5 + 3×5×8 + 1×3×8 + 1×8×1)"}],con:"Think about which balloon is burst last"},
{n:"Regular Expression Matching",d:"hard",desc:"Given an input string s and a pattern p, implement regular expression matching with support for '.' (matches any single char) and '*' (matches zero or more of preceding element).",ex:[{input:'s="aa", p="a*"',output:"true"},{input:'s="aab", p="c*a*b"',output:"true"}],con:"'*' matches 0 or more of the preceding element"},
]},

{id:"bit",name:"Bit Manipulation",problems:[
{n:"Single Number",d:"easy",desc:"Given a non-empty array where every element appears twice except for one. Find that single one using only O(1) extra space and O(n) runtime.",ex:[{input:"nums = [2,2,1]",output:"1"},{input:"nums = [4,1,2,1,2]",output:"4"}],con:"XOR trick · O(1) space"},
{n:"Number of 1 Bits",d:"easy",desc:"Write a function that takes the binary representation of a positive integer and returns the number of '1' bits it has (also known as the Hamming weight).",ex:[{input:"n = 00000000000000000000000000001011",output:"3"},{input:"n = 11111111111111111111111111111101",output:"31"}],con:"n & (n-1) clears lowest set bit"},
{n:"Counting Bits",d:"easy",desc:"Given an integer n, return an array ans of length n+1 such that for each i (0 ≤ i ≤ n), ans[i] is the number of 1's in the binary representation of i.",ex:[{input:"n = 2",output:"[0,1,1]"},{input:"n = 5",output:"[0,1,1,2,1,2]"}],con:"O(n) using DP: ans[i] = ans[i>>1] + (i&1)"},
{n:"Reverse Bits",d:"easy",desc:"Reverse bits of a given 32 bits unsigned integer.",ex:[{input:"n = 00000010100101000001111010011100",output:"00111001011110000010100101000000 = 964176192"}],con:"Process all 32 bits"},
{n:"Missing Number",d:"easy",desc:"Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",ex:[{input:"nums = [3,0,1]",output:"2"},{input:"nums = [0,1]",output:"2"}],con:"XOR or sum formula · O(1) space"},
{n:"Sum of Two Integers",d:"medium",desc:"Calculate the sum of two integers a and b without using + or - operators.",ex:[{input:"a = 1, b = 2",output:"3"},{input:"a = 2, b = 3",output:"5"}],con:"Use bit manipulation: XOR for sum, AND+shift for carry"},
{n:"Reverse Integer",d:"medium",desc:"Given a signed 32-bit integer x, return x with its digits reversed. If the reversed integer overflows, return 0.",ex:[{input:"x = 123",output:"321"},{input:"x = -123",output:"-321"},{input:"x = 120",output:"21"}],con:"Environment that doesn't allow 64-bit integers"},
]},

{id:"math",name:"Math & Geometry",problems:[
{n:"Rotate Image",d:"medium",desc:"Given an n×n 2D matrix, rotate the image 90 degrees clockwise in-place. You must not allocate another 2D matrix.",ex:[{input:"matrix = [[1,2,3],[4,5,6],[7,8,9]]",output:"[[7,4,1],[8,5,2],[9,6,3]]"}],con:"In-place: transpose then reverse rows"},
{n:"Spiral Matrix",d:"medium",desc:"Given an m×n matrix, return all elements of the matrix in spiral order.",ex:[{input:"matrix = [[1,2,3],[4,5,6],[7,8,9]]",output:"[1,2,3,6,9,8,7,4,5]"}],con:"Simulate with boundary shrinking"},
{n:"Set Matrix Zeroes",d:"medium",desc:"Given an m×n integer matrix, if an element is 0, set its entire row and column to 0. Do it in place.",ex:[{input:"matrix = [[1,1,1],[1,0,1],[1,1,1]]",output:"[[1,0,1],[0,0,0],[1,0,1]]"}],con:"O(1) space: use first row/col as markers"},
{n:"Happy Number",d:"easy",desc:"A number is happy if: starting with any positive integer, replace the number by the sum of squares of its digits, and repeat until either 1 (happy) or a cycle (not happy).",ex:[{input:"n = 19",output:"true (1²+9²=82→68→100→1)"},{input:"n = 2",output:"false"}],con:"Floyd's cycle detection"},
{n:"Plus One",d:"easy",desc:"Given a large integer represented as an integer array digits, increment the large integer by one and return the resulting array of digits.",ex:[{input:"digits = [1,2,3]",output:"[1,2,4]"},{input:"digits = [9,9,9]",output:"[1,0,0,0]"}],con:"Digits stored most-significant-first"},
{n:"Pow(x, n)",d:"medium",desc:"Implement pow(x, n), which calculates x raised to the power n. Use fast power (exponentiation by squaring) for O(log n).",ex:[{input:"x = 2.00000, n = 10",output:"1024.00000"},{input:"x = 2.10000, n = 3",output:"9.26100"},{input:"x = 2, n = -2",output:"0.25"}],con:"O(log n) using binary exponentiation"},
{n:"Multiply Strings",d:"medium",desc:"Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2 as a string. Must not use BigInteger or convert to integer directly.",ex:[{input:'num1 = "2", num2 = "3"',output:'"6"'},{input:'num1 = "123", num2 = "456"',output:'"56088"'}],con:"No direct integer conversion allowed"},
{n:"Detect Squares",d:"medium",desc:"Detect squares in a point stream. Implement add(point) and count(point) where count returns the number of ways to choose 3 points from added to form an axis-aligned square with the given point.",ex:[{input:"add([3,10]), add([11,2]), add([3,2]), count([11,10])",output:"1"}],con:"Use hash map for frequency tracking"},
]},

{id:"intervals",name:"Intervals",problems:[
{n:"Insert Interval",d:"medium",desc:"Given an array of non-overlapping intervals sorted by start time, and a new interval, insert it into intervals (merging if necessary) so the result is sorted and non-overlapping.",ex:[{input:"intervals=[[1,3],[6,9]], newInterval=[2,5]",output:"[[1,5],[6,9]]"}],con:"O(n) merge in one pass"},
{n:"Merge Intervals",d:"medium",desc:"Given an array of intervals, merge all overlapping intervals and return an array of the non-overlapping intervals that cover all the intervals in the input.",ex:[{input:"intervals=[[1,3],[2,6],[8,10],[15,18]]",output:"[[1,6],[8,10],[15,18]]"}],con:"Sort by start time first"},
{n:"Non Overlapping Intervals",d:"medium",desc:"Given an array of intervals, return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.",ex:[{input:"intervals=[[1,2],[2,3],[3,4],[1,3]]",output:"1 (remove [1,3])"},{input:"intervals=[[1,2],[1,2],[1,2]]",output:"2"}],con:"Greedy: sort by end time"},
{n:"Meeting Rooms",d:"easy",desc:"Given an array of meeting time intervals [start, end], determine if a person could attend all meetings (no overlapping intervals).",ex:[{input:"intervals=[[0,30],[5,10],[15,20]]",output:"false"},{input:"intervals=[[7,10],[2,4]]",output:"true"}],con:"Sort then check consecutive pairs"},
{n:"Meeting Rooms II",d:"medium",desc:"Given an array of meeting time intervals, return the minimum number of conference rooms required.",ex:[{input:"intervals=[[0,30],[5,10],[15,20]]",output:"2"}],con:"Min-heap or two-pointer sweep"},
{n:"Minimum Interval to Include Each Query",d:"hard",desc:"Given intervals and queries, for each query find the size (end-start+1) of the smallest interval containing the query. Return -1 if no interval contains the query.",ex:[{input:"intervals=[[1,4],[2,4],[3,6],[4,4]], queries=[2,3,4,5]",output:"[3,3,1,4]"}],con:"Sort + min-heap approach"},
]},

{id:"greedy",name:"Greedy",problems:[
{n:"Maximum Subarray",d:"medium",desc:"Given an integer array nums, find the subarray with the largest sum and return its sum. (Kadane's Algorithm)",ex:[{input:"nums = [-2,1,-3,4,-1,2,1,-5,4]",output:"6 ([4,-1,2,1])"},{input:"nums = [1]",output:"1"}],con:"O(n) with Kadane's algorithm"},
{n:"Jump Game",d:"medium",desc:"Given an integer array nums where nums[i] is your maximum jump length at position i, return true if you can reach the last index starting from index 0.",ex:[{input:"nums = [2,3,1,1,4]",output:"true"},{input:"nums = [3,2,1,0,4]",output:"false"}],con:"Track maximum reachable index"},
{n:"Jump Game II",d:"medium",desc:"Same setup as Jump Game, but return the minimum number of jumps to reach the last index. You can always reach the last index.",ex:[{input:"nums = [2,3,1,1,4]",output:"2 (0→1→4)"},{input:"nums = [2,3,0,1,4]",output:"2"}],con:"Greedy BFS level approach"},
{n:"Gas Station",d:"medium",desc:"Given gas and cost arrays for circular gas stations, return the starting station index if you can travel around the circuit once, or -1 if impossible.",ex:[{input:"gas=[1,2,3,4,5], cost=[3,4,5,1,2]",output:"3"}],con:"If total gas ≥ total cost, solution exists"},
{n:"Hand of Straights",d:"medium",desc:"Given an integer array hand and groupSize, return true if you can rearrange cards into groups of groupSize consecutive cards.",ex:[{input:"hand=[1,2,3,6,2,3,4,7,8], groupSize=3",output:"true"},{input:"hand=[1,2,3,4,5], groupSize=4",output:"false"}],con:"Use sorted map / frequency count"},
{n:"Merge Triplets to Form Target Triplet",d:"medium",desc:"Given 2D array triplets and target triplet, you can merge any triplet [a,b,c] and [d,e,f] to [max(a,d), max(b,e), max(c,f)]. Return true if you can form target.",ex:[{input:"triplets=[[2,5,3],[1,8,4],[1,7,5]], target=[2,7,5]",output:"true"}],con:"Select valid triplets only"},
{n:"Partition Labels",d:"medium",desc:"Given a string s, partition it into as many parts as possible so that each letter appears in at most one part. Return a list of integers representing the sizes of these parts.",ex:[{input:'s = "ababcbacadefegdehijhklij"',output:"[9,7,8]"}],con:"Greedy using last occurrence map"},
{n:"Valid Parenthesis String",d:"medium",desc:"Given a string s containing '(', ')' and '*' where '*' can be '(', ')' or '', determine if s is valid.",ex:[{input:'s = "()"',output:"true"},{input:'s = "(*)"',output:"true"},{input:'s = "(*))"',output:"true"}],con:"Track range of possible open parens"},
]},
];

const LANGS = ["Python","JavaScript","Java","C++","Go","Rust","TypeScript","Other"];

/* ════════════════════════════════════════════════════════════
   STORAGE
════════════════════════════════════════════════════════════ */
const Store = {
  _d: null,
  load() {
    if (this._d) return this._d;
    try { const r = localStorage.getItem('nc150_bw'); this._d = r ? JSON.parse(r) : {}; }
    catch(e) { this._d = {}; }
    return this._d;
  },
  save() { try { localStorage.setItem('nc150_bw', JSON.stringify(this._d)); } catch(e) {} },
  key(t, p) { return t + '||' + p; },
  get(t, p) {
    const d = this.load()[this.key(t, p)];
    return d || { langs: {}, notes: '', activeLang: 'Python', completed: false };
  },
  set(t, p, data) {
    this.load()[this.key(t, p)] = data;
    this.save();
  },
  hasSol(t, p) {
    const d = this.load()[this.key(t, p)];
    if (!d || !d.langs) return false;
    return Object.values(d.langs).some(v => v && v.trim());
  },
  isCompleted(t, p) {
    const d = this.load()[this.key(t, p)];
    return !!(d && d.completed);
  },
  toggleComplete(t, p) {
    const d = this.get(t, p);
    d.completed = !d.completed;
    this.set(t, p, d);
    return d.completed;
  }
};

const TOTAL = TOPICS.reduce((a, t) => a + t.problems.length, 0);


/* ════════════════════════════════════════════════════════════
   INDEX PAGE
════════════════════════════════════════════════════════════ */
function initIndex() {
  const list = document.getElementById('topics-list');
  if (!list) return;

  // Render topics list (below hero)
  list.innerHTML = TOPICS.map((t, i) => `
    <div class="topic-row" onclick="location.href='tracker.html#${t.id}'">
      <span class="topic-idx">${String(i+1).padStart(2,'0')}</span>
      <span class="topic-name">${t.name}</span>
      <span class="topic-count">${t.problems.length} problems</span>
      <span class="topic-arrow">→</span>
    </div>`).join('');

  initMagneticHero();
  initTopicGrid();
  initGauge();
}

/* ════════════════════════════════════════════════════════════
   GAUGE — SVG arc showing full 150 problem breakdown
════════════════════════════════════════════════════════════ */
function initGauge() {
  // Full circle circumference = 2 * π * 88 ≈ 553
  const C = 553;
  const GAP = 3;

  let easyTotal = 0, medTotal = 0, hardTotal = 0;
  TOPICS.forEach(t => t.problems.forEach(p => {
    if (p.d === 'easy') easyTotal++;
    else if (p.d === 'medium') medTotal++;
    else hardTotal++;
  }));
  const total = easyTotal + medTotal + hardTotal;

  // Distribute full circle across 3 segments
  const easyArc   = (easyTotal / total) * (C - GAP * 2);
  const medArc    = (medTotal  / total) * (C - GAP * 2);
  const hardArc   = (hardTotal / total) * (C - GAP * 2);

  function setArc(id, arcLen, offsetSoFar) {
    const el = document.getElementById(id);
    if (!el) return offsetSoFar;
    el.style.strokeDasharray = `${arcLen} ${C}`;
    el.style.strokeDashoffset = -offsetSoFar;
    return offsetSoFar + arcLen + GAP;
  }

  setTimeout(() => {
    let off = 0;
    off = setArc('arc-easy',   easyArc, off);
    off = setArc('arc-medium', medArc,  off);
    off = setArc('arc-hard',   hardArc, off);
  }, 300);
}

/* ── Topic table (2-column grid, links to solutions) ── */
function initTopicGrid() {
  const table = document.getElementById('topic-table');
  if (!table) return;
  table.innerHTML = TOPICS.map(t => `
    <a class="tt-row" href="tracker.html#${t.id}">
      <span class="tt-name">${t.name}</span>
      <span class="tt-count">${t.problems.length}</span>
    </a>`).join('');
}

function initMagneticHero() {
  const title = document.querySelector('.hero-title');
  if (!title) return;
  const words = title.textContent.split('\n').filter(Boolean);
  // Wrap each char in span
  title.innerHTML = title.innerHTML.replace(/([A-Z0-9])/g, (m) => `<span class="char">${m}</span>`);

  const chars = title.querySelectorAll('.char');
  document.addEventListener('mousemove', e => {
    chars.forEach(ch => {
      const rect = ch.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const maxDist = 180;
      if (dist < maxDist) {
        const force = (1 - dist / maxDist) * 18;
        const angle = Math.atan2(dy, dx);
        ch.style.transform = `translate(${-Math.cos(angle)*force}px, ${-Math.sin(angle)*force}px)`;
      } else {
        ch.style.transform = '';
      }
    });
  });
}

/* ════════════════════════════════════════════════════════════
   TRACKER STATE
════════════════════════════════════════════════════════════ */
let activeFilter = 'all';
let collapsedTopics = {};
let searchQ = '';
let curModal = null;
let curLang = 'Python';
let activeTopic = null;

/* ════════════════════════════════════════════════════════════
   CURSOR
════════════════════════════════════════════════════════════ */
function initCursor() {
  const dot  = document.getElementById('cur-dot');
  const ring = document.getElementById('cur-ring');
  if (!dot || !ring) return;

  let mx = -200, my = -200;
  let rx = -200, ry = -200;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function loop() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  function setCur(s) {
    document.body.classList.remove('cur-link', 'cur-text');
    if (s) document.body.classList.add(s);
  }

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .p-row, .topic-row, .sb-topic, .t-group-hdr, .feature-cell, .hero-stat'))
      setCur('cur-link');
    else if (e.target.closest('textarea, input'))
      setCur('cur-text');
    else
      setCur(null);
  });
}

/* ════════════════════════════════════════════════════════════
   FEATURE CELL — gloss + tilt effect
════════════════════════════════════════════════════════════ */
function initFeatureTilt() {
  document.querySelectorAll('.feature-cell').forEach(cell => {
    cell.addEventListener('mousemove', e => {
      const rect  = cell.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);  // -1 to 1
      const dy    = (e.clientY - cy) / (rect.height / 2);  // -1 to 1
      const tiltX = dy * -6;   // degrees
      const tiltY = dx *  6;

      // Move gloss radial to mouse position
      const px = ((e.clientX - rect.left) / rect.width)  * 100;
      const py = ((e.clientY - rect.top)  / rect.height) * 100;
      cell.style.setProperty('--mx', px + '%');
      cell.style.setProperty('--my', py + '%');
      cell.style.transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(4px)`;
    });

    cell.addEventListener('mouseleave', () => {
      cell.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      cell.style.transition = 'transform 0.4s ease, background 0.3s, box-shadow 0.3s';
    });

    cell.addEventListener('mouseenter', () => {
      cell.style.transition = 'background 0.3s, box-shadow 0.3s';
    });
  });
}

/* ── Magnetic repulsion hero ── */
function initMagneticHero() {
  const title = document.getElementById('hero-title');
  if (!title) return;

  // Wrap each character in a span
  const raw = title.innerHTML;
  title.innerHTML = raw.replace(/([A-Z0-9\-—])/g, '<span class="mchar">$1</span>');

  const chars = title.querySelectorAll('.mchar');

  document.addEventListener('mousemove', e => {
    chars.forEach(ch => {
      const r    = ch.getBoundingClientRect();
      const cx   = r.left + r.width / 2;
      const cy   = r.top  + r.height / 2;
      const dx   = e.clientX - cx;
      const dy   = e.clientY - cy;
      const dist = Math.sqrt(dx*dx + dy*dy);
      const max  = 200;
      if (dist < max) {
        const f = (1 - dist / max) * 22;
        const a = Math.atan2(dy, dx);
        ch.style.transform = `translate(${-Math.cos(a)*f}px, ${-Math.sin(a)*f}px)`;
        ch.style.transition = 'transform 0.1s ease-out';
      } else {
        ch.style.transform = '';
        ch.style.transition = 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)';
      }
    });
  });
}

/* ════════════════════════════════════════════════════════════
   TRACKER PAGE
════════════════════════════════════════════════════════════ */
function initTracker() {
  if (!document.getElementById('tracker-sections')) return;
  try { const r = localStorage.getItem('nc150_col'); if(r) collapsedTopics = JSON.parse(r); } catch(e) {}
  renderSidebar();
  renderSections();
  bindFilters();
  bindSearch();
  bindModal();

  const hash = window.location.hash.replace('#', '');
  if (hash) setTimeout(() => {
    const el = document.getElementById('sec-' + hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function renderSidebar() {
  const nav = document.getElementById('sb-nav');
  if (!nav) return;
  nav.innerHTML = TOPICS.map(t => `
    <div class="sb-topic ${activeTopic === t.id ? 'active' : ''}" onclick="jumpToTopic('${t.id}')">
      <span>${t.name}</span>
      <span class="sb-topic-cnt">${t.problems.length}</span>
    </div>`).join('');
}

window.jumpToTopic = function(id) {
  activeTopic = id;
  renderSidebar();
  const el = document.getElementById('sec-' + id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function bindSearch() {
  const inp = document.getElementById('sb-search');
  if (!inp) return;
  inp.addEventListener('input', () => { searchQ = inp.value.trim().toLowerCase(); renderSections(); });
}

function bindFilters() {
  document.querySelectorAll('.sf-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.f;
      document.querySelectorAll('.sf-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSections();
    });
  });
}

function renderSections() {
  const container = document.getElementById('tracker-sections');
  if (!container) return;
  let html = '';
  TOPICS.forEach(t => {
    let probs = t.problems;
    if (activeFilter !== 'all') probs = probs.filter(p => p.d === activeFilter);
    if (searchQ) probs = probs.filter(p => p.n.toLowerCase().includes(searchQ));
    if (!probs.length) return;
    const isOpen = !collapsedTopics[t.id];
    html += `<div class="t-group" id="sec-${t.id}">
      <div class="t-group-hdr" onclick="toggleGroup('${t.id}')">
        <h3>${t.name}</h3>
        <span>${t.problems.length} problems</span>
        <span class="t-group-chevron ${isOpen ? 'open' : ''}">▶</span>
      </div>`;
    if (isOpen) {
      html += probs.map((p, i) => {
        const slug = p.n.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, '-');
        const lcUrl = `https://leetcode.com/problems/${slug}/description/`;
        const done = Store.isCompleted(t.name, p.n);
        const tName = t.name.replace(/'/g, "\\'");
        const pName = p.n.replace(/'/g, "\\'");
        return `
        <div class="p-row ${done ? 'p-row-done' : ''}" onclick="openModal('${t.id}','${tName}','${pName}','${p.d}',${t.problems.indexOf(p)})">
          <span class="p-num">${i + 1}</span>
          <span class="p-name">${p.n}</span>
          <a class="p-lc-link" href="${lcUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()" title="Open on LeetCode">↗</a>
          <span class="p-diff-badge ${p.d}">${p.d}</span>
          <span class="p-checkbox ${done ? 'checked' : ''}" onclick="event.stopPropagation(); toggleComplete('${tName}','${pName}')" title="${done ? 'Mark incomplete' : 'Mark complete'}">
            ${done ? '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><polyline points="1.5,6 4.5,9 10.5,3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}
          </span>
        </div>`;
      }).join('');
    }
    html += `</div>`;
  });
  if (!html) html = `<div class="empty-state">No results found.</div>`;
  container.innerHTML = html;
}

function toggleGroup(id) {
  collapsedTopics[id] = !collapsedTopics[id];
  try { localStorage.setItem('nc150_col', JSON.stringify(collapsedTopics)); } catch(e) {}
  renderSections();
}

window.toggleComplete = function(topicName, probName) {
  const done = Store.toggleComplete(topicName, probName);
  renderSections();
  /* If modal is open for this problem, sync its checkbox */
  if (curModal && curModal.topicName === topicName && curModal.probName === probName) {
    updateModalCheckbox(done);
  }
};

/* ── Modal ── */
function bindModal() {
  document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if ((e.ctrlKey || e.metaKey) && e.key === 's') { e.preventDefault(); if (curModal) saveModal(); }
  });
  document.getElementById('modal-save-btn').addEventListener('click', saveModal);
  document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
}

function openModal(topicId, topicName, probName, diff, probIdx) {
  const topic = TOPICS.find(t => t.id === topicId);
  const prob  = topic.problems[probIdx];
  curModal    = { topicName, probName };
  const saved = Store.get(topicName, probName);
  curLang     = saved.activeLang || 'Python';

  document.getElementById('m-title').textContent = probName;
  document.getElementById('m-diff').className    = 'p-diff-badge ' + diff;
  document.getElementById('m-diff').textContent  = diff;
  document.getElementById('m-topic').textContent = topicName;
  document.getElementById('m-desc').textContent  = prob.desc;

  // Build LeetCode URL from problem name
  const lcSlug = probName
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')   // remove special chars
    .trim()
    .replace(/\s+/g, '-');           // spaces → hyphens
  const lcLink = document.getElementById('m-leetcode-link');
  if (lcLink) lcLink.href = 'https://leetcode.com/problems/' + lcSlug + '/';

  document.getElementById('m-examples').innerHTML = prob.ex.map((ex, i) => `
    <div class="prob-example">
      <strong>Example ${i + 1}</strong>
      <div class="ex-row"><span class="ex-label">Input</span><span class="ex-val">${ex.input}</span></div>
      <div class="ex-row"><span class="ex-label">Output</span><span class="ex-val">${ex.output}</span></div>
    </div>`).join('');

  document.getElementById('m-constraints').innerHTML =
    `<div class="constraints"><strong>${prob.con}</strong></div>`;

  renderLangTabs(saved);
  document.getElementById('m-notes').value = saved.notes || '';
  document.getElementById('save-msg').classList.remove('show');
  updateModalCheckbox(Store.isCompleted(topicName, probName));
  document.getElementById('modal-overlay').classList.add('open');
  setTimeout(() => {
    const ed = document.getElementById('m-editor');
    if (ed) ed.focus();
    if (typeof updateLineNumbers === 'function') updateLineNumbers();
    if (typeof updateEditorMeta === 'function') updateEditorMeta(curLang);
  }, 220);
}

function updateModalCheckbox(done) {
  const cb = document.getElementById('m-complete-cb');
  const label = document.getElementById('m-complete-label');
  if (!cb) return;
  cb.classList.toggle('checked', done);
  if (label) label.textContent = done ? 'Completed' : 'Mark as complete';
}

function renderLangTabs(saved) {
  const editor = document.getElementById('m-editor');
  document.getElementById('m-lang-tabs').innerHTML = LANGS.map(l => {
    const hasSol = !!(saved.langs && saved.langs[l] && saved.langs[l].trim());
    return `<button class="lang-tab ${l === curLang ? 'active' : ''} ${hasSol ? 'has-sol' : ''}"
      onclick="switchLang('${l}')">${l}</button>`;
  }).join('');
  editor.value = (saved.langs && saved.langs[curLang]) || '';
  editor.placeholder = `// ${curLang} solution`;
}

window.switchLang = function(lang) {
  if (!curModal) return;
  const saved = Store.get(curModal.topicName, curModal.probName);
  if (!saved.langs) saved.langs = {};
  saved.langs[curLang] = document.getElementById('m-editor').value;
  Store.set(curModal.topicName, curModal.probName, saved);
  curLang = lang;
  renderLangTabs(saved);
};

function saveModal() {
  if (!curModal) return;
  const saved = Store.get(curModal.topicName, curModal.probName);
  if (!saved.langs) saved.langs = {};
  saved.langs[curLang] = document.getElementById('m-editor').value;
  saved.notes          = document.getElementById('m-notes').value;
  saved.activeLang     = curLang;
  Store.set(curModal.topicName, curModal.probName, saved);
  const msg = document.getElementById('save-msg');
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 2500);
  renderSections();
}

function closeModal() {
  curModal = null;
  document.getElementById('modal-overlay').classList.remove('open');
}

/* ════════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initIndex();
  initTracker();

  // Mark active nav link
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && (path.endsWith(href) || (href === 'index.html' && (path.endsWith('/') || path.endsWith('index.html'))))) {
      a.classList.add('active');
    }
  });
});
