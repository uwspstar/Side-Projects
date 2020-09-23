public class CustomerCache
{

    // use static , so GC will not affect it
    // use key, value
    private static Dictionary<string, Object> CustomerCacheDictionary =
    new Dictionary<string, Object>();

    public static void Add(string key, object value)
    {
        CustomerCacheDictionary[key] = value;
    }
    public static T Cet<T>(string key)
    {
        return CustomerCacheDictionary[key];
    }

    public static bool Contains(string key)
    {
        return CustomerCacheDictionary.ContainsKey(key);
    }

    public static T GetData<T>(string key, Func<T> func)
    {
        T result = default(T);
        if (CustomerCache.Contains(key))
        {
            result = CustomerCache.Get<T>(key);
        }
        else
        {
            result = func.Invoke();
            CustomerCache.Add(key, result);
        }
        return result;
    }

}