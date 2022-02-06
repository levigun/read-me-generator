function fileGenerator(response) {
    var content = `# ${response.projectName}

    ##Table of Content
    * [Repository Content](#Repository Content)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [Contribution Guidelines](#Contribution Guidelines)
    * [Test Instruction](#Test Instructions)
    * [Contact Information](#Contact Information)
    * [Credits](#Credits)
    * [License](#License)
    
    
    ## Repository Content
    ###### [Back to Table of Contents](#Table-of-Contents)
    ${response.description}
    
    
    ## User Story
    ### As the Quiz Administrator
    ###### [Back to Table of Contents](#Table-of-Contents)
    1.   I a command-line application that accepts user input.
    2.   I want to be prompted for information about my application repository.
    3.   I want a high-quality, professional README.md is generated with the title of my project and sections entitled Table of Contents Description, Installation, Usage, Contribution Guidelines, Tests Instructions, Contact Information, and Licensing.
    4.   I want my project name to display as the title of the README.
    5.   I want a description, installation instructions, usage information, contribution guidelines, and test instructions; and then, this information is added to the sections of the README entitled Description, Installation, Usage, Contribution Guidelines, and Tests Instructions.
    6.   I want to choose a license for my application from a list of options. 
    7.   I want to enter my GitHub username; ant then this is added to the section of the README entitled Conctac Information, with a link to my GitHub profile.
    8.   I want to enter my email address; and then this is added to the section of the README entitled Contact Information.
    9.   I want to click on the links in the Table of Contents; and then, I am taken to the corresponding section of the README.

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
    Github Username: ${response.username}

    ## Credits
    ${response.credits}

    ## License
    ${response.license}  
    `
    return content;
};

module.exports = fileGenerator;