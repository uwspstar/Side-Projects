using System;
using IntroLibrary;

namespace IntroUI
{
    class Program
    {

        static void Main(string[] args)
        {
            PersonModel p = new PersonModel
            {
                FirstName = "Xing",
                LastName = "Wang"
            };

            Console.WriteLine($"{p.FirstName} {p.LastName}");

            Console.WriteLine("Hello World!");
            Console.WriteLine("This is a test");
        }
    }
}
