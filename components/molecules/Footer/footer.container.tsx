import { useEffect, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

import { useAppContext } from 'context/appContext'
import { LanguagesResponse } from 'services/models/languages/response.model'
import { languagesService } from 'services/services/languages'
import { defaultLanguage } from 'utils/helpers/handleLanguage'

import { FooterComponent } from './footer.component'

type NewLanguage = 'es' | 'en' | 'pt'

type Language = LanguagesResponse['getLanguages']['content'][number]

type SelectProps = {
  languageCode: string
}

const formatLanguages = (languages: Language[]) => {
  const newLanguages = languages.map((item) => ({
    id: item.id,
    defaultLanguage: item.defaultLanguage,
    languageCode: item.languageCode.split('-')[0],
    name: item.name,
  }))

  return newLanguages
}

export const FooterContainer = () => {
  const [listLanguage, setListLanguage] = useState<Language[]>([])
  const { updateLanguage } = useAppContext()
  const methods = useForm<SelectProps>({
    mode: 'onChange',
    defaultValues: { languageCode: defaultLanguage() },
  })
  const { setValue, watch } = methods

  const getLanguage = async () => {
    try {
      const { data } = await languagesService.getLanguages()
      const formattedLanguages = formatLanguages(data.content)
      setListLanguage(formattedLanguages)
      setValue('languageCode', defaultLanguage())
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('getFooterLanguages --> error\n', err)
    }
  }

  const changeLanguage = () => {
    const selectedLanguage = watch('languageCode')
    defaultLanguage(selectedLanguage.split('-')[0] as NewLanguage)
    if (updateLanguage) updateLanguage(selectedLanguage.split('-')[0] as NewLanguage)
  }

  useEffect(() => {
    if (!listLanguage.length) void getLanguage()
    changeLanguage()
  }, [watch('languageCode')])

  return (
    <FormProvider {...methods}>
      <FooterComponent listLanguage={listLanguage} />
    </FormProvider>
  )
}
