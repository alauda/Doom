export const DEFAULT_CONFIG_NAME = 'doom.config'

export const JSON_EXTENSION = '.json'

export const YAML_EXTENSIONS = ['.yaml', '.yml'] as const

export const STATIC_CONFIG_EXTENSIONS = [
  JSON_EXTENSION,
  ...YAML_EXTENSIONS,
] as const

export const JS_EXTENSIONS = [
  '.js',
  '.ts',
  '.mjs',
  '.mts',
  '.cjs',
  '.cts',
] as const

export const DEFAULT_EXTENSIONS = [
  ...YAML_EXTENSIONS,
  ...JS_EXTENSIONS,
] as const

export const DEFAULT_CONFIGS = DEFAULT_EXTENSIONS.map(
  (ext) => `${DEFAULT_CONFIG_NAME}${ext}` as const,
)

export const I18N_FILE = 'i18n.json'

export const SITES_FILE = 'sites.yaml'

export const CWD = process.cwd()
