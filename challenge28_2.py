#!/usr/bin/env python
from sys import argv, maxint
import operator

# A slightly efficient superset of primes
def primes_plus():
    yield 2
    yield 3
    i = 5
    while True:
        yield i
        if i % 6 == 1:
            i += 2
        i += 2

# Returns a dict d with n = produc p ^ d[p]
def get_prime_decomp(n):
    d = {}
    primes = primes_plus()
    for p in primes:
        while n % p == 0:
            n /= p
            d[p] = d.setdefault(p, 0) + 1
        if n == 1:
            return d

def num_divs(n):
    d = get_prime_decomp(n)
    powers_plus = map(lambda x: x + 1, d.values())
    return max(d)

if __name__ == "__main__":
    n = int(argv[1])
    print num_divs(n)

