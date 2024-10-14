/* 
Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
(trovate l’array del team all’interno della cartella in allegato)
Bonus
Rendere l’esercizio responsive, mandando a capo le card
Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina
 (usate una foto qualunque, anche vostra se volete sentirvi parte del team! */







const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "./assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "./assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "./assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "./assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "./assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "./assets/img/female3.png"
  }
];



const teamMembersEl = document.getElementById('teamMembers')
console.log(teamMembersEl);



function AddTeamElements(team) {
  const { name, role, email, img } = team

  return `
  <div class="col-xl-4 col-lg-6 col-xs-12 my-4">
      <div class="card flex-row bg-dark text-white px-0 ">
        <img src="${img}" alt="">
        <div class="card-body">
            <h3>${name}</h3>
            <div class="pb-3">${role}</div>
            <div><strong>${email}</strong></div>
        </div>
    </div>
  </div>
 `


}

for (let i = 0; i < teamMembers.length; i++) {
  const teamCard = teamMembers[i];


  const markup = AddTeamElements(teamCard)
  teamMembersEl.innerHTML += markup


}
