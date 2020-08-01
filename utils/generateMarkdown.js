// function for license
function createLicense(license) {
  if (license !== "None") {
    return (
      `## License 
      ${license}`
    )
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# Readme

# Table of Contents:
1. ## Github Repo
2. ## Github User
3. ## Description
4. ## Installation Steps
5. ## Usage Description
6. ## License
7. ## Contributors
8. ## Tests
9. ## Questions

## Github Repo
${data.repo}

## Github User
${data.username}

## Description
${data.description}

## Installation Steps
${data.installation}

## Usage Description
${data.usage}

## License
![GitHub](https://img.shields.io/github/license/${data.username}/${data.repo})

![Badge](${data.badge})

https://github.com/${data.username}


## Contributors
${data.contributor}

## Tests
${data.test}

## Questions
Questions can be sent to: ${data.email}







`;
}

module.exports = generateMarkdown;
