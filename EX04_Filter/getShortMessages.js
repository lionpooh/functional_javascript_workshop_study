function getShortMessages(messages) {
    return messages
            .map(input => input.message)
            .filter(message => message.length < 50)
}

module.exports = getShortMessages

// module.exports = function getShortMessages(messages) {
//     return messages.filter(function(item) {
//         return item.message.length < 50
//     }).map(function(item) {
//         return item.message
//     })
// }