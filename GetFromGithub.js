fetch("https://api.github.com/users/joelnil123/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log("github API", json);

    var githubrepos = document.getElementById("githubrepos");

    for (i = 0; i < json.length; i++) {
      githubrepos.insertAdjacentHTML(
        "beforeend",
        "<a href='" +
          json[i].html_url +
          "' target='_blank'><div class='githubrepo'>" +
          json[i].name +
          "</div></a>"
      );
    }
  });


  
