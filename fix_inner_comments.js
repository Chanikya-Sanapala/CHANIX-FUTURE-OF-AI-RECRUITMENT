const fs = require('fs');

const files = [
    'd:\\SMART_ENGINE\\frontend\\src\\app\\(components)\\JobseekerProfile\\page.jsx',
    'd:\\SMART_ENGINE\\frontend\\src\\app\\(components)\\jobseeker-dashboard\\page.jsx'
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');

        // Remove the disabled return block
        // Pattern: return (\n\s*<div.*disabled.*\n\s*<\/div>\n\s*);\n\s*\/\*
        // We can match "return (" ... "disabled" ... ");" ... "/*"

        // Note: The content has newlines.

        // Find the "disabled" div and the return block around it
        const disabledRegex = /return\s*\(\s*<div[^>]*>[\s\S]*?disabled[\s\S]*?<\/div>\s*\);\s*\/\*/;

        if (disabledRegex.test(content)) {
            console.log(`Found disabled block in ${file}`);
            content = content.replace(disabledRegex, '');

            // Now find and remove the trailing "*/"
            // It should be near the end, likely before the last closing brace
            const closingCommentRegex = /\*\/\s*(?=\}\s*$)/;
            // Or just search for the last */ if it's the specific one we added

            // Let's just remove the last instance of */
            const lastCommentIndex = content.lastIndexOf('*/');
            if (lastCommentIndex !== -1) {
                content = content.substring(0, lastCommentIndex) + content.substring(lastCommentIndex + 2);
                console.log(`Removed trailing comment in ${file}`);
            }

            fs.writeFileSync(file, content, 'utf8');
            console.log(`Fixed ${file}`);
        } else {
            console.log(`No disabled block pattern found in ${file}`);
        }

    } catch (err) {
        console.error(`Error processing ${file}:`, err);
    }
});
