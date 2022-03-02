var names=new Array();
names[0]="ezra";
names[1]="yaslin";
names[2]="kite";
names[3]="jaisel";
names[4]="gitar";
names[5]="jony";
names[6]="Jennifer";
names[7]="Pol";
names[8]="Fenny";
names[9]="Jeslin";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}