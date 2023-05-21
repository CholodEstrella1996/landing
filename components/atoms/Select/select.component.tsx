import { AlertCircleOutline } from '@easy-eva-icons/react'
import { Controller, RefCallBack, useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'
import Select, { MultiValue, SingleValue } from 'react-select'

import messages from './select.messages'
import { SelectProps, OptionProps, FieldReference } from './select.model'
import { SelectStyles, SelectGlobalStyles } from './select.styles'
import { theme } from '../ThemeProvider'
import { Typography } from '../Typography'

const { colors } = theme

const SelectComponent = (props: SelectProps) => {
  const {
    name,
    label,
    size = 'small',
    placeholder,
    isClearable,
    multiple = false,
    disabled = false,
    required = false,
    className = '',
    options,
    isSearchable = true,
    reference,
    fullWidth = false,
  } = props

  const { control } = useFormContext()
  const intl = useIntl()

  const style = {
    '--cursor-hover': disabled ? 'not-allowed' : 'unset',
    '--fullWidth': fullWidth ? '100%' : 'auto',
  }

  const handleReference = (ref: FieldReference, refControl: RefCallBack) => {
    refControl(ref)
    if (reference) reference.current = ref
  }

  const sendData = (val: MultiValue<OptionProps> | SingleValue<OptionProps>) => {
    const optionMulti = val as OptionProps[]
    const optionSingle = val as OptionProps
    if (multiple)
      return optionMulti?.length ? optionMulti?.map((v: OptionProps) => v.value) : undefined
    return optionSingle?.value
  }
  return (
    <>
      <div className={`select__container ${className}`} style={style}>
        <label htmlFor="select" className="select__label">
          <Typography
            variant="label"
            color={!disabled ? colors.neutrals[400] : colors.neutrals[200]}>
            {label.toUpperCase()}
          </Typography>
        </label>
        <Controller
          render={({ field: { onChange, ref: refControl, value }, fieldState: { error } }) => (
            <>
              <Select
                closeMenuOnSelect={!multiple}
                isMulti={multiple}
                isClearable={isClearable}
                id={name}
                isSearchable={isSearchable}
                ref={(ref) => handleReference(ref, refControl)}
                classNamePrefix={`cl-select--${size}`}
                options={options}
                value={options.find((c) => c.value === value)}
                placeholder={placeholder}
                onChange={(val) => onChange(sendData(val))}
                isDisabled={disabled}
                menuPlacement="auto"
                styles={{
                  control: (styles) => ({
                    ...styles,
                    border: error
                      ? `2px solid ${colors.semantic.danger}`
                      : `2px solid ${colors.neutrals[300]}`,
                  }),
                }}
              />
              {error && (
                <>
                  <span className="warning__icon">
                    <AlertCircleOutline fontSize={20} />
                  </span>
                  <span className="warning__msg">
                    <Typography variant="c1" color={colors.semantic.danger}>
                      {intl.formatMessage(messages.error.empty)}
                    </Typography>
                  </span>
                </>
              )}
            </>
          )}
          name={name}
          rules={{ required }}
          control={control}
        />
      </div>
      <style jsx>{SelectStyles}</style>
      <style jsx global>
        {SelectGlobalStyles}
      </style>
    </>
  )
}

export default SelectComponent
