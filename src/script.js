async function GetGitHub()
{
    let respons = await fetch("https://api.github.com/users/jojjan-johansson/repos");
    let data = await respons.json();

    console.log(data[0].name);
    document.querySelector(".reponamn").innerHTML = data[0].name;
    let J = document.querySelector(".reponamn");
    J.setAttribute("href", data[0].html_url);
    document.querySelector(".repobeskrivning").innerHTML = data[0].description;

}
GetGitHub();