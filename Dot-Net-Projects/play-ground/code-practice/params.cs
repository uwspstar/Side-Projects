//https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/params
using System;
public class Program
{
    public static void Main(string[] args)
    {
        Program p = new Program();
        p.print(2, 3, 8);
        int[] arr = { 2, 11, 15, 20 };
        p.print(arr);
        Console.ReadLine();
    }
    public void print(params int[] b)
    {
        foreach (int i in b)
        {
            Console.WriteLine(i);
        }
    }
}

/*
2
3
8
2
11
15
20
 */
