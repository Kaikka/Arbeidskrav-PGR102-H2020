var showProfileButton = document.getElementById("show-profile-btn");
var profilOutput = document.getElementById("profil-div");
var ageCheck = 25; // Because assignment
var allowMultipleSuggestions = false;
var profilesToPrint = [];


showProfileButton.addEventListener("click", function() {
    showProfile(
        profiles, 
        parseInt(document.getElementById("age-input").value), 
        document.getElementById("gender-input").value.toLowerCase()
    );
});

function showProfile(profiles, age, gender) {
    profilOutput.innerHTML = "";
    profilesToPrint = [];
    profiles.forEach(p => {
        if ((age >= ageCheck && p.age < ageCheck) || (age <= ageCheck && p.age > ageCheck) || gender != p.gender) {
            console.log("Skipping " + p.name + " " + p.surname);
            return;
        } else if (allowMultipleSuggestions) {
            console.log("Priting " + p.name);
            profilOutput.innerHTML += `
            <div>
                Navn: ${p.name} ${p.surname}<br/>
                Alder: ${p.age} år<br/>
                Kjønn: ${p.gender}<br/>
                <img src="images/${p.picture}">
            </div><br/><br/>`
        } else if (!allowMultipleSuggestions) {
            profilesToPrint.unshift(p);
        }
    });
    if (!allowMultipleSuggestions) {
        var rng = Math.floor(Math.random() * profilesToPrint.length);
        profilOutput.innerHTML = `
        <div>
            Navn: ${profilesToPrint[rng].name} ${profilesToPrint[rng].surname}<br/>
            Alder: ${profilesToPrint[rng].age} år<br/>
            Kjønn: ${profilesToPrint[rng].gender}<br/>
            <img src="images/${profilesToPrint[rng].picture}">
        </div><br/><br/>`
    }
}

// function showProfile(profiles, age, gender) {
//     // arr.slice(0) to iterate over a cloned arr of profiles to avoid errors
//     profiles.slice(0).forEach(function(p) {
//         if ((age >= ageCheck && p.age < ageCheck) || (age <= ageCheck && p.age > ageCheck) || gender != p.gender) {
//             console.log("Filtering out " + p.name + " " + p.surname);
//             // delete the profile from the array
//             profiles.splice(profiles.indexOf(p), 1);
//         } else {
//             console.log("Priting " + p.name);
//             profilOutput.innerHTML += `
//             <div>
//                 Navn: ${p.name} ${p.surname}<br/>
//                 Alder: ${p.age} år<br/>
//                 Kjønn: ${p.gender}<br/>
//                 <img src="images/${p.picture}">
//             </div><br/><br/>`
//         };
//     });
// };

// // issue: we actually delete from the db which is bad...so lets do this again

