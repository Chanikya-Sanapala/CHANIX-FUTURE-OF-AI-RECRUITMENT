const fs = require('fs');
const path = require('path');

const filesToProcess = [
    'd:\\SMART_ENGINE\\frontend\\src\\app\\(components)\\JobseekerProfile\\page.jsx',
    'd:\\SMART_ENGINE\\frontend\\src\\app\\(components)\\jobseeker-dashboard\\page.jsx'
];

filesToProcess.forEach(filePath => {
    try {
        console.log(`Processing: ${filePath}`);
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');

        // Check if file is indeed disabled pattern
        if (lines[0].includes('Page is disabled by script')) {
            // Remove first 13 lines (approximated, looking for "Original Code Commented Out")
            let startIndex = lines.findIndex(line => line.includes('Original Code Commented Out'));

            if (startIndex !== -1) {
                // Start from the line after "Original Code Commented Out"
                const newLines = lines.slice(startIndex + 1).map(line => {
                    // Remove leading "// " or "//"
                    if (line.startsWith('// ')) {
                        return line.substring(3);
                    } else if (line.startsWith('//')) {
                        return line.substring(2);
                    }
                    return line;
                });

                fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
                console.log(`Successfully uncommented ${filePath}`);
            } else {
                console.log(`Could not find "Original Code Commented Out" marker in ${filePath}`);
            }
        } else {
            console.log(`File does not appear to be disabled: ${filePath}`);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err);
    }
});
