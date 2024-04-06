/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our", "her", "their", "his"];
  let adjective = ["great", "big", "happy", "brave"];
  let noun = ["jogger", "raccoon", "chair"];
  let www = ["www.", "wwww."];
  let url = [".com", ".net", ".io", ".dev"];

  console.log("Regular for loop:");
  for (let wwwIndex = 0; wwwIndex < www.length; ++wwwIndex) {
    for (let pronounIndex = 0; pronounIndex < pronoun.length; ++pronounIndex) {
      for (let adjIndex = 0; adjIndex < adjective.length; ++adjIndex) {
        for (let nounIndex = 0; nounIndex < noun.length; ++nounIndex) {
          for (let urlIndex = 0; urlIndex < url.length; ++urlIndex) {
            console.log(
              `${www[wwwIndex]}${pronoun[pronounIndex]}${adjective[adjIndex]}${noun[nounIndex]}${url[urlIndex]}`
            );
          }
        }
      }
    }
  }
};
