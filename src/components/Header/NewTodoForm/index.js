import React from "react";
import { Formik, Field, Form,} from 'formik';

function NewTodoForm() {
  return(
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
      >
    <form>
      <Field
        className="new-todo"
        placeholder="what needs to be done?"
        autoFocus
        id="text"
        name="text"
      />
    </form>
    </Formik>
    )
}

export default NewTodoForm;