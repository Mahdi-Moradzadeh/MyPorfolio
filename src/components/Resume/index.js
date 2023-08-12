import React from 'react';

function Resume() {
    return (
        <div className="resume" id='resume'>
            <h2>My Resume</h2>
            <p>my resume content here...</p>
            <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button>View PDF</button>
            </a>
        </div>
    );
}

export default Resume;
