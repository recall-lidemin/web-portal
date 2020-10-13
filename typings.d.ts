declare module '*.css'
declare module '*.less'
declare module '*.png'
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}
declare module 'slash2'
declare module '*.scss'
declare module '*.sass'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'
declare module 'omit.js'

/* eslint-disable */
declare const __webpack_public_path__: string
declare const REACT_APP_ENV: 'dev' | 'staging' | 'testing' | 'production'
