"use strict";

const categories = document.querySelector(".categories");
const projects = document.querySelectorAll(".project");
const projectsContainer = document.querySelector(".projects");
categories.addEventListener("click", (event) => {
  const filter = event.target.dataset.category;
  if (filter == null) {
    return;
  }
  handleActiveSelection(event.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter === "all" || filter === project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 250);
}

function getProjectCount(category) {
  if (category === "all") {
    const allProjects = document.querySelectorAll(".project");
    return allProjects.length;
  } else if (category === "front-end") {
    const frontEndProjects = document.querySelectorAll(
      ".project[data-type='front-end']"
    );
    return frontEndProjects.length;
  } else if (category === "back-end") {
    const backEndProjects = document.querySelectorAll(
      ".project[data-type='back-end']"
    );
    return backEndProjects.length;
  } else {
    return 0;
  }
}

function updateProjectCount(category) {
  const countSpan = document.querySelector(
    `.category[data-category="${category}"] .category__count`
  );
  const count = getProjectCount(category);
  countSpan.textContent = count;
}

function categoryMouseOverHandler(event) {
  const category = event.target.dataset.category;
  if (category != null) {
    updateProjectCount(category);
  }
}

const categoryButtons = document.querySelectorAll(".category");
categoryButtons.forEach((button) => {
  button.addEventListener("mouseover", categoryMouseOverHandler);
});

updateProjectCount("all");
