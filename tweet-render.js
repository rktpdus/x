const container = document.getElementById("tweets");

// header 생성
const header = document.createElement("div");
header.className = "title";

header.innerHTML = `
<h1>@${username} Archived Tweets (<span id="tweet-count"></span>)</h1>
<button id="downloadAll" title="Download">⬇</button>
`;

container.appendChild(header);

// tweet 렌더
pdfs.forEach(file => {

    const tweetId = file.split("_")[0];

    const div = document.createElement("div");
    div.className = "tweet";

    div.innerHTML = `
    <div class="link">
      <a href="https://x.com/${username}/status/${tweetId}" target="_blank">
        Original Tweet →
      </a>
    </div>

    <iframe src="${file}#toolbar=0&navpanes=0"></iframe>
  `;

    container.appendChild(div);

});

// tweet count
document.getElementById("tweet-count").textContent = pdfs.length;