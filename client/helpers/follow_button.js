Template.followButton.helpers({
    canFollow: function(){
        let userId = Meteor.userId();
        return userId && Session.get("currentUserId") != userId;
    },
    isFollowing: function(){
        console.log(Session.get("isFollowing"))
        return Session.get("isFollowing");
    }
})