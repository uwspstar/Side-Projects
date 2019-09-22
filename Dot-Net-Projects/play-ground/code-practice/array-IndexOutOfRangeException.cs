using System;
public class Program
{
    public static void Main(string[] args)
    {
        int[] i = new int[0];
        Console.WriteLine(i);
        Console.WriteLine(i[0]);
    }
}
// System.IndexOutOfRangeException: Index was outside the bounds of the array.