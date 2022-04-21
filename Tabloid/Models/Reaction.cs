using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Reaction
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please add a Reaction name.")]
        [MaxLength(35)]
        public string Name { get; set; }

        [Required(ErrorMessage = "Please add an image url.")]
        public string ImageLocation { get; set; }
    }
}