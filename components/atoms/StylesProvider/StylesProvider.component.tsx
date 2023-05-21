import { StylesProviderProps } from './StylesProvider.model'

export const css = String.raw

export const StylesProvider = (props: StylesProviderProps) => {
  const { className = '', styles = '', children, isGlobal } = props

  return (
    <div {...{ className }}>
      <style jsx {...{ global: isGlobal }}>
        {styles}
      </style>

      {children}
    </div>
  )
}
