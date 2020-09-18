public class Demo
{
    static void Main(string[] args)
    {
        string key = $"this_is_key_123";
        /*
        int result = 0;
        if (CustomerCache.Contains(key))
        {
            result = CustomerCache.Get<int>(key);
        }
        else
        {
            result = DataSource.Count(123);
            CustomerCache.Add(key, result);

        }*/
        int result = CustomerCache.GetData<int>(key, () => CustomerCache.Get<int>(key));

    }
}