public class GenericMethod
{
    public static void Show<T>(T t)
    {
        System.Console.WriteLine(typeof(GenericMethod));
        System.Console.WriteLine(t.GetType().Name, t.ToString());
    }

    public static void Show<T>(T t) where T : People
    {
        // t is People
        System.Console.WriteLine(t.Name);
        System.Console.WriteLine(t.Age);
    }
    public static T SayHi<T>(T t) where T : struct
    {
        T tNew = default(T);
    }
    public class People
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }

    public class GenericClass<T>
    {
        public T _T;
    }
    public class GenericClass<T, D, P>
        where T : Tea
        where D : Dog
        where P : People
    {
        public T _T;
    }
    public interface ISport
    {
        T GetT(T t); // return T
    }
    public interface IGenericInterface<T>
    {
        T SetT(T t); // return T
    }
    public interface IGenericInterface<T> where T : People
    {
        T GetT(T t); // return T
    }
    public interface IGenericInterface<T> where T : ISport
    {
        T SetT(T t); // return T
    }
    public interface IGenericInterface<T> where T : class
    {
    }
    public interface IGenericInterface<T> where T : struct
    {

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
}

