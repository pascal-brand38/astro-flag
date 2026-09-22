// Copyright (c) Pascal Brand
// MIT License

/** Flag names.
 * They follows ISO 3166-1-alpha-2 code (cf. https://www.iso.org/obp/ui/#search)
 * @example: fr for france, us from the united states, and gb for united kingdom
 * */
export type FlagName =
  'ac' |
  'ad' |
  'ae' |
  'af' |
  'ag' |
  'ai' |
  'al' |
  'am' |
  'ao' |
  'ar' |
  'as' |
  'at' |
  'au' |
  'aw' |
  'ax' |
  'az' |
  'ba' |
  'bb' |
  'bd' |
  'be' |
  'bf' |
  'bg' |
  'bh' |
  'bi' |
  'bj' |
  'bl' |
  'bm' |
  'bn' |
  'bo' |
  'bq' |
  'br' |
  'bs' |
  'bt' |
  'bv' |
  'bw' |
  'by' |
  'bz' |
  'ca' |
  'cc' |
  'cd' |
  'cf' |
  'cg' |
  'ch' |
  'ci' |
  'ck' |
  'cl' |
  'cm' |
  'cn' |
  'co' |
  'cr' |
  'cu' |
  'cv' |
  'cw' |
  'cx' |
  'cy' |
  'cz' |
  'de' |
  'dj' |
  'dk' |
  'dm' |
  'do' |
  'dz' |
  'ec' |
  'ee' |
  'eg' |
  'eh' |
  'er' |
  'es' |
  'et' |
  'eu' |
  'fi' |
  'fj' |
  'fk' |
  'fm' |
  'fo' |
  'fr' |
  'ga' |
  'gb-eng' |
  'gb-nir' |
  'gb-sct' |
  'gb-wls' |
  'gb-zet' |
  'gb' |
  'gd' |
  'ge' |
  'gf' |
  'gg' |
  'gh' |
  'gi' |
  'gl' |
  'gm' |
  'gn' |
  'gp' |
  'gq' |
  'gr' |
  'gs' |
  'gt' |
  'gu' |
  'gw' |
  'gy' |
  'hk' |
  'hm' |
  'hn' |
  'hr' |
  'ht' |
  'hu' |
  'id' |
  'ie' |
  'il' |
  'im' |
  'in' |
  'io' |
  'iq' |
  'ir' |
  'is' |
  'it' |
  'je' |
  'jm' |
  'jo' |
  'jp' |
  'ke' |
  'kg' |
  'kh' |
  'ki' |
  'km' |
  'kn' |
  'kp' |
  'kr' |
  'kw' |
  'ky' |
  'kz' |
  'la' |
  'lb' |
  'lc' |
  'lgbt' |
  'li' |
  'lk' |
  'lr' |
  'ls' |
  'lt' |
  'lu' |
  'lv' |
  'ly' |
  'ma' |
  'mc' |
  'md' |
  'me' |
  'mf' |
  'mg' |
  'mh' |
  'mk' |
  'ml' |
  'mm' |
  'mn' |
  'mo' |
  'mp' |
  'mq' |
  'mr' |
  'ms' |
  'mt' |
  'mu' |
  'mv' |
  'mw' |
  'mx' |
  'my' |
  'mz' |
  'na' |
  'nc' |
  'ne' |
  'nf' |
  'ng' |
  'ni' |
  'nl' |
  'no' |
  'np' |
  'nr' |
  'nu' |
  'nz' |
  'om' |
  'pa' |
  'pe' |
  'pf' |
  'pg' |
  'ph' |
  'pk' |
  'pl' |
  'pm' |
  'pn' |
  'pr' |
  'ps' |
  'pt' |
  'pw' |
  'py' |
  'qa' |
  're' |
  'ro' |
  'rs' |
  'ru' |
  'rw' |
  'sa' |
  'sb' |
  'sc' |
  'sd' |
  'se' |
  'sg' |
  'sh' |
  'si' |
  'sj' |
  'sk' |
  'sl' |
  'sm' |
  'sn' |
  'so' |
  'sr' |
  'ss' |
  'st' |
  'sv' |
  'sx' |
  'sy' |
  'sz' |
  'ta' |
  'tc' |
  'td' |
  'tf' |
  'tg' |
  'th' |
  'tj' |
  'tk' |
  'tl' |
  'tm' |
  'tn' |
  'to' |
  'tr' |
  'tt' |
  'tv' |
  'tw' |
  'tz' |
  'ua' |
  'ug' |
  'um' |
  'us' |
  'uy' |
  'uz' |
  'va' |
  'vc' |
  've' |
  'vg' |
  'vi' |
  'vn' |
  'vu' |
  'wf' |
  'ws' |
  'xk' |
  'ye' |
  'yt' |
  'za' |
  'zm' |
  'zw';

