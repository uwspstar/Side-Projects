public partial class Demo
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