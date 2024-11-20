export function createSkillCard(skill) {
    const skillCard = document.createElement("div");
    skillCard.classList.add("skill-card");
  
    skillCard.innerHTML = `
      <img src="${skill.image}" alt="${skill.name}" class="skill-image" />
      <p class="skill-name">${skill.name}</p>
    `;
  
    return skillCard;
  }
  