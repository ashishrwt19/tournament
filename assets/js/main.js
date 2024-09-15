var selectedTournament = null;

function selectTournament(tournamentId) {
  selectedTournament = tournamentId;
}

function addEntry(event) {
  event.preventDefault();
  const localEntries = localStorage.getItem("tournament" + selectedTournament);
  var entries = [];
  if (localEntries) {
    entries = JSON.parse(localEntries);
  }
  const entry = {};
  entry.name = document.getElementById("nameInput").value;
  entry.email = document.getElementById("emailInput").value;
  entry.game = document.getElementById("gameSelect").value;
  entry.tournamentId = selectedTournament;
  entries.push(entry);
  localStorage.setItem(
    "tournament" + selectedTournament,
    JSON.stringify(entries)
  );
}

function getEntries(tournament) {
  const entriesContainer = document.getElementById("entries");
  var entries = [];
  const localEntries = localStorage.getItem("tournament" + tournament);
  if (!localEntries) {
    entriesContainer.innerHTML = "<div class='text-center'>No Data Found</div>";
    return;
  }
  entriesContainer.innerHTML = "";
  entries = JSON.parse(localEntries);
  for (let i = 0; i < entries.length; i++) {
    entriesContainer.innerHTML +=
      "<div><span class='fw-bold'>Name: </span> " +
      entries[i].name +
      ", <span class='fw-bold'>Email: </span>" +
      entries[i].email +
      ", </div>";
  }
}
