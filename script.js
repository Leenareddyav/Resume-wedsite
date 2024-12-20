window.onload = () => {  
    const resumeContent = `  
        {  
            "experience": [  
                {  
                    "title": "Software Developer- inturn",  
                    "company": "Tech Innovations",  
                    "duration": "3 months"  
                },  
                {  
                    "title": "Web Developer-inturn",  
                    "company": "Creative Solutions",  
                    "duration": "3 months"  
                }  
            ]  
        }  
    `;  

    const data = JSON.parse(resumeContent);  
    let output = "<h3>Work Experience:</h3><ul>";  

    data.experience.forEach(job => {  
        output += `<li>${job.title} at ${job.company} (${job.duration})</li>`;  
    });  

    output += "</ul>";  
    document.getElementById("resumeData").innerHTML = output;  
};