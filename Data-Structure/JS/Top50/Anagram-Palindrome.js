// Anagram Palindrome
// Given a word, return whether some anagram exists that is a palindrome
// Palindromes: mom, racecar, dad, bbaabb, asdffdsa
// Anagrams: abc, cba, acb,
// "mmo" => true
// "carrace" => true
// "cutoo" (outco) => false

function AnagramPalindrome(str) {
    // 1) Count each letter in the string
    let counts = {}
    for (let i = 0; i < str.length; i++) {
        if (counts[str[i]] === undefined) {
            counts[str[i]] = 1
        } else {
            counts[str[i]] += 1
        }
    }

    // 2) Make sure no more than 1 letter occurs an odd number of times
    let numOdds = 0
    for (let key in counts) {
        if (counts[key] % 2 === 1) {
            numOdds += 1
        }
    }
    return numOdds < 2
}