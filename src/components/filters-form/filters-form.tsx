import type React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useAppDispatch } from '../../store/store'
import {
  setLocationFilter,
  setEquipmentFilter,
  setTypeFilter,
  resetFilters,
} from '../../store/filtersSlice'
import LocationFilter from './location-filter/location-filter'
import EquipmentFilter from './equipment-filter/equipment-filter'
import TypeFilter from './type-filter/type-filter'
import { Button } from '..'
import type { FormValues } from './types'
import styles from './filters.module.css'

const initialValues: FormValues = {
  location: '',
  equipment: [],
  type: '',
}

const validationSchema = Yup.object({
  location: Yup.string(),
  equipment: Yup.array().of(Yup.string()),
  type: Yup.string(),
})

const FiltersForm: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleSubmit = (values: FormValues) => {
    dispatch(resetFilters())
    dispatch(setLocationFilter(values.location))
    dispatch(setEquipmentFilter(values.equipment))
    dispatch(setTypeFilter(values.type))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form>
          <LocationFilter
            value={values.location}
            onChange={(value) => setFieldValue('location', value)}
          />
          <h2 className={styles.sectionTitle}>Filters</h2>
          <EquipmentFilter
            value={values.equipment}
            onChange={(value) => setFieldValue('equipment', value)}
          />
          <TypeFilter
            value={values.type}
            onChange={(value) => setFieldValue('type', value)}
          />
          <Button type="submit" className={styles.btn}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default FiltersForm
