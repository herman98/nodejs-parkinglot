### #This is nodejs assesment test 
creating project parkinglot command line using nodejs

#### #install nodejs package first before running 
	node version 13.6 (please use nvm for running different nodejs version)
	install local module first using 
	$ npm install .

#### #run with REPL
	node .

#### #CREATE global node module 
	npm install -g .
	npm uninstall -g nodejs-parkinglot

#### #running code (base on file_input.txt)#running code (base on file_input.txt)
	create_parking_lot 6
	park KA-01-HH-1234
	park KA-01-HH-9999
	park KA-01-BB-0001
	park KA-01-HH-7777
	park KA-01-HH-2701
	park KA-01-HH-3141
	leave KA-01-HH-3141 4
	status
	park KA-01-P-333
	park DL-12-AA-9999
	leave KA-01-HH-1234 4
	leave KA-01-BB-0001 6
	leave DL-12-AA-9999 2
	park KA-09-HH-0987
	park CA-09-IO-1111
	park KA-09-HH-0123
	status


#### #runnint unit test
	npm run test
