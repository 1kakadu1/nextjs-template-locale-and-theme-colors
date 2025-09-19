module.exports = {
    prompt: ({ inquirer }) => {
      
      const questions = [
        {
          type: 'input',
          name: 'folder_name',
          message: 'What is the page name?'
        },
        {
          type: 'confirm',
          name: 'meta_dynamic',
          message: 'Add dynamic meta (default static)?',
          default: false
        },
      ]
      return inquirer
        .prompt(questions)
        .then(answers => {
          const { category, folder_name, meta_dynamic} = answers
          const name = folder_name.split("-").map(item => {
            return item.replace(/^[a-z]/, function(m){ return m.toUpperCase() })
          }).join("");
          const absPath = `src/app/${folder_name}/`
          return { ...answers, absPath, category, folder_name: folder_name, component_name: name, meta_dynamic }
        })
    }
}