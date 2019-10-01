/*
https://docs.microsoft.com/en-us/dotnet/api/system.math?view=netframework-4.8

Implement the function FindRoots to find the roots of the quadratic equation: ax^2 + bx + c = 0.

The roots of the quadratic equation can be found with the following formula: A quadratic equation.

For example, the roots of the equation 2x^2 + 10x + 8 = 0 are -1 and -4

*/

using System;

public class QuadraticEquation
{
    public static Tuple<double, double> FindRoots(double a, double b, double c)
    {
        
        var data = Math.Sqrt(b*b - 4*a*c);
        
        var Item1 = (-1*b - data) / (2*a);
        var Item2 = (-1*b + data) / (2*a);
        
        var result = Tuple.Create(Item1,Item2);
        
        return result;
    }

    public static void Main(string[] args)
    {
        Tuple<double, double> roots = QuadraticEquation.FindRoots(2, 10, 8);
        Console.WriteLine("Roots: " + roots.Item1 + ", " + roots.Item2);
    }
}

/*
using System;

public class QuadraticEquation
{
    public static Tuple<double, double> FindRoots(double a, double b, double c)
    {
        var m = (b*b) - (4 * a * c);
        m = Math.Sqrt(m);
        var x1 = (-1.0 * b + m ) / (2*a);
        var x2 = (-1.0 * b - m ) / (2*a);
            
        return Tuple.Create(x1, x2);
    }

    public static void Main(string[] args)
    {
        Tuple<double, double> roots = QuadraticEquation.FindRoots(2, 10, 8);
        Console.WriteLine("Roots: " + roots.Item1 + ", " + roots.Item2);
    }
}
*/
