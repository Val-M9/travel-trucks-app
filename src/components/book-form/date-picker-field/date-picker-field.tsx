import { useFormikContext } from 'formik'
import DatePicker, { registerLocale } from 'react-datepicker'
import { enUS } from 'date-fns/locale'
import 'react-datepicker/dist/react-datepicker.css'
import type { FormValues } from '../types'
import formStyles from '../book-form.module.css'
import styles from './date-picker-field.module.css'

const customLocale = {
  ...enUS,
  localize: {
    ...enUS.localize,
    day: (n: number) => {
      const shortDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
      return shortDays[n]
    },
  },
}

const DatePickerField: React.FC = () => {
  const { setFieldValue, values } = useFormikContext<FormValues>()

  registerLocale('custom', customLocale)

  return (
    <DatePicker
      selected={values.date}
      onChange={(date) => setFieldValue('date', date)}
      placeholderText="Booking date*"
      name="date"
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      className={formStyles.input}
      wrapperClassName={styles.wrapper}
      locale="custom"
    />
  )
}

export default DatePickerField
