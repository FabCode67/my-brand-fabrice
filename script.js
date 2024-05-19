document.getElementById('command-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const command = document.getElementById('command-input').value.trim();
        document.getElementById('command-input').value = ''; 
        switch (command.toLowerCase()) {
            case 'whoami':
                displayOutput(' \n \n<b>My name is Fabrice Mwanafunzi</b> \n<i class="just">A front-end developer with strong back-end and mobile develoment skills. \nI have a passion for creating beautiful and functional web applications.</i>');
                break;
            case 'experience':
                displayOutput(' \n \nI have worked on several web projects, focusing on front-end development and responsive design. \n \n <b class="skills">Karisimbi tech solutions</b> <i>Jun 15, 2023 - Present</i> Remotely working as a front-end developer. \n <b class="skills">Andela Rwanda </b> <i>Nov 21, 2022 - Sept 15 2023</i> I was a full-stack developer at Andela.');
                break;
            case 'skills':
                displayOutput('\n \n<b>My skills including, but not limited to, </b> \n \n - <i class="skills">Nextjs, Reactjs, React Native, Angular</i> \n - <i class="skills">Typescript, JavaScript</i> \n - <i class="skills">Flutter, Dart, Java, C++</i> \n - <i class="skills">HTML, CSS, Tailwind, Angular material</i> \n - <i class="skills">Git, GitHub</i> \n - <i class="skills">IT Essentials</i>');
                break;
            case 'projects':
                displayOutput('\n \n<b>I worked on various projects including, but not limited to,</b> \n \n - <a href="https://xanahealth.online">XanaHealth</a> \n - <a href="https://unrivaled-muffin-aabb5d.netlify.app/">Komparas</a>'); 
                break;  
            case 'socials':
                displayOutput('\n \n<b>Here are some links to my projects and profiles</b> \n \n - <a href="http://linkedin.com/in/fabrice-mwanafunzi-817249240">LinkedIn</a> \n - <a href="https://github.com/FabCode67">GitHub</a>');
                break;
            case 'contact':
                displayOutput('\n \n<b>Feel free to contact me via</b> \n - email: <i class="contact">mwanafunzifabrice@gmail.com</i> \n - phone: <i class="contact">+250 786 684 390</i> \n - whatsapp: <i class="contact">+250 786 684 390</i>');
                break;
            case 'cv':
                displayOutput('\n \n<b> Click here to Download my CV</b> \n \n - <a class="cv" href="./images/Fab_Resume.pdf" download>Download CV</a>');
                break;
            case 'clear':
                clearOutput();
                break;
            case 'help':
                displayOutput('\n \nAvailable commands:\n <i class="command">whoami</i> - Display information about Me\n <i class="command">experience</i> - Display information My work experience\n <i class="command">skills</i> - Display information about My skills\n <i class="command">socials</i> - Display links to the My projects or profiles\n <i class="command">projects</i> - Display information about My projects\n <i class="command">contact</i> - Display contact information\n <i class="command">cv</i> - Display the My CV\n <i class="command">clear</i> - Clear the output area\n <i class="command">help</i> - Display available commands');
                break;
            default:
                displayOutput('\n \nUnknown command. Type "help" for available commands.');
        }
    }
});

function displayOutput(outputText) {
    const outputArea = document.querySelector('.output-area');
    outputArea.innerHTML += `<div class="just">${outputText}</div>`;
    outputArea.scrollTop = outputArea.scrollHeight;
  }
  
function clearOutput() {
    const outputArea = document.querySelector('.output-area');
    outputArea.innerHTML = '';
}