const allFlags = [
  'ac',
  'ad',
  'ae',
  'af',
  'ag',
  'ai',
  'al',
  'am',
  'ao',
  'ar',
  'as',
  'at',
  'au',
  'aw',
  'ax',
  'az',
  'ba',
  'bb',
  'bd',
  'be',
  'bf',
  'bg',
  'bh',
  'bi',
  'bj',
  'bl',
  'bm',
  'bn',
  'bo',
  'bq',
  'br',
  'bs',
  'bt',
  'bv',
  'bw',
  'by',
  'bz',
  'ca',
  'cc',
  'cd',
  'cf',
  'cg',
  'ch',
  'ci',
  'ck',
  'cl',
  'cm',
  'cn',
  'co',
  'cr',
  'cu',
  'cv',
  'cw',
  'cx',
  'cy',
  'cz',
  'de',
  'dj',
  'dk',
  'dm',
  'do',
  'dz',
  'ec',
  'ee',
  'eg',
  'eh',
  'er',
  'es',
  'et',
  'eu',
  'fi',
  'fj',
  'fk',
  'fm',
  'fo',
  'fr',
  'ga',
  'gb-eng',
  'gb-nir',
  'gb-sct',
  'gb-wls',
  'gb-zet',
  'gb',
  'gd',
  'ge',
  'gf',
  'gg',
  'gh',
  'gi',
  'gl',
  'gm',
  'gn',
  'gp',
  'gq',
  'gr',
  'gs',
  'gt',
  'gu',
  'gw',
  'gy',
  'hk',
  'hm',
  'hn',
  'hr',
  'ht',
  'hu',
  'id',
  'ie',
  'il',
  'im',
  'in',
  'io',
  'iq',
  'ir',
  'is',
  'it',
  'je',
  'jm',
  'jo',
  'jp',
  'ke',
  'kg',
  'kh',
  'ki',
  'km',
  'kn',
  'kp',
  'kr',
  'kw',
  'ky',
  'kz',
  'la',
  'lb',
  'lc',
  'lgbt',
  'li',
  'lk',
  'lr',
  'ls',
  'lt',
  'lu',
  'lv',
  'ly',
  'ma',
  'mc',
  'md',
  'me',
  'mf',
  'mg',
  'mh',
  'mk',
  'ml',
  'mm',
  'mn',
  'mo',
  'mp',
  'mq',
  'mr',
  'ms',
  'mt',
  'mu',
  'mv',
  'mw',
  'mx',
  'my',
  'mz',
  'na',
  'nc',
  'ne',
  'nf',
  'ng',
  'ni',
  'nl',
  'no',
  'np',
  'nr',
  'nu',
  'nz',
  'om',
  'pa',
  'pe',
  'pf',
  'pg',
  'ph',
  'pk',
  'pl',
  'pm',
  'pn',
  'pr',
  'ps',
  'pt',
  'pw',
  'py',
  'qa',
  're',
  'ro',
  'rs',
  'ru',
  'rw',
  'sa',
  'sb',
  'sc',
  'sd',
  'se',
  'sg',
  'sh',
  'si',
  'sj',
  'sk',
  'sl',
  'sm',
  'sn',
  'so',
  'sr',
  'ss',
  'st',
  'sv',
  'sx',
  'sy',
  'sz',
  'ta',
  'tc',
  'td',
  'tf',
  'tg',
  'th',
  'tj',
  'tk',
  'tl',
  'tm',
  'tn',
  'to',
  'tr',
  'tt',
  'tv',
  'tw',
  'tz',
  'ua',
  'ug',
  'um',
  'us',
  'uy',
  'uz',
  'va',
  'vc',
  've',
  'vg',
  'vi',
  'vn',
  'vu',
  'wf',
  'ws',
  'xk',
  'ye',
  'yt',
  'za',
  'zm',
  'zw',
]

/** arguments to <Flag/> component */
export interface FlagType {
  /** name of the flag, as defined by ISO 3166-1 alpha-2 code
   * (https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * @example fr stands for france
   * @example gb stands for great britain (united kingdom)
  */
  flagName: FlagName,

  /** shape of the flag, either square (1x1) or rectangular (4x3).
   * @defaut '4x3'
   */
  shape?: '1x1' | '4x3',

  /** width of the flag
   * @default '32px'
   */
  width?: string,
}

export { allFlags }

/** Astro components exports, used to create a swiper */
// @ts-expect-error Astro component imports are handled by Astro's type checker.
export { default as Flag } from './Flag.astro';
