#This is nodejs assesment test creating project parkinglot command line using nodejs

//create local module
mkdir colors
cd colors
touch index.js
npm init -y  //create package.json for local module


// create large app project
sample: nodejs-parkinglot

//create package.json on large app projects
npm init -y

// register module colors
npm install --save ./controllers/colors

//uninstall your local module:
npm un colors

//create the global link by returning to the colors folder and using the link command:

cd modules/colors
sudo npm link

// Output
/usr/local/lib/node_modules/colors -> /home/sammy/colors



#CREATE node command line
node .
npm install -g .
npm uninstall -g nodejs-parkinglot