#!/usr/bin/env python
from sys import stdout

def flatten(mix):
	result = []
	for el in mix:
		if hasattr(el, "__iter__") and not isinstance(el, basestring):
			result.extend(flatten(el))
		else:
			result.append(el)
	return result

if __name__ == "__main__":
	mix = [1, 2, "a", "b", ("c", 3, "d"), ["e", "f", "g", 3.14], (["y", 4], ("z", 5))]
	for c in flatten(mix):
		stdout.write("{0}\n".format(c))
