// Controllers/JobsController.cs
using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;
using System.Collections.Generic;
using System.Linq;
using assignment.Data;
using assignment.Models;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JobsController(ApplicationDbContext context)
        {
            _context = context;

            // Seed data
            if (!_context.Jobs.Any())
            {
                _context.Jobs.Add(new Job
                {
                    Id = "1",
                    Title = "Sample Job",
                    Description = "This is a sample job",
                    SubItems = new List<SubItem>
                    {
                        new SubItem { ItemId = "1", Title = "SubItem 1", Description = "Description 1", Status = "Pending" },
                        new SubItem { ItemId = "2", Title = "SubItem 2", Description = "Description 2", Status = "In Progress" }
                    }
                });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public ActionResult<IEnumerable<Job>> GetJobs()
        {
            return _context.Jobs.Include(j => j.SubItems).ToList();
        }

        [HttpPost]
        public ActionResult<Job> PostJob(Job job)
        {
            _context.Jobs.Add(job);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetJobs), new { id = job.Id }, job);
        }
    }
}