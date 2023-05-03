// acquire member identity from URL

let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let memberIdentity = params.get('member');

// retrieve profile image, emblems, name, title, and description from DOM

let memberImage = document.querySelector('.member-photos');
let memberName = document.querySelector('#member-name');
let memberTitle = document.querySelector('#member-title');
let memberBioTop = document.querySelector('#top-bio');
let memberBioBottom = document.querySelector('#bottom-bio');
let memberEmblem = document.querySelector('.member-emblems');
let memberLink = document.querySelector('#external-details');
let memberButtonCaption = document.querySelector('.more-button span');

// assign respective content to the members' profiles

memberImage.src = './assets/cutouts-and-logo/' + members[memberIdentity]["profilePic"];
memberName.innerText = memberIdentity;
memberTitle.innerText = members[memberIdentity]["title"];
memberEmblem.src = './assets/cutouts-and-logo/' + members[memberIdentity]["emblemBlack"];
memberLink.href = members[memberIdentity]["link"];
memberButtonCaption.innerText = 'More On ' + memberIdentity;

// retrieve parts of member description

let topTextBefore = document.getElementById('top-before');
let role = document.getElementById('role');
let topTextAfter = document.getElementById('top-after');
let bottomTextBefore = document.getElementById('bottom-before');
let strengths = document.getElementById('strengths');
let bottomTextAfter = document.getElementById('bottom-after');

//  update parts of description separately to render correct information on DOM

topTextBefore.innerText = members[memberIdentity]["bioTopBefore"];
role.innerText = members[memberIdentity]["role"];
topTextAfter.innerText = members[memberIdentity]["bioTopAfter"];
bottomTextBefore.innerText = members[memberIdentity]["bioBottomBefore"];
strengths.innerText = members[memberIdentity]["strengths"];
bottomTextAfter.innerText = members[memberIdentity]["bioBottomAfter"];

// adjust image placement for three members

if (memberIdentity === "Evelynn") {
    memberImage.style.right = 40 + "px";
    memberImage.style.bottom = 40 + "px";
};

if (memberIdentity === "Kai'sa") {
    memberImage.style.bottom = 40 + "px";
};

if (memberIdentity === "Akali") {
    memberImage.style.right = 40 + "px";
};