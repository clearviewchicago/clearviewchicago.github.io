/*
ok for the my events thing it needs to work like this
there is the add button next to the event.when the add button is clicked it needs to append that event to a list of their events. This list needs to be displayed on the My events page.
-create add button
-create empty my_events list
-display my_events list on my events page
-append event to my_events when Add button is clicked
-display changes on my events page
we also need a login/sign up system or else everyone will have the same events in their my_events page
-look up code for this idek
figure that out.
go.
*/

function Addit() {
    document.getElementById("Addit").style.width = "220px";
    document.getElementById("main").style.marginLeft = "220px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
function closeNav() {
    document.getElementById("Addit").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "black";
}

