> yarn global add create-react-app

//---------
# ~/.zshrc
# Append this at the END of the file!
export PATH="$PATH:`yarn global bin`"
//--------------

> mkdir -p ~/Code/React           # Keep your code organized!
> cd ~/Code/React
> create-react-app scoreboard
> cd scoreboard
> git init                        # Initiate a new git repo
> git add .                       # Add all the template code
> git commit -m 'New project'

check file in index.html, index.js, app.js


//--- for testing
create .eslintrc
{
  "extends": "react-app"
}
