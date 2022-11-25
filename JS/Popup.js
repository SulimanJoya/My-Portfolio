const body = document.getElementById('body');
const projectCards = document.getElementById('My-Portfolio');
const modal = document.getElementById('modal');
const Mtitle = document.getElementById('modal-title');
const image = document.getElementById('modal-im');
const longDes = document.getElementById('des');
const live = document.getElementById('live');
const source = document.getElementById('source');
const cards = [
  {
    title: 'Tonic',
    image: './images/Desktop/project-1.png',
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    seeLive: 'https://sulimanjoya.github.io/My-Portfolio/',
    liveIcon: './images/icons-and-logo/live.png',
    Description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    seeSource: 'https://github.com/SulimanJoya/My-Portfolio',
    sourceIcon: './images/icons-and-logo/github.png',
    languages: ['html', 'javascript', 'css'],
    roles: ['CANOPY', 'Back End Dev', 2018],
  },
  {
    title: 'Multi-Post Stories',
    image: './images/Desktop/project-2.png',
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    seeLive: 'https://sulimanjoya.github.io/My-Portfolio/',
    Description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    seeSource: 'https://github.com/SulimanJoya/My-Portfolio',
    languages: ['html', 'javascript', 'css'],
    roles: ['FACEBOOK', 'Full Stack Dev', 2020],
  },
  {
    title: 'Facebook 360',
    image: './images/Desktop/project-3.png',
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    seeLive: 'https://sulimanjoya.github.io/My-Portfolio/',
    Description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    seeSource: 'https://github.com/SulimanJoya/My-Portfolio',
    languages: ['html', 'javascript', 'css'],
    roles: ['FACEBOOK', 'Full Stack Dev', 2021],
  },
  {
    title: 'Uber Navigation',
    image: './images/Desktop/project-4.png',
    popupDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    seeLive: 'https://sulimanjoya.github.io/My-Portfolio/',
    Description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    seeSource: 'https://github.com/SulimanJoya/My-Portfolio',
    languages: ['html', 'javascript', 'css'],
    roles: ['UBER', 'Lead Developer', 2022],
  },
];