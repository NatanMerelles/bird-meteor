Friendships = new Meteor.Collection("friendships");

Friendships.follow = function(friendId){
    this.insert({
        userId : Meteor.userId(),
        friendId : friendId
    })
}

Friendships.unfollow = function(friendId){
    this.remove({
        userId : Meteor.userId(),
        friendId : friendId
    })
}

Friendships.isFollowing = function(friendId){
    return this.findOne({
        userId : Meteor.userId(),
        friendId : friendId
    })
}

Friendships.followers = function(userId){
    return this.find({friendId : userId}).count()
}

Friendships.followings = function(userId){
    return this.find({userId : userId}).count()
}

Friendships.followersAndFollowings = function(_id) {
    return this.find({$or : [{userId: _id}, {friendId: _id}]});
}

Friendships.timelineIds = function(userId){
    let timelineIds = this.find({
        userId: userId
    }).map(function(item){
        return item.friendId
    });

    timelineIds.push(userId);
    return timelineIds;
}