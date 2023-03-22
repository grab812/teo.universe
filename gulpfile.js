const gulp = require('gulp')
const path = require('path')

// gulp 플러그인 호출 
const sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    cache = require('gulp-cache'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer'),
    fileinclude = require('gulp-file-include'),
    browserSync = require('browser-sync').create();

const reload = browserSync.reload;

const src = 'src';
const dist = 'dist';
const scssOptions = {
    outputStyle : "expanded",
    indentType : "tab",
    indentWidth : 1,
    precision: 6,
    sourceComments: true
};

gulp.task('html', function() {
    return gulp.src([
            'src/**/*.html',
            '!src/includes/**/*.html'
        ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream());
});

gulp.task('scss',function(path) {
    console.log(path)
    var srcfile = './src/**/*.scss';
    return gulp
        .src(srcfile)
        .pipe(sourcemaps.init())
        .pipe(sass(scssOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dist))
        .pipe(browserSync.stream());
});

gulp.task('font', () => {
    return gulp
        .src('./src/**/css/fonts/**')
        // .pipe(gulp.dest(dist + '/css/fonts'));
        .pipe(gulp.dest(dist));
});

gulp.task('images', () => {
    return gulp
        .src('./src/**/images/**')
        .pipe(gulp.dest(dist));
});

gulp.task('js', () => {
    return gulp
        .src('./src/**/*.js')
        .pipe(gulp.dest(dist));
});
 
// Watcher will look for changes and execute tasks
gulp.task('watch', () => {
    gulp.watch('src/**/*.html', gulp.series(['html']));
    gulp.watch('src/**/*.scss', gulp.series(['scss']));
    gulp.watch('src/**/images/**', gulp.series(['images']));
    gulp.watch('src/**/css/fonts/**', gulp.series(['font']));
    gulp.watch('src/**/js/**', gulp.series(['js']));
})

gulp.task('bs',function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
        ,startPath: './'
        ,port: 7787
        ,cors: true
        ,ui: false
        ,notify: false
    });
});

// Clean images cache 
gulp.task('removeDist', () => {
    return del(dist + '/**', {force:true});
})

// Clean images cache 
gulp.task('clear', (done) => {
    return cache.clearAll(done);
})

gulp.task('default', gulp.parallel(['clear', 'watch', gulp.series(['removeDist', 'font', 'images', 'scss', 'js', 'html', 'bs'])], () => {
    
}))