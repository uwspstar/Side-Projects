public class GenericMethod
{
    public static void Show<T>(T t)
    {
        System.Console.WriteLine(typeof(GenericMethod));
        System.Console.WriteLine(t.GetType().Name, t.ToString());
    }
}