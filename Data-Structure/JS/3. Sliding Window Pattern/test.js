/*
https://medium.com/outco/how-to-solve-sliding-window-problems-28d67601a66 

So in the Minimum Window Substring problem, once you have a substring that contains all the characters you’re looking for, then you want to start shrinking it by moving the slow pointer up until you no longer have a valid substring (meaning you no longer have all the characters you’re looking for)

https://leetcode.com/problems/minimum-window-substring/

76. Minimum Window Substring
Hard 

Share
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

exp:  Input: S = "ADOBECODEBANC", T = "ABC" Output: "BANC"
 

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/