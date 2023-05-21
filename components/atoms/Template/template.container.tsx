import { TemplateComponent } from './template.component'

export type TemplateContainerProps = {
  children: React.ReactNode
}

export const TemplateContainer = (props: TemplateContainerProps) => <TemplateComponent {...props} />
