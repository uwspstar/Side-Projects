using System;
public class Program
{
    static void arrayMethod(int[] a)
    {
        int[] b = new int[5];
        a = b;
    }
    public static void Main(string[] args)
    {
        int[] arr = new int[10];
        arrayMethod(arr);
        Console.WriteLine(arr.Length);
    }
}

// 10