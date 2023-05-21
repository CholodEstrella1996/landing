import { TemplateStyles } from './template.styles'

export type TemplateComponentProps = {
  children: React.ReactNode
}

export const TemplateComponent = ({ children }: TemplateComponentProps) => (
  <>
    <div className="box">
      <p>{children}</p>
    </div>
    <style jsx>{TemplateStyles}</style>
  </>
)
