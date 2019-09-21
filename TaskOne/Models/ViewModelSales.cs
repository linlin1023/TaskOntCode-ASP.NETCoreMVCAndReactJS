using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskOne.Models
{
    public class ViewModelSales
    {
     
        public int Id { get; set; }
        public int? ProductId { get; set; }
        public int? CustomerId { get; set; }
        public int? StoreId { get; set; }
        public DateTime? DateSold { get; set; }
        public string Customer { get; set; }
        public string Product { get; set; }
        public string Store { get; set; }
    }
}
