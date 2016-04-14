var gulp = require('gulp');
var sass = require('gulp-sass');
var cache = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var scsslint = require('gulp-scss-lint');
var imageOptim = require('gulp-imageoptim');

gulp.task('scss-lint', function() {
    return gulp.src([
            'css/scss/*.scss'
        ])
        .pipe(scsslint());
});

gulp.task('sass', function() {
    return gulp.src('css/scss/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('uglify', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
    return gulp.src('images/**/*')
        .pipe(cache(imageOptim.optimize()))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('watch', function() {
    gulp.watch('css/scss/*.scss', ['scss-lint', 'sass']);
    gulp.watch('js/*.js', ['uglify']);
});

gulp.task('default', ['images', 'uglify', 'scss-lint', 'sass', 'watch']);
