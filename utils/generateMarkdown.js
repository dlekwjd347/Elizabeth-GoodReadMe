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
  return `# ${data.title}

# Table of Contents:
## Title
## Github User
## Description
## Installation Steps
## Usage Description
## License
## Contributors
## Tests
## Questions

## Title
${data.title}

## Github User
${data.username}

## Description
${data.description}

## Installation Steps
${data.installation}

## Usage Description
${data.usage}

## License
![GitHub](https://img.shields.io/github/license/${data.username}/${data.title})

## Contributors
${data.contributor}

## Tests
${data.test}

## Questions
Questions can be sent to: ${data.email}







`;
}

module.exports = generateMarkdown;
