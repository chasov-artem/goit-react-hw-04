import { Formik, Form, Field } from "formik";

const SearchBar = ({ setQuery }) => {
  const initialValues = { query: "" };
  const handleSubmit = (values) => {
    setQuery(values.query);
  };
  return (
    <div>
      <header>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Field name="query" />
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </header>
    </div>
  );
};
export default SearchBar;
