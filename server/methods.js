Meteor.methods({
    followUser : function(friendId){
        Friendships.follow(friendId);
    },

    unfollowUser : function(friendId){
        Friendships.unfollow(friendId);
    },

    profileUpdate : function(name, about){
        Meteor.users.update(
            {_id : Meteor.userId()},
            {$set: {
            "profile.name":name,
            "profile.about": about
            }}
        );
        Posts.update(
            {userId: Meteor.userId()},
            {$set: {name:name}},
            {multi: true}
        );
    },
    publishPost: function(message, name){
        Posts.publish(message, name);
    },

    likePost: function(postId, userId) {
       Posts.like(postId, userId)
    },
    dislikePost: function(postId, userId) {
        Posts.dislike(postId, userId)
     }
    



})