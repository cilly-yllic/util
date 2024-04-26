import { resolve, join } from 'path'

import { name } from 'package.json'

/* eslint-disable import/no-restricted-paths */
import { getAliases, writePackageJson } from '../src/modules/dev-ops/package-generator/generate-alias.js'
/* eslint-enable import/no-restricted-paths */

const AUTHOR_NAME = `@cilly`
const PACKAGE_NAME = name
const ROOT_PATH = resolve()
const SRC_DIR = 'src'
const OUTPUT_DIR = 'dist'

const aliases = getAliases(join(ROOT_PATH, SRC_DIR), ['^_core', '^_internal', '\\.json$'])
writePackageJson(ROOT_PATH, AUTHOR_NAME, PACKAGE_NAME, OUTPUT_DIR, aliases, 'modules')
