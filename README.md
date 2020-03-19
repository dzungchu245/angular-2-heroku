```
npm install @angular/cli@latest @angular/compiler-cli --save-dev
```

In your package.json, copy
```
"@angular/cli": "^9.0.7",
"@angular/compiler-cli": "^4.4.7",
```
from devDependencies to dependencies


### Create postinstall script in package.json
```
"postinstall": "ng build --aot -prod"
```
EDIT: You might get error running the postinstall command. This works instead:
```
"heroku-postbuild": "ng build --prod"
```

### Copy typescript to dependencies.
Copy "typescript": "~2.3.3" from devDependencies to dependencies to also inform Heroku what typescript version to use.

### Install Enhanced Resolve 3.3.0
Run the command 
```
npm install enhanced-resolve@3.3.0 --save-dev
```

### Install Express server by running:
```
npm install express path --save
```

## Automatic Deployment from GitHub to Heroku
- create new app
- connect to github repo
- enable automatic build 
- done
