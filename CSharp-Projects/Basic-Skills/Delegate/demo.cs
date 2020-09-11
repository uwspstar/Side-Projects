using System;

public partial class demo
{
    public delegate bool ThanDelegate(Student s);
    ThanDelegate method = new ThanDelegate(this.Than);

    private bool Than(Student student)
    {
        return student.age > 25;
    }
    private bool ThanLength(Student student)
    {
        return student.name.Length > 25;
    }
    private List<Student> GetListDelegate(List<Student> source, ThanDelegate method)
    {

    }
}

public class Student
{
    public string name { get; set; }
    public int age { get; set; }
}