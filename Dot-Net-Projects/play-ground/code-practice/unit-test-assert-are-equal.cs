/*
 
Using only NUnit's Assert.AreEqual method, write tests for the Account class that cover the following cases:

The Deposit and Withdraw methods will not accept negative numbers.
Account cannot overstep its overdraft limit.
The Deposit and Withdraw methods will deposit or withdraw the correct amount, respectively.
The Withdraw and Deposit methods return the correct results.
public class Account
{
    public double Balance { get; private set; }
    public double OverdraftLimit { get; private set; }

    public Account(double overdraftLimit)
    {
        this.OverdraftLimit = overdraftLimit > 0 ? overdraftLimit : 0;
        this.Balance = 0;
    }

    public bool Deposit(double amount)
    {
        if (amount >= 0)
        {
            this.Balance += amount;
            return true;
        }
        return false;
    }

    public bool Withdraw(double amount)
    {
        if (this.Balance - amount >= -this.OverdraftLimit && amount >= 0)
        {
            this.Balance -= amount;
            return true;
        }
        return false;
    }
}
*/
using System;
using NUnit.Framework;

[TestFixture]
public class Tester
{	
    private double epsilon = 1e-6;

    [Test]
    public void AccountCannotHaveNegativeOverdraftLimit()
    {
        Account account = new Account(-20);
        
        Assert.AreEqual(0, account.OverdraftLimit, epsilon);
    }
    
    [Test]
    public void WithdrawCannotHaveNegativeOverdraftLimit()
    {
        Account account = new Account(-20); 
        
        Assert.AreEqual(false,account.Withdraw(-1.0));
    }
    
    [Test]
    public void DepositCannotHaveNegativeOverdraftLimit()
    {
        Account account = new Account(-20); 
        
        Assert.AreEqual(false, account.Deposit(-1.0));
    }
}
