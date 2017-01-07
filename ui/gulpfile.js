var gulp = require('gulp');
var replace = require('gulp-string-replace')

var JS_PATHS = {
    src: 'dist/**.js'
};

var CSS_PATHS = {
    src: 'dist/**.css'
};

var INDEX_PATH = {
    src: 'dist/**.html'
};

var JS_DESTINATION = '../src/main/resources/static/js';
var CSS_DESTINATION = '../src/main/resources/static/css';
var INDEX_DESTINATION = '../src/main/resources/static';

gulp.task('copy-html-replace-imports', function(){
    gulp.src([INDEX_PATH.src])
      .pipe(replace('text/javascript" src="', 'text/javascript" src="js/'))
      .pipe(replace('styles.bundle.css', 'css/styles.bundle.css'))
      .pipe(gulp.dest(INDEX_DESTINATION));
});

gulp.task('copy-css', function(){
    gulp.src([CSS_PATHS.src]).pipe(gulp.dest(CSS_DESTINATION));
});

gulp.task('copy-js', function(){
    gulp.src([JS_PATHS.src]).pipe(gulp.dest(JS_DESTINATION));
});

// gulp.task('copy', function () {
//     gulp.watch(JS_PATHS.src, ['copy-js']);
//     gulp.watch(INDEX_PATH.src, ['copy-html']);
//     gulp.watch(CSS_PATHS.src, ['copy-css']);
// });

gulp.task('copy', ['copy-js', 'copy-html-replace-imports', 'copy-css']);
