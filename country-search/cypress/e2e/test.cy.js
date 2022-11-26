import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    let apirequestData = [];
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });

      it(`Check if the api call made`, () => {
        cy.intercept(`https://restcountries.com/v3.1/all`).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest").then((data) => {
          apirequestData = data.response.body;
          acc_score += 2;
          console.log("API Request");
        });
      }); // 2
      it(`Student is able to loop through the data and append in the dom`, () => {
        expect(apirequestData.length).not.to.eq(0);
        cy.get("#all_countries")
          .children()
          .should("have.length", apirequestData.length)
          .then(() => {
            acc_score += 2;
          });
        cy.get("#all_countries")
          .should("have.css", "display", "grid")
          .then(() => {
            acc_score += 1;
          });
      }); // 3

      it(`Check the Filter Part`, () => {
        expect(apirequestData.length).not.to.eq(0);
        cy.get("#filter_region").select("Africa");
        cy.get("#all_countries>div")
          .should(
            "have.length",
            apirequestData.filter((el) => el.region === "Africa").length
          )
          .then(() => {
            acc_score += 1;
          });
      }); // 1
      it(`Check sorting Part`, () => {
        expect(apirequestData.length).not.to.eq(0);
        cy.intercept(`https://restcountries.com/v3.1/all`).as("apiRequest");
        cy.visit(url);
        cy.wait("@apiRequest");
        cy.get("#sort_population").select("asc");
        cy.get("#all_countries>div")
          .eq(0)
          .contains(
            "p",
            apirequestData.sort((a, b) => a.population - b.population)[0]
              .population
          )
          .then(() => {
            acc_score += 1;
          });
      }); // 1
      it(`Check sorting+filter`, () => {
        expect(apirequestData.length).not.to.eq(0);
        cy.get("#filter_region").select("Africa");
        cy.get("#sort_population").select("desc");
        cy.get("#all_countries>div")
          .eq(0)
          .contains(
            "p",
            apirequestData
              .filter((el) => el.region === "Africa")
              .sort((a, b) => b.population - a.population)[0].population
          )
          .then(() => {
            acc_score += 2;
          });
      }); // 2
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
