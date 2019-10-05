Template.timeline.events({
    "click #like": function(e, t){
        e.preventDefault();
        Meteor.call("likePost", e.target.value, Meteor.userId());
    },
    "click #dislike": function(e, t){
        e.preventDefault();
        Meteor.call("dislikePost", e.target.value, Meteor.userId());
    }
})