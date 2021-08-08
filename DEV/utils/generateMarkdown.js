// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, fullName) {
  if (!license) {
    console.log("not license")
    return "";
  } else {

    const licenses =
    {
      'Apache License 2.0': {
        name: 'Apache License 2.0',
        badge: 'https://img.shields.io/badge/license-Apache%202-blue',
        description:
          `
Copyright 2021 ${fullName}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
     
http://www.apache.org/licenses/LICENSE-2.0
     
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
        `,
        link: 'http://www.apache.org/licenses/LICENSE-2.0'
      },
      'GNU GPLv3': {
        name: 'GNU GPLv3',
        badge: 'https://img.shields.io/badge/license-GNU_GPLv3-blue',
        description:
          `
Copyright (C) 2021 ${fullName}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
        `,
        link: 'https://www.gnu.org/licenses/'
      },
      'MIT License': {
        name: 'MIT License',
        badge: 'https://img.shields.io/badge/license-MIT-blue',
        description:
          `
MIT License

Copyright (c) 2021 ${fullName}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
        `,
        link: 'https://opensource.org/licenses/MIT'
      },
      'ISC License': {
        name: 'ISC License',
        badge: 'https://img.shields.io/badge/license-ISC-blue',
        description:
          `
ISC License

Copyright (c) 2021, ${fullName}

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
        `,
        link: 'https://opensource.org/licenses/ISC'
      }
    }

    return licenses[license];

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const licenseInfo = renderLicenseSection(data.license, data.fullName);

  console.log(licenseInfo);

  return `# ${data.title}

  ![License Badge](${licenseInfo.badge})

  ## Description

  ${data.description}

  ## Table of Contents

  1.[Installation Instructions](#installation-instructions)

  2.[Usage Instructions](#usage-instructions)

  3.[Contribution Instructions](#contribution-instructions)

  4.[Testing Instructions](#testing-instructions)

  5.[Questions](#questions)

  6.[License](#License)
  

  ## Installation Instructions

    ${data.install}

  ## Usage Instructions

  ${data.usage}

  ## Contribution Instructions

  ${data.contribution}

  ## Testing Instructions

    ${data.test}

  ## Questions
  
  For any questions regarding the project please reach out to me on Github: [Github](https://github.com/${data.github}) or via Email: ${data.email}

  ## License

  ${licenseInfo.description}

`;
}

module.exports = generateMarkdown;
