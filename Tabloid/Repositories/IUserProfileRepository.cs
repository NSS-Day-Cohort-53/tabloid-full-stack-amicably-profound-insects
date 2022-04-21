using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserProfileRepository
    {
        List<UserProfile> GetDeactivatedUserProfiles();
        public void Deactivate(int id);
        UserProfile GetById(int id);
        List<UserProfile> GetAll();
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}