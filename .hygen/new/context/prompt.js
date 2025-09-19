const fs = require('fs');
const path = require('path');

module.exports = {
    prompt: ({ inquirer }) => {
      
      const questions = [
        {
          type: 'input',
          name: 'component_name',
          message: 'What is the context name?',
          validate: input => input.length > 0
        },
        {
          type: 'input',
          name: 'dir',
          message: 'Where is the directory? src/',
          validate: input => input.length > 0
        },
        {
          type: 'toggle',
          name: 'is_dynamic',
          message: 'add dynamic import?',
          enabled: 'Yes',
          disabled: 'No'
        },
        {
          type: 'toggle',
          name: 'is_auto_export',
          message: 'Add export to the index file ?',
          enabled: 'Yes',
          disabled: 'No'
        }
      ]
      return inquirer
        .prompt(questions)
        .then(answers => {
          const { category, component_name, is_dynamic, dir, is_auto_export } = answers
          let name = component_name.split("-").map(item => {
              return item.replace(/^[a-z]/, function(m){ return m.toUpperCase() })
          }).join("");

          const pathDir = `${dir}`;
          const absPath = `src/${pathDir}`

          if(is_auto_export){
            const exportString = `\nexport * from './${component_name}.context';`;
            const filePath = path.resolve(absPath+'/index.ts');
            let fileContent = fs.readFileSync(filePath, 'utf8');
            fileContent += exportString;
            fs.writeFileSync(filePath, fileContent, 'utf8');
            console.log(`Экспорт для ${name} успешно добавлен в index.ts`);
          }

          return { ...answers, absPath, category, component_name: name, folder_name: component_name, is_dynamic }
        })
    }
}