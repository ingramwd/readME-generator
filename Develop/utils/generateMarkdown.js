// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## Project Title: 
  ${data.projectName}
  ## Description of Project: 
  ${data.description}
  ## Installation instructions: 
  ${data.installation}
  ## Contributors: 
  ${data.contributors}
  ## Instructions:
  ${data.instructions}
  ## licenses:
  ${data.licenses}
  ## languages:
  ${data.languages}
  ## Email: 
  ${data.email}
  ## GitHub Username:
  ${data.username}
  ## Repository Name:
  ${data.repo}

  



`;
}

module.exports = generateMarkdown;
