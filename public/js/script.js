$(function() {
	var f = $("#clock"),
		b = f.find(".alarm"),
		n = f.find(".ampm"),
		l = $("#alarm-dialog").parent(),
		m = $("#alarm-set"),
		h = $("#alarm-clear"),
		i = $("#time-is-up").parent();
	var c = -1;
	var e = "zero one two three four five six seven eight nine".split(" ");
	var d = {};
	var k = ["h1", "h2", ":", "m1", "m2", ":", "s1", "s2"];
	var g = f.find(".digits");
	$.each(k, function() {
		if (this == ":") {
			g.append('<div class="dots">')
		} else {
			var r = $("<div>");
			for (var q = 1; q < 8; q++) {
				r.append('<span class="d' + q + '">')
			}
			d[this] = r;
			g.append(r)
		}
	});
	var p = "MON TUE WED THU FRI SAT SUN".split(" "),
		j = f.find(".weekdays");
	$.each(p, function() {
		j.append("<span>" + this + "</span>")
	});
	var o = f.find(".weekdays span");
	(function a() {
		var q = moment().format("hhmmssdA");
		d.h1.attr("class", e[q[0]]);
		d.h2.attr("class", e[q[1]]);
		d.m1.attr("class", e[q[2]]);
		d.m2.attr("class", e[q[3]]);
		d.s1.attr("class", e[q[4]]);
		d.s2.attr("class", e[q[5]]);
		var s = q[6];
		s--;
		if (s < 0) {
			s = 6
		}
		o.removeClass("active").eq(s).addClass("active");
		n.text(q[7] + q[8]);
		if (c > 0) {
			c--;
			b.addClass("active")
		} else {
			if (c == 0) {
				i.fadeIn();
				try {
					$("#alarm-ring")[0].play()
				} catch (r) {}
				c--;
				b.removeClass("active")
			} else {
				b.removeClass("active")
			}
		}
		setTimeout(a, 1000)
	})()
});