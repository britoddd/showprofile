const data = [
  {
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    personName: "Budi Purnaningtyas",
    job: "Product Designer",
    experience:
      "A personal CV profile should include details of your educational background, evidence of work experience, as well as your career aspirations. You ideally need to ensure you are telling the reader what you can offer<span class='dot'>... </span><span class='more'> skill- wise and don't be afraid to also share any accomplishments</span>",
  },
  {
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    personName: "Bambang Sukamto",
    job: "Product Manager",
    experience:
      "I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.",
  },
  {
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    personName: "Siti Sukamaju",
    job: "Graphic Designer",
    experience:
      "A life experience is an experience that changes an individual. This is associated with hardships, problems, risk taking, effort and originality whereby individuals stretch themselves to improve their character, talents and knowledge.",
  },
  {
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    personName: "Ayu Puspita",
    job: "Creative Leader",
    experience:
      "Reliable MA student with highly developed written communication and digital marketing skills. 2+ years experience in retail sales. A people person who works well as an individual or as part of a team. I'm very eager to expand my skills and take on new challenges.",
  },
];

let cannotChangeOrder;

const personImage = document.querySelector(".image-space");
const thePersonName = document.querySelector(".name");
const personJob = document.querySelector(".job");
const experience = document.querySelector(".experience");

const leftButton = document.querySelector(".js-left-button");
const rightButton = document.querySelector(".js-right-button");
let order = 0;

document.addEventListener("DOMContentLoaded", () => {
  renderData(order);
});

leftButton.addEventListener("click", () => {
  order--;
  if (order < 0) {
    order = data.length - 1;
  }
  renderData(order);
});

rightButton.addEventListener("click", () => {
  order++;
  if (order >= data.length) {
    order = 0;
  }
  renderData(order);
});

function renderData(order) {
  const personData = data[order];
  personImage.innerHTML = `<img class="profile-img" src="${personData.img}">`;
  thePersonName.innerHTML = personData.personName;
  personJob.innerHTML = personData.job;
  experience.innerHTML = personData.experience;
}

document.querySelector(".experience").addEventListener("click", () => {
  const dots = document.querySelector(".dot");
  const moreText = document.querySelector(".more");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
  }
});
