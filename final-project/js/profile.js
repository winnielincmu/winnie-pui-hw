// acquire member identity from URL

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const memberIdentity = params.get('member');

// retrieve profile image, emblems, name, title, and description from DOM

let memberImage = document.querySelector('.member-photos');
let memberName = document.querySelector('#member-name');
let memberTitle = document.querySelector('#member-title');
let memberBioTop = document.querySelector('#top-bio');
let memberBioBottom = document.querySelector('#bottom-bio');
let memberEmblem = document.querySelector('.member-emblems');
let memberLink = document.querySelector('.member-link');
let memberButtonCaption = document.querySelector('.more-button span');

// assign respective content to the members' profiles

memberImage.src = './assets/cutouts-and-logo/' + members[memberIdentity]["profilePic"];
memberName.innerText = memberIdentity;
memberTitle.innerText = members[memberIdentity]["title"];
memberBioTop.innerText = members[memberIdentity]["bioTop"];
memberBioBottom.innerText = members[memberIdentity]["bioBottom"];
memberEmblem.src = './assets/cutouts-and-logo/' + members[memberIdentity]["emblemBlack"];
memberLink.href = members[memberIdentity]["link"];
memberButtonCaption.innerText = 'More On ' + memberIdentity;

// update size of 'more information' button to fit length of evelynn's name

let moreButton = document.querySelector('.more-button');

if (memberIdentity === "Evelynn") {
    moreButton.style.width = "85%";
    memberLink.style.width = "85%";
};