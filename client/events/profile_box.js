import {Session} from "meteor/session";
Template.profileBox.events({
    "click button": function(e){
        e.preventDefault();
        Session.set("editProfile", true);
    }
})