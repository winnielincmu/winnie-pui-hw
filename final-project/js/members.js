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

// create array with all members' colored emblems, will be used to replace duplicated emblem on buttons

let allEmblems = new Array();

for (let member in members) {
        allEmblems.push(members[member]["emblemColored"]);
};

// remove emblems that are currently shown on page to identify which one is missing

let shownEmblems = document.getElementsByClassName('member-button');

for (let i = 0; i < shownEmblems.length; i++) {

    let imageName = getImageName(shownEmblems[i].firstElementChild.src);
    allEmblems.pop(imageName);

    // find position of emblem button that needs to be replaced, update emblem displayed

    if (imageName === members[memberIdentity]["emblemColored"]) {
        let replacePosition = shownEmblems[i].firstElementChild;
        replacePosition.src = './assets/cutouts-and-logo/' + String(allEmblems[0]);
    };

};

// function to extract image name taken from: https://stackoverflow.com/questions/29182283/javascript-onclick-get-image-name-without-path

function getImageName(fullPath) {
    let imageName = fullPath.replace(/^.*[\\\/]/, '');
    return imageName;
}