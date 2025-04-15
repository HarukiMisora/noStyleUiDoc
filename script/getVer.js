

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);
const version = require('../package.json').dependencies['nostyleui'].replace('^', '');

// 写入版本文件
fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'version.ts'),
  `export default '${version}'\n`
);
