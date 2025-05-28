const { exec } = require("child_process");
const path = require("path");

function ejecutarTransformacion(tipo, args, callback) {
    const bin = path.join(__dirname, "..", "core", "transformar");
    const cmd = `${bin} ${tipo} ${args.join(" ")}`;
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            callback(stderr || error.message, null);
        } else {
            callback(null, stdout.trim());
        }
    });
}

module.exports = { ejecutarTransformacion };

