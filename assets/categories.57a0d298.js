import"./navigator.35bbc02f.js";/* empty css                   */import{A as a,a as n}from"./constants.8d4d1c4d.js";const o=document.getElementById("categories-container");async function r(){return await(await fetch(`${a}/topics?client_id=${n}`)).json()}function i(e){const t=document.createElement("div");return t.classList.add("category"),t.innerHTML=`
    <a href="gallery.html?category=${e.slug}">
      <img src="${e.cover_photo.urls.small}" alt="${e.title}">
      <h3>${e.title}</h3>
    </a>
  `,t}async function s(){(await r()).forEach(t=>{o.appendChild(i(t))})}s();
