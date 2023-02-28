let uri = sessionStorage.getItem("vidID");
document.getElementById("vidFrame").innerHTML = `<iframe
width="100%"
height="600"
src="https://www.youtube.com/embed/${uri}"
title="YouTube video player"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
allowfullscreen
></iframe>`;
