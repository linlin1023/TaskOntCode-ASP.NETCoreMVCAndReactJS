using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TaskOne
{
    public partial class Customer
    {
        public Customer()
        {
            Sales = new HashSet<Sales>();
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }

        public ICollection<Sales> Sales { get; set; }
    }
}
