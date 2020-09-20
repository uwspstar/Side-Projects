public sealed class Singleton
{
    private static Singleton _Singleton = null;
    private Singleton()
    {
        System.Console.WriteLine("create Singleton");
    }
    static Singleton()
    {
        _Singleton = new Singleton();
    }
    public static Singleton GetInstance()
    {
        return _Singleton;
    }
}