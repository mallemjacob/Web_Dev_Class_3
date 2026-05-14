# Install react

https://react.dev/learn/build-a-react-app-from-scratch

# Vite

npm create vite@latest my-app -- --template react

# JS Topics

1.callbacks
2.promises
3.async await
fetch
node.js/npm
array and object destructuring
array methods
arrow functions
spread and rest operators
modules

// https://github.com/mallemjacob/Web_Dev_Class_3

# Implement Daily or Weekly Check-ins

What did you accomplish yesterday?

What are you working on today?

Are you blocked by anything?

# Conduct Code/Work Reviews

# techstack

react
react router
gemini api
tailwind css

# Step-1 Create react app

npm create vite@latest my-app -- --template react

# Step-2 Create components

- create Components folder
- Form component
- List component

https://github.com/mallemjacob/Web_Dev_Class_3

git branches
pull requests
pipelines

# APP.jsx

import './App.css'
import Form from './Components/Form'

function App() {
return (
<>

<Form />
</>
)
}

export default App

# Form.jsx

const Form = () => {
return (

<form>
<label>
Name:
<input type='text' />
</label>
<input type='submit' value='Submit' />
</form>
)
}

export default Form

# Branching strategy (12-05-2026)

1. Claim and Branch

Before writing code, go to the GitHub Project board and moves a ticket from "To Do" to "In Progress". Then, in terminal:

git checkout main
git pull origin main
git checkout -b feature/new-note-button

2. Develop and Commit

Write React code for that specific feature. make small, descriptive commits:

git add .
git commit -m "feat: add plus button to sidebar component"

3. Push and PR

Once the feature is working locally, push the branch to GitHub and open a Pull Request (PR) against main.

git push -u origin feature/new-note-button

4. The Code Review

review the PR in GitHub
Leave comments on specific lines of code, suggest optimizations
If changes are needed, update the branch.

5. Merge and Deploy

Once approve the PR, squash and merge it into main. This should automatically trigger GitHub Actions pipeline to build and test the updated app. The feature branch is then deleted to keep the repository clean.

---

git fetch origin
git checkout feature/delete-notes

git add .
git commit -m "fix: corrected the filter logic"
git push origin feature/delete-notes

## get new changes

git pull origin feature/add-note

## npm commands

npm install
npm run dev
