const teams = [
      'Cardinals', 'Falcons', 'Ravens', 'Bills', 'Panthers', 'Bears',
      'Bengals', 'Browns', 'Cowboys', 'Broncos', 'Lions', 'Packers',
      'Texans', 'Colts', 'Jaguars', 'Chiefs', 'Raiders', 'Chargers',
      'Rams', 'Dolphins', 'Vikings', 'Patriots', 'Saints', 'Giants',
      'Jets', 'Eagles', 'Steelers', '49ers', 'Seahawks', 'Buccaneers',
      'Titans', 'Commanders'
    ];

    const selectedTeams = new Set();

    function createTeamButtons() {
      const grid = document.getElementById('teamGrid');
      teams.forEach((team) => {
        const btn = document.createElement('div');
        btn.className = 'team-toggle';
        btn.innerText = team;
        btn.onclick = () => {
          btn.classList.toggle('active');
          if (selectedTeams.has(team)) {
            selectedTeams.delete(team);
          } else {
            selectedTeams.add(team);
          }
        };
        grid.appendChild(btn);
      });
    }

    function startDraft() {
      if (selectedTeams.size === 0) {
        alert("Please select at least one team.");
        return;
      }
      alert("Draft started for: " + Array.from(selectedTeams).join(', '));
    }

	const playersByClass = {
	"2025": [
	{ name: "Cam Ward", pos: "QB" },
	{ name: "Travis Hunter", pos: "WR,CB" },
	{ name: "Abdul Carter", pos: "EDGE" },
	{ name: "Tetairoa McMillan", pos: "WR" },
	{ name: "Nick Emmanwori", pos: "S" },
	{ name: "Jalon Walker", pos: "LB" },
    { name: "Will Campbell", pos: "OT" },
    { name: "Armand Membou", pos: "OT" },
    { name: "Colston Loveland", pos: "TE" },
    { name: "Malaki Starks", pos: "S" },
    { name: "Luther Burden III", pos: "WR" },
    { name: "Tyler Booker", pos: "IOL" },
    { name: "Mykel Williams", pos: "EDGE" },
    { name: "Punter McGee", pos: "P" },
    { name: "Kicker McGee", pos: "K" }
	],
	"2024": [
    { name: "Caleb Williams", pos: "QB" },
    { name: "Jayden Daniels", pos: "QB" },
    { name: "Drake Maye", pos: "QB" },
    { name: "Marvin Harrison Jr.", pos: "WR" },
    { name: "Malik Nabers", pos: "WR" },
    { name: "Rome Odunze", pos: "WR" },
    { name: "Brock Bowers", pos: "TE" },
    { name: "Joe Alt", pos: "OT" },
    { name: "Olu Fashanu", pos: "OT" },
    { name: "Dallas Turner", pos: "EDGE" },
    { name: "Jared Verse", pos: "EDGE" },
    { name: "Terrion Arnold", pos: "CB" },
    { name: "Quinyon Mitchell", pos: "CB" },
    { name: "Brian Thomas Jr.", pos: "WR" },
    { name: "Laiatu Latu", pos: "EDGE" }
  ],
  "2023": [
    { name: "Bryce Young", pos: "QB" },
    { name: "C.J. Stroud", pos: "QB" },
    { name: "Anthony Richardson", pos: "QB" },
    { name: "Will Anderson Jr.", pos: "EDGE" },
    { name: "Devon Witherspoon", pos: "CB" },
    { name: "Paris Johnson Jr.", pos: "OT" },
    { name: "Tyree Wilson", pos: "EDGE" },
    { name: "Jalen Carter", pos: "DL" },
    { name: "Bijan Robinson", pos: "RB" },
    { name: "Darnell Wright", pos: "OT" },
    { name: "Peter Skoronski", pos: "OT" },
    { name: "Jaxon Smith-Njigba", pos: "WR" },
    { name: "Christian Gonzalez", pos: "CB" },
    { name: "Nolan Smith", pos: "LB" },
    { name: "Zay Flowers", pos: "WR" }
  ],
  "2022": [
    { name: "Travon Walker", pos: "EDGE" },
    { name: "Aidan Hutchinson", pos: "EDGE" },
    { name: "Derek Stingley Jr.", pos: "CB" },
    { name: "Sauce Gardner", pos: "CB" },
    { name: "Kayvon Thibodeaux", pos: "EDGE" },
    { name: "Evan Neal", pos: "OT" },
    { name: "Ikem Ekwonu", pos: "OT" },
    { name: "Garrett Wilson", pos: "WR" },
    { name: "Drake London", pos: "WR" },
    { name: "Chris Olave", pos: "WR" },
    { name: "Jameson Williams", pos: "WR" },
    { name: "Kyle Hamilton", pos: "S" },
    { name: "Jordan Davis", pos: "DL" },
    { name: "Treylon Burks", pos: "WR" },
    { name: "Jermaine Johnson II", pos: "EDGE" }
  ],
  "2021": [
    { name: "Trevor Lawrence", pos: "QB" },
    { name: "Zach Wilson", pos: "QB" },
    { name: "Trey Lance", pos: "QB" },
    { name: "Kyle Pitts", pos: "TE" },
    { name: "Ja'Marr Chase", pos: "WR" },
    { name: "Jaylen Waddle", pos: "WR" },
    { name: "DeVonta Smith", pos: "WR" },
    { name: "Penei Sewell", pos: "OT" },
    { name: "Jaycee Horn", pos: "CB" },
    { name: "Patrick Surtain II", pos: "CB" },
    { name: "Micah Parsons", pos: "LB" },
    { name: "Alijah Vera-Tucker", pos: "IOL" },
    { name: "Rashawn Slater", pos: "OT" },
    { name: "Najee Harris", pos: "RB" },
    { name: "Mac Jones", pos: "QB" }
  ],
  "2020": [
    { name: "Joe Burrow", pos: "QB" },
    { name: "Chase Young", pos: "EDGE" },
    { name: "Jeff Okudah", pos: "CB" },
    { name: "Andrew Thomas", pos: "OT" },
    { name: "Tua Tagovailoa", pos: "QB" },
    { name: "Justin Herbert", pos: "QB" },
    { name: "Derrick Brown", pos: "DL" },
    { name: "Isaiah Simmons", pos: "LB" },
    { name: "CeeDee Lamb", pos: "WR" },
    { name: "Jedrick Wills Jr.", pos: "OT" },
    { name: "Jerry Jeudy", pos: "WR" },
    { name: "Henry Ruggs III", pos: "WR" },
    { name: "C.J. Henderson", pos: "CB" },
    { name: "Javon Kinlaw", pos: "DL" },
    { name: "Tristan Wirfs", pos: "OT" }
  ],
	  "2019": [
    { name: "Kyler Murray", pos: "QB" },
    { name: "Nick Bosa", pos: "EDGE" },
    { name: "Quinnen Williams", pos: "DL" },
    { name: "Clelin Ferrell", pos: "EDGE" },
    { name: "Devin White", pos: "LB" },
    { name: "Daniel Jones", pos: "QB" },
    { name: "Josh Allen", pos: "EDGE" },
    { name: "T.J. Hockenson", pos: "TE" },
    { name: "Ed Oliver", pos: "DL" },
    { name: "Devin Bush", pos: "LB" },
    { name: "Jonah Williams", pos: "OT" },
    { name: "Brian Burns", pos: "EDGE" },
    { name: "Garrett Bradbury", pos: "C" },
    { name: "Marquise Brown", pos: "WR" },
    { name: "Montez Sweat", pos: "EDGE" }
  ],
  "2018": [
    { name: "Baker Mayfield", pos: "QB" },
    { name: "Saquon Barkley", pos: "RB" },
    { name: "Sam Darnold", pos: "QB" },
    { name: "Denzel Ward", pos: "CB" },
    { name: "Bradley Chubb", pos: "EDGE" },
    { name: "Quenton Nelson", pos: "IOL" },
    { name: "Josh Allen", pos: "QB" },
    { name: "Roquan Smith", pos: "LB" },
    { name: "Mike McGlinchey", pos: "OT" },
    { name: "Josh Rosen", pos: "QB" },
    { name: "Minkah Fitzpatrick", pos: "S" },
    { name: "Vita Vea", pos: "DL" },
    { name: "Tremaine Edmunds", pos: "LB" },
    { name: "Derwin James", pos: "S" },
    { name: "Lamar Jackson", pos: "QB" }
  ],
  "2017": [
    { name: "Myles Garrett", pos: "EDGE" },
    { name: "Mitchell Trubisky", pos: "QB" },
    { name: "Solomon Thomas", pos: "DL" },
    { name: "Leonard Fournette", pos: "RB" },
    { name: "Corey Davis", pos: "WR" },
    { name: "Jamal Adams", pos: "S" },
    { name: "Mike Williams", pos: "WR" },
    { name: "Christian McCaffrey", pos: "RB" },
    { name: "John Ross", pos: "WR" },
    { name: "Patrick Mahomes", pos: "QB" },
    { name: "Marshon Lattimore", pos: "CB" },
    { name: "Deshaun Watson", pos: "QB" },
    { name: "Haason Reddick", pos: "LB" },
    { name: "Takkarist McKinley", pos: "EDGE" },
    { name: "Tre'Davious White", pos: "CB" }
  ],
  "2016": [
    { name: "Jared Goff", pos: "QB" },
    { name: "Carson Wentz", pos: "QB" },
    { name: "Joey Bosa", pos: "EDGE" },
    { name: "Ezekiel Elliott", pos: "RB" },
    { name: "Jalen Ramsey", pos: "CB" },
    { name: "Ronnie Stanley", pos: "OT" },
    { name: "DeForest Buckner", pos: "DL" },
    { name: "Jack Conklin", pos: "OT" },
    { name: "Leonard Floyd", pos: "EDGE" },
    { name: "Eli Apple", pos: "CB" },
    { name: "Sheldon Rankins", pos: "DL" },
    { name: "Laremy Tunsil", pos: "OT" },
    { name: "Karl Joseph", pos: "S" },
    { name: "Kenny Clark", pos: "DL" },
    { name: "Ryan Kelly", pos: "C" }
  ],
  "2015": [
    { name: "Jameis Winston", pos: "QB" },
    { name: "Marcus Mariota", pos: "QB" },
    { name: "Dante Fowler Jr.", pos: "EDGE" },
    { name: "Amari Cooper", pos: "WR" },
    { name: "Brandon Scherff", pos: "IOL" },
    { name: "Leonard Williams", pos: "DL" },
    { name: "Kevin White", pos: "WR" },
    { name: "Vic Beasley", pos: "EDGE" },
    { name: "Ereck Flowers", pos: "OT" },
    { name: "Todd Gurley", pos: "RB" },
    { name: "Trae Waynes", pos: "CB" },
    { name: "Danny Shelton", pos: "DL" },
    { name: "Andrus Peat", pos: "OT" },
    { name: "Melvin Gordon", pos: "RB" },
    { name: "Byron Jones", pos: "CB" }
  ]
};

	function filterPlayers() {
		const nameInput = document.getElementById("playerSearch").value.toLowerCase();
		const position = document.getElementById("positionFilter").value;
		const players = document.querySelectorAll("#bestPlayers li");

	  players.forEach((player) => {
		const name = player.dataset.name.toLowerCase();
		const posList = player.dataset.pos.split(',').map((p) => p.trim());
		const matchName = name.includes(nameInput);
		const matchPos = !position || posList.includes(position);
		player.style.display = (matchName && matchPos) ? "" : "none";
	  });
	}


    function updatePlayerList() {
      const selectedClass = document.getElementById("draftClass").value;
      const list = document.getElementById("bestPlayers");
      list.innerHTML = "";

      const players = playersByClass[selectedClass] || [];

      players.forEach((player) => {
        const li = document.createElement("li");
        li.textContent = `${player.name} – ${player.pos}`;
        li.dataset.name = player.name;
        li.dataset.pos = player.pos;
        list.appendChild(li);
      });

      filterPlayers(); // Keep filters active
    }


    // Initialize on page load
    window.onload = function () {
      createTeamButtons();
      updatePlayerList();
    };