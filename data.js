// Updated data structure with multiple files
const folderData = {
    sql: {
        title: "SQL Notes",
        description: "Database queries and SQL reference materials",
        files: [ // Changed from 'file' to 'files' array
            {
                name: "sql notes 1",
                filename: "sql_notes1.pdf",
                description: "Complex SQL queries and optimization techniques",
                type: "txt",
            }
        ]
    },
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
    
    // Step 2: Get the data for that folder from data.js
    const data = folderData[folder];
    console.log('Folder data:', data);
    
    // Step 3: If folder doesn't exist, show error
    if (!data) {
        document.getElementById('folder-title').textContent = 'Folder Not Found';
        document.getElementById('content').innerHTML = '<p>The requested folder could not be found.</p>';
        return;
    }

    // Step 4: Update page title and header with folder info
    document.getElementById('page-title').textContent = data.title;
    document.getElementById('folder-title').textContent = data.title;
    // document.getElementById('folder-description').textContent = data.description;
    
    // Step 5: Create file links for ALL files (updated to handle multiple files)
    const files = data.files; // Now it's an array
    let fileLinks = '<ul>';
    
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
    
    // Step 6: Put the file links on the page
    document.getElementById('content').innerHTML = fileLinks;
}

// Run when page loads
window.addEventListener('DOMContentLoaded', function() {
    loadFolderContent();
});