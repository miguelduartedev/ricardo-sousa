const heavy_water_header = 'Heavy Water <br> Ricardo Sousa';

const heavy_water_description = `An essay exploring how mechanical complications allow mundane objects perform seemlessly, quitely while being very intuitive. <br><br>
With an obsessive attention to detail, specially on the inside, performance and durability, this project has resulted into an object that provides and intruiging and almost magical performance. <br><br>
After two years of development Ensaio 304 is a commercially available faucet, writing a statment regarding the importance of hidden complex intricacies remiding us about the value of tactality.`;

const silent_gestures_header = 'Silent gestures <br> Ricardo Sousa and André Duarte';

const silent_gestures_description = `Silent gestures started with an uncompromised observation of objects from different
time periods acrossthe
portuguese cultural chain from continental Portugal to its colonies at the Lisbon’s Museum of Ethnology. The
intent was simple yet quite complex, to understand what objects stopped being produced over time, understand
why and if possible present a contemporary perspective that could bring them back in a way that the
contemporary market narratives could embrace them based on the aesthetic, ethic and cultural values.
<br /><br />

During that process the we understood the time specific values of the objects and because of that, bringing
them back based on a revival whim would not create value. However, the traditional techniques weakened with
time could bring intrinsic cultural knowledge back, and by exposing them in a raw yet very eclectic manner
they could be broadly understood and deeply appreciated.<br /><br />

We were immensely attracted by the burners and amulets, objects with ritualistic connotations, some of them
very intimate and personal. This was the turning point, the time where typology and technique collided and the
idea was born. We took fragrance diffusers as a mean to glorify traditional linen, the chosen material due to
its ability to hold liquids yet allowing them to breath.<br /><br />

The design process was headed to the conception of sculptural volumes, each one resembling an hyperbolic
spatial expansion due to its scale, not due to a necessity or the need to achieve an evolved version but
rather to present a contemporary perspective on their aesthetic, meaning as objects, an evaluation for the use
of traditional materials and techniques in the contemporary context, and ultimately the role of design as an
agent for the creation of matter in a world where immateriality seems to be the ultimate vanishing
point.<br /><br />

&nbsp; &nbsp; Who strive - you don’t know how the others strive <br>
&nbsp; &nbsp; To paint a little thing like that you smeared<br>
&nbsp; &nbsp; Carelessly passing with your robes afloat,<br>
&nbsp; &nbsp; Yet do much less, so much less, Someone says,<br>
&nbsp; &nbsp; (I know his name, no matter) - so much less!<br>
&nbsp; &nbsp; Well, less is more (...)<br /><br />

In the poem entitled Andrea del Sarto, written in 1855 by Robert Browning we can read the so acclaimed
expression Less is More. This collection does not intend to create a better version of the objects per se,
 and because of that it does deviate from the traditional academical approach to design. However, if design
 is intention (Flusser 1993) we may comfortably assert that an object can also be a medium for a message. And
that’s what we intended with each piece, something explicit in the way we made all the components visible,
exposing the mechanism of each part and the symbiotic relations between them and the object  as a
whole.<br /><br />

In the Diffuser 2 specifically, theres is a process deconstruction by showing the four wires of traditional
linen yarn individually before they become into a cord made from a traditional portuguese technique called
bilros. Records of structure exposition are also clear in Diffuser 1 and Estrutura Vertical.<br /><br />

In the Diffuser 2 specifically, theres is a process deconstruction by showing the four wires of traditional
linen yarn individually before they become into a cord made from a traditional portuguese technique called
bilros. Records of structure exposition are also clear in Diffuser 1 and Estrutura Vertical.`;

var readme_handler = {
  'Heavy water': { 'header': heavy_water_header, 'description': heavy_water_description},
  'Silent gestures': { 'header': silent_gestures_header, 'description': silent_gestures_description},
};

document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("project")) {
    let project = sessionStorage.getItem("project");
    document.getElementById('readme_title').innerHTML = readme_handler[project]['header'];
    document.getElementById('readme_description').innerHTML = readme_handler[project]['description'];
    $("body").fadeIn(1000);
  }
});