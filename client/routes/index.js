Router.configure({
    layoutTemplate: "main"
})

Router.route("/", function(){
    this.render("home", {data: function(){
        let _id = Meteor.userId();
        this.subscribe("posts", _id).wait();
        this.subscribe("friendships", _id);
        let timelineIds = Friendships.timelineIds(_id)
        let posts = Posts.list(timelineIds)
        posts = posts.map(function(item) {
            item.alreadylike = Posts.alreadyLike(item._id, _id);
            return item
        })
        return{
            posts : posts,
            followers : Friendships.followers(_id),
            followings : Friendships.followings(_id)
        }
    }
    });
}, {name : "home"});