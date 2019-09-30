using System;

public class Node
{
    public int Value { get; set; }

    public Node Left { get; set; }

    public Node Right { get; set; }

    public Node(int value, Node left, Node right)
    {
        Value = value;
        Left = left;
        Right = right;
    }
}

public class BinarySearchTree
{
    public static bool Contains(Node root, int value)
    {
        //throw new NotImplementedException("Waiting to be implemented.");
       
       if (root == null)
       {
            return false;
       }

       if (root.Value == value)
       {
           return true;
       }  


       if (value.CompareTo(root.Value) < 0)
       {
            return Contains(root.Left, value);
       }
       
       if (value.CompareTo(root.Value) > 0)
       {
            return Contains(root.Right, value);
       }
       
       return false;
    }

    public static void Main(string[] args)
    {
        Node n1 = new Node(1, null, null);
        Node n3 = new Node(3, null, null);
        Node n2 = new Node(2, n1, n3);

        Console.WriteLine(Contains(n2, 3));
    }
}
