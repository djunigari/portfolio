import 'react'

declare module 'react' {
  // augment CSSProperties here
  // eslint-disable-next-line no-unused-vars
  interface CSSProperties {
    '--value'?: string | number
    '--size'?: string | number
    '--thickness'?: string | number
  }
}
