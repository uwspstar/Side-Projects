/*
A palindrome is a word that reads the same backward or forward.

Write a function that checks if a given word is a palindrome. 
Character case should be ignored.

For example, IsPalindrome("Deleveled") should return true as character case should be ignored, 
resulting in "deleveled", which is a palindrome since it reads the same backward and forward.

public static string Reverse( string s )
{
    char[] charArray = s.ToCharArray();
    Array.Reverse( charArray );
    return new string( charArray );
    
}
*/

// soulution 2 
using System;
using System.Linq;

public class Palindrome
{
    public static bool IsPalindrome(string word)
    { 
      return word.ToLower().SequenceEqual(word.ToLower().Reverse());
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(Palindrome.IsPalindrome("Deleveled"));
    }
}

// soulution 1 
using System;

public class Palindrome
{
    public static bool IsPalindrome(string word)
    {
        
        char[] arr = word.ToLower().ToCharArray();
        Array.Reverse(arr);
        
        return word.ToLower() == new string(arr);
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(Palindrome.IsPalindrome("Deleveled"));
    }
}
