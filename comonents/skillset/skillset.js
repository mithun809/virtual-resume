import skills from "./skilldata.js";
import { createSkillCard } from "./skillcard.js";

document.addEventListener("DOMContentLoaded", () => {
  const skillContainer = document.querySelector(".skill-container");

  skills.forEach(skill => {
    const skillCard = createSkillCard(skill);
    skillContainer.appendChild(skillCard);
  });
});
