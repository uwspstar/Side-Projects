public class Program
{

    static void Main(string[] args)
    {
        Cat cat = new Cat();
        cat.MiaoDelegateHandler += new MiaoDelegate(new Mouse().Run);
        cat.MiaoDelegateHandler += new MiaoDelegate(new Baby().Cry);
        cat.MiaoDelegateHandler += new MiaoDelegate(new Mother().Sing);
        cat.MiaoDelegateHandler += new MiaoDelegate(new Father().Roar);

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
    public MiaoDelegate MiaoDelegateHandler;
    public void Miaow()
    {
        System.Console.WriteLine(this.GetType().Name);

        if (this.MiaoDelegateHandler != null)
        {
            this.MiaoDelegateHandler.Invoke();
        }
    }
}