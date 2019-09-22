using System;

class MainClass
{
    public static void Main(string[] args)
    {
        int x = 0;
        int y = 0;

        for (short z = 0; z < 3; z++)
        {
            //Console.WriteLine("start z = "+ z + ", x = " + x + ", y = " + y); 

            if ((++x > 1) || (++y > 1))
            {
                x++;
                //Console.WriteLine("loop z = "+ z + ", x = " + x + ", y = " + y);
            }
        }
        Console.WriteLine(x + "" + y);
    }
}

// 51