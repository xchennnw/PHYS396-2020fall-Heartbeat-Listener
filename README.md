# PHYS396-2020fall-Heartbeat-Listener
This is a version based on Tessa's visualization demo with the Heartbeat Listener added.


## How to See the Gas Handling System Visualization in 5 "Easy" Steps
1) Clone the repository
2) Use the package.json file to get all required dependencies
3) SSH Connect the CouchDB instance to local port 5984 (See Below)
4) Run the index.html in the browser 
5) See your graph !

#### Notes


### SSH connect the CouchDB instance to local port 5984

#### Mac Users:
1) Open Terminal
2) Run this command: ssh -L5984:127.0.0.1:5984 lolx@132.206.126.208 -p 2020
3) Enter password x3n0ntpc

#### Windows Users:
1) Open a PuTTY window
2) Under the "Session" tab enter the db computer's information
	Host Name: lolx@132.206.126.208
	Port: 2020
	Connection Type: SSH (should be selected already)
3) Under the "Connection -> SSH -> Tunnels" tab enter the port information for Fauxton
	Source port: 5984
	Destination: 127.0.0.1:5984
	Make sure "Local" and "Auto" are the only bubbles selected
	Hit "Add" button
	"L5984	127.0.0.1:5984" will appear in "Forwarded Ports" 
4) Click "Open" at the bottom of the window to start SSH session



