function fileGenerator(response) {
    var content = `# ${response.projectName}

${makeBadge(response.license)}

## Table of Content
* [Repository Content](#repository-content)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution Guidelines](#contribution-guidelines)
* [Test Instruction](#repository-content)
* [Contact Information](#contact-information)
* [Credits](#credits)
* [License](#license)


## Repository Content
### [Back to Table of Contents](#table-of-content)
${response.description}


## Installation
${response.install}

## Usage
${response.usage}

## Contribution Guidelines
${response.contribution}

## Test Instructions
${response.run}

## Contact Information
Email: ${response.email}

Github Username: [${response.username}](https://github.com/${response.username})

## Credits
${response.credits}

## License
${response.license}  
    `
    return content;
};





function makeBadge(license){
    license = encodeURIComponent(license);

    
    return `![${license}](https://img.shields.io/badge/License-${license}-informational)`
}

module.exports = fileGenerator;