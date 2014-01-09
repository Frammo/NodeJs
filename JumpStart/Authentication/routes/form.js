// Added to practise dealing with forms
// in express

exports.index = function(req, res) {
	/*
	// Node is very minimalist, so when rendering html
	// we actually have to manually read the contents and
	// return the response to the client
	fs.readFile('./form.html', function(error, content) {
		if(!error) {
			// Success - return the contents to the client
			res.writeHead(200, { 'Content-Type' : 'text/html' });
			// Return content and specify
			res.end(content, 'utf-8');
		} else {
			// There was an error - send error code
			res.writeHead(500);
			res.end();
		}
	});
	*/

	// The above way was the old way - we can get the framework
	// to do the work for us

	res.render('form/index', { 'title' : 'Register' });
};

exports.indexPost = function(req, res) {
	res.render('form/index', { 'title' : 'Register' });
};