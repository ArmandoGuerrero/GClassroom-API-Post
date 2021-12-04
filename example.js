/*  const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('./OneCourse.json', (err, data) => {
      if (err) { console.error(err); res.end('Server Error'); }
	  else {
        const transfer = JSON.parse(data.toString());
            if (err) { console.error(err); res.end('Server Error'); }
		  	let html = '<h1 style="color:orange">Datos: ' + 
			`${transfer.name} <br /> y tambi&eacute;n su Id: ${transfer.id}` + '</h1>';
			html += '<br /><h1>Hi Team  Ok...!</h1>';
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(html);
		}
    });
  }
}).listen(8000, '127.0.0.1');  */


/*  const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('./titles.json', (err, data) => {
      if (err) { console.error(err); res.end('Server Error'); }
	  else {
        const transfer = JSON.parse(data.toString());
            if (err) { console.error(err); res.end('Server Error'); }
			let html = '<h1 style="color:orange">Datos: ' + `${transfer.courses[0].name} <br /> y tambi&eacute;n <br /> ${transfer.courses[3].id}` + '</h1';
			html += '<br /><h1>This is the next... </h1>' + `${transfer.courses[6].courseMaterialSets[0].title}` + 'y su Archivo en Drive es el siguiente ID: ' + `${transfer.courses[6].courseMaterialSets[1].materials[0].driveFile.id}`;
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(html);
	}
	});
  }
}).listen(8000, '127.0.0.1');  */



const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile('./splash.json', (err, data) => {
      if (err) { console.error(err); res.end('Server Error'); }
	  else {
        const myApi = JSON.parse(data.toString());
            if (err) { console.error(err); res.end('Server Error'); }
			let i = myApi.announcements.length;
			let html = '<h1 style="color:orange">' + 
			`${myApi.announcements[1].text} <br /> y tambi&eacute;n su Id: ${myApi.announcements[1].id}.</h1>`;
			html += '<br /><h1>Miss Cary!</h1>';
			html += 'En el enlace: <a href="' + `${myApi.announcements[1].materials[0].driveFile.driveFile.alternateLink}` + '" target="_blank">' + 'Link</a><br /><br />';
			html += myApi.announcements[1].text + '<h1>El nuevo dato es... &nbsp; ' + i + '</h1>';
				if (myApi.announcements[1].materials.length) {
					
/*		for (x in myApi.announcements){
		console.log("Grab this...");
		console.log(`${myApi.announcements[x].id}`);   */
		
		for (x in myApi.announcements[1].materials){
		html += `<h2 style="color:blue">${myApi.announcements[1].materials[x].driveFile.driveFile.title}</h2>`;
		}
	}
			
	else { html += '<h1>U p p s !</h1>'; }
						
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(html);
	}
	});
  }
}).listen(8000, '127.0.0.1');
console.log("Running . . .");

/*    --------------  o   ---------------     */

