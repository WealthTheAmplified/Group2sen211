const items = [
  {
    name: "Isreal Blessing",
    experience:
      "I was advised to install a MetaMask extention to my Android browser but I was not able to. Instead I have installed the MetaMask-app and configured the Polygon network there. Is this as safe as the browser extension?I was advised to install a MetaMask extention to my Android browser but I was not able to. Instead I have installed the MetaMask-app and configured the Polygon network there. Is this as safe as the browser extension?",
    date: "17/10/14",
    email: "IB",
  },
  {
    name: "Confidence",
    experience:
      "As I reflect on my academic journey, I am reminded of the numerous challenges I faced along the way. From struggling to balance coursework and extracurricular activities to success is not solely defined by grades, but by the skills, knowledge, and experince",
    date: "17/10/14",
    email: "C",
  },
  {
    name: "Itoro Benard",
    experience:
      "I was advised to install a MetaMask extention to my Android browser but I was not able to. Instead I have installed the MetaMask-app and configured the Polygon network there. Is this as safe as the browser extension?",
    date: "17/10/14",
    email: "IB",
  },
  {
    name: "Daniel Cletus",
    experience:
      "As I reflect on my academic journey, I am reminded of the numerous challenges I faced along the way. From struggling to balance coursework and extracurricular activities to success is not solely defined by grades, but by the skills, knowledge, and experince",
    date: "17/10/14",
    email: "Dc",
  },
];

const itemList = document.querySelector("#outsidebox");

const listItems = items.map((item) => {
  return `
        <div class="bg-[#242728] border-[0.4px] border-solid border-[rgb(131,130,130)] mt-3">
            <div class="px-4 pt-4 pb-4">
                <div class="float-right text-white mt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    </svg>
                </div>
                <div class="flex gap-2">
                    <div class="emailRound mt-2">${item.email}</div>
                    <div>
                        <p class="text-[1.45rem] text-white ">${item.name}</p>
                        <p class="text-white">${item.date}</p>
                    </div>      
                </div>
                <p class="text-white text-[1.4rem] pt-3">
                    ${item.experience}
                </p>
            </div>
        </div>`;
});

itemList.innerHTML = listItems;
