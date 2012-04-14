function hit_test(Ball b1, Ball b2) {
    if ((b1.x + b1.radius >= r2.x) && (b1.x <= b2.X + b2.radius) &&
        (b1.y + b1.radius >= r2.y) && (b1.y <= b2.y + b2.radius)) {
		return true;
	} else {
		return false;
	}
}

function HitTest(Rectangle r1, Rectangle r2) returns boolean
{
    if ((r1.X + r1.Width >= r2.X) and
        (r1.X <= r2.X + r2.Width) and
        (r1.Y + r1.Height >= r2.Y) and
        (r1.Y <= r2.Y + r2.Height)) then return true
    else return false
}

