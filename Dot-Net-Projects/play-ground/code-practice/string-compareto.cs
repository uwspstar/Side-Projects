//https://docs.microsoft.com/en-us/dotnet/api/system.string.compareto?view=netframework-4.8
/*
The CompareTo method was designed primarily for use in sorting or alphabetizing operations. It should not be used when the primary purpose of the method call is to determine whether two strings are equivalent. To determine whether two strings are equivalent, call the Equals method.
 */

using System;
public class Program
{
    public static void Main(string[] args)
    {
        String a = "TechBeamers";
        String b = "TECHBEAMERS";
        int c;
        c = a.CompareTo(b);
        Console.WriteLine(c);
    }
}
//-1