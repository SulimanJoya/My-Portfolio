const body = document.getElementById("body");
const projectCards = document.getElementById("My-Portfolio");
const modal = document.getElementById("modal");
const Mtitle = document.getElementById("modal-title");
const image = document.getElementById("modal-im");
const longDes = document.getElementById("des");
const live = document.getElementById("live");
const source = document.getElementById("source");
const cards = [
  {
    title: "Tonic",
    image: "./images/Desktop/project-1.png",
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    seeLive: "https://sulimanjoya.github.io/My-Portfolio/",
    liveIcon: "./images/icons-and-logo/live.png",
    Description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    seeSource: "https://github.com/SulimanJoya/My-Portfolio",
    sourceIcon: "./images/icons-and-logo/github.png",
    languages: ["html", "javascript", "css"],
    roles: ["CANOPY", "Back End Dev", 2018],
  },
  {
    title: "Multi-Post Stories",
    image: "./images/Desktop/project-2.png",
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    seeLive: "https://sulimanjoya.github.io/My-Portfolio/",
    Description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    seeSource: "https://github.com/SulimanJoya/My-Portfolio",
    languages: ["html", "javascript", "css"],
    roles: ["FACEBOOK", "Full Stack Dev", 2020],
  },
  {
    title: "Facebook 360",
    image: "./images/Desktop/project-3.png",
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    seeLive: "https://sulimanjoya.github.io/My-Portfolio/",
    Description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    seeSource: "https://github.com/SulimanJoya/My-Portfolio",
    languages: ["html", "javascript", "css"],
    roles: ["FACEBOOK", "Full Stack Dev", 2021],
  },
  {
    title: "Uber Navigation",
    image: "./images/Desktop/project-4.png",
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    seeLive: "https://sulimanjoya.github.io/My-Portfolio/",
    Description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    seeSource: "https://github.com/SulimanJoya/My-Portfolio",
    languages: ["html", "javascript", "css"],
    roles: ["UBER", "Lead Developer", 2022],
  },
];

// eslint-disable-next-line no-return-assign
cards.map(
  (projects, index) =>
    (projectCards.innerHTML += `<div class="projects  reverse-${index}">
        <div class="project-image">
          <img src="${projects.image}" alt="project image" />
        </div>
        <div class="project-info">
          <div class="h3-wrapper">
            <h3>${projects.title}</h3>
          </div>
          <ul class="info">
            ${projects.roles
              .map(
                (position, idx) => `<li class="company-${idx}">
            ${position}

            </li>
            <img class="dots-${idx}" src="./images/icons-and-logo/dot.png" alt="dot icon" />`
              )
              .join("")}
            
          </ul>
          <div class="paragraph">
            <p>
             ${projects.Description}
            </p>
          </div>
          <ul class="web-lang">
          ${projects.languages
            .map((lang) => `<li class="lang">${lang}</li>`)
            .join("")}
          </ul>
          <div class="buttons-wrapper">
            <a href="javascript:openModal(${index})" class="buttons">See Project</a>
          </div>
        </div>
      </div>
      `)
);

const openModal = (index) => {
  Mtitle.innerHTML = cards[index].title;
  image.src = cards[index].image;
  longDes.innerHTML = cards[index].popupDescription;
  live.href = cards[index].seeLive;
  source.href = cards[index].seeSource;
  modal.style.display = "block";
  body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.style.display = "none";
  body.style.overflow = "auto";
};

openModal();
closeModal();
