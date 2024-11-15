using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace assignment.Models
{
    public class Job
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<SubItem> SubItems { get; set; }

        public Job()
        {
            SubItems = new List<SubItem>();
        }
    }
}
