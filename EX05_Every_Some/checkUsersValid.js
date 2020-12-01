function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers
            .every(submittedUser => goodUsers
                .some(goodUser => goodUser.id === submittedUser.id));
    };
}

module.exports = checkUsersValid

// module.exports = function checkUsersValid(goodUsers) {
//     return function allUsersValid(submittedUsers) {
//         return submittedUsers.every(function(submittedUser) {
//             return goodUsers.some(function(goodUser) {
//                 return goodUser.id === submittedUser.id
//             })
//         })
//     }
// }
