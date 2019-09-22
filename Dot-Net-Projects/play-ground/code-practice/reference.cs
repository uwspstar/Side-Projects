using System;
public class Program
{
    public static void Main(string[] args)
    {
        int[] arr = new int[2];
        arr[1] = 10;
        Object o = arr;
        //Console.WriteLine(o);

        int[] arr1 = (int[])o;
        //Console.WriteLine((int[])o);
        //Console.WriteLine(arr1);

        arr1[1] = 100;
        Console.WriteLine(arr[1]);
        Console.WriteLine((int[])o);
        Console.WriteLine(((int[])o));
        ((int[])o)[1] = 1000;
        Console.WriteLine(arr[1]);
    }
}
//100
//1000