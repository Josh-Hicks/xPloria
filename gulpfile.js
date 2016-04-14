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
  return gulp.src(['bower_components/jquery/dist/jquery.min.js', 'js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('images', function() {
    return gulp.src('images/**/*')
        .pipe(cache(imageOptim.optimize()))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('copy', function() {
    gulp.src(['sounds/Creaking-door-sound.mp3', 'sounds/Loud-boom-sound.mp3', 'sounds/music.mp3', 'sounds/sheath-sword-sound.mp3', 'sounds/whoosh-transition-sound.mp3'])
        .pipe(gulp.dest('dist/sounds/'))
});

gulp.task('watch', function() {
    gulp.watch('css/scss/*.scss', ['scss-lint', 'sass']);
    gulp.watch('js/*.js', ['uglify']);
});

gulp.task('default', ['images', 'uglify', 'scss-lint', 'sass', 'copy', 'watch']);
