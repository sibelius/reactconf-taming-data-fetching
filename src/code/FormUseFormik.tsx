const FormUseFormik = (props: Props) => {
  const onSubmit = (values) => {
    console.log('submit: ', values);
  };

  const formikbag = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
  });

  const {
    values,
    setFieldValue,
    handleSubmit
  } = formikbag;

  return (
    <FormikProvider value={formikbag}>
      <TextField
        placeholder='email'
        mb={20}
        value={values.email}
        onChange={(e) =>
          setFieldValue(
            'email',
            e.target.value
          )}
      />
      <TextField
        type='password'
        placeholder='password'
        mb={20}
        value={values.password}
        onChange={(e) =>
          setFieldValue(
            'password',
            e.target.value
          )}
      />
      <Button
        type='submit'
        onClick={handleSubmit}
        >
        Submit
      </Button>
    </FormikProvider>
  )
};
