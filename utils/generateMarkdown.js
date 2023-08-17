// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = {};

    if (license === "MIT License") {
        badge = { name: "MIT", color: "blue" };
    }

    if (license === "GNU Affero General Public License v3.0") {
        badge = { name: "GNU+AGPLv3", color: "blue" };
    }

    if (license === "Apache License 2.0") {
        badge = { name: "Apache+2.0", color: "blue" };
    }

    if (license === "GNU General Public License 3.0") {
        badge = { name: "GNU+GPLv3", color: "blue" };
    }

    return `https://img.shields.io/static/v1?label=license&message=${badge.name}&color=${badge.color}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let path;

    switch (license) {
        case "MIT License":
            path = "mit";
            break;
        case "GNU Affero General Public License v3.0":
            path = "agpl-3.0";
            break;
        case "Apache License 2.0":
            path = "apache-2.0";
            break;
        case "GNU General Public License 3.0":
            path = "gpl-3.0";
    }

    return `https://choosealicense.com/licenses/${path}/`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let badge = renderLicenseBadge(data.license[0])
    let badgeUrl = renderLicenseLink(data.license[0])
    let result = (`# ${data.title}
## Table of Contents\n
[Description](#description)\n
[Install](#install)\n
[Use](#use)\n
[Contribute](#contribute)\n
[Test](#test)\n
[License](#license)\n
[GitHub](#github)\n
[Email](#email)\n
## Description
${data.description}
## Install
${data.installation}
## Use
${data.usage}
## Contribute
${data.contributing}
## Test
${data.tests}
## License
The project is licensed under the ${data.license[0]} - See the ${data.license[0]} info ${badgeUrl}
## Github
${data.github}
## Email
${data.email}
`);
    return result;
}

module.exports = generateMarkdown;
