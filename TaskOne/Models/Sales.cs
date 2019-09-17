using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TaskOne
{
    public partial class Sales
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public int? ProductId { get; set; }
        [Required]
        public int? CustomerId { get; set; }
        [Required]
        public int? StoreId { get; set; }
        [Required]
        public DateTime? DateSold { get; set; }

        public Customer Customer { get; set; }
        public Product Product { get; set; }
        public Store Store { get; set; }
    }
}
