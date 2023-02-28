let data = {};
const youtubeEngine = async (key, q) => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&q=${q}&maxResults=696&part=snippet`,
      {
        method: "GET",
      }
    );
    data = await response.json(); // Use response.json() to parse the response body
    printer(data);
  } catch (error) {
    console.error(error);
  }
};
const searchHandaler = () => {
  let searchQ = document.getElementById("search_box").value;
  youtubeEngine(key, searchQ);
};
const printer = (data) => {
  let filteredData = data.items;
  let DOM = "";
  for (let i = 0; i < filteredData.length; i++) {
    DOM += `<div class="col-md-3 px-1 py-1">
    <div class="card p-1">
      <a href="./player.html?ytID=${filteredData[i].id.videoId}" class="text-decoration-none">
        <img
          src="${filteredData[i].snippet.thumbnails.medium.url}"
          alt="..."
          class="w-100"
        />
        <div class="card-body">
          <p class="card-text text-white mb-2">
            ${filteredData[i].snippet.title}
          </p>
          <a
            href=""
            class="text-white text-decoration-none badge bg-primary"
            >${filteredData[i].snippet.channelTitle}</a
          >
        </div>
      </a>
    </div>
  </div>`;
  }
  document.getElementById("trees").innerHTML = DOM;
};
