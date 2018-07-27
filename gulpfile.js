const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");

const fs = require("fs");
const rimraf = require("rimraf");

function prepare(cll) {
	fs.mkdir("out", function(err)
	{
		if(err)
		{
			if(err.code == "EEXIST")
			{
				console.log(
					"The 'out/' folder already exists, stopping attempts to create it"
				);

				return cll();
			}

			return cll(err);
		}

		return cll();
	});
}

function sass_core() {
	return gulp.src("./generation/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./out"));
}

function sass_palletes() {
	return gulp.src("./palletes/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./out"));
}

function task_autoprefixer() {
	return gulp.src("./out/**/*.css")
		.pipe(sourcemaps.init())
		.pipe(postcss([autoprefixer()]))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./css/"));
}

const prepare_sass_core = gulp.series(prepare, sass_core)
const prepare_sass_palletes = gulp.series(prepare_sass_core, sass_palletes)
const prepare_autoprefixer =
	gulp.series(prepare, sass_core, sass_palletes, task_autoprefixer)

gulp.task("sass:core", prepare_sass_core);

gulp.task("sass:watch:core", function () {
	gulp.watch("./generation/**/*.scss", prepare_sass_core);
});

gulp.task("sass:palletes", prepare_sass_palletes);

gulp.task("sass:watch:palletes", function () {
	gulp.watch("./palletes/**/*.scss", prepare_sass_palletes);
});

gulp.task("autoprefixer", prepare_autoprefixer);

gulp.task("prepare", prepare);

gulp.task("clean", function(cll)
{
	rimraf("out", function(err)
	{
		if(err)
		{
			if(err.code == "ENOENT")
			{
				console.log(
					"The 'out/' folder not exists, stopping attempts to delete it"
				);

				return cll();
			}

			return cll(err);
		}

		return cll();
	});
});

gulp.task("default", gulp.series(
	prepare_sass_core,
	prepare_sass_palletes,
	prepare_autoprefixer
));
