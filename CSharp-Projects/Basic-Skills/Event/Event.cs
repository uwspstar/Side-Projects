namespace EventExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Customer customer = new Customer();
            Waiter waiter = new Waiter();
            customer.Order += waiter.Action;

        }
    }
    public class OrderEventArgs : EventArgs
    {
        public string DishName { get; set; }
        public string Size { get; set; }
    }

    public delegate void OrderEventHandler(Customer customer, OrderEventArgs e);
    public class Customer
    {
        private OrderEventHandler orderEventHandler;

        public event OrderEventHandler Order
        {
            add
            {
                this.orderEventHandler += value;
            }
            remove
            {
                this.orderEventHandler += value;

            }
        }

        public double Bill { get; set; }
        public void PayBill()
        {
            System.Console.WriteLine("PayBill...");

        }
        public void Walkin()
        {
            System.Console.WriteLine("Walkin ...");
        }
        public void SetDown()
        {
            System.Console.WriteLine("SetDown ...");
        }

        public void Think()
        {
            if (this.orderEventHandler != null)
            {
                OrderEventArgs e = new OrderEventArgs();
                e.DishName = "KongPao Chicken";
                e.Size = "large";
                this.orderEventHandler.Invoke(this, e);
            }
        }
    }

    public class Waiter
    {
        public void Action(Customer customer, OrderEventArgs e)
        {
            double price = 10;
            switch (e.Size)
            {
                case "small":
                    price = price * 0.5;
                    break;
                case "large":
                    price = price * 2;
                    break;
            }
            customer.Bill += price;
        }
    }

}