using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TaskOne
{
    public partial class Product
    {
        public Product()
        {
            Sales = new HashSet<Sales>();
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public decimal? Price { get; set; }

        public ICollection<Sales> Sales { get; set; }
    }
}
