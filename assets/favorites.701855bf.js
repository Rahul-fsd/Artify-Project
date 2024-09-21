import"./navigator.35bbc02f.js";/* empty css                   */const r=document.getElementById("favorites-container");let o=JSON.parse(localStorage.getItem("favorites"))||[];function n(e){const t=document.createElement("div");return t.classList.add("favorite-item"),t.innerHTML=`
          <img src="${e.urls.small}" alt="${e.alt_description||"Artwork"}">
          <h3>${e.user.name}</h3>
          <button class="remove-favorite">Remove from Favorites</button>
      `,t.querySelector(".remove-favorite").addEventListener("click",()=>a(e)),t}function a(e){o=o.filter(t=>t.id!==e.id),localStorage.setItem("favorites",JSON.stringify(o)),i()}function i(){r.innerHTML="",o.length===0?r.innerHTML="<p>You have no favorite artworks yet.</p>":o.forEach(e=>{r.appendChild(n(e))})}i();
