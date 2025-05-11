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
          message: 'Where is the directory(Optional)',
        },
      ]
      return inquirer
        .prompt(questions)
        .then(answers => {
          const { category, folder_name, dir, component_name } = answers
          let name = folder_name;
          if(component_name){
            name = component_name;
          }else{
            name = folder_name.split("-").map(item => {
              return item.replace(/^[a-z]/, function(m){ return m.toUpperCase() })
            }).join("");
          }
          const path = `${ dir ? `${dir}/` : `` }${folder_name}`
          const absPath = `src/components/${path}`
          return { ...answers, path, absPath, category, component_name: name }
        })
    }
  }