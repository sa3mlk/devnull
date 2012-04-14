#!/usr/bin/env python
from sys import stdout

def challenge28():
	with open("2_8.data", "rt") as f:
		for i, l in enumerate(f):
			# Read through the whole file, but only print the 100101th element.
			if i > 0 and i % 100101 == 0:
				stdout.write("#{0} = {1}\n".format(i, l.strip()))

if __name__ == "__main__":
	challenge28()

