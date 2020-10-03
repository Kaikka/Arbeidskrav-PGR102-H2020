var profilOutput = document.getElementById("profil-div");

profiles.forEach(profile => profilOutput.innerHTML += `
<div>
    Navn: ${profile.name} ${profile.surname}<br/>
    Alder: ${profile.age} år<br/>
    Kjønn: ${profile.gender}<br/>
    <img src="images/${profile.picture}">
</div><br/><br/>`
);