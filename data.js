// Updated data structure with multiple files
const folderData = {
    sql: {
        title: "SQL Notes",
        description: "Database queries and SQL reference materials",
        files: [ // Changed from 'file' to 'files' array
            {
                name: "sql notes 1",
                filename: "sql_notes1.html",
                filelink: "https://github.com/rumashie/csNotes/blob/main/files/sql_notes1.md",
                description: "basic sql notes",
                type: "markdown",
            },
             {
                name: "sql notes 2",
                filename: "sql_notes2.html",
                filelink: "https://github.com/rumashie/csNotes/blob/main/files/sql_notes2.md",
                description: "more sql notes",
                type: "markdown",
            },
            {
                name: "sql notes 3",
                filename: "sql_notes3.html",
                filelink: "https://github.com/rumashie/csNotes/blob/main/files/sql_notes3.md",
                description: "more sql notes",
                type: "markdown",
            }
        ]
    },
    python: {
        title: "Python Notes",
        description: "Basic Syntax, Dictionaries, pandas, lists, strings",
        files: [
            {
                name: "python notes 1",
                filename: "python_notes1.pdf",
                description: "basic python notes",
                type: "pdf",
            }
        ]

    },
    backend: {
        title: "backend concepts",
        description: "client-server communication, networking protocols, backend framworks",
        files: [
            {
                name: "backend notes 1",
                filename: "backend_notes.md",
                filelink: "https://github.com/rumashie/csNotes/blob/main/files/backend_notes.md",
                description: "intro to backend",
                type: "markdown"
            }
        ]
    }
};

// Get the folder parameter from URL (e.g., ?folder=sql)
function getUrlParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams.get(name));
    return urlParams.get(name);
}

// Load the appropriate folder content
function loadFolderContent() {
    // Step 1: Get which folder was clicked
    const folder = getUrlParameter('folder');
    console.log('Folder requested:', folder);
    
    // Step 2: Get the data for that folder from folderData dictionary
    const data = folderData[folder];
    console.log('Folder data:', data);
    
    // Error Handling: If folder doesn't exist, show error
    if (!data) {
        document.getElementById('folder-title').textContent = 'Folder Not Found';
        document.getElementById('content').innerHTML = '<p>The requested folder could not be found.</p>';
        return;
    }

    // Step 3: Update page title and header with data in folder info
    document.getElementById('page-title').textContent = data.title;
    document.getElementById('folder-title').textContent = data.title;
    // document.getElementById('folder-description').textContent = data.description;
    
    // Step 4: Create file links for ALL files found in folder data. Lists them in bullet points
    const files = data.files; // Now it's an array
    let fileLinks = '<ul>';
    
    // For each file found in the folderData, link the notes that are in the files folder
    files.forEach(file => {
        fileLinks += `
            <li>
                <a href="files/${file.filename}" target="_blank"> 
                    ${file.name}
                </a>
            </li>
        `;
    });
    
    fileLinks += '</ul>';
    
    // Step 5: Actual DOM, Put the file links on the notes.html?folder={folder}
    document.getElementById('content').innerHTML = fileLinks;
}

// Run when page loads
window.addEventListener('DOMContentLoaded', function() {
    loadFolderContent();
});