var gulp = require("gulp");
var uglify = require("gulp-uglify");
gulp.task("uglify", function() {
	gulp.src("js/cart.js").pipe(uglify()).pipe(gulp.dest("./jjs"));
});

var imagemin = require("gulp-imagemin");
gulp.task("imagemin", function() {
	gulp.src("img/detail").pipe(uglify()).pipe(gulp.dest("./imggg"));
});
gulp.task("imagemin", function() {
	gulp.src("img/detail1").pipe(uglify()).pipe(gulp.dest("./img11"));
});
gulp.task("imagemin", function() {
	gulp.src("img/detail2").pipe(uglify()).pipe(gulp.dest("./img22"));
});
gulp.task("imagemin", function() {
	gulp.src("img/home").pipe(uglify()).pipe(gulp.dest("./imghome"));
});

var babel = require("gulp-babel");
gulp.task("babel", function() {
	gulp.src("js/cart.js").pipe(babel({
		presets: ['es2015']
	})).pipe(gulp.dest("./es5"));
});
gulp.task("babel", function() {
	gulp.src("js/detail.js").pipe(babel({
		presets: ['es2015']
	})).pipe(gulp.dest("./es5"));
});
gulp.task("babel", function() {
	gulp.src("js/detail1.js").pipe(babel({
		presets: ['es2015']
	})).pipe(gulp.dest("./es5"));
});
gulp.task("babel", function() {
	gulp.src("js/detail2.js").pipe(babel({
		presets: ['es2015']
	})).pipe(gulp.dest("./es5"));
});
gulp.task("babel", function() {
	gulp.src("js/header.js").pipe(babel({
		presets: ['es2015']
	})).pipe(gulp.dest("./es5"));
});
gulp.task("babel", function() {
	gulp.src("js/index.js").pipe(babel({
		presets: ['es2015']
	})).pipe(gulp.dest("./es5"));
});
gulp.task("babel", function() {
	gulp.src("js/login.js").pipe(babel({
		presets: ['es2015']
	})).pipe(gulp.dest("./es5"));
});
gulp.task("babel", function() {
	gulp.src("js/register.js").pipe(babel({
		presets: ['es2015']
	})).pipe(gulp.dest("./es5"));
});

gulp.task("uglify", function() {
	gulp.src("es5/register.js").pipe(uglify()).pipe(gulp.dest("./jjs"));
});

// CSS
var minfyCSS = require("gulp-minify-css");
gulp.task("minfyCSS", function() {
	gulp.src("css/reset.css").pipe(minfyCSS()).pipe(gulp.dest("./aaaa"));
});

// html
var minifyHTML = require('gulp-minify-html');
gulp.task("minifyHTML", function() {
	gulp.src("register.html").pipe(minifyHTML()).pipe(gulp.dest("./html"));
});
