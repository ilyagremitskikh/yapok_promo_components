import gulp from "gulp";

import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  isDev: !process.argv.includes("--build"),
  path: path,
  gulp: gulp,
  plugins: plugins,
};

import { copy } from "./gulp/tasks/copy.js";
import { data } from "./gulp/tasks/data.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { inline } from "./gulp/tasks/inline.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";

function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.data, data);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}

// const mainTasks = gulp.parallel(copy, html, scss, js);
const mainTasks = gulp.parallel(copy, html, scss, js);

const dev = gulp.series(reset, data, mainTasks, gulp.parallel(watcher, server));
// const build = gulp.series(reset, data, mainTasks, inline);
const build = gulp.series(reset, data, mainTasks);

export { dev, build };

gulp.task("default", dev);
