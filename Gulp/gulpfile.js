var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browsersync = require('browser-sync');
var imagemin = require('gulp-imagemin');

gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('**/*.js');
	gulp.watch('**/*.css');
	gulp.watch('**/*.php');
	gulp.watch('**/*.html');
	gulp.watch('gulpfile.js');
});

gulp.task('browser-sync', function () {
	var files = [
		'**/*.php',
		'**/*.css',
		'**/*.js',
		'**/*.html',
		'**/*.jpg',
		'**/*.png'
	];

	browsersync.init(files, {
		open: 'external',
		host: 'localhost',
		server: "./"
	});
});

gulp.task('default', ['watch', 'browser-sync']);

gulp.task('build-img', function() {
	gulp.src('img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('img/'));
});