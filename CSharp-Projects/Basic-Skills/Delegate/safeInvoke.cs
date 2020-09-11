public partial class demo
{
    public static void SafeInvoke(Action act)
    {
        try
        {
            act.Invoke();
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }

    }
}
