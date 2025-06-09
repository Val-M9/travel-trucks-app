import type React from 'react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import type { FormikHelpers } from 'formik'
import * as Yup from 'yup'
import toast from 'react-hot-toast'
import Button from '../button/button'
import type { FormValues } from './types'
import DatePickerField from './date-picker-field/date-picker-field'
import styles from './book-form.module.css'

const initialValues: FormValues = {
  name: '',
  email: '',
  date: null,
  comment: '',
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name should be 3 characters at least')
    .max(50, 'Should be 50 characters or less')
    .required('Required'),
  email: Yup.string().email().required('Required'),
  date: Yup.date().required('Required'),
})

const BookForm: React.FC = () => {
  const handleSubmit = (
    _: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    toast.success('Thanks for applying. Will contact you shortly')
    resetForm()
  }

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <Form className={styles.form}>
          <div className={styles.inputBox}>
            <Field
              name="name"
              type="text"
              placeholder="Name*"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="span"
              className={styles.error}
            />
          </div>
          <div className={styles.inputBox}>
            <Field
              name="email"
              type="email"
              placeholder="Email*"
              className={styles.input}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={styles.error}
            />
          </div>
          <div className={styles.inputBox}>
            <DatePickerField />
            <ErrorMessage
              name="date"
              component="span"
              className={styles.error}
            />
          </div>
          <div className={styles.inputBox}>
            <Field
              name="comment"
              as="textarea"
              placeholder="Comment"
              className={styles.textarea}
            />
          </div>
          <Button className={styles.btn} type="submit">
            Send
          </Button>
        </Form>
      </Formik>
    </div>
  )
}

export default BookForm
