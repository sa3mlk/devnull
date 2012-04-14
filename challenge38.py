#!/usr/bin/env python
from sys import argv
from itertools import permutations

def challenge38(n):
	r = sorted(["".join(x) for x in permutations(n)])
	for i, v in enumerate(r):
		if v == n:
			return r[i+1]

if __name__ == "__main__":
	print challenge38(argv[1])

