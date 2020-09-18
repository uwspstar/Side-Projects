public class GenericMethod
{
    public static void Show<T>(T t)
    {
        System.Console.WriteLine(typeof(GenericMethod));
        System.Console.WriteLine(t.GetType().Name, t.ToString());
    }
}

public class GenericClass<T>
{
    public T _T;
}
public interface IGenericInterface<T>
{
    T GetT(T t); // return T
}
public delegate void GenericDelegate<T>(T t);

public class CommonClass1<T> : GenericClass<T>
{
}
public class CommonClass2<T> : GenericClass<int>
{
    // if CommonClass does have <type>, the GenericClass need has type
}
public class CommonClass3 : GenericClass<int>
{
    // if CommonClass does have <type>, the GenericClass need has type
}
public class CommonClass4<T> : GenericClass<T>, IGenericInterface<T>
{
    // if CommonClass does have <type>, the GenericClass need has type
}
public class CommonClass4<T> : GenericClass<int>, IGenericInterface<T>
{
    // if CommonClass does have <type>, the GenericClass need has type
}