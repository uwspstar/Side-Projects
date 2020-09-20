// create object
// application config

namespace MyReflection
{
    public class Factory
    {
        private static string IDBHelpConfig = ConfigurationManager.AppSettings["IDBHelper"];
        private static string DLLName = IDBHelpConfig.Split(',')[1];
        private static string TypeName = IDBHelpConfig.Split(',')[0];

        public static IDBHelp CreateHelper()
        {
            //Assembly assembly = Assembly.Load("DB.MySql");
            //Type type = assembly.GetType("DB.MySql.MySqlHelper");
            Assembly assembly = Assembly.Load(DLLName);
            Type type = assembly.GetType(TypeName);
            object oDBHelper = Activator.CreateInstance(type);
            IDBHelper iDBHelper = (IDBHelper)oDBHelper;
            return IDBHelper;
        }

    }
}