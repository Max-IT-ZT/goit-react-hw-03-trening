import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid";
import { useId } from "react";

const initialValues = {
  id: nanoid(),
  name: "",
  number: "",
};

const id = useId;

export default function ContactForm({ addContact }) {
  const handlerSubmit = (value, action) => {
    addContact(value);
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handlerSubmit}>
      <Form>
        <Field type="text" name="name" id={`name ${id}`} />
        <Field type="text" name="number" id={`number ${id}`} />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
