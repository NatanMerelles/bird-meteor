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

Posts.list = function(userId){
    return this.find({userId: userId});
}