let siteList = [];

function isValidUrl(url) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-zA-Z0-9\\-]+)\\.)+([a-zA-Z]{2,}))" + // domain name
      "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_\\+.~#?&//=]*)$",
    "i"
  ); // port and path
  return pattern.test(url);
}

function addSite() {
  let siteName = document.getElementById("siteName").value.trim();
  let siteLink = document.getElementById("siteLink").value.trim();

  if (siteName === "" || siteLink === "") {
    alert("Both site name and link are required.");
    return;
  }

  if (!isValidUrl(siteLink)) {
    alert("The link is not valid. Please enter a valid URL.");
    return;
  }

  let site = {
    name: siteName,
    link: siteLink,
  };

  siteList.push(site);
  displaySite(siteList);
}
function displaySite(data) {
  var cartona = "";
  for (var i = 0; i < data.length; i++) {
    cartona += `  
          <tr>
            <td>${i + 1}</td>
            <td>${data[i].name}</td>
            <td>
              <a href="${data[i].link}" target="_blank" class="btn btn-primary">
              <i class="fa-solid fa-eye"></i>  Visit 
              </a>
            </td>
            <td>
              <button onclick="deleteProduct(${i})" class="btn btn-danger">
              <i class="fa-solid fa-trash"></i>  Delete 
              </button>
            </td>
          </tr>`;
  }
  document.getElementById("data").innerHTML = cartona;
}

function deleteProduct(index) {
  siteList.splice(index, 1);
  displaySite(siteList);
}
