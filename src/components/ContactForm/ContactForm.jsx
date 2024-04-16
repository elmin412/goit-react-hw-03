import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { nanoid } from "nanoid"
import { useId } from "react"
import style from "./ContactForm.module.css"



export default function ContactForm({ onAdd }) {
  const textId = useId()
  const telId = useId()
  const userId = nanoid(5)

  const handleSubmit = (values, actions) => {
    onAdd({ ...values, id: userId })
    actions.resetForm()
    console.log("handle", values)
  }

  const initialValues = { name: "", number: "", id: "" }

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 chars!!!")
    .max(50, "Too Long!!!")
    .required("Required"),
  number: Yup.string().matches(/[0-9]{3}-[0-9]{2}-[0-9]{2}/, {
    message: "Invalid phone number",
    excludeEmptyString: false,
  }),
});


  return (
    <Formik initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}>
      <Form className={style.formHead}>
        <div className={style.input}>
          <label htmlFor={textId}>Name</label>
          <Field name="name" type="text" id={textId} />
          <ErrorMessage className={style.error} name="name" component="span" />
        </div>
        <div className={style.input} >
          <label htmlFor={telId}>Number</label>
          <Field type="tel" name="number" id={telId} />
          <ErrorMessage className={style.error} name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  )
}
