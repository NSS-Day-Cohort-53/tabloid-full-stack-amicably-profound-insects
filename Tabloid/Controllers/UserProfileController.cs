using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class UserProfileController : ControllerBase
    {
        private readonly IUserProfileRepository _userProfileRepository;
        public UserProfileController(IUserProfileRepository userProfileRepository)
        {
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_userProfileRepository.GetAll());
        }

        [HttpGet("details/{id}")]
        public IActionResult Get(int id)
        {
            var user = _userProfileRepository.GetById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        [HttpGet("{firebaseUserId}")]
        public IActionResult GetUserProfile(string firebaseUserId)
        {
            return Ok(_userProfileRepository.GetByFirebaseUserId(firebaseUserId));
        }

        [HttpGet("DoesUserExist/{firebaseUserId}")]
        public IActionResult DoesUserExist(string firebaseUserId)
        {
            var userProfile = _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
            if (userProfile == null)
            {
                return NotFound();
            }
            return Ok();
        }

        [HttpPost]
        public IActionResult Post(UserProfile userProfile)
        {
            userProfile.CreateDateTime = DateTime.Now;
            userProfile.UserTypeId = UserType.AUTHOR_ID;
            _userProfileRepository.Add(userProfile);
            return CreatedAtAction(
                nameof(GetUserProfile),
                new { firebaseUserId = userProfile.FirebaseUserId },
                userProfile);
        }

        [HttpPut("deactivate/{id}")]
        public IActionResult Deactivate(int id, UserProfile profile)
        {
            try
            {
                if(id != profile.Id)
                {
                    return BadRequest();
                }
                var currentUser = GetCurrentUserProfile();
                if (currentUser.UserTypeId == 1)
                {
                    _userProfileRepository.Deactivate(id);
                    return NoContent();
                }
                else
                {
                    return Unauthorized();
                }
                
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPut("reactivate/{id}")]
        public IActionResult Reactivate(int id, UserProfile profile)
        {
                if (id != profile.Id)
                {
                    return BadRequest();
                }
                var currentUser = GetCurrentUserProfile();
                if (currentUser.UserTypeId == 1)
                {
                    _userProfileRepository.Deactivate(id);
                    return NoContent();
                }
                else
                {
                    return Unauthorized();
                }
        }


        [HttpGet("getCurrentUserType")]
        public IActionResult GetCurrentUserType()
        {
            var currentUser = GetCurrentUserProfile();
            return Ok(new { userType = currentUser.UserTypeId } );
        }

        [HttpGet("deactivated")]
        public IActionResult GetDeactivatedUserProfiles()
        {
            return Ok(_userProfileRepository.GetDeactivatedUserProfiles()); 
        }
        
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}
