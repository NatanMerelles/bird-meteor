Meteor.publish("posts", function(_id){
    let timelineIds = Friendships.timelineIds(_id);
    return Posts.list(timelineIds);
})

Meteor.publish("friendships", function(_id) {
    return Friendships.followersAndFollowings(_id);
})

Meteor.publish("user", function(_id) {
    return Meteor.users.find({_id: _id});
})