Posts = new Mongo.Collection("posts");

Posts.publish = function(message, name){
    var params = {
        message : message,
        time: new Date(),
        userId: Meteor.userId(),
        name: name
    };
    this.insert(params)
};

Posts.list = function(userIds){
    return this.find(
        {userId: {"$in": userIds}},
        {sort: {time:-1, name: 1}}
    );
}

Posts.like = function(postId, userId) {
    Posts.update({_id: postId}, {$push: {likes : userId}})
}

Posts.dislike = function(postId, userId) {
    Posts.update({_id: postId}, {$pull: {likes : userId}})
}

Posts.alreadyLike = function(postId, userId){
    return this.findOne(
        {_id:postId, likes : [userId]}
    )
}