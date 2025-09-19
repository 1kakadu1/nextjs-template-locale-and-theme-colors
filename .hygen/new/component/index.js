const fs = require('fs');
const pathNode = require('path');
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
          message: 'What is the component name(Optional)?'
        },
        {
          type: 'input',
          name: 'dir',
          message: 'Where is the directory(Optional)? src/components/',
        },
        {
          type: 'toggle',
          name: 'is_create_model',
          message: 'Create model file?',
          enabled: 'Yes',
          disabled: 'No'
        }
      ]
      return inquirer
        .prompt(questions)
        .then(answers => {
          const { category, folder_name, dir, component_name, is_create_model } = answers
          let name = folder_name;
          if(component_name){
            name = component_name;
          }else{
            name = folder_name.split("-").map(item => {
              return item.replace(/^[a-z]/, function(m){ return m.toUpperCase() })
            }).join("");
          }
          const path = `${ dir ? `${dir}/` : `` }${folder_name}`
          if(path.includes("ui/")){
            const exportString = `\nexport * from './${folder_name}';`;
            const filePath = pathNode.resolve('src/components/ui/index.ts');
            let fileContent = fs.readFileSync(filePath, 'utf8');
            fileContent += exportString;
            fs.writeFileSync(filePath, fileContent, 'utf8');
            console.log(`Экспорт для ${name} успешно добавлен в ui -> index.ts`);
          }
          const absPath = `src/components/${path}`
          return { ...answers, path, absPath, category, component_name: name, is_create_model }
        })
    }
  }