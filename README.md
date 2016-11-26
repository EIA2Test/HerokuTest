#HerokuTest
Test for the combination of node.js with Eclipse, Heroku, GitHub and MongoDB in TypeScript
##Setup
* Get GitHub account and start a project there
* Connect local Eclipse-Project with this GitHub account
* Get Heroku account and connect it to the GitHub-Project
* Copy node.d.ts to Eclipse project
* Programm web-server with http-Module, adjust package.json and procfile
* Push to GitHub
* View in Heroku as https://[projektname].herokuapp.com

##Connect Eclipse and GitHub

### Alternative 1
- install EGit [necessary?]
- start new workspace with eclipse
- Import -> Git -> Projects from Git
- Clone URI
- Copy URI from GitHub and set username and password
- Select branch "master"
- Define destination: new folder in workspace
- select "import as general project"
- if needed: add .project to gitignore via Navigator

###Alternative2
- in new workspace
- open "Git Repositories" view
- Clone Repo
- Rightclick on Working Tree -> Import Projects -> Import Working Tree as general project
- work in "Project View"
- To commit/push:
  - rightclick on working tree in repo-view -> Add To Index
  - Changed files appear as Staged Changes
  - Commit And Push

###Adjust project nature
e.g to Web for use with Aptana

##Setup Typesript
- copy node.d.ts to project


