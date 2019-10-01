/*
A playlist is considered a repeating playlist 
if any of the songs contain a reference to a previous song in the playlist. 
Otherwise, the playlist will end with the last song which points to null.

Implement a function IsRepeatingPlaylist that, 
efficiently with respect to time used, 
returns true if a playlist is repeating or false if it is not.

For example, the following code prints "True" as both songs point to each other.

Song first = new Song("Hello");
Song second = new Song("Eye of the tiger");
    
first.NextSong = second;
second.NextSong = first;

Console.WriteLine(first.IsRepeatingPlaylist());
*/

using System;

public class Song
{
    private string name;
    public Song NextSong { get; set; }
 
    public Song(string name)
    {
        this.name = name;
    }
    
    public bool IsRepeatingPlaylist()
    {
        if (this == null) return false;
        
        var slow = this;
        var fast = this.NextSong;
        
        while (fast != null && fast.NextSong != null)
        {
            if (slow == fast) return true;
            
            slow = slow.NextSong;
            fast = fast.NextSong.NextSong;
        }
        
        return false;
        
    }
    
    public static void Main(string[] args)
    {
        Song first = new Song("Hello");
        Song second = new Song("Eye of the tiger");
    
        first.NextSong = second;
        second.NextSong = first;
    
        Console.WriteLine(first.IsRepeatingPlaylist());
    }
}
