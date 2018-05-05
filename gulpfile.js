const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });
 

gulp.task('less', function () {
    return gulp.src('./src/button.less')
    .pipe(less({
      plugins: [autoprefix]
    }))
    .pipe(gulp.dest('./lib'));
})