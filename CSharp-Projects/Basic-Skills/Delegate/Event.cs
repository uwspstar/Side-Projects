public class Program
{

    static void Main(string[] args)
    {
        Cat cat = new Cat();
        cat.MiaoDelegateEventHandler += new MiaoDelegate(new Mouse().Run);
        cat.MiaoDelegateEventHandler += new MiaoDelegate(new Baby().Cry);
        cat.MiaoDelegateEventHandler += new MiaoDelegate(new Mother().Sing);
        cat.MiaoDelegateEventHandler += new MiaoDelegate(new Father().Roar);
        // CANNOT invoke or Set null
        //cat.MiaoDelegateEventHandler.Invoke();
        //cat.MiaoDelegateEventHandler = null;
        cat.Miaow();
    }

}
public class Mouse
{
    public void Run()
    {
        System.Console.WriteLine(this.GetType().Name);
    }
}

public delegate void MiaoDelegate();
public partial class Cat
{
    public event MiaoDelegate MiaoDelegateEventHandler;
    public void MiaowEvent()
    {
        System.Console.WriteLine(this.GetType().Name);

        if (this.MiaoDelegateEventHandler != null)
        {
            this.MiaoDelegateEventHandler.Invoke();
        }
    }
}