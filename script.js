function openSection(evt, sectionName) {
    const contents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < contents.length; i++) contents[i].style.display = "none";

    const links = document.getElementsByClassName("tablink");
    for (let i = 0; i < links.length; i++) links[i].classList.remove("active");

    document.getElementById(sectionName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

function openSubtab(evt, subName, group) {
    const parent = document.getElementById(group);
    const subs = parent.getElementsByClassName("subcontent");
    for (let i = 0; i < subs.length; i++) subs[i].style.display = "none";

    document.getElementById(subName).style.display = "block";
}
