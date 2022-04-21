using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ReactionController : ControllerBase
    {
        private readonly IReactionRepository _reactionRepository;

        public ReactionController(IReactionRepository reactionRepository)
        {
            _reactionRepository = reactionRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok();
        }

        // POST api/<ReactionController>
        [HttpPost]
        public IActionResult Post(Reaction reaction)
        {
            _reactionRepository.Add(reaction);

            return CreatedAtAction("Get", new { id = reaction.Id }, reaction);
        }
    }
}
