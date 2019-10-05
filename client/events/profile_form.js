import {Session} from "meteor/session";
Template.profileForm.events({
    "submit form": function(e, template){
        e.preventDefault();
        let inputs = template.findAll("input");
        let name = inputs[0].value;
        let about = inputs[1].value;
        Meteor.call("profileUpdate", name, about);
        Session.set("editProfile", false);
    }
})