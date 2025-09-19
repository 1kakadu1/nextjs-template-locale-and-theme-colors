const fs = require('fs');
const path = require('path');

module.exports = {
    prompt: ({ inquirer }) => {
      
      const questions = [
        {
          type: 'input',
          name: 'folder_name',
          message: 'What is the folder name?'
        },
        {
          type: 'input',
          name: 'component_name',
          message: 'What is the icon name (optional)?'
        },
      ]
      return inquirer
        .prompt(questions)
        .then(answers => {
          const { category, component_name, folder_name } = answers
          let name = component_name ? component_name : folder_name.split("-").map(item => {
              return item.replace(/^[a-z]/, function(m){ return m.toUpperCase() })
          }).join("");

          const absPath = `src/components/ui/icons/`
          const exportString = `\nexport * from './${folder_name}.icon';`;
          const filePath = path.resolve('src/components/ui/icons/index.tsx');
          let fileContent = fs.readFileSync(filePath, 'utf8');
          fileContent += exportString;
          fs.writeFileSync(filePath, fileContent, 'utf8');
          console.log(`Экспорт для ${name} успешно добавлен в index.tsx`);
          return { ...answers, absPath, category, component_name: name, folder_name: folder_name }
        })
    }
}