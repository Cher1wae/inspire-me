const inspireBtn = document.getElementById("inspireBtn");
const result = document.getElementById("result");

async function getInspiration() {
    try {
        result.classList.add("show");
        result.innerHTML = "<p>Loading some inpiration.....</p>"
        const url = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://zenquotes.io/api/random')

        const inspoResult = await fetch(url);
        const responseData = await inspoResult.json()
        const content = JSON.parse(responseData.contents)[0];
        console.log(content);

        result.innerHTML = `
            <p class="qoute">${content.q}</p>
            <p class="author">${content.a}</p>
        `

    } catch (error) {
        result.innerHTML = "<p style='color: red;'> failed to load inspiration.....</p>"
        throw new Error(error);
    } finally {
console.log("This is the end point!")
    }
}

inspireBtn.addEventListener("click", getInspiration)