// need to inheritate Attribute
public class CustomAttribute : Attribute
{

}
public class MyFilter : Attribute
{

}

[Custom]
[MyFilterAttribute]
public class student
{

}
