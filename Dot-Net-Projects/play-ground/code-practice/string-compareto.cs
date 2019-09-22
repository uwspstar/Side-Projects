//https://docs.microsoft.com/en-us/dotnet/api/system.string.compareto?view=netframework-4.8
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