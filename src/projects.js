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
    return projects.length;
  } else {
    const filteredProjects = document.querySelectorAll(
      `.project[data-type="${category}"]`
    );
    return filteredProjects.length;
  }
}

categories.addEventListener("mouseover", (event) => {
  const category = event.target.dataset.category;
  if (category != null) {
    const countSpan = event.target.querySelector(".category__count");
    const count = getProjectCount(category);
    countSpan.textContent = count;
  }
});

const allButton = document.querySelector('.category[data-category="all"]');
allButton.addEventListener("mouseover", () => {
  const countSpan = allButton.querySelector(".category__count");
  const count = getProjectCount("all");
  countSpan.textContent = count;
});
