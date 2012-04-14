#!/usr/bin/env python
from xml2json import xml2json

#!/usr/bin/env python
# -*- encoding: utf-8 -*-

from wsgiref.simple_server import make_server
import simplejson as json

PORT = 8000

def server_app(environment, start_response):
	if environment["PATH_INFO"] != "/":
		print "Ignoring:", environment["PATH_INFO"]
		start_response("404 NOT FOUND", [("content-type", "text/plain")])
		return [":-("]

	with open("books.xml") as f:
		ret = xml2json(f.read())

	status = "200 OK"
	headers = [
		("content-type", "application/json"),
		("content-length", str(len(ret)))
	]

	start_response(status, headers)
	return [json.dumps(ret, sort_keys=True, indent=4)]

httpd = make_server("", PORT, server_app)
print "Serving on port %d..." % PORT

try:
	httpd.serve_forever()
except KeyboardInterrupt:
	print "Aborting..."

