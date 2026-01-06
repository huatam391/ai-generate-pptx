import fs from 'fs';
import { PPTXGenerator, PPTXConfig } from './pptx-generator';
import path from 'path';

const main = async () => {
    try {
        // Parse command line arguments
        // Usage: ts-node index.ts [input_json_path] [output_pptx_path]
        const args = process.argv.slice(2);
        const inputFilePath = args[0] || 'output/04d890bf-88cd-49fc-98a9-6aae6ce02706.json';
        const outputFileName = args[1] || 'output/04d890bf-88cd-49fc-98a9-6aae6ce02706.pptx';

        console.log(`Starting PPTX generation process...`);
        console.log(`Input: ${inputFilePath}`);
        console.log(`Output: ${outputFileName}`);

        if (!fs.existsSync(inputFilePath)) {
            console.error(`Error: ${inputFilePath} not found.`);
            process.exit(1);
        }

        console.log(`Reading configuration...`);
        const rawData = fs.readFileSync(inputFilePath, 'utf-8');
        const pptxConfig: PPTXConfig = JSON.parse(rawData);

        console.log('Initializing PPTXGenerator...');
        const generator = new PPTXGenerator(pptxConfig);

        console.log('Generating presentation...');
        const pres = await generator.generate();

        console.log(`Saving presentation to ${outputFileName}...`);
        
        // Ensure output directory exists
        const outputDir = path.dirname(outputFileName);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        await pres.writeFile({ fileName: outputFileName });

        console.log('PPTX generation completed successfully.');
    } catch (error) {
        console.error('An error occurred during PPTX generation:', error);
        process.exit(1);
    }
};

main();
