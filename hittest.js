function hit_test(Ball b1, Ball b2) {
    if ((b1.x + b1.radius >= r2.x) && (b1.x <= b2.X + b2.radius) &&
        (b1.y + r1.Height >= r2.y) && (b1.y <= b2.y + b2.radius)) {
			return true;
	} else {
		return false;
	}
}

