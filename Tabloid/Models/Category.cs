using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Please add a category name.")]
        [MaxLength(35)]
        public string Name { get; set; }
    }
}