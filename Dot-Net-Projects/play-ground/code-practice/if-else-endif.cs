using System;
public class Program
{
    public static void Main(string[] args)
    {
#if (!pi)
        Console.WriteLine("i");
#else
        Console.WriteLine("PI undefined");
#endif
        Console.WriteLine("ok");
        Console.ReadLine();
    }
}
//i
//ok