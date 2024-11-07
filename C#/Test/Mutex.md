using System;
using System.IO;
using System.Threading;

class Program
{
    private static readonly string filePath = "counter.txt";

    static int ReadCounter(string filePath)
    {
        // 以只读模式打开文件，避免无意的写入权限
        using (var stream = new FileStream(filePath, FileMode.OpenOrCreate, FileAccess.Read, FileShare.ReadWrite))
        using (var reader = new StreamReader(stream))
        {
            string content = reader.ReadToEnd();
            return string.IsNullOrEmpty(content) ? 0 : int.Parse(content);
        }
    }

    static void WriteCounter(string filePath, int counter)
    {
        // 这里改用 FileMode.Truncate 来清空文件后写入，避免多次写入累积内容
        using (var stream = new FileStream(filePath, FileMode.Truncate, FileAccess.Write, FileShare.ReadWrite))
        using (var writer = new StreamWriter(stream))
        {
            writer.Write(counter);
        }
    }

    static void Main(string[] args)
    {
        using (var mutex = new Mutex(false, $"GlobalFileMutex:{filePath}"))
        {
            for (int i = 0; i < 100000; i++)
            {
                mutex.WaitOne();
                try
                {
                    int counter = ReadCounter(filePath);
                    counter++;
                    Console.WriteLine(counter);
                    WriteCounter(filePath, counter);
                }
                finally
                {
                    mutex.ReleaseMutex();
                }
            }
        }
        Console.WriteLine("Process finished.");
        Console.ReadLine();
    }
}
