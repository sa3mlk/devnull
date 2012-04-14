#!/usr/bin/env python

# Write a custom array sort function that sorts the following array so that objects
# with the highest 'foo' property value is listed first.
def foo_sort_custom(a):
	return sorted(a, key=lambda x: x['foo'], reverse=True)

if __name__ == "__main__":
	data = [{"foo": 4711}, {"foo": 17}, {"foo": 42}, {"foo": 9}, {"foo": 512}]
	print foo_sort_custom(data)
