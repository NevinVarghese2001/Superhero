function shdata(){
    shname=sh.value
    fetch(`https://www.superheroapi.com/api.php/727054372039115/search/${shname}`)
    .then(data=>data.json()).then(data=>displaysh(data))
}
function displaysh(shdata){
    shname=shdata.results[0].name
    shid=shdata.results[0].id
    shimg=shdata.results[0].image.url
    shinte=shdata.results[0].powerstats.intelligence
    shstr=shdata.results[0].powerstats.strength
    shspeed=shdata.results[0].powerstats.speed
    shpower=shdata.results[0].powerstats.power
    shaliases=shdata.results[0].biography.aliases
    shrace=shdata.results[0].appearance.race
    shheight=shdata.results[0].appearance.height
    shweight=shdata.results[0].appearance.weight
    shoccu=shdata.results[0].work.occupation
    shbase=shdata.results[0].work.base
    // shgroup=shdata.results[0].connections.group-affiliation






    shdetails.innerHTML=`
    <h2 class="shmain text-danger">${shname}</h2>
    <h5 class="shname">${shrace}</h5>
    <h5 class="shname"><i class="fa-solid fa-shield-halved"></i> Intelligence ${shinte}</h5>
    <h5 class="shname"><i class="fa-solid fa-shield-halved"></i> Strength ${shstr}</h5>
    <h5 class="shname"><i class="fa-solid fa-shield-halved"></i> Speed ${shspeed}</h5>
    <h5 class="shname"><i class="fa-solid fa-shield-halved"></i> Power ${shpower}</h5>
    <h5 class="shname"><i class="fas fa-star"></i> Height ${shheight}</h5>
    <h5 class="shname"><i class="fas fa-star"></i> Weight ${shweight}</h5>
    <h5 class="shname"><i class="fa-solid fa-shield-halved"></i> Occupation :${shoccu}</h5>
    <h5 class="shname"><i class="fa-solid fa-shield-halved"></i> Place :${shbase}</h5>
    <h5 class="shname"><i class="fa-solid fa-shield-halved"></i> Aliases :${shaliases}</h5>

    `
    shimage.innerHTML=`
    <img src="${shimg}" alt="" style="height: 500px;">
    `
}