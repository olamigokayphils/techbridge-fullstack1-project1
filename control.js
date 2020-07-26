// //console.dir(document);

// console.log(document.URL);
// console.log(document.domain);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.links);
// console.log(document.images)

//const listItems = document.getElementsByClassName("list-group-item");
// listItems[0].textContent = "Play some games";
// listItems[0].style.fontWeight = "bold";
// listItems[0].style.backgroundColor = "#d66f6f";
// listItems[0].style.color = "#ffffff";

// for (let i = 0; i < listItems.length; i++) {
//   listItems[i].style.backgroundColor = "#d66f6f";
// }

// let addActivity = document.getElementById("add-activity");
// addActivity.textContent = "Done Boss";

// let allListItems = document.getElementsByTagName("li");
// console.log(allListItems);

//QUERY SELECTOR

// let listGroup = document.querySelector(".list-group");
// console.log(listGroup);

// listGroup.style.fontWeight = "700";
// listGroup.style.color = "green";

// let button = document.querySelector("input[type='submit']");
// let numbersOfLikes = 0;
// button.value = "Likes";
// button.addEventListener("click", function (event) {
//   event.preventDefault();
//   numbersOfLikes += 1;
//   button.value = `Likes (${numbersOfLikes})`;
// });

// JUL 26
let activityList = [
  {
    title: "Wash the dishes",
    finished: false,
  },
  {
    title: "Cook",
    finished: false,
  },
  {
    title: "Mow the lawn",
    finished: false,
  },
  {
    title: "Finish up my Assignment",
    finished: false,
  },
  {
    title: "Take a nap",
    finished: false,
  },
  {
    title: "Pick Debbie from school",
    finished: false,
  },
];

const activityListParentElement = document.querySelector("#activity-list");

function mapArrayToDOM() {
  activityListParentElement.innerHTML = "";
  activityList.forEach(function (activity, index) {
    // CREATE CHILD ELEMENT
    const newActivityDom = document.createElement("li");
    newActivityDom.className = "list-group-item";

    //CREATE INNER CHILD DIV
    const activityItemDiv = document.createElement("div");
    activityItemDiv.className = "activity-item";

    // CREATE TITLE SPAN
    const titleSpan = document.createElement("span");
    titleSpan.textContent = activity.title;

    // CREATE DELETE BUTTON
    const deleteActivityButton = document.createElement("button");
    deleteActivityButton.className = "btn btn-danger";
    deleteActivityButton.type = "button";
    deleteActivityButton.textContent = "Delete";
    deleteActivityButton.onclick = function () {
      //This is an Anonymous Function
      alert(`Delete ${activityList[index].title} ?`);
    };

    //APPEND TITLE SPAN & DELETE BUTTON TO 'INNER CHILD DIV'
    activityItemDiv.appendChild(titleSpan);
    activityItemDiv.appendChild(deleteActivityButton);

    //APPEND INNER CHILD DIV TO ACTIVITY CHILD ELEMENT
    newActivityDom.appendChild(activityItemDiv);

    // APPEND CHILD TO PARENT ELEMENT
    activityListParentElement.appendChild(newActivityDom);
  });
}

mapArrayToDOM();

const submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const textInputValue = document.querySelector("input[type='text']").value;

  if (textInputValue == "") {
    window.alert("Event cannot be empty.");
  } else {
    activityList.push({
      title: textInputValue,
      finished: false,
    });

    mapArrayToDOM();

    document.querySelector("form").reset();
  }
});
