const searchEmoji = (e) => {
  e.preventDefault();
  const value = document.getElementById("serach_field").value;
  // console.log(value);
  displaySearchResults(value);
  return false;
};

const autoSearch = (e) => {
  const value = e.target.value;
  // console.log(value);
  displaySearchResults(value);
};

const displaySearchResults = (searchQuery = "") => {
  const filtered = emojiList.filter((e) => {
    if (e.description.indexOf(searchQuery) != -1) {
      return true;
    }
    if (e.aliases.some((elem) => elem.startsWith(searchQuery))) {
      return true;
    }
    if (e.tags.some((elem) => elem.startsWith(searchQuery))) {
      return true;
    }
  });

let emoji = document.querySelector(".emoji_display");
emoji.innerHTML = "";

filtered.forEach((e) => {
  let new_div = document.createElement("div");
  let new_emiji = document.createElement("div");
  let new_aliases = document.createElement("div");
  let new_disc = document.createElement("div");

  new_emiji.innerText = e.emoji;
  new_aliases.innerText = e.aliases;
  new_disc.innerText = e.disdescription;
  new_aliases.innerText = new_aliases.innerText.replaceAll("_", " ");
  new_div.append(new_emiji , new_aliases , new_disc);
});
};

document.getElementById("search_form").addEventListener("submit", searchEmoji);
document.getElementById("search_field").addEventListener("keyup", autoSearch);

window.onload = () => displayShow();
