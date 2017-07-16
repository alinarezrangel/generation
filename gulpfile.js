var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("autoprefixer");
var cleanCSS = require("gulp-clean-css");

var fs = require("fs");
var rimraf = require("rimraf");

gulp.task("sass:core", ["prepare"], function () {
	return gulp.src("./generation/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./out"));
});

gulp.task("sass:watch:core", ["prepare"], function () {
	gulp.watch("./generation/**/*.scss", ["sass:core"]);
});

gulp.task("sass:palletes", ["prepare"], function () {
	return gulp.src("./palletes/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./out"));
});

gulp.task("sass:watch:palletes", ["prepare"], function () {
	gulp.watch("./palletes/**/*.scss", ["sass:palletes"]);
});

gulp.task("autoprefixer", ["prepare", "sass:core", "sass:palletes"], function()
{
	return gulp.src("./out/**/*.css")
		.pipe(sourcemaps.init())
		.pipe(postcss([autoprefixer()]))
		.pipe(cleanCSS())
		.pipe(sourcemaps.write("."))
		.pipe(gulp.dest("./css/"));
});

gulp.task("prepare", function(cll)
{
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
});

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

gulp.task("default", ["prepare", "sass:core", "sass:palletes", "autoprefixer"], function()
{
	console.log("Generation is now builded");
});
