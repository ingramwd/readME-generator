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

  ## Table of Contents 
  - [Description](#description)
  - [installation](#installation)
  - [instructions](#instructions)
  - [licenses](#licenses)
  - [languages](#languages)
  - [username](#username)
  - [repo](#repo)
  - [email](#email)

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
  Please email me here for any additional questions you may have!
  ${data.email}
  ## GitHub Username:
  ${data.username}
  ## Repository Name:
  ${data.repo}

  



`;
}

module.exports = generateMarkdown;
