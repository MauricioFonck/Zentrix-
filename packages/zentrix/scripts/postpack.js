import fs from 'fs';
import path from 'path';
import packageJson from '../package.json' with { type: 'json' };
// Get the current version of the package from the nearest package.json file
const { version } = packageJson;
// Get the --pack-destination from the command line arguments
// Create a package.json file in the packDestination directory with dependencies is the package itself
fs.writeFileSync(
  path.resolve(process.env.npm_config_pack_destination, 'package.json'),
  JSON.stringify(
    {
      name: packageJson.name,
      version,
      dependencies: {
        '@zentrix/zentrix': `file:./zentrix-zentrix-${version}.tgz`
      },
      scripts: {
        setup: 'zentrix install',
        start: 'zentrix start',
        'start:debug': 'zentrix start:debug',
        build: 'zentrix build',
        dev: 'zentrix dev',
        'user:create': 'zentrix user:create'
      }
    },
    null,
    2
  )
);
