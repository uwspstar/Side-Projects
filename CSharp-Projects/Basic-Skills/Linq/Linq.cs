namespace Linq
{
    public class Program
    {
        static void main(string[] args)
        {

        }
    }

    public class LinqToObject
    {
        public static List<T> ToWhere<T>(this List<T> list, Func<T, bool> func)
        {
            list<T> result = new List<T>();
            foreach (var item in list)
            {
                if (func.Invoke(item))
                {
                    result.Add(item);
                }
            }
            return result;
        }

    }
    public class LingToSql
    {
        Northwnd db = new Northwnd(@"c:\northwnd.mdf");

        // Query for customers in London.  
        IQueryable<Customer> custQuery =
            from cust in db.Customers
            where cust.City == "London"
            select cust;
    }
    public class LingToXML
    {
        // Create a data source from an XML document.
        // using System.Xml.Linq;
        XElement contacts = XElement.Load(@"c:\myContactList.xml");

    }
}