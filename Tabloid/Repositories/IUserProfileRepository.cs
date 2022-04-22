using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IUserProfileRepository
    {
        bool CheckIfLastAdmin();
        void ChangeUserType(UserProfile profile);
        List<UserType> GetUserTypes();
        List<UserProfile> GetDeactivatedUserProfiles();
        void Reactivate(int id);
        void Deactivate(int id);
        UserProfile GetById(int id);
        List<UserProfile> GetAll();
        void Add(UserProfile userProfile);
        UserProfile GetByFirebaseUserId(string firebaseUserId);
    }
}