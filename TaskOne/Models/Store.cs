using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace TaskOne
{
    public partial class Store
    {
        public Store()
        {
            Sales = new HashSet<Sales>();
        }
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Address { get; set; }
        [JsonIgnore]
        public ICollection<Sales> Sales { get; set; }
    }
}
