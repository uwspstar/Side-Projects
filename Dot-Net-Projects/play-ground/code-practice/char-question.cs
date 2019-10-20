//https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/conditional-operator

//a ? b : c ? d : e is evaluated as a ? b : (c ? d : e)
using System;
public class Program
{
    public static void Main(string[] args)
    {
        char x = 'A';
        int i = 0;
        Console.WriteLine(true ? x : 0);
        Console.WriteLine(false ? i : x);
    }
}
